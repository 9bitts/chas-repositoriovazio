/* ============================================================
   Catálogo das Plantas (PDF) — acordeão + busca
   ============================================================ */

function photoFrameHTML(slug, photo, alt){
  return '<div class="photo-frame"><img src="assets/img/catalogo/' + photo + '" alt="' + alt + '" loading="lazy"></div>';
}

function accordionItemHTML(p){
  const photosHTML = p.photos.map(ph => photoFrameHTML(p.slug, ph, p.name)).join("");
  return `
  <div class="acc-item" data-slug="${p.slug}" data-search="${(p.name + ' ' + p.sci).toLowerCase()}">
    <div class="acc-header" role="button" tabindex="0" aria-expanded="false">
      <div class="names">
        <h3>${p.name}</h3>
        <span class="acc-sci">${p.sci}</span>
      </div>
      <span class="chevron">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </span>
    </div>
    <div class="acc-collapse">
      <div class="acc-collapse-inner">
        <div class="acc-body">
          <div class="acc-photos">${photosHTML}</div>
          <div class="acc-info">
            <div class="field"><b>Sinonímia</b><span class="dim">${p.sinonimia}</span></div>
            <div class="field"><b>Parte(s) utilizada(s)</b><span>${p.partes}</span></div>
            <div class="field"><b>Características</b><span>${p.caracteristicas}</span></div>
            <div class="field"><b>Habitat</b><span>${p.habitat}</span></div>
            <div class="field"><b>Propriedades e Indicações</b><span>${p.propriedades}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderAccordion(filter){
  const container = document.getElementById("plantAccordion");
  if (!container) return;
  const q = (filter || "").trim().toLowerCase();
  const sorted = CATALOGO_PLANTAS.slice().sort((a,b) => a.name.localeCompare(b.name, "pt-BR"));
  const filtered = sorted.filter(p => !q || p.name.toLowerCase().includes(q) || p.sci.toLowerCase().includes(q));
  container.innerHTML = filtered.map(accordionItemHTML).join("");

  const noRes = document.getElementById("noResultsAcc");
  if (noRes) noRes.style.display = filtered.length ? "none" : "block";

  container.querySelectorAll(".acc-header").forEach(header => {
    const toggle = () => {
      const item = header.closest(".acc-item");
      const isOpen = item.classList.contains("open");
      item.classList.toggle("open", !isOpen);
      header.setAttribute("aria-expanded", String(!isOpen));
    };
    header.addEventListener("click", toggle);
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); toggle(); }
    });
  });

  if (typeof initScrollReveal === "function") initScrollReveal();
}

function initAccordionSearch(){
  const input = document.getElementById("accSearch");
  if (!input) return;
  const clearBtn = document.getElementById("clearAccSearch");
  const searchBtn = document.getElementById("doAccSearch");
  const doSearch = () => { renderAccordion(input.value); clearBtn?.classList.toggle("visible", !!input.value); };
  input.addEventListener("input", doSearch);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter"){ e.preventDefault(); doSearch(); } });
  if (searchBtn) searchBtn.addEventListener("click", doSearch);
  if (clearBtn) clearBtn.addEventListener("click", () => { input.value = ""; renderAccordion(""); clearBtn.classList.remove("visible"); input.focus(); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAccordion("");
  initAccordionSearch();
});
