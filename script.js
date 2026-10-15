(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data || !Array.isArray(data.projects)) return;
  const grid = document.querySelector('#project-grid');
  const dialog = document.querySelector('#project-dialog');
  const closeButton = dialog.querySelector('.dialog-close');
  let returnFocus = null;
  const safeUrl = (value, allowRelative = false) => {
    try {
      const url = new URL(value, window.location.href);
      if (url.protocol === 'https:' || (allowRelative && (url.origin === window.location.origin || url.protocol === 'file:'))) return value;
    } catch (_) { /* Ignore invalid content URLs. */ }
    return '';
  };
  const email = typeof data.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? data.email : '';
  if (email) document.querySelectorAll('[data-email]').forEach(link => {
    link.href = `mailto:${email}`;
    if (link.classList.contains('email-link')) {
      link.replaceChildren(document.createTextNode(email + ' '));
      const arrow = document.createElement('span'); arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true'); link.append(arrow);
    }
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  const socials = document.querySelector('#social-links');
  if (data.hero) {
    const heroImage = document.querySelector('.hero-art img');
    heroImage.src = safeUrl(data.hero.image, true); heroImage.alt = data.hero.alt;
    document.querySelector('.hero-art figcaption span').textContent = data.hero.caption;
  }
  if (data.portrait) {
    const portrait = document.createElement('img');
    portrait.src = safeUrl(data.portrait.image, true); portrait.alt = data.portrait.alt;
    portrait.className = 'about-portrait'; portrait.loading = 'lazy';
    portrait.width = 600; portrait.height = 750;
    document.querySelector('.monogram').replaceWith(portrait);
  }
  socials.replaceChildren();
  (data.socials || []).forEach(social => {
    const url = safeUrl(social.url); if (!url) return;
    const link = document.createElement('a'); link.href = url; link.textContent = `${social.label} ↗`;
    link.target = '_blank'; link.rel = 'noopener noreferrer'; socials.append(link);
  });
  const top = document.createElement('a'); top.href = '#top'; top.textContent = 'Back to top ↑'; socials.append(top);

  function openProject(project, trigger) {
    returnFocus = trigger;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-category').textContent = `${project.category} / ${project.medium}`;
    const image = document.querySelector('#dialog-image'); image.src = safeUrl(project.image, true); image.alt = project.alt;
    document.querySelector('#dialog-description').textContent = project.description;
    const disclaimer = document.querySelector('#dialog-disclaimer');
    disclaimer.replaceChildren();
    if (project.placeholder) disclaimer.append(document.createTextNode('Illustrative placeholder — not a completed project by David. '));
    if (project.credit && safeUrl(project.credit.url)) {
      const credit = document.createElement('a'); credit.href = project.credit.url; credit.textContent = project.credit.label; credit.target = '_blank'; credit.rel = 'noopener noreferrer'; disclaimer.append(credit);
    }
    let gallery = dialog.querySelector('.project-gallery');
    if (!gallery) { gallery = document.createElement('div'); gallery.className = 'project-gallery'; dialog.querySelector('.dialog-layout').append(gallery); }
    gallery.replaceChildren();
    (project.gallery || []).forEach(item => {
      const figure = document.createElement('figure');
      const photo = document.createElement('img'); photo.src = safeUrl(item.image, true); photo.alt = item.alt; photo.loading = 'lazy'; photo.width = 1200; photo.height = 900;
      const caption = document.createElement('figcaption'); caption.textContent = `${item.caption}${item.placeholder ? ' / Image placeholder' : ''}`;
      figure.append(photo, caption); gallery.append(figure);
    });
    dialog.showModal(); dialog.scrollTop = 0; document.body.classList.add('modal-open'); closeButton.focus();
  }
  function closeProject() { dialog.close(); }
  dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); returnFocus?.focus(); });
  closeButton.addEventListener('click', closeProject);
  dialog.addEventListener('click', event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject(); } });
  document.querySelector('#dialog-contact').addEventListener('click', closeProject);

  data.projects.forEach((project, index) => {
    const article = document.createElement('article'); article.className = 'project'; article.dataset.category = project.category;
    const button = document.createElement('button'); button.type = 'button'; button.className = 'project-button'; button.setAttribute('aria-label', `View ${project.title}${project.placeholder ? ' — illustrative sample' : ''}`); button.setAttribute('aria-haspopup', 'dialog');
    const visual = document.createElement('div'); visual.className = 'project-image';
    const image = document.createElement('img'); image.src = safeUrl(project.image, true); image.alt = project.alt; image.loading = 'lazy'; image.decoding = 'async'; image.width = 1200; image.height = 1000; visual.append(image);
    if (project.placeholder) { const tag = document.createElement('span'); tag.className = 'sample-tag'; tag.textContent = 'Illustrative sample'; visual.append(tag); }
    const arrow = document.createElement('span'); arrow.className = 'view-icon'; arrow.textContent = '↗'; arrow.setAttribute('aria-hidden', 'true'); visual.append(arrow);
    const caption = document.createElement('div'); caption.className = 'project-caption';
    const text = document.createElement('div');
    const title = document.createElement('h3'); title.className = 'project-title'; title.textContent = project.title;
    const meta = document.createElement('p'); meta.className = 'project-meta'; meta.append(document.createTextNode(project.category));
    const separator = document.createElement('span'); separator.textContent = '—'; separator.setAttribute('aria-hidden', 'true'); meta.append(separator, document.createTextNode(project.medium)); text.append(title, meta);
    const number = document.createElement('span'); number.className = 'project-number'; number.textContent = project.number || String(index+1).padStart(2,'0');
    caption.append(text,number); button.append(visual,caption); article.append(button); grid.append(article);
    button.addEventListener('click', () => openProject(project, button));
  });
  const count = data.projects.length;
  document.querySelector('.nav-count').textContent = String(count).padStart(2,'0');
  document.querySelector('.heading-count').textContent = `(${String(count).padStart(2,'0')})`;
  document.querySelector('[data-filter="All"] sup').textContent = String(count).padStart(2,'0');
  const samplesOnly = count > 0 && data.projects.every(project => project.placeholder);
  document.querySelector('#work-title').firstChild.textContent = samplesOnly ? 'Selected directions' : 'Selected work';
  document.querySelector('.sample-note').hidden = !data.projects.some(project => project.placeholder);
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document.querySelectorAll('.filter').forEach(filter => { const selected = filter === button; filter.classList.toggle('active', selected); filter.setAttribute('aria-pressed', String(selected)); });
    let visible = 0;
    grid.querySelectorAll('.project').forEach(project => { project.hidden = category !== 'All' && project.dataset.category !== category; if (!project.hidden) visible++; });
    grid.classList.toggle('is-filtered', category !== 'All');
    document.querySelector('#filter-status').textContent = `${visible} ${visible === 1 ? 'project' : 'projects'} shown${category === 'All' ? '' : ` in ${category}`}.`;
  }));
})();
