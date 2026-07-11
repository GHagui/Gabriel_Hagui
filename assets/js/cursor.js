// Custom neubrutalist cursor: a solid dot that tracks the pointer exactly,
// plus a ring that trails behind it with lerp inertia. No dependencies.
//
// - .cursor-dot: 16px solid accent circle, tracks pointermove 1:1.
// - .cursor-ring: 42px hollow ink-bordered circle, chases the dot via
//   requestAnimationFrame + linear interpolation (pos += (target - pos) * 0.18).
// - Hovering a/button/[role="button"] grows + reheats the dot and shrinks
//   the ring (aim → act feedback).
// - Only runs on fine pointers; respects prefers-reduced-motion (ring
//   snaps instead of trailing); native cursor is hidden only while this
//   is active (html.custom-cursor), so degradation without JS is clean.
(function () {
  'use strict';

  if (!window.matchMedia('(pointer: fine)').matches) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  var ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(ring);
  document.body.appendChild(dot);
  document.documentElement.classList.add('custom-cursor');

  var targetX = 0;
  var targetY = 0;
  var ringX = 0;
  var ringY = 0;
  var ringHover = false;
  var hasMoved = false;
  var rafId = null;

  function applyRingTransform() {
    var scale = ringHover ? ' scale(0.6)' : '';
    ring.style.transform =
      'translate3d(' + ringX + 'px, ' + ringY + 'px, 0) translate(-50%, -50%)' + scale;
  }

  function renderRing() {
    // Reduced motion: snap straight to the target, no trailing.
    var ease = reduceMotion.matches ? 1 : 0.18;
    ringX += (targetX - ringX) * ease;
    ringY += (targetY - ringY) * ease;
    applyRingTransform();

    var dist = Math.hypot(targetX - ringX, targetY - ringY);
    if (dist > 0.1) {
      rafId = requestAnimationFrame(renderRing);
    } else {
      rafId = null;
    }
  }

  document.addEventListener('pointermove', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.transform =
      'translate3d(' + targetX + 'px, ' + targetY + 'px, 0) translate(-50%, -50%)';

    if (!hasMoved) {
      hasMoved = true;
      ringX = targetX;
      ringY = targetY;
      applyRingTransform();
      dot.classList.add('on');
      ring.classList.add('on');
    }

    if (rafId === null) rafId = requestAnimationFrame(renderRing);
  });

  document.addEventListener('pointerleave', function () {
    dot.classList.remove('on');
    ring.classList.remove('on');
  });

  document.addEventListener('pointerenter', function () {
    if (hasMoved) {
      dot.classList.add('on');
      ring.classList.add('on');
    }
  });

  var INTERACTIVE = 'a, button, [role="button"]';

  document.addEventListener('pointerover', function (e) {
    if (e.target.closest(INTERACTIVE)) {
      dot.classList.add('is-hover');
      ring.classList.add('is-hover');
      ringHover = true;
      applyRingTransform();
    }
  });

  document.addEventListener('pointerout', function (e) {
    if (e.target.closest(INTERACTIVE)) {
      dot.classList.remove('is-hover');
      ring.classList.remove('is-hover');
      ringHover = false;
      applyRingTransform();
    }
  });
})();
