// Custom neubrutalist cursor: square dot + trailing circular halo filled
// with the site's "+" grid signature. Both render with
// mix-blend-mode: difference (see _cursor.scss), so colors invert over any
// background without per-element hover tracking.
(function () {
  'use strict';

  // Fine pointers only — touch devices never see or pay for the effect.
  if (!window.matchMedia('(pointer: fine)').matches) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  var halo = document.createElement('div');
  halo.className = 'cursor-halo';
  document.body.appendChild(halo);
  document.body.appendChild(dot);
  document.documentElement.classList.add('custom-cursor');

  var targetX = 0;
  var targetY = 0;
  var haloX = 0;
  var haloY = 0;
  var visible = false;
  var rafId = null;

  function render() {
    // Halo chases the dot; with reduced motion it snaps (no chase).
    var ease = reduceMotion.matches ? 1 : 0.16;
    haloX += (targetX - haloX) * ease;
    haloY += (targetY - haloY) * ease;
    halo.style.transform =
      'translate3d(' + haloX + 'px, ' + haloY + 'px, 0) translate(-50%, -50%)';
    if (Math.abs(targetX - haloX) > 0.1 || Math.abs(targetY - haloY) > 0.1) {
      rafId = requestAnimationFrame(render);
    } else {
      rafId = null;
    }
  }

  document.addEventListener('pointermove', function (e) {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.transform =
      'translate3d(' + targetX + 'px, ' + targetY + 'px, 0) translate(-50%, -50%)';
    if (!visible) {
      visible = true;
      haloX = targetX;
      haloY = targetY;
      dot.classList.add('is-visible');
      halo.classList.add('is-visible');
    }
    if (rafId === null) rafId = requestAnimationFrame(render);
  });

  // Hide when the pointer leaves the window.
  document.addEventListener('pointerleave', function () {
    dot.classList.remove('is-visible');
    halo.classList.remove('is-visible');
    visible = false;
  });

  // Interactive feedback: replaces the native cursor: pointer semantics.
  var INTERACTIVE =
    'a, button, [role="button"], .project-card, .contact-card, .nav-toggle';

  document.addEventListener('pointerover', function (e) {
    if (e.target.closest(INTERACTIVE)) {
      dot.classList.add('is-hover');
      halo.classList.add('is-hover');
    }
  });

  document.addEventListener('pointerout', function (e) {
    if (e.target.closest(INTERACTIVE)) {
      dot.classList.remove('is-hover');
      halo.classList.remove('is-hover');
    }
  });
})();
