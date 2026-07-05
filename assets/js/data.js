/* ============================================================
   BÁLSAMO DA NATUREZA — Base estrutural de plantas e chás
   (nomes, propriedades etc. ficam em assets/js/i18n.js)
   ============================================================ */

// Tipos de ícone: leaf | root | bark | flower | seed | fruit | bulb
const PLANTS = {
  "abutua":            { sci: "Chondrodendron platyphyllum", icon: "root" },
  "acafrao":           { sci: "Curcuma longa",                icon: "root" },
  "agriao":            { sci: "Nasturtium officinale",        icon: "leaf" },
  "alecrim":           { sci: "Salvia rosmarinus",             icon: "leaf" },
  "alfavaca":          { sci: "Ocimum gratissimum",            icon: "leaf" },
  "alho":              { sci: "Allium sativum",                icon: "bulb" },
  "barbatimao":        { sci: "Stryphnodendron adstringens",   icon: "bark" },
  "bardana":           { sci: "Arctium lappa",                 icon: "root" },
  "batata-purga":      { sci: "Operculina macrocarpa",         icon: "root" },
  "boldo":             { sci: "Plectranthus barbatus",         icon: "leaf" },
  "caapeba":           { sci: "Piper umbellatum",              icon: "leaf" },
  "calunga":           { sci: "Simaba ferruginea",             icon: "root" },
  "cana-macaco":       { sci: "Costus spicatus",                icon: "root" },
  "carqueja":          { sci: "Baccharis trimera",             icon: "leaf" },
  "chapeu-couro":      { sci: "Echinodorus grandiflorus",      icon: "leaf" },
  "congonha-bugre":    { sci: "Rudgea viburnoides",            icon: "leaf" },
  "cordao-frade":      { sci: "Leonotis nepetifolia",          icon: "flower" },
  "espinheira-santa":  { sci: "Maytenus ilicifolia",           icon: "leaf" },
  "eucalipto":         { sci: "Corymbia citriodora",           icon: "leaf" },
  "funcho":            { sci: "Foeniculum vulgare",            icon: "seed" },
  "goiabeira":         { sci: "Psidium guajava",               icon: "leaf" },
  "gravata":           { sci: "Bromelia pinguin",              icon: "fruit" },
  "guaco":             { sci: "Mikania glomerata",             icon: "leaf" },
  "hortela":           { sci: "Mentha × piperita",             icon: "leaf" },
  "jambolao":          { sci: "Syzygium cumini",               icon: "seed" },
  "limao":             { sci: "Citrus × limon",                icon: "fruit" },
  "losna":             { sci: "Artemisia absinthium",          icon: "leaf" },
  "louro":             { sci: "Laurus nobilis",                icon: "leaf" },
  "malva":             { sci: "Malva sylvestris",              icon: "flower" },
  "maracuja-acu":      { sci: "Passiflora quadrangularis",     icon: "leaf" },
  "melao-sao-caetano": { sci: "Momordica charantia",           icon: "leaf" },
  "melissa":           { sci: "Melissa officinalis",           icon: "leaf" },
  "mil-folhas":        { sci: "Achillea millefolium",          icon: "flower" },
  "mulungu":           { sci: "Erythrina mulungu",             icon: "bark" },
  "pata-de-vaca":      { sci: "Bauhinia forficata",            icon: "leaf" },
  "poejo":             { sci: "Mentha pulegium",               icon: "leaf" },
  "quebra-pedra":      { sci: "Phyllanthus niruri",            icon: "leaf" },
  "sabugueiro":        { sci: "Sambucus nigra",                icon: "flower" },
  "girassol":          { sci: "Helianthus annuus",             icon: "seed" },
  "sucupira":          { sci: "Pterodon emarginatus",          icon: "seed" },
  "tamarindo":         { sci: "Tamarindus indica",             icon: "fruit" },
  "tanchagem":         { sci: "Plantago major",                icon: "leaf" }
};

// Chás agrupados por sintoma/estado de saúde (textos ficam em i18n.js)
const TEAS = [
  { slug: "pressao-alta",       accent: "#00e5ff", plants: ["abutua", "cana-macaco", "chapeu-couro", "quebra-pedra"] },
  { slug: "gripe-resfriado",    accent: "#22ff8c", plants: ["acafrao", "alho", "eucalipto", "limao"] },
  { slug: "asma-bronquite",     accent: "#38bdf8", plants: ["agriao", "eucalipto", "guaco", "hortela"] },
  { slug: "gases",              accent: "#a3ff5e", plants: ["alecrim", "alfavaca", "mil-folhas"] },
  { slug: "ferimentos",         accent: "#ffb347", plants: ["barbatimao"] },
  { slug: "azia",               accent: "#4ade80", plants: ["bardana", "boldo", "caapeba", "espinheira-santa", "funcho", "losna", "poejo"] },
  { slug: "prisao-de-ventre",   accent: "#fbbf24", plants: ["batata-purga", "tamarindo"] },
  { slug: "estomago-figado",    accent: "#34d399", plants: ["boldo", "calunga", "carqueja", "espinheira-santa", "losna"] },
  { slug: "calculos-renais",    accent: "#22d3ee", plants: ["cana-macaco", "chapeu-couro", "cordao-frade", "quebra-pedra"] },
  { slug: "reumatismo",         accent: "#c084fc", plants: ["congonha-bugre", "louro", "sabugueiro", "sucupira"] },
  { slug: "diarreia",           accent: "#60a5fa", plants: ["funcho", "goiabeira"] },
  { slug: "verminose",          accent: "#84cc16", plants: ["gravata", "hortela"] },
  { slug: "diabetes",           accent: "#2dd4bf", plants: ["jambolao", "pata-de-vaca"] },
  { slug: "garganta",           accent: "#67e8f9", plants: ["limao", "malva", "sucupira", "tanchagem"] },
  { slug: "calmante-insonia",   accent: "#a78bfa", plants: ["maracuja-acu", "melissa", "mulungu"] },
  { slug: "febre",              accent: "#fb923c", plants: ["melao-sao-caetano", "sabugueiro"] },
  { slug: "dor-cabeca",         accent: "#f0abfc", plants: ["girassol"] }
];
