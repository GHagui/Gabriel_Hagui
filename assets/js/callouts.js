/* Auto-transform markdown callouts like
   > [!info] Title
   > Body line
into semantic HTML with classes.
*/
(function(){
  document.addEventListener('DOMContentLoaded', function(){
    const blocks = document.querySelectorAll('blockquote');
    blocks.forEach(bq => {
      if(bq.dataset.calloutProcessed) return; // idempotent
      // We expect first child often to be a text node with whitespace then a <p>
      // Find first paragraph
      const firstP = bq.querySelector('p');
      if(!firstP) return;
      // Split first paragraph by newline to extract marker line
      const lines = firstP.innerHTML.split(/<br\s*\/?>|\n/);
      if(!lines.length) return;
      const markerLine = lines[0].replace(/<[^>]+>/g,'').trim();
      const match = markerLine.match(/^\[(?:!)(info|success|warning|error|help|cit)\]\s*(.+)?$/i);
      if(!match) return; // not a callout
      const type = match[1].toLowerCase();
      const title = (match[2] && match[2].trim().length) ? match[2].trim() : type.charAt(0).toUpperCase()+type.slice(1);

      console.debug('[callouts] detected', type, 'title=', title);

      // Rebuild paragraph content without marker line
      const remaining = lines.slice(1).join('\n').trim();
      if(remaining) {
        firstP.innerHTML = remaining;
      } else {
        firstP.remove();
      }

      bq.classList.add('callout', `callout-${type}`);

      const heading = document.createElement('div');
      heading.className = 'callout-title';
      heading.textContent = title;
      bq.insertBefore(heading, bq.firstChild);

      bq.dataset.calloutProcessed = 'true';
    });
  });
})();
