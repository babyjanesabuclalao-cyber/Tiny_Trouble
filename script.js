const menu = document.querySelector('.menu');
const links = document.querySelector('.navlinks');
if (menu) menu.addEventListener('click', () => links.classList.toggle('show'));
const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();


// Character carousel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const dots = document.querySelector('.carousel-dots');
if (track && prevBtn && nextBtn) {
  const cards = [...track.querySelectorAll('.card')];
  const getStep = () => { const card = cards[0]; if (!card) return 0; return card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap || 0); };
  const visible = () => window.innerWidth <= 700 ? 1 : window.innerWidth <= 1050 ? 2 : 3;
  const pageCount = () => Math.max(1, Math.ceil(cards.length / visible()));
  let current = 0;
  function buildDots() {
    if (!dots) return; dots.innerHTML = '';
    for (let i = 0; i < pageCount(); i++) { const b = document.createElement('button'); b.className = 'carousel-dot' + (i === current ? ' active' : ''); b.setAttribute('aria-label', 'Show character group ' + (i + 1)); b.onclick = () => { current = i; go(); }; dots.appendChild(b); }
  }
  function go() { track.scrollTo({ left: current * getStep() * visible(), behavior: 'smooth' });[...dots.children].forEach((d, i) => d.classList.toggle('active', i === current)); }
  prevBtn.onclick = () => { current = Math.max(0, current - 1); go(); };
  nextBtn.onclick = () => { current = Math.min(pageCount() - 1, current + 1); go(); };
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => { current = Math.min(current, pageCount() - 1); buildDots(); go(); }, 150); });
  buildDots();
}
