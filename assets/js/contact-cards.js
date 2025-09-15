(function(){
  function initContactCards(){
    const cards = document.querySelectorAll('.contact-card');
    cards.forEach(function(card){
      if(card.dataset.enhanced) return;
      const firstLink = card.querySelector('.contact-link');
      if(!firstLink) return;
      card.setAttribute('tabindex','0');
      card.setAttribute('role','group');
      card.setAttribute('aria-label', firstLink.textContent.trim());
      card.addEventListener('click', function(e){
        // Evita conflito se já clicou num link interno
        if(e.target.tagName === 'A') return;
        if(firstLink.target === '_blank') {
          window.open(firstLink.href, '_blank', 'noopener');
        } else {
          window.location.href = firstLink.href;
        }
      });
      card.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          card.click();
        }
      });
      card.dataset.enhanced = 'true';
    });
  }
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactCards);
  } else {
    initContactCards();
  }
})();