/* ============================================================
   BÁLSAMO DA NATUREZA — Motor da interface (tech theme)
   ============================================================ */

/* ---------------- Ícones botânicos procedurais (SVG) ---------------- */
const ICON_PATHS = {
  leaf: `<path d="M12 2C7 4 3 9 3 15c0 3.5 3 6 6 6 6 0 12-6 12-17C15 4.5 12 2 12 2Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
         <path d="M8 20C10 14 13 8 20 4" fill="none" stroke="currentColor" stroke-width="1.1" opacity="0.75"/>`,
  root: `<path d="M12 3v6" stroke="currentColor" stroke-width="1.4" fill="none"/>
         <path d="M12 9c0 3-3 4-4 8-.6 2.2 0 4 0 4" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.85"/>
         <path d="M12 9c0 3 3 4 4.2 7.6.6 2 .3 4.4.3 4.4" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.85"/>
         <path d="M12 12c0 2.4-2 3.3-2.6 6" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/>
         <path d="M12 12c0 2.4 2 3.3 2.6 6" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/>
         <circle cx="12" cy="4.5" r="2.4" fill="none" stroke="currentColor" stroke-width="1.3"/>`,
  bark: `<rect x="6" y="3" width="12" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/>
         <path d="M9 4.5c1.5 2 1.5 3.5 0 5.5s-1.5 3.5 0 5.5 1.5 3.5 0 5" stroke="currentColor" stroke-width="1" fill="none" opacity="0.7"/>
         <path d="M14.5 4c1.2 2.3 1.2 4 0 6s-1.2 3.7 0 6" stroke="currentColor" stroke-width="1" fill="none" opacity="0.6"/>`,
  flower: `<circle cx="12" cy="12" r="2.1" fill="currentColor" opacity="0.9"/>
           <g fill="none" stroke="currentColor" stroke-width="1.3">
             <ellipse cx="12" cy="5.6" rx="2.3" ry="3.4"/>
             <ellipse cx="12" cy="18.4" rx="2.3" ry="3.4"/>
             <ellipse cx="5.6" cy="12" rx="3.4" ry="2.3"/>
             <ellipse cx="18.4" cy="12" rx="3.4" ry="2.3"/>
           </g>`,
  seed: `<ellipse cx="12" cy="12" rx="5.5" ry="8" fill="none" stroke="currentColor" stroke-width="1.4" transform="rotate(15 12 12)"/>
         <path d="M12 5v14" stroke="currentColor" stroke-width="1" opacity="0.6" transform="rotate(15 12 12)"/>`,
  fruit: `<circle cx="12" cy="13.5" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/>
          <path d="M12 6.5V3" stroke="currentColor" stroke-width="1.3"/>
          <path d="M12 4c2 0 3 1.4 3.4 2.6" stroke="currentColor" stroke-width="1.1" fill="none" opacity="0.8"/>`,
  bulb: `<path d="M12 3v3.2" stroke="currentColor" stroke-width="1.3"/>
         <path d="M8 9c-1.6 2-2 4-1.6 6.4C6.9 18.6 9.2 21 12 21s5.1-2.4 5.6-5.6C18 13 17.6 11 16 9c-1-1.2-1.6-2.6-1.6-4H9.6c0 1.4-.6 2.8-1.6 4Z" fill="none" stroke="currentColor" stroke-width="1.4"/>
         <path d="M12 9v9" stroke="currentColor" stroke-width="1" opacity="0.55"/>
         <path d="M9.3 11.5c0 3 .8 5 1.4 6.5" stroke="currentColor" stroke-width="0.9" opacity="0.5" fill="none"/>
         <path d="M14.7 11.5c0 3-.8 5-1.4 6.5" stroke="currentColor" stroke-width="0.9" opacity="0.5" fill="none"/>`
};

