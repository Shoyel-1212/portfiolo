const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('#navLinks');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));

// Ambient background particles
const particleField = document.getElementById('particles');
if (particleField) {
  const count = window.innerWidth < 700 ? 28 : 55;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.setProperty('--d', (2.5 + Math.random() * 5) + 's');
    p.style.animationDelay = (-Math.random() * 6) + 's';
    particleField.appendChild(p);
  }
}

const heroScene = document.querySelector('.hero-visual');
if (heroScene && window.matchMedia('(pointer:fine)').matches) {
  heroScene.addEventListener('mousemove', (e) => {
    const r = heroScene.getBoundingClientRect();
    const x = (e.clientX-r.left)/r.width-.5;
    const y = (e.clientY-r.top)/r.height-.5;
    const screen = heroScene.querySelector('.cyber-screen');
    if (screen) screen.style.transform = `perspective(1100px) rotateY(${(-9 + x*7).toFixed(2)}deg) rotateX(${(4 - y*5).toFixed(2)}deg)`;
  });
  heroScene.addEventListener('mouseleave', () => {
    const screen = heroScene.querySelector('.cyber-screen');
    if (screen) screen.style.transform = 'perspective(1100px) rotateY(-9deg) rotateX(4deg)';
  });
}
