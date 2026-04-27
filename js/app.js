/* ============================================================
   TREFFER INMOBILIARIA — App
   Vanilla JS SPA
   ============================================================ */

'use strict';

/* ── Data ──────────────────────────────────────────────── */

const PROPERTIES = [
  {
    id: 1,
    title: 'Departamento en Castro',
    price: '$380.000/mes',
    location: 'Castro, Chiloé',
    badge: 'En arriendo',
    badgeBg: '#EBF4F5',
    badgeColor: '#2B6F72',
    attrs: ['3 dorm', '2 baños', '72 m²'],
    color1: '#C4DCDD',
    color2: '#8FBFC2',
    category: 'Departamentos',
    type: 'En arriendo',
  },
  {
    id: 2,
    title: 'Casa con vista al mar',
    price: 'UF 4.200',
    location: 'Dalcahue, Chiloé',
    badge: 'En venta',
    badgeBg: '#2B6F72',
    badgeColor: 'white',
    attrs: ['4 dorm', '3 baños', '180 m²'],
    color1: '#D4C9B0',
    color2: '#B8A98A',
    category: 'Casas',
    type: 'En venta',
  },
  {
    id: 3,
    title: 'Depto. centro Castro',
    price: '$290.000/mes',
    location: 'Castro, Chiloé',
    badge: 'Nuevo',
    badgeBg: 'white',
    badgeColor: '#333333',
    attrs: ['2 dorm', '1 baño', '58 m²'],
    color1: '#B8C8C4',
    color2: '#8FA8A4',
    category: 'Departamentos',
    type: 'En arriendo',
  },
  {
    id: 4,
    title: 'Local comercial Castro',
    price: '$320.000/mes',
    location: 'Castro, Chiloé',
    badge: 'En arriendo',
    badgeBg: '#EBF4F5',
    badgeColor: '#2B6F72',
    attrs: ['65 m²', '1 baño', 'Piso 1'],
    color1: '#C8C4B8',
    color2: '#A8A090',
    category: 'Oficinas',
    type: 'En arriendo',
  },
  {
    id: 5,
    title: 'Casa en Ancud',
    price: 'UF 3.500',
    location: 'Ancud, Chiloé',
    badge: 'En venta',
    badgeBg: '#2B6F72',
    badgeColor: 'white',
    attrs: ['3 dorm', '2 baños', '140 m²'],
    color1: '#CBBFA8',
    color2: '#A89880',
    category: 'Casas',
    type: 'En venta',
  },
  {
    id: 6,
    title: 'Terreno en Quellón',
    price: 'UF 1.800',
    location: 'Quellón, Chiloé',
    badge: 'En venta',
    badgeBg: '#2B6F72',
    badgeColor: 'white',
    attrs: ['800 m²', 'Esquina', 'Uso mixto'],
    color1: '#B4C4C8',
    color2: '#90A8AC',
    category: 'Terrenos',
    type: 'En venta',
  },
];

const SERVICES = [
  {
    icon: 'camera',
    title: 'Fotografía HD',
    desc: 'Imágenes profesionales que destacan cada espacio de tu propiedad',
  },
  {
    icon: 'video',
    title: 'Video & Tour 360°',
    desc: 'Recorridos virtuales inmersivos para compradores remotos',
  },
  {
    icon: 'home',
    title: 'Home Staging',
    desc: 'Preparamos tu inmueble para obtener el mejor precio posible',
  },
  {
    icon: 'key',
    title: 'Gestión sin preocupaciones',
    desc: 'Nos encargamos de todo: contratos, arriendos, mantenciones',
  },
];

const HIGHLIGHTS = [
  { icon: 'camera', title: 'Fotografía HD', desc: 'Sesión profesional incluida' },
  { icon: 'video',  title: 'Video & 360°',  desc: 'Tour virtual inmersivo' },
  { icon: 'home',   title: 'Home Staging',  desc: 'Preparamos tu espacio' },
];

