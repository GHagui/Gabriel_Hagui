// Image Comparison Slider
// Initializes each `.img-comp-container` to provide a draggable overlay comparison.

const comparisonStates = new WeakMap();

function initComparisons() {
  const overlays = document.querySelectorAll('.img-comp-overlay');
  overlays.forEach((overlay) => {
    prepareOverlay(overlay);
  });
}

function prepareOverlay(overlay) {
  if (!overlay) return;

  const container = overlay.parentElement;
  if (!container) return;

  const baseWrapper = container.querySelector('.img-comp-img:not(.img-comp-overlay)');
  const baseImg = baseWrapper ? baseWrapper.querySelector('img') : null;
  const overlayImg = overlay.querySelector('img');

  const images = [baseImg, overlayImg].filter(Boolean);
  if (images.length === 0) return;

  // Wait for both images (if present) to finish loading before setting up the slider.
  Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth !== 0) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        img.addEventListener('load', () => resolve(), { once: true });
        img.addEventListener('error', () => resolve(), { once: true });
      });
    })
  ).then(() => setupOverlay(container, overlay, baseImg, overlayImg));
}

function setupOverlay(container, overlay, baseImg, overlayImg) {
  if (!overlayImg) return;

  const state = comparisonStates.get(container) || {};

  // Calculate dimensions using the base image if available, otherwise fall back to the overlay image.
  const referenceImg = baseImg || overlayImg;
  const rect = referenceImg.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  if (!width || !height) {
    // If we still don't have dimensions (e.g. images hidden), try again on the next frame.
    window.requestAnimationFrame(() => setupOverlay(container, overlay, baseImg, overlayImg));
    return;
  }

  let ratio = state.ratio;
  if (typeof ratio !== 'number' || Number.isNaN(ratio) || ratio <= 0 || ratio >= 1) {
    // Use the current overlay width if available to keep continuity on resize; otherwise default to 0.5.
    const currentOverlayWidth = overlay.getBoundingClientRect().width;
    ratio = currentOverlayWidth > 0 ? currentOverlayWidth / width : 0.5;
  }
  ratio = Math.min(Math.max(ratio, 0.05), 0.95);

  // Clean up any existing slider before reinitializing (helps with responsive recalculations).
  const existingSlider = container.querySelector('.img-comp-slider');
  if (existingSlider) {
    existingSlider.remove();
  }

  container.style.height = `${height}px`;
  overlay.style.height = `${height}px`;
  overlay.style.width = `${width * ratio}px`;

  if (baseImg) {
    baseImg.style.display = 'block';
  }
  overlayImg.style.width = `${width}px`;
  overlayImg.style.display = 'block';

  const slider = document.createElement('div');
  slider.className = 'img-comp-slider';
  container.appendChild(slider);

  const updateSliderPosition = (posX) => {
    overlay.style.width = `${posX}px`;
    slider.style.left = `${overlay.offsetWidth - slider.offsetWidth / 2}px`;
    slider.style.top = `${height / 2 - slider.offsetHeight / 2}px`;
    state.ratio = overlay.offsetWidth / width;
    state.width = width;
    state.height = height;
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const getCursorPos = (event) => {
    const rectBounds = container.getBoundingClientRect();
    const primaryEvent = event.touches ? event.touches[0] : event.changedTouches ? event.changedTouches[0] : event;
    const clientX = primaryEvent.clientX || primaryEvent.pageX;
    return clientX - rectBounds.left;
  };

  const slideMove = (event) => {
    event.preventDefault();
    const pos = clamp(getCursorPos(event), 0, width);
    updateSliderPosition(pos);
  };

  const slideFinish = () => {
    document.removeEventListener('mousemove', slideMove);
    document.removeEventListener('touchmove', slideMove);
    document.removeEventListener('mouseup', slideFinish);
    document.removeEventListener('touchend', slideFinish);
  };

  const slideReady = (event) => {
    event.preventDefault();
    document.addEventListener('mousemove', slideMove, { passive: false });
    document.addEventListener('touchmove', slideMove, { passive: false });
    document.addEventListener('mouseup', slideFinish, { passive: true });
    document.addEventListener('touchend', slideFinish, { passive: true });
  };

  slider.addEventListener('mousedown', slideReady, { passive: false });
  slider.addEventListener('touchstart', slideReady, { passive: false });

  // Store state so we can reuse ratio on responsive adjustments.
  comparisonStates.set(container, state);

  // Position the slider based on the current ratio.
  updateSliderPosition(width * ratio);
}

// Initialize once the DOM is ready; defer until images have likely been requested.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initComparisons);
} else {
  initComparisons();
}

// Recalculate positions on resize with a debounce to avoid excessive work.
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.querySelectorAll('.img-comp-overlay').forEach((overlay) => {
      const container = overlay.parentElement;
      if (!container) return;
      const state = comparisonStates.get(container);
      const baseWrapper = container.querySelector('.img-comp-img:not(.img-comp-overlay)');
      const baseImg = baseWrapper ? baseWrapper.querySelector('img') : null;
      const overlayImg = overlay.querySelector('img');
      setupOverlay(container, overlay, baseImg, overlayImg);
    });
  }, 200);
});
