(function() {
  const html = document.documentElement;
  html.classList.add('js');

  function init() {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-nav');
    if(!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
      toggle.classList.toggle('is-active', !expanded);
      if(!expanded) {
        // Focus first link when opening
        const firstLink = nav.querySelector('a');
        firstLink && firstLink.focus();
      } else {
        toggle.focus();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape') {
        if(toggle.getAttribute('aria-expanded') === 'true') {
          toggle.click();
        }
      }
    });

    // Reset state if resized to desktop
    const mql = window.matchMedia('(min-width: 1290px)');
    function handleResize(e){
      if(e.matches) {
        toggle.setAttribute('aria-expanded','false');
        nav.classList.remove('is-open');
        toggle.classList.remove('is-active');
      }
    }
    mql.addEventListener('change', handleResize);
  }

  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