function plantIconSVG(type){
  const inner = ICON_PATHS[type] || ICON_PATHS.leaf;
  return `<svg class="plant-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

// hash determinístico simples pra variar levemente a rotação de cada ícone
function seedFromString(str){
  let h = 0;
  for (let i=0;i<str.length;i++){ h = (h*31 + str.charCodeAt(i)) >>> 0; }
  return h;
}

/* ---------------- Cartão de ingrediente ---------------- */
function ingredientCardHTML(plantId, accent){
  const p = PLANTS[plantId];
  if (!p) return "";
  const seed = seedFromString(plantId);
  const rot = (seed % 14) - 7; // leve rotação -7..7 graus
  return `
  <div class="ing-card reveal" style="--card-a:${accent}" data-plant="${plantId}" tabindex="0" role="button" aria-label="Ver propriedades de ${p.name}">
    <div class="ing-visual">
      <div class="scan-ring"></div>
      <div class="scan-ring r2"></div>
      <span class="corner tl"></span><span class="corner tr"></span>
      <span class="corner bl"></span><span class="corner br"></span>
      <div style="transform:rotate(${rot}deg); color:${accent};">${plantIconSVG(p.icon)}</div>
      <span class="part-tag">${p.part}</span>
    </div>
    <div class="ing-body">
      <h4>${p.name}</h4>
      <p class="sci">${p.sci}</p>
      <span class="hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>
        toque para ver propriedades
      </span>
    </div>
    <div class="ing-overlay">
      <span class="close-hint">✕</span>
      <h4>${p.name}</h4>
      <p class="sci">${p.sci}</p>
      <div class="row"><b>Propriedades</b><span>${p.propriedades}</span></div>
      <div class="row"><b>Onde nasce</b><span>${p.ondeNasce}</span></div>
      <div class="row"><b>Como adquirir</b><span>${p.aquisicao}</span></div>
    </div>
  </div>`;
}

function renderIngredients(containerId, plantIds, accent){
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = plantIds.map(id => ingredientCardHTML(id, accent)).join("");
  // toggle no toque/clique (mobile e acessibilidade); hover já é tratado via CSS
  el.querySelectorAll(".ing-card").forEach(card => {
    card.addEventListener("click", (e) => {
      const wasActive = card.classList.contains("active");
      el.querySelectorAll(".ing-card.active").forEach(c => c.classList.remove("active"));
      if (!wasActive) card.classList.add("active");
    });
  });
  initScrollReveal();
}

/* ---------------- Grid de chás (home) ---------------- */
function teaCardHTML(tea){
  const seed = seedFromString(tea.slug);
  return `
  <a class="tea-card reveal" href="cha-${tea.slug}.html" style="--a:${tea.accent}" data-symptom="${tea.symptom.toLowerCase()}" data-name="${tea.name.toLowerCase()}" data-plants="${tea.plants.map(id=>PLANTS[id].name.toLowerCase()).join(',')}">
    <div class="ring-icon" style="color:${tea.accent}">${plantIconSVG(PLANTS[tea.plants[0]].icon)}</div>
    <span class="tag">${tea.symptom}</span>
    <h3>${tea.name}</h3>
    <p>${tea.tagline}</p>
    <div class="meta">
      <span>${tea.plants.length} ingrediente${tea.plants.length>1?"s":""}</span>
      <span class="go">Ver chá →</span>
    </div>
  </a>`;
}

function renderTeaGrid(filter){
  const grid = document.getElementById("teasGrid");
  if (!grid) return;
  const q = (filter || "").trim().toLowerCase();
  const filtered = TEAS.filter(t => {
    if (!q) return true;
    return t.symptom.toLowerCase().includes(q) ||
           t.name.toLowerCase().includes(q) ||
           t.plants.some(id => PLANTS[id].name.toLowerCase().includes(q));
  });
  grid.innerHTML = filtered.map(teaCardHTML).join("");
  const noRes = document.getElementById("noResults");
  if (noRes) noRes.style.display = filtered.length ? "none" : "block";
  initScrollReveal();
}

function initHomeSearch(){
  const input = document.getElementById("symptomSearch");
  const clearBtn = document.getElementById("clearSearch");
  if (!input) return;
  input.addEventListener("input", () => renderTeaGrid(input.value));
  if (clearBtn){
    clearBtn.addEventListener("click", () => { input.value=""; renderTeaGrid(""); input.focus(); });
  }
  document.querySelectorAll("[data-quick-tag]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      input.value = btn.getAttribute("data-quick-tag");
      renderTeaGrid(input.value);
      document.getElementById("teasGrid").scrollIntoView({behavior:"smooth", block:"start"});
    });
  });
}

/* ---------------- Catálogo geral de plantas ---------------- */
const CATALOG_ACCENT = "#22ff8c";

function buildPlantTeaMap(){
  const map = {};
  TEAS.forEach(tea => {
    tea.plants.forEach(pid => {
      if (!map[pid]) map[pid] = [];
      map[pid].push(tea);
    });
  });
  return map;
}
const PLANT_TEA_MAP = (typeof TEAS !== "undefined") ? buildPlantTeaMap() : {};

function catalogCardHTML(plantId){
  const p = PLANTS[plantId];
  if (!p) return "";
  const seed = seedFromString(plantId);
  const rot = (seed % 14) - 7;
  const teas = PLANT_TEA_MAP[plantId] || [];
  const teaLinksHTML = teas.map(t =>
    `<a href="cha-${t.slug}.html" class="tea-pill" style="color:${t.accent}; border-color:color-mix(in srgb, ${t.accent} 50%, transparent);">${t.symptom}</a>`
  ).join("");
  return `
  <div class="ing-card reveal" style="--card-a:${CATALOG_ACCENT}" data-plant="${plantId}" tabindex="0" role="button" aria-label="Ver propriedades de ${p.name}">
    <div class="ing-visual">
      <div class="scan-ring"></div>
      <div class="scan-ring r2"></div>
      <span class="corner tl"></span><span class="corner tr"></span>
      <span class="corner bl"></span><span class="corner br"></span>
      <div style="transform:rotate(${rot}deg); color:${CATALOG_ACCENT};">${plantIconSVG(p.icon)}</div>
      <span class="part-tag">${p.part}</span>
    </div>
    <div class="ing-body">
      <h4>${p.name}</h4>
      <p class="sci">${p.sci}</p>
      <span class="hint">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>
        toque para ver propriedades
      </span>
    </div>
    <div class="ing-overlay">
      <span class="close-hint">✕</span>
      <h4>${p.name}</h4>
      <p class="sci">${p.sci}</p>
      <div class="row"><b>Propriedades</b><span>${p.propriedades}</span></div>
      <div class="row"><b>Onde nasce</b><span>${p.ondeNasce}</span></div>
      <div class="row"><b>Como adquirir</b><span>${p.aquisicao}</span></div>
      ${teaLinksHTML ? `<div class="row"><b>Usado nos chás</b><div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;">${teaLinksHTML}</div></div>` : ""}
    </div>
  </div>`;
}

function renderCatalog(filter){
  const grid = document.getElementById("catalogGrid");
  if (!grid) return;
  const q = (filter || "").trim().toLowerCase();
  const ids = Object.keys(PLANTS).filter(id => {
    if (!q) return true;
    const p = PLANTS[id];
    return p.name.toLowerCase().includes(q) ||
           p.sci.toLowerCase().includes(q) ||
           p.part.toLowerCase().includes(q) ||
           (PLANT_TEA_MAP[id]||[]).some(t => t.symptom.toLowerCase().includes(q));
  }).sort((a,b) => PLANTS[a].name.localeCompare(PLANTS[b].name, "pt-BR"));
  grid.innerHTML = ids.map(catalogCardHTML).join("");
  const noRes = document.getElementById("noResultsCatalog");
  if (noRes) noRes.style.display = ids.length ? "none" : "block";
  grid.querySelectorAll(".ing-card").forEach(card => {
    card.addEventListener("click", () => {
      const wasActive = card.classList.contains("active");
      grid.querySelectorAll(".ing-card.active").forEach(c => c.classList.remove("active"));
      if (!wasActive) card.classList.add("active");
    });
  });
  initScrollReveal();
}

function initCatalogSearch(){
  const input = document.getElementById("catalogSearch");
  if (!input) return;
  input.addEventListener("input", () => renderCatalog(input.value));
  const clearBtn = document.getElementById("clearCatalogSearch");
  if (clearBtn) clearBtn.addEventListener("click", () => { input.value=""; renderCatalog(""); input.focus(); });
}

/* ---------------- Scroll reveal ---------------- */
let revealObserver;
function initScrollReveal(){
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach(el=>el.classList.add("in-view"));
    return;
  }
  if (!revealObserver){
    revealObserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold:0.12, rootMargin:"0px 0px -60px 0px" });
  }
  document.querySelectorAll(".reveal:not(.in-view), .reveal-stagger:not(.in-view)").forEach(el=>revealObserver.observe(el));
}

/* ---------------- Scroll progress bar ---------------- */
function initScrollProgress(){
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = (scrolled || 0) + "%";
  };
  document.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
}

/* ---------------- Fundo de partículas (rede neural) ---------------- */
function initParticles(){
  const canvas = document.getElementById("particles");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, particles;
  const COUNT = window.innerWidth < 700 ? 26 : 52;

  function resize(){
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  function makeParticles(){
    particles = Array.from({length:COUNT}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: (Math.random()-0.5)*0.25,
      vy: (Math.random()-0.5)*0.25,
      r: Math.random()*1.6+0.6
    }));
  }
  function step(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if (p.x<0||p.x>w) p.vx*=-1;
      if (p.y<0||p.y>h) p.vy*=-1;
    });
    ctx.fillStyle = "rgba(120,255,200,0.55)";
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    });
    ctx.strokeStyle = "rgba(120,255,200,0.12)";
    for (let i=0;i<particles.length;i++){
      for (let j=i+1;j<particles.length;j++){
        const a=particles[i], b=particles[j];
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        if (d<130){
          ctx.globalAlpha = 1 - d/130;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(step);
  }
  resize();
  makeParticles();
  window.addEventListener("resize", () => { resize(); makeParticles(); });
  requestAnimationFrame(step);
}

/* ---------------- Boot ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  initParticles();
  initScrollProgress();
  initScrollReveal();
  initHomeSearch();
  renderTeaGrid(""); // no-op se não houver #teasGrid nesta página

  // Página de chá individual: body[data-tea] define qual renderizar
  const teaSlug = document.body.getAttribute("data-tea");
  if (teaSlug){
    const tea = TEAS.find(t => t.slug === teaSlug);
    if (tea) renderIngredients("ingredientsGrid", tea.plants, tea.accent);
  }

  // Página de catálogo geral
  initCatalogSearch();
  renderCatalog(""); // no-op se não houver #catalogGrid nesta página
});
