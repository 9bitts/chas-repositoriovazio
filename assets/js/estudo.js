/* ============================================================
   Estudo (Apostila ENESIO) — acordeão de seções, ordem original
   ============================================================ */

function escapeHTML(str){
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Converte **negrito** em <strong>negrito</strong> (usado para os
// pequenos títulos internos como "Por infusão:", já escapando o resto.
function inlineBold(str){
  const escaped = escapeHTML(str);
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function blockHTML(block){
  if (block.h) {
    return '<h4 class="acc-subhead">' + escapeHTML(block.h) + '</h4>';
  }
  if (block.list) {
    return '<ul class="acc-list">' + block.list.map(item => '<li>' + inlineBold(item) + '</li>').join("") + '</ul>';
  }
  if (block.link) {
    return '<a class="tea-pill" style="color:var(--accent); border-color:var(--accent); font-size:0.82rem; padding:8px 18px; margin-top:6px; display:inline-block;" href="' + block.link.href + '">' + escapeHTML(block.link.label) + '</a>';
  }
  if (block.p) {
    return '<p>' + inlineBold(block.p) + '</p>';
  }
  return "";
}

function estudoItemHTML(section, index){
  const bodyHTML = section.blocks.map(blockHTML).join("");
  return `
  <div class="acc-item" data-index="${index}" data-search="${escapeHTML(section.title.toLowerCase())}">
    <div class="acc-header" role="button" tabindex="0" aria-expanded="false">
      <div class="names">
        <h3>${escapeHTML(section.title)}</h3>
      </div>
      <span class="chevron">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </span>
    </div>
    <div class="acc-collapse">
      <div class="acc-collapse-inner">
        <div class="acc-body-text">
          ${bodyHTML}
        </div>
      </div>
    </div>
  </div>`;
}

function renderEstudo(filter){
  const container = document.getElementById("estudoAccordion");
  if (!container) return;
  const q = (filter || "").trim().toLowerCase();
  const filtered = ESTUDO_SECOES
    .map((s, i) => ({ section: s, index: i }))
    .filter(item => !q || item.section.title.toLowerCase().includes(q));

  container.innerHTML = filtered.map(item => estudoItemHTML(item.section, item.index)).join("");

  const noRes = document.getElementById("noResultsEstudo");
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

function initEstudoSearch(){
  const input = document.getElementById("estudoSearch");
  if (!input) return;
  const clearBtn = document.getElementById("clearEstudoSearch");
  const searchBtn = document.getElementById("doEstudoSearch");
  const doSearch = () => { renderEstudo(input.value); clearBtn?.classList.toggle("visible", !!input.value); };
  input.addEventListener("input", doSearch);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter"){ e.preventDefault(); doSearch(); } });
  if (searchBtn) searchBtn.addEventListener("click", doSearch);
  if (clearBtn) clearBtn.addEventListener("click", () => { input.value = ""; renderEstudo(""); clearBtn.classList.remove("visible"); input.focus(); });
}

document.addEventListener("DOMContentLoaded", () => {
  renderEstudo("");
  initEstudoSearch();
});