const DETAIL_PHOTOS = [
  ['#C4DCDD', '#8FBFC2'],
  ['#C8BFA8', '#A8A090'],
  ['#B4C8C4', '#90ACA8'],
  ['#CCCAC0', '#ACA898'],
  ['#C0C8B8', '#A0A898'],
];

const DETAIL_FEATURES = [
  'Estacionamiento incluido',
  'Bodega',
  'Piscina',
  'Portería 24h',
  'Permite mascotas',
  'Calefacción central',
];

/* ── SVG Icons ─────────────────────────────────────────── */

const ICONS = {
  home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  'heart-filled': '<path fill="#2B6F72" stroke="#2B6F72" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  key: '<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  video: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
};

function icon(name, size = 18, color = 'currentColor') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ''}</svg>`;
}

/* ── State ─────────────────────────────────────────────── */

const state = {
  page: 'home',
  filter: 'Todos',
  homeCategory: 'Todos',
  selectedProp: null,
  saved: new Set(),
};

/* ── Navigation ────────────────────────────────────────── */

function navigate(page, data) {
  if (data) {
    if (data.prop) state.selectedProp = data.prop;
    if (data.filter) state.filter = data.filter;
  }

  const current = document.querySelector('.page.active');

  const doSwitch = () => {
    // Reset outgoing page styles
    if (current) {
      current.style.opacity = '';
      current.style.transform = '';
      current.style.transition = '';
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(el => el.classList.remove('active'));

    // Show target
    const target = document.getElementById('page-' + page);
    const activePage = target || document.getElementById('page-home');
    activePage.classList.add('active');
    state.page = target ? page : 'home';

    // Entrance animation
    activePage.classList.add('page-enter');
    setTimeout(() => activePage.classList.remove('page-enter'), 500);

    // Update nav active state
    document.querySelectorAll('.nav__link').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.nav === state.page);
    });

    // Render dynamic content
    renderPage(state.page);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Trigger scroll reveal on new page
    setTimeout(observeRevealElements, 80);
  };

  // Animate out, then switch
  if (current) {
    current.style.transition = 'opacity 0.18s ease, transform 0.18s ease';
    current.style.opacity = '0';
    current.style.transform = 'translateY(10px)';
    setTimeout(doSwitch, 170);
  } else {
    doSwitch();
  }
}

/* ── Render helpers ────────────────────────────────────── */

function propertyCardHTML(prop) {
  const saved = state.saved.has(prop.id);
  return `
    <div class="card" data-prop-id="${prop.id}" tabindex="0" role="button" aria-label="Ver ${prop.title}">
      <div class="card__photo" style="background: linear-gradient(135deg, ${prop.color1} 0%, ${prop.color2} 100%)">
        <div class="card__photo-inner">
          ${icon('home', 40, 'rgba(255,255,255,0.4)')}
        </div>
        <div class="card__photo-overlay"></div>
        <span class="card__badge" style="background:${prop.badgeBg};color:${prop.badgeColor}">${prop.badge}</span>
        <button class="card__heart ${saved ? 'saved' : ''}" data-save-id="${prop.id}" aria-label="${saved ? 'Quitar de favoritos' : 'Guardar en favoritos'}">
          ${icon(saved ? 'heart-filled' : 'heart', 15, saved ? '#2B6F72' : '#333333')}
        </button>
      </div>
      <div class="card__body">
        <div class="card__row">
          <div class="card__title">${prop.title}</div>
          <div class="card__price">${prop.price}</div>
        </div>
        <div class="card__location">
          ${icon('map-pin', 11, 'var(--muted)')}
          ${prop.location}
        </div>
        <div class="card__attrs">
          ${prop.attrs.map(a => `<span class="card__attr">${a}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderPropertyGrid(container, props) {
  if (!container) return;
  container.innerHTML = props.map(propertyCardHTML).join('');

  // Click → detail
  container.querySelectorAll('.card').forEach(card => {
    const id = parseInt(card.dataset.propId, 10);
    const prop = PROPERTIES.find(p => p.id === id);
    card.addEventListener('click', e => {
      if (e.target.closest('.card__heart')) return;
      navigate('detail', { prop });
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigate('detail', { prop });
      }
    });
  });

  // Heart toggle
  container.querySelectorAll('.card__heart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.saveId, 10);
      if (state.saved.has(id)) {
        state.saved.delete(id);
      } else {
        state.saved.add(id);
      }
      // Re-render just this card's heart button
      const saved = state.saved.has(id);
      btn.classList.toggle('saved', saved);
      btn.innerHTML = icon(saved ? 'heart-filled' : 'heart', 15, saved ? '#2B6F72' : '#333333');
      btn.setAttribute('aria-label', saved ? 'Quitar de favoritos' : 'Guardar en favoritos');
    });
  });
}

/* ── Page renderers ────────────────────────────────────── */

function renderHome() {
  // Services
  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid && !servicesGrid.hasChildNodes()) {
    servicesGrid.innerHTML = SERVICES.map(s => `
      <div class="service-card">
        <div class="service-card__icon">${icon(s.icon, 20, 'white')}</div>
        <div class="service-card__title">${s.title}</div>
        <p class="service-card__desc">${s.desc}</p>
      </div>
    `).join('');
  }

  // Featured listings (first 4)
  const homeListings = document.getElementById('home-listings');
  renderPropertyGrid(homeListings, PROPERTIES.slice(0, 4));

  // Category pill interactivity
  const bar = document.getElementById('home-category-bar');
  if (bar) {
    bar.querySelectorAll('.pill').forEach(pill => {
      pill.addEventListener('click', () => {
        bar.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.homeCategory = pill.dataset.category;
      });
    });
  }
}

function renderListings() {
  const grid = document.getElementById('listings-grid');
  const countEl = document.getElementById('listings-count');
  const filtersEl = document.getElementById('listings-filters');

  const filters = ['Todos', 'En arriendo', 'En venta', 'Departamentos', 'Casas', 'Oficinas'];

  if (filtersEl && !filtersEl.dataset.rendered) {
    filtersEl.dataset.rendered = '1';
    filtersEl.innerHTML = filters.map(f => `
      <button class="filter-btn ${state.filter === f ? 'active' : ''}" data-filter="${f}">${f}</button>
    `).join('');

    filtersEl.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.filter = btn.dataset.filter;
        filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === state.filter));
        updateListingsGrid(grid, countEl);
      });
    });
  } else if (filtersEl) {
    // Sync active state (in case filter was changed via nav data-filter)
    filtersEl.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === state.filter);
    });
  }

  updateListingsGrid(grid, countEl);
}

function updateListingsGrid(grid, countEl) {
  let filtered = PROPERTIES;
  if (state.filter !== 'Todos') {
    filtered = PROPERTIES.filter(p => p.type === state.filter || p.category === state.filter);
  }
  if (countEl) countEl.textContent = `${filtered.length} propiedad${filtered.length !== 1 ? 'es' : ''} encontrada${filtered.length !== 1 ? 's' : ''} en Castro y Chiloé`;
  renderPropertyGrid(grid, filtered);
}

function renderDetail() {
  const prop = state.selectedProp || PROPERTIES[0];

  document.getElementById('detail-title').textContent = prop.title;
  document.getElementById('detail-location-text').textContent = prop.location;
  document.getElementById('reservation-price').textContent = prop.price;

  // Gallery
  const gallery = document.getElementById('detail-gallery');
  if (gallery) {
    gallery.innerHTML = DETAIL_PHOTOS.map((c, i) => `
      <div class="photo-thumb ${i === 0 ? 'active' : ''}" data-thumb="${i}"
           style="background: linear-gradient(135deg, ${c[0]} 0%, ${c[1]} 100%)">
        ${icon('camera', 28, 'rgba(255,255,255,0.4)')}
      </div>
    `).join('');

    gallery.querySelectorAll('.photo-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        gallery.querySelectorAll('.photo-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  // Stats
  const statsEl = document.getElementById('detail-stats');
  if (statsEl) {
    statsEl.innerHTML = (prop.attrs || ['3 dorm', '2 baños', '72 m²']).map(a => {
      const parts = a.split(' ');
      return `
        <div>
          <div class="detail-stat-value">${parts[0]}</div>
          <div class="detail-stat-label">${parts.slice(1).join(' ')}</div>
        </div>
      `;
    }).join('');
  }

  // Features
  const featuresEl = document.getElementById('detail-features');
  if (featuresEl) {
    featuresEl.innerHTML = DETAIL_FEATURES.map(f => `
      <div class="feature-item">
        <div class="feature-dot"></div>
        ${f}
      </div>
    `).join('');
  }
}

function renderPublish() {
  const highlights = document.getElementById('publish-highlights');
  if (highlights && !highlights.hasChildNodes()) {
    highlights.innerHTML = HIGHLIGHTS.map(h => `
      <div class="highlight-card">
        <div class="highlight-icon">${icon(h.icon, 18, 'white')}</div>
        <div class="highlight-title">${h.title}</div>
        <div class="highlight-desc">${h.desc}</div>
      </div>
    `).join('');
  }
}

function renderPage(page) {
  switch (page) {
    case 'home':     renderHome();     break;
    case 'listings': renderListings(); break;
    case 'detail':   renderDetail();   break;
    case 'publish':  renderPublish();  break;
  }
}

/* ── Global click delegation ───────────────────────────── */

function handleNavClick(el) {
  const navTarget = el.dataset.nav;
  if (!navTarget) return false;
  const filterAttr = el.dataset.filter;
  if (filterAttr) state.filter = filterAttr;
  navigate(navTarget);
  if (el.tagName === 'A') el.preventDefault ? el.preventDefault() : (event.returnValue = false);
  return true;
}

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-nav]');
  if (btn) {
    e.preventDefault();
    handleNavClick(btn);
  }
});

/* ── Back button ───────────────────────────────────────── */

document.getElementById('detail-back').addEventListener('click', () => {
  navigate('listings');
});

/* ── Form submissions (client-side only) ───────────────── */

function showSuccess(form, message) {
  const existing = form.querySelector('.form-success');
  if (existing) existing.remove();
  const el = document.createElement('div');
  el.className = 'form-success';
  el.style.cssText = 'background:#E6F4EE;color:#2A7D5A;border-radius:8px;padding:14px 18px;font-size:14px;margin-top:16px;text-align:center;font-weight:500;';
  el.textContent = message;
  form.appendChild(el);
  setTimeout(() => el.remove(), 5000);
}

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  showSuccess(e.target, '¡Mensaje enviado! Te contactaremos pronto.');
  e.target.reset();
});

document.getElementById('publish-form').addEventListener('submit', e => {
  e.preventDefault();
  showSuccess(e.target, '¡Gracias! Un agente se comunicará contigo en menos de 24 horas.');
  e.target.reset();
});

/* ── Scroll-reveal (Intersection Observer) ─────────────── */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

function observeRevealElements() {
  document.querySelectorAll('.reveal, .reveal-scale, .stagger').forEach(el => {
    el.classList.remove('revealed');
    revealObserver.observe(el);
  });
}

/* ── Nav scroll: shadow + compact search ───────────────── */

window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  const onHome = state.page === 'home';
  const heroEl = document.querySelector('.hero');
  const heroBottom = heroEl ? heroEl.getBoundingClientRect().bottom : 0;

  nav.classList.toggle('scrolled', window.scrollY > 8);
  nav.classList.toggle('scrolled-hero', onHome && heroBottom < 10);
}, { passive: true });

/* Click on compact search bar body focuses the input */
document.getElementById('nav-search-compact').addEventListener('click', e => {
  if (!e.target.closest('button')) {
    document.getElementById('nav-search-input').focus();
  }
});

/* ── Init ──────────────────────────────────────────────── */

renderPage('home');
setTimeout(observeRevealElements, 100);
