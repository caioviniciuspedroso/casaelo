// Set this only after the final, reviewed video is placed in dist/assets.
const atelierVideoSource = '';
const atelierVideoCredit = 'Filme ilustrativo do ofício da joalheria.';

if (atelierVideoSource) {
  const video = document.getElementById('atelier-video');
  const poster = document.getElementById('atelier-poster');
  const frame = document.querySelector('.film-frame');
  const credit = document.getElementById('atelier-credit');
  const originalCredit = credit.textContent;
  let started = false;
  let observer;
  video.addEventListener('error', () => {
    video.hidden = true;
    poster.hidden = false;
    frame.classList.remove('film-ready');
    credit.textContent = originalCredit;
    observer?.disconnect();
  });
  video.addEventListener('loadeddata', () => {
    video.hidden = false;
    poster.hidden = true;
    frame.classList.add('film-ready');
    credit.textContent = atelierVideoCredit;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          video.play().catch(() => {}); // Native controls remain available if autoplay is blocked.
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      }, { threshold: 0.4 });
      observer.observe(video);
    }
  }, { once: true });
  video.src = atelierVideoSource;
}
