(() => {
  const video = document.getElementById('atelier-video');
  const backdrop = document.querySelector('.craft-backdrop');
  const toggle = document.querySelector('.film-toggle');
  const label = toggle.querySelector('.film-toggle-label');
  const icon = toggle.querySelector('.film-toggle-icon');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let wanted = !reducedMotion.matches;
  let visible = false;
  let loaded = false;
  let failed = false;
  let pending = false;

  function updateControl() {
    const playing = !video.paused && !video.ended;
    label.textContent = playing ? 'Pausar animação' : 'Reproduzir animação';
    icon.innerHTML = playing
      ? '<svg viewBox="0 0 24 24"><path d="M8 5v14M16 5v14"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="m8 5 11 7-11 7Z"/></svg>';
  }
  function load() {
    if (loaded || failed) return;
    loaded = true;
    video.muted = true;
    video.src = video.dataset.src;
    video.load();
  }
  function sync() {
    if (failed) return;
    const shouldPlay = wanted && visible && !document.hidden;
    if (!shouldPlay) { video.pause(); return; }
    load();
    if (pending || !video.paused) return;
    pending = true;
    video.play().then(() => {
      if (!wanted || !visible || document.hidden) video.pause();
    }).catch(() => {
      // Autoplay can be blocked. Keep the poster and offer explicit playback.
      updateControl();
    }).finally(() => { pending = false; });
  }
  toggle.hidden = false;
  updateControl();
  toggle.addEventListener('click', () => {
    wanted = video.paused;
    sync();
  });
  video.addEventListener('playing', () => {
    backdrop.classList.add('is-playing');
    updateControl();
  });
  video.addEventListener('pause', updateControl);
  video.addEventListener('error', () => {
    failed = true;
    video.pause();
    backdrop.classList.remove('is-playing');
    toggle.hidden = true;
  });
  document.addEventListener('visibilitychange', sync);
  reducedMotion.addEventListener('change', () => {
    wanted = !reducedMotion.matches;
    if (!wanted) backdrop.classList.remove('is-playing');
    sync();
  });
  if ('IntersectionObserver' in window) {
    const nearby = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!reducedMotion.matches) load();
        nearby.disconnect();
      }
    }, { rootMargin: '300px' });
    nearby.observe(backdrop);
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    }, { threshold: 0.2 }).observe(backdrop);
  } else {
    visible = true;
    sync();
  }
})();
