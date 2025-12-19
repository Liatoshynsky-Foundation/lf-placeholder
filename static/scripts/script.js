async function switchLanguage() {
  try {
    const res = await fetch('/', { credentials: 'same-origin' });
    const html = await res.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    const newApp = doc.getElementById('App');

    const oldApp = document.getElementById('App');
    oldApp.replaceWith(newApp.cloneNode(true));

    document.documentElement.lang = doc.documentElement.lang;
  } catch (err) {
    window.location.href = '/';
  }
}

const tooltip = (() => {
  const el = document.createElement('div');
  el.className = 'tooltip-base';
  document.body.appendChild(el);
  return el;
})();

let tooltipTimeout = 0;
const t = {
  en: 'Copied',
  uk: 'Скопійовано'
};

function showTooltipAt(anchor, message, duration = 2000) {
  const anchorRect = anchor.getBoundingClientRect();
  const tip = tooltip;
  tip.textContent = message;

  tip.style.opacity = '1';
  tip.style.transform = 'translateY(0)';

  requestAnimationFrame(() => {
    const tipRect = tip.getBoundingClientRect();
    let left = Math.round(anchorRect.left + anchorRect.width / 2 - tipRect.width / 2);
    let top = Math.round(anchorRect.top - tipRect.height - 10);

    left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
    if (top < 8) top = anchorRect.bottom + 10;

    tip.style.left = `${left}px`;
    tip.style.top = `${top}px`;
  });

  clearTimeout(tooltipTimeout);

  tooltipTimeout = setTimeout(() => {
    tip.style.opacity = '0';
    tip.style.transform = 'translateY(4px)';
  }, duration);
}

function copyToClipboard(sender) {
  const text = sender.getAttribute('data-to-copy');

  const lang = document.documentElement.lang;

  navigator.clipboard.writeText(text).then(
    () => {
      console.log('Copied to clipboard:', text);
      showTooltipAt(sender, t[lang]);
    },
    () => {
      console.error('Failed to copy text:', text);
      showTooltipAt(sender, t[lang]);
    }
  );
}
