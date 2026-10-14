// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Original hero "creator network" graphic: a hub-and-node map
// representing a brand connecting to creators across SA cities.
const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
  const nodes = [
    { x: 260, y: 90,  label: 'Johannesburg', r: 7, color: 'var(--marigold)' },
    { x: 120, y: 160, label: 'Cape Town',     r: 6, color: 'var(--teal-light)' },
    { x: 340, y: 210, label: 'Durban',        r: 6, color: 'var(--berry)' },
    { x: 90,  y: 280, label: 'Gqeberha',      r: 5, color: 'var(--teal-light)' },
    { x: 300, y: 320, label: 'Bloemfontein',  r: 5, color: 'var(--marigold)' },
    { x: 190, y: 40,  label: 'Polokwane',     r: 4, color: 'var(--teal-light)' }
  ];
  const hub = { x: 210, y: 200 };

  const lines = nodes.map(n =>
    `<line x1="${hub.x}" y1="${hub.y}" x2="${n.x}" y2="${n.y}" stroke="rgba(247,242,228,0.25)" stroke-width="1.5"/>`
  ).join('');

  const dots = nodes.map(n => `
    <g>
      <circle cx="${n.x}" cy="${n.y}" r="${n.r}" fill="${n.color}" />
      <text x="${n.x}" y="${n.y - n.r - 8}" text-anchor="middle" fill="rgba(247,242,228,0.75)" font-size="12" font-family="Manrope, sans-serif">${n.label}</text>
    </g>
  `).join('');

  heroVisual.innerHTML = `
    <svg viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;">
      ${lines}
      <circle cx="${hub.x}" cy="${hub.y}" r="16" fill="var(--wheat)" />
      <circle cx="${hub.x}" cy="${hub.y}" r="24" fill="none" stroke="rgba(247,242,228,0.3)" stroke-width="1.5" />
      <text x="${hub.x}" y="${hub.y + 4}" text-anchor="middle" fill="var(--ink)" font-size="11" font-weight="700" font-family="Manrope, sans-serif">Your brand</text>
      ${dots}
    </svg>
  `;
}
