// Mermaid initialization for Jekyll theme
// Converts fenced code blocks ```mermaid into rendered diagrams.
(function() {
  let attempts = 0;
  const MAX_ATTEMPTS = 10;
  function initMermaid() {
    if (!window.mermaid) {
      if (attempts < MAX_ATTEMPTS) {
        attempts++;
        return setTimeout(initMermaid, 300 * attempts); // incremental backoff
      }
      return;
    }
    const blocks = document.querySelectorAll('pre > code.language-mermaid, pre > code.mermaid');
    blocks.forEach((codeEl, idx) => {
      const pre = codeEl.parentElement;
      // Avoid double-processing
      if (pre.dataset.mermaidProcessed) return;
      pre.dataset.mermaidProcessed = 'true';
      const graphDefinition = codeEl.textContent.trim();
      const container = document.createElement('div');
      container.className = 'mermaid';
      container.textContent = graphDefinition;
      // Replace <pre> with container for Mermaid to process
      pre.replaceWith(container);
    });
    try {
      window.mermaid.initialize({ startOnLoad: true, theme: 'default' });
      window.mermaid.run();
    } catch (e) {
      console.error('Mermaid init error', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMermaid);
  } else {
    initMermaid();
  }
})();
