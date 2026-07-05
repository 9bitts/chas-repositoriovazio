/* ============================================================
   BÁLSAMO DA NATUREZA — Internacionalização (PT / EN / ES)
   ============================================================ */

const DEFAULT_LANG = "pt";
const LANG_STORAGE_KEY = "balsamo_lang";

function getLang(){
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && UI[saved]) return saved;
  } catch(e){}
  return DEFAULT_LANG;
}
function setLang(lang){
  try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch(e){}
}

/* ---------------- Textos de interface ---------------- */
const UI = {
  pt: {
    brand: "Bálsamo da Natureza",
    brandSub: "// SISTEMA FITOTERÁPICO",
    navComoFunciona: "Como funciona",
    navChas: "Chás",
    navCatalogo: "Catálogo de Plantas",
    navEstudo: "Estudo",
    navBack: "← Todos os chás",

    heroEyebrow: "Base de dados viva · 42 plantas · 17 protocolos",
    heroTitle: "Encontre o chá certo<br>para o que você sente",
    heroLead: "Digite um sintoma e o sistema cruza décadas de conhecimento popular brasileiro com uma interface pensada para o futuro. Cada chá tem sua própria página, com todos os ingredientes escaneados em detalhe.",
    searchPlaceholder: "Buscar por sintoma: azia, gripe, insônia, pressão alta...",
    searchClear: "Limpar",

    quickTags: [
      { label: "Azia", term: "azia" },
      { label: "Gripe", term: "gripe" },
      { label: "Insônia", term: "insônia" },
      { label: "Pressão Alta", term: "pressão" },
      { label: "Cálculos Renais", term: "renais" },
      { label: "Reumatismo", term: "reumatismo" }
    ],

    statChas: "Chás catalogados",
    statPlantas: "Plantas mapeadas",
    statOrigem: "Origem brasileira",

    howEyebrow: "Como funciona",
    howTitle: "Um sistema, três camadas de informação",
    how1Title: "1. Busque por sintoma",
    how1Text: "Digite o que você está sentindo e o sistema filtra instantaneamente os chás relevantes.",
    how2Title: "2. Abra a página do chá",
    how2Text: "Cada chá tem uma página dedicada com modo de preparo e todos os ingredientes usados.",
    how3Title: "3. Escaneie o ingrediente",
    how3Text: "Passe o mouse (ou toque no celular) em cada planta para revelar suas propriedades reais.",

    teasEyebrow: "Catálogo de chás",
    teasTitle: "Todos os chás, por sintoma",
    teasHint: "Use a busca no topo da página para filtrar esta lista em tempo real.",
    noResultsHomePre: "Nenhum chá encontrado para esse sintoma. Tente outro termo ou explore o ",
    noResultsHomeLink: "catálogo completo de plantas",
    noResultsHomePost: ".",

    infoEyebrow: "Antes de tomar",
    infoTitle: "Informações importantes",
    info1Title: "Uso consciente",
    info1Text: "Esta cartilha tem propósito informativo, baseado no conhecimento popular. Caso não haja melhora, procure atendimento médico.",
    info2Title: "Modo de preparo",
    info2Text: "Infusão: água fervente sobre 8–10g da planta fresca (ou 4–5g seca) por 150ml. Tampar e descansar 5–10 minutos.",
    info3Title: "Adoçante",
    info3Text: "Os chás nunca devem ser adoçados com açúcar. Pode-se adoçar com mel após esfriarem.",
    info4Title: "Duração do uso",
    info4Text: "Não tomar por mais de 15 dias seguidos. Respeite intervalos de 7 dias entre os ciclos.",

    footerQuote: "“Deus nos ofertou a Natureza como alimento para nosso equilíbrio orgânico e bálsamo para nossas dores físicas.” — Desenvolvido com carinho e amor fraterno. A fé sempre será o grande catalizador.",
    footerDisclaimerShort: "Esta cartilha tem propósito informativo, baseado no conhecimento popular. Os chás nunca devem ser adoçados com açúcar e não devem ser usados por mais de 15 dias seguidos sem intervalo de 7 dias. Caso não haja melhora, procure atendimento médico.",
    footerDisclaimerCatalog: "Esta cartilha tem propósito informativo, baseado no conhecimento popular. Caso não haja melhora, procure atendimento médico.",
    footerRights: "Bálsamo da Natureza",

    scanEyebrow: "Escaneamento de ingredientes",
    ingredientsTitle: "Ingredientes deste chá",
    ingredientsHint: "Passe o mouse (ou toque no celular) em cada planta para revelar suas propriedades.",
    modoLabel: "Modo de preparo:",

    ingHint: "toque para ver propriedades",
    ingAriaLabel: "Ver propriedades de",
    ingPropriedades: "Propriedades",
    ingOndeNasce: "Onde nasce",
    ingAquisicao: "Como adquirir",
    ingUsadoChas: "Usado nos chás",
    ingredientWord: ["ingrediente", "ingredientes"],
    verCha: "Ver chá →",

    catalogTag: "Base de dados completa",
    catalogTitle: "Catálogo de Plantas Medicinais",
    catalogLead: "42 plantas mapeadas: onde nascem, como conseguir e suas propriedades. Toque em qualquer uma para escanear.",
    catalogSearchPlaceholder: "Buscar planta, nome científico ou sintoma...",
    noResultsCatalog: "Nenhuma planta encontrada. Tente outro termo.",

    docTitleIndex: "Bálsamo da Natureza — Chás Medicinais Inteligentes",
    docTitleCatalog: "Catálogo de Plantas — Bálsamo da Natureza",
    docTitleEstudo: "Estudo — Bálsamo da Natureza"
  },

  en: {
    brand: "Nature's Balm",
    brandSub: "// PHYTOTHERAPY SYSTEM",
    navComoFunciona: "How it works",
    navChas: "Teas",
    navCatalogo: "Plant Catalog",
    navEstudo: "Study",
    navBack: "← All teas",

    heroEyebrow: "Living database · 42 plants · 17 protocols",
    heroTitle: "Find the right tea<br>for what you're feeling",
    heroLead: "Type in a symptom and the system cross-references decades of Brazilian folk knowledge with an interface built for the future. Every tea has its own page, with every ingredient scanned in detail.",
    searchPlaceholder: "Search by symptom: heartburn, flu, insomnia, high blood pressure...",
    searchClear: "Clear",

    quickTags: [
      { label: "Heartburn", term: "heartburn" },
      { label: "Flu", term: "flu" },
      { label: "Insomnia", term: "insomnia" },
      { label: "Blood Pressure", term: "blood pressure" },
      { label: "Kidney Stones", term: "kidney stones" },
      { label: "Rheumatism", term: "rheumatism" }
    ],

    statChas: "Teas cataloged",
    statPlantas: "Plants mapped",
    statOrigem: "Brazilian origin",

    howEyebrow: "How it works",
    howTitle: "One system, three layers of information",
    how1Title: "1. Search by symptom",
    how1Text: "Type what you're feeling and the system instantly filters the relevant teas.",
    how2Title: "2. Open the tea's page",
    how2Text: "Every tea has a dedicated page with brewing instructions and every ingredient used.",
    how3Title: "3. Scan the ingredient",
    how3Text: "Hover (or tap on mobile) over each plant to reveal its real properties.",

    teasEyebrow: "Tea catalog",
    teasTitle: "Every tea, by symptom",
    teasHint: "Use the search bar at the top of the page to filter this list in real time.",
    noResultsHomePre: "No tea found for that symptom. Try another term or explore the ",
    noResultsHomeLink: "full plant catalog",
    noResultsHomePost: ".",

    infoEyebrow: "Before you drink",
    infoTitle: "Important information",
    info1Title: "Mindful use",
    info1Text: "This guide is for informational purposes, based on folk knowledge. If there's no improvement, seek medical care.",
    info2Title: "How to brew",
    info2Text: "Infusion: pour boiling water over 8–10g of fresh plant (or 4–5g dried) per 150ml. Cover and let rest for 5–10 minutes.",
    info3Title: "Sweetener",
    info3Text: "Teas should never be sweetened with sugar. Honey can be added once they've cooled.",
    info4Title: "Duration of use",
    info4Text: "Do not take for more than 15 days in a row. Allow 7-day breaks between cycles.",

    footerQuote: "“Nature was given to us as nourishment for our organic balance and a balm for our physical pain.” — Built with care and brotherly love. Faith will always be the great catalyst.",
    footerDisclaimerShort: "This guide is for informational purposes, based on folk knowledge. Teas should never be sweetened with sugar and should not be used for more than 15 days in a row without a 7-day break. If there's no improvement, seek medical care.",
    footerDisclaimerCatalog: "This guide is for informational purposes, based on folk knowledge. If there's no improvement, seek medical care.",
    footerRights: "Nature's Balm",

    scanEyebrow: "Ingredient scan",
    ingredientsTitle: "Ingredients in this tea",
    ingredientsHint: "Hover (or tap on mobile) over each plant to reveal its properties.",
    modoLabel: "How to brew:",

    ingHint: "tap to see properties",
    ingAriaLabel: "View properties of",
    ingPropriedades: "Properties",
    ingOndeNasce: "Where it grows",
    ingAquisicao: "How to get it",
    ingUsadoChas: "Used in these teas",
    ingredientWord: ["ingredient", "ingredients"],
    verCha: "View tea →",

    catalogTag: "Complete database",
    catalogTitle: "Medicinal Plant Catalog",
    catalogLead: "42 mapped plants: where they grow, how to get them and their properties. Tap any of them to scan.",
    catalogSearchPlaceholder: "Search plant, scientific name or symptom...",
    noResultsCatalog: "No plant found. Try another term.",

    docTitleIndex: "Nature's Balm — Smart Medicinal Teas",
    docTitleCatalog: "Plant Catalog — Nature's Balm",
    docTitleEstudo: "Study — Nature's Balm"
  },

  es: {
    brand: "Bálsamo de la Naturaleza",
    brandSub: "// SISTEMA FITOTERAPÉUTICO",
    navComoFunciona: "Cómo funciona",
    navChas: "Tés",
    navCatalogo: "Catálogo de Plantas",
    navEstudo: "Estudio",
    navBack: "← Todos los tés",

    heroEyebrow: "Base de datos viva · 42 plantas · 17 protocolos",
    heroTitle: "Encuentra el té correcto<br>para lo que sientes",
    heroLead: "Escribe un síntoma y el sistema cruza décadas de conocimiento popular brasileño con una interfaz pensada para el futuro. Cada té tiene su propia página, con todos los ingredientes escaneados en detalle.",
    searchPlaceholder: "Buscar por síntoma: acidez, gripe, insomnio, presión alta...",
    searchClear: "Limpiar",

    quickTags: [
      { label: "Acidez", term: "acidez" },
      { label: "Gripe", term: "gripe" },
      { label: "Insomnio", term: "insomnio" },
      { label: "Presión Alta", term: "presión" },
      { label: "Cálculos Renales", term: "renales" },
      { label: "Reumatismo", term: "reumatismo" }
    ],

    statChas: "Tés catalogados",
    statPlantas: "Plantas mapeadas",
    statOrigem: "Origen brasileño",

    howEyebrow: "Cómo funciona",
    howTitle: "Un sistema, tres capas de información",
    how1Title: "1. Busca por síntoma",
    how1Text: "Escribe lo que estás sintiendo y el sistema filtra al instante los tés relevantes.",
    how2Title: "2. Abre la página del té",
    how2Text: "Cada té tiene una página dedicada con el modo de preparo y todos los ingredientes usados.",
    how3Title: "3. Escanea el ingrediente",
    how3Text: "Pasa el mouse (o toca en el celular) sobre cada planta para revelar sus propiedades reales.",

    teasEyebrow: "Catálogo de tés",
    teasTitle: "Todos los tés, por síntoma",
    teasHint: "Usa la búsqueda en la parte superior de la página para filtrar esta lista en tiempo real.",
    noResultsHomePre: "No se encontró ningún té para ese síntoma. Prueba otro término o explora el ",
    noResultsHomeLink: "catálogo completo de plantas",
    noResultsHomePost: ".",

    infoEyebrow: "Antes de tomar",
    infoTitle: "Información importante",
    info1Title: "Uso consciente",
    info1Text: "Esta cartilla tiene un propósito informativo, basado en el conocimiento popular. Si no hay mejoría, busca atención médica.",
    info2Title: "Modo de preparo",
    info2Text: "Infusión: agua hirviendo sobre 8–10g de la planta fresca (o 4–5g seca) por 150ml. Tapar y dejar reposar de 5 a 10 minutos.",
    info3Title: "Endulzante",
    info3Text: "Los tés nunca deben endulzarse con azúcar. Se puede endulzar con miel una vez que se enfríen.",
    info4Title: "Duración del uso",
    info4Text: "No tomar por más de 15 días seguidos. Respeta intervalos de 7 días entre los ciclos.",

    footerQuote: "“Dios nos ofreció la Naturaleza como alimento para nuestro equilibrio orgánico y bálsamo para nuestros dolores físicos.” — Desarrollado con cariño y amor fraterno. La fe siempre será el gran catalizador.",
    footerDisclaimerShort: "Esta cartilla tiene un propósito informativo, basado en el conocimiento popular. Los tés nunca deben endulzarse con azúcar y no deben usarse por más de 15 días seguidos sin un intervalo de 7 días. Si no hay mejoría, busca atención médica.",
    footerDisclaimerCatalog: "Esta cartilla tiene un propósito informativo, basado en el conocimiento popular. Si no hay mejoría, busca atención médica.",
    footerRights: "Bálsamo de la Naturaleza",

    scanEyebrow: "Escaneo de ingredientes",
    ingredientsTitle: "Ingredientes de este té",
    ingredientsHint: "Pasa el mouse (o toca en el celular) sobre cada planta para revelar sus propiedades.",
    modoLabel: "Modo de preparo:",

    ingHint: "toca para ver propiedades",
    ingAriaLabel: "Ver propiedades de",
    ingPropriedades: "Propiedades",
    ingOndeNasce: "Dónde nace",
    ingAquisicao: "Cómo adquirir",
    ingUsadoChas: "Usado en los tés",
    ingredientWord: ["ingrediente", "ingredientes"],
    verCha: "Ver té →",

    catalogTag: "Base de datos completa",
    catalogTitle: "Catálogo de Plantas Medicinales",
    catalogLead: "42 plantas mapeadas: dónde nacen, cómo conseguirlas y sus propiedades. Toca cualquiera para escanear.",
    catalogSearchPlaceholder: "Buscar planta, nombre científico o síntoma...",
    noResultsCatalog: "No se encontró ninguna planta. Prueba otro término.",

    docTitleIndex: "Bálsamo de la Naturaleza — Tés Medicinales Inteligentes",
    docTitleCatalog: "Catálogo de Plantas — Bálsamo de la Naturaleza",
    docTitleEstudo: "Estudio — Bálsamo de la Naturaleza"
  }
};

/* ---------------- Traduções das plantas ---------------- */
const PLANT_TR = {
  pt: {
    "abutua": { name: "Abútua", part: "Raiz", ondeNasce: "Capoeiras e matas ralas, especialmente no Cerrado e Mata Atlântica.", aquisicao: "Raízes secas em casas de ervas, ervanários e mercados municipais.", propriedades: "Alcaloides com ação vasodilatadora, tradicionalmente associados ao relaxamento dos vasos sanguíneos." },
    "acafrao": { name: "Açafrão-da-Terra", part: "Rizoma", ondeNasce: "Clima tropical e subtropical. Muito cultivado em Goiás e Minas Gerais.", aquisicao: "Fresco em feiras ou em pó em qualquer supermercado.", propriedades: "Rico em curcumina, composto com forte ação anti-inflamatória e antioxidante." },
    "agriao": { name: "Agrião", part: "Folhas", ondeNasce: "Áreas alagadas, margens de rios e riachos limpos.", aquisicao: "Maços frescos em feiras livres e sacolões.", propriedades: "Rico em vitamina C e compostos sulfurados; ação expectorante nas vias respiratórias." },
    "alecrim": { name: "Alecrim", part: "Folhas", ondeNasce: "Originário do Mediterrâneo, adapta-se em hortas caseiras por todo o Brasil.", aquisicao: "Fresco em feiras ou seco em supermercados.", propriedades: "Óleo essencial rico em cineol e cânfora; ação carminativa que ajuda a aliviar gases." },
    "alfavaca": { name: "Alfavaca", part: "Folhas", ondeNasce: "Solos úmidos e férteis; comum em quintais das regiões Norte e Nordeste.", aquisicao: "Feiras orgânicas e hortifrútis.", propriedades: "Eugenol e timol conferem ação antiespasmódica e carminativa ao sistema digestivo." },
    "alho": { name: "Alho", part: "Bulbo", ondeNasce: "Cultivado preferencialmente em regiões de clima mais ameno (Sul/Sudeste).", aquisicao: "Qualquer supermercado ou mercearia.", propriedades: "A alicina confere ação antimicrobiana natural, auxiliando as vias respiratórias." },
    "barbatimao": { name: "Barbatimão", part: "Entrecasca", ondeNasce: "Árvore muito nativa e comum no bioma do Cerrado brasileiro.", aquisicao: "Lojas de produtos naturais (comercializa-se a entre-casca).", propriedades: "Altíssimo teor de taninos, com forte ação adstringente e cicatrizante em uso externo." },
    "bardana": { name: "Bardana", part: "Raiz e folhas", ondeNasce: "Planta rústica que se desenvolve bem em terras férteis do Sul e Sudeste.", aquisicao: "Mercados municipais, casas de chás e hortifrútis grandes.", propriedades: "Ação depurativa e digestiva, tradicionalmente usada para aliviar a sensação de queimação." },
    "batata-purga": { name: "Batata de Purga", part: "Raiz", ondeNasce: "Trepadeira comum na Caatinga e em áreas secas do Nordeste.", aquisicao: "Casas de produtos nordestinos e farmácias naturais.", propriedades: "Resinas com ação laxante natural, tradicionalmente empregada no trânsito intestinal." },
    "boldo": { name: "Boldo (Caferana)", part: "Folhas", ondeNasce: "Arbusto incrivelmente resistente, presente em quase todos os quintais brasileiros.", aquisicao: "Mudas por estaquia com vizinhos, feiras e floriculturas.", propriedades: "Forscolina e óleos amargos estimulam a digestão e a função hepática." },
    "caapeba": { name: "Caapeba (Pariparoba)", part: "Folhas", ondeNasce: "Matas sombreadas e úmidas da Mata Atlântica e Amazônia.", aquisicao: "Ervanários e mercados populares de raízes.", propriedades: "Uso tradicional como digestivo e antiácido natural." },
    "calunga": { name: "Calunga", part: "Raiz e folhas", ondeNasce: "Arbusto pequeno nativo do bioma Cerrado brasileiro.", aquisicao: "Raízes/folhas secas em ervanários e lojas online de plantas medicinais.", propriedades: "Princípios amargos (quassinoides) atuam como tônico digestivo e hepático." },
    "cana-macaco": { name: "Cana-de-Macaco", part: "Caule e rizoma", ondeNasce: "Áreas brejosas, úmidas e margens de lagos por todo o país.", aquisicao: "Feiras livres com erveiros e viveiros de plantas rústicas.", propriedades: "Ação diurética que auxilia na eliminação de cálculos renais." },
    "carqueja": { name: "Carqueja", part: "Partes aéreas", ondeNasce: "Cresce espontaneamente em pastos e beiras de estradas no Sul e Sudeste.", aquisicao: "Muito comum em qualquer casa de produtos naturais e farmácias.", propriedades: "Lactonas amargas estimulam a digestão e a função hepática." },
    "chapeu-couro": { name: "Chapéu de Couro", part: "Folhas", ondeNasce: "Brejos, terrenos pantanosos e várzeas de quase todo o Brasil.", aquisicao: "Ervanários, mercados municipais e lojas de suplementos naturais.", propriedades: "Ação diurética e depurativa, tradicionalmente associada à saúde renal." },
    "congonha-bugre": { name: "Congonha de Bugre", part: "Folhas", ondeNasce: "Árvore nativa comum no bioma do Cerrado e partes da Mata Atlântica.", aquisicao: "Especialmente em casas de ervas de cidades do interior.", propriedades: "Uso tradicional com ação anti-inflamatória para dores articulares." },
    "cordao-frade": { name: "Cordão de Frade", part: "Flores e folhas", ondeNasce: "Planta daninha incrivelmente comum em terrenos baldios e pastagens.", aquisicao: "Coleta livre na natureza (locais limpos) ou casas de chás.", propriedades: "Ação diurética leve, tradicionalmente usada para auxiliar a eliminação renal." },
    "espinheira-santa": { name: "Espinheira Santa", part: "Folhas", ondeNasce: "Região Sul do Brasil e em matas de galeria (clima ameno).", aquisicao: "Farmácias de manipulação e quase todas as lojas naturais.", propriedades: "Reconhecida ação antiácida e protetora da mucosa gástrica." },
    "eucalipto": { name: "Eucalipto Cheiroso", part: "Folhas", ondeNasce: "Árvore de grande porte plantada comercialmente em todo o país.", aquisicao: "Feiras livres (galhos frescos) ou farmácias (folhas secas).", propriedades: "Citronelal confere ação expectorante e descongestionante das vias respiratórias." },
    "funcho": { name: "Funcho (Erva-Doce)", part: "Sementes", ondeNasce: "Cultivado em hortas em regiões de clima ameno (Sul/Sudeste).", aquisicao: "Mercados (seção de chás) e feiras de hortifrúti.", propriedades: "Anetol confere ação carminativa e antiespasmódica ao sistema digestivo." },
    "goiabeira": { name: "Goiabeira", part: "Brotos e folhas", ondeNasce: "Adapta-se perfeitamente a todos os climas e solos do Brasil.", aquisicao: "Brotos foliares colhidos de árvores em quintais ou chácaras.", propriedades: "Taninos com ação adstringente, tradicionalmente usados para conter a diarreia." },
    "gravata": { name: "Gravatá (Caraguatá)", part: "Frutos", ondeNasce: "Pertence à família das bromélias, encontrada em biomas secos e cerrados.", aquisicao: "Frutos em ervanários e feiras do interior do Brasil.", propriedades: "Enzimas proteolíticas com uso tradicional vermífugo." },
    "guaco": { name: "Guaco", part: "Folhas", ondeNasce: "Trepadeira originária da Mata Atlântica (Sul e Sudeste).", aquisicao: "Folhas frescas em feiras livres ou xaropes naturais em farmácias.", propriedades: "Cumarina natural com reconhecida ação broncodilatadora e expectorante." },
    "hortela": { name: "Hortelã", part: "Folhas", ondeNasce: "Cresce com extrema facilidade em vasos e hortas com solo úmido.", aquisicao: "Em qualquer sacolão, supermercado ou vizinho que tenha horta.", propriedades: "Mentol com ação broncodilatadora, digestiva e antiparasitária leve." },
    "jambolao": { name: "Jambolão", part: "Folhas e sementes", ondeNasce: "Árvore de grande porte adaptada a praças e parques urbanos pelo país.", aquisicao: "Coleta de folhas frescas em praças ou compra seca em ervanários.", propriedades: "Taninos e flavonoides tradicionalmente associados ao equilíbrio glicêmico." },
    "limao": { name: "Limão", part: "Fruto", ondeNasce: "Adaptação perfeita ao clima brasileiro; plantado em todo o território.", aquisicao: "Abundante em qualquer mercado, feira ou hortifrúti.", propriedades: "Alta concentração de vitamina C e flavonoides que fortalecem a imunidade." },
    "losna": { name: "Losna", part: "Folhas", ondeNasce: "Herbácea originária de clima temperado, cultiva-se no Sul do Brasil.", aquisicao: "Lojas de produtos naturais e raizeiros em mercados municipais.", propriedades: "Princípios amargos que estimulam a digestão e a função hepática." },
    "louro": { name: "Louro", part: "Folhas", ondeNasce: "Árvore perene que gosta de clima mediterrâneo, adaptada no Sul do Brasil.", aquisicao: "Folhas secas vendidas em qualquer seção de temperos de supermercados.", propriedades: "Óleos essenciais com ação anti-inflamatória tradicional para dores articulares." },
    "malva": { name: "Malva", part: "Folhas e flores", ondeNasce: "Erva silvestre comum em terrenos e hortas de quase todo o país.", aquisicao: "Feiras orgânicas e casas de ervas (fresca ou seca).", propriedades: "Mucilagens com ação emoliente e calmante para a garganta inflamada." },
    "maracuja-acu": { name: "Maracujá-Açu", part: "Folhas", ondeNasce: "Trepadeira nativa de áreas tropicais; conhecida por ter o \"caule quadrado\".", aquisicao: "Viveiros especializados e grandes mercados municipais.", propriedades: "Flavonoides com reconhecida ação calmante e leve efeito ansiolítico." },
    "melao-sao-caetano": { name: "Melão de São Caetano", part: "Folhas", ondeNasce: "Trepadeira daninha incrivelmente comum em cercas e muros no interior.", aquisicao: "Pode ser coletada (livre de agrotóxicos) ou comprada seca em ervanários.", propriedades: "Uso tradicional com ação febrífuga, auxiliando a reduzir a temperatura corporal." },
    "melissa": { name: "Melissa (Erva-Cidreira)", part: "Folhas", ondeNasce: "Prefere climas mais amenos, sendo muito cultivada no Sul e Sudeste.", aquisicao: "Saquinhos no supermercado ou maços frescos nas feiras livres.", propriedades: "Ácido rosmarínico confere ação calmante e leve efeito ansiolítico." },
    "mil-folhas": { name: "Mil Folhas", part: "Flores", ondeNasce: "Erva perene que se adapta a quase todo o Brasil, muito vista em jardins.", aquisicao: "Floriculturas (mudas) e lojas de produtos naturais.", propriedades: "Ação carminativa tradicional, auxilia no alívio de gases e cólicas." },
    "mulungu": { name: "Mulungu", part: "Entrecasca", ondeNasce: "Árvore exuberante comum no Cerrado e Mata Atlântica.", aquisicao: "A entre-casca é facilmente achada em farmácias e ervanários.", propriedades: "Alcaloides com reconhecida ação sedativa leve, auxiliando o sono." },
    "pata-de-vaca": { name: "Pata-de-Vaca", part: "Folhas", ondeNasce: "Árvore de flor branca, muito utilizada na arborização urbana do Sul/Sudeste.", aquisicao: "Coleta de folhas limpas nas cidades ou compra em casas de ervas.", propriedades: "Compostos tradicionalmente associados à ação hipoglicemiante." },
    "poejo": { name: "Poejo", part: "Folhas", ondeNasce: "Da mesma família da hortelã, brota em solos muito úmidos e margens de rios.", aquisicao: "Ervanários e feiras livres de produtos orgânicos.", propriedades: "Mentol e pulegona com ação digestiva e antiácida." },
    "quebra-pedra": { name: "Quebra-Pedra", part: "Partes aéreas", ondeNasce: "Erva rasteira espontânea; nasce nas frestas de calçadas por todo o Brasil.", aquisicao: "Casas de produtos naturais (recomenda-se comprar limpo, não colher da rua).", propriedades: "Ação diurética bem conhecida, tradicionalmente ligada à eliminação de cálculos renais." },
    "sabugueiro": { name: "Sabugueiro", part: "Flores", ondeNasce: "Arbusto tradicional antigo, plantado nos quintais do Sul e Sudeste.", aquisicao: "As flores secas são vendidas em empórios e casas de chás.", propriedades: "Flavonoides com ação febrífuga, sudorífera e anti-inflamatória." },
    "girassol": { name: "Girassol (Sementes)", part: "Sementes", ondeNasce: "Planta cultivada extensivamente em plantações no Centro-Oeste e Sul.", aquisicao: "Lojas a granel e supermercados (comprar secas, sem torrar e sem sal).", propriedades: "Rica fonte de magnésio e vitamina E, associados ao alívio de dores de cabeça." },
    "sucupira": { name: "Sucupira", part: "Sementes (favas)", ondeNasce: "Árvore rústica e nobre do Cerrado brasileiro.", aquisicao: "As favas/sementes são achadas em mercados e lojas de produtos naturais.", propriedades: "Óleo rico em ação anti-inflamatória, tradicionalmente usado para dores articulares e de garganta." },
    "tamarindo": { name: "Tamarindo", part: "Polpa do fruto", ondeNasce: "Árvore frondosa aclimatada no Brasil, muito comum no Nordeste.", aquisicao: "A polpa do fruto é vendida nas prateleiras dos supermercados.", propriedades: "Fibras e ácidos orgânicos com suave ação laxante natural." },
    "tanchagem": { name: "Tanchagem", part: "Folhas", ondeNasce: "Erva rasteira muito resistente, cresce como mato em gramados e pastos úmidos.", aquisicao: "Feiras orgânicas e casas de ervas medicinais tradicionais.", propriedades: "Mucilagens e taninos com ação anti-inflamatória para a garganta." }
  },
  en: {
    "abutua": { name: "Abútua", part: "Root", ondeNasce: "Scrubland and sparse forest, especially in the Cerrado and Atlantic Forest.", aquisicao: "Dried roots at herbal shops, apothecaries and municipal markets.", propriedades: "Alkaloids with vasodilating action, traditionally linked to relaxing blood vessels." },
    "acafrao": { name: "Turmeric", part: "Rhizome", ondeNasce: "Tropical and subtropical climate. Widely grown in Goiás and Minas Gerais.", aquisicao: "Fresh at markets or as powder in any supermarket.", propriedades: "Rich in curcumin, a compound with strong anti-inflammatory and antioxidant action." },
    "agriao": { name: "Watercress", part: "Leaves", ondeNasce: "Flooded areas, along clean rivers and streams.", aquisicao: "Fresh bunches at farmers' markets and produce stores.", propriedades: "Rich in vitamin C and sulfur compounds; expectorant action for the respiratory tract." },
    "alecrim": { name: "Rosemary", part: "Leaves", ondeNasce: "Native to the Mediterranean, adapts well to home gardens throughout Brazil.", aquisicao: "Fresh at markets or dried in supermarkets.", propriedades: "Essential oil rich in cineole and camphor; carminative action that helps relieve gas." },
    "alfavaca": { name: "Clove Basil", part: "Leaves", ondeNasce: "Moist, fertile soils; common in yards across the North and Northeast.", aquisicao: "Organic markets and produce stores.", propriedades: "Eugenol and thymol give it antispasmodic and carminative action on the digestive system." },
    "alho": { name: "Garlic", part: "Bulb", ondeNasce: "Mainly grown in milder-climate regions (South/Southeast).", aquisicao: "Any supermarket or grocery store.", propriedades: "Allicin provides natural antimicrobial action, supporting the respiratory tract." },
    "barbatimao": { name: "Barbatimão", part: "Inner bark", ondeNasce: "A tree very native and common in the Brazilian Cerrado biome.", aquisicao: "Natural product stores (the inner bark is sold).", propriedades: "Very high tannin content, with strong astringent and healing action for external use." },
    "bardana": { name: "Burdock", part: "Root and leaves", ondeNasce: "A hardy plant that thrives in fertile soils of the South and Southeast.", aquisicao: "Municipal markets, tea shops and large produce stores.", propriedades: "Depurative and digestive action, traditionally used to relieve the burning sensation of heartburn." },
    "batata-purga": { name: "Purge Potato", part: "Root", ondeNasce: "A vine common in the Caatinga and dry areas of the Northeast.", aquisicao: "Northeastern product stores and natural pharmacies.", propriedades: "Resins with natural laxative action, traditionally used for intestinal transit." },
    "boldo": { name: "Boldo", part: "Leaves", ondeNasce: "An incredibly hardy shrub, present in almost every Brazilian backyard.", aquisicao: "Cuttings from neighbors, markets and nurseries.", propriedades: "Forskolin and bitter oils stimulate digestion and liver function." },
    "caapeba": { name: "Caapeba", part: "Leaves", ondeNasce: "Shaded, humid forests of the Atlantic Forest and Amazon.", aquisicao: "Herbal shops and popular root markets.", propriedades: "Traditionally used as a digestive and natural antacid." },
    "calunga": { name: "Calunga", part: "Root and leaves", ondeNasce: "A small shrub native to the Brazilian Cerrado biome.", aquisicao: "Dried roots/leaves at herbal shops and online medicinal plant stores.", propriedades: "Bitter principles (quassinoids) act as a digestive and liver tonic." },
    "cana-macaco": { name: "Monkey's Cane", part: "Stem and rhizome", ondeNasce: "Marshy, humid areas and lakeshores across the country.", aquisicao: "Farmers' markets with herbalists and rustic-plant nurseries.", propriedades: "Diuretic action that helps eliminate kidney stones." },
    "carqueja": { name: "Carqueja", part: "Aerial parts", ondeNasce: "Grows wild in pastures and roadsides in the South and Southeast.", aquisicao: "Very common in any natural product store and pharmacy.", propriedades: "Bitter lactones stimulate digestion and liver function." },
    "chapeu-couro": { name: "Chapéu-de-Couro", part: "Leaves", ondeNasce: "Marshes, swampy land and floodplains across almost all of Brazil.", aquisicao: "Herbal shops, municipal markets and natural supplement stores.", propriedades: "Diuretic and depurative action, traditionally linked to kidney health." },
    "congonha-bugre": { name: "Congonha-de-Bugre", part: "Leaves", ondeNasce: "A native tree common in the Cerrado biome and parts of the Atlantic Forest.", aquisicao: "Especially at herbal shops in inland towns.", propriedades: "Traditional use with anti-inflammatory action for joint pain." },
    "cordao-frade": { name: "Lion's Ear", part: "Flowers and leaves", ondeNasce: "An incredibly common weed in vacant lots and pastures.", aquisicao: "Free foraging (clean locations) or tea shops.", propriedades: "Mild diuretic action, traditionally used to aid kidney elimination." },
    "espinheira-santa": { name: "Espinheira Santa", part: "Leaves", ondeNasce: "Southern Brazil and gallery forests (mild climate).", aquisicao: "Compounding pharmacies and almost all natural product stores.", propriedades: "Recognized antacid action that protects the stomach lining." },
    "eucalipto": { name: "Lemon-Scented Eucalyptus", part: "Leaves", ondeNasce: "A large tree grown commercially throughout the country.", aquisicao: "Farmers' markets (fresh branches) or pharmacies (dried leaves).", propriedades: "Citronellal gives it expectorant and decongestant action for the respiratory tract." },
    "funcho": { name: "Fennel", part: "Seeds", ondeNasce: "Grown in gardens in milder-climate regions (South/Southeast).", aquisicao: "Supermarkets (tea section) and produce markets.", propriedades: "Anethole gives it carminative and antispasmodic action for the digestive system." },
    "goiabeira": { name: "Guava Tree", part: "Shoots and leaves", ondeNasce: "Adapts perfectly to every climate and soil in Brazil.", aquisicao: "Leaf shoots picked from trees in yards or farms.", propriedades: "Tannins with astringent action, traditionally used to ease diarrhea." },
    "gravata": { name: "Gravatá", part: "Fruit", ondeNasce: "A bromeliad found in dry biomes and cerrado areas.", aquisicao: "Fruit at herbal shops and inland markets.", propriedades: "Proteolytic enzymes with traditional vermifuge use." },
    "guaco": { name: "Guaco", part: "Leaves", ondeNasce: "A vine native to the Atlantic Forest (South and Southeast).", aquisicao: "Fresh leaves at markets or natural syrups at pharmacies.", propriedades: "Natural coumarin with recognized bronchodilating and expectorant action." },
    "hortela": { name: "Peppermint", part: "Leaves", ondeNasce: "Grows with extreme ease in pots and gardens with moist soil.", aquisicao: "Any produce store, supermarket, or a neighbor's garden.", propriedades: "Menthol provides bronchodilating, digestive and mild antiparasitic action." },
    "jambolao": { name: "Java Plum", part: "Leaves and seeds", ondeNasce: "A large tree adapted to squares and parks across the country.", aquisicao: "Fresh leaves collected in squares or dried at herbal shops.", propriedades: "Tannins and flavonoids traditionally associated with blood sugar balance." },
    "limao": { name: "Lemon", part: "Fruit", ondeNasce: "Perfectly adapted to the Brazilian climate; grown throughout the territory.", aquisicao: "Abundant in any market, fair or produce store.", propriedades: "High concentration of vitamin C and flavonoids that strengthen immunity." },
    "losna": { name: "Wormwood", part: "Leaves", ondeNasce: "A temperate-climate herb, grown in Southern Brazil.", aquisicao: "Natural product stores and root vendors at municipal markets.", propriedades: "Bitter principles that stimulate digestion and liver function." },
    "louro": { name: "Bay Laurel", part: "Leaves", ondeNasce: "An evergreen tree that likes Mediterranean climate, adapted in Southern Brazil.", aquisicao: "Dried leaves sold in the spice section of any supermarket.", propriedades: "Essential oils with traditional anti-inflammatory action for joint pain." },
    "malva": { name: "Mallow", part: "Leaves and flowers", ondeNasce: "A wild herb common in vacant land and gardens across almost the whole country.", aquisicao: "Organic markets and herbal shops (fresh or dried).", propriedades: "Mucilages with emollient, soothing action for an inflamed throat." },
    "maracuja-acu": { name: "Giant Granadilla", part: "Leaves", ondeNasce: "A vine native to tropical areas; known for its \"square stem\".", aquisicao: "Specialized nurseries and large municipal markets.", propriedades: "Flavonoids with recognized calming action and a mild anxiolytic effect." },
    "melao-sao-caetano": { name: "Bitter Melon", part: "Leaves", ondeNasce: "An incredibly common weedy vine on fences and walls inland.", aquisicao: "Can be foraged (pesticide-free) or bought dried at herbal shops.", propriedades: "Traditional use with fever-reducing action, helping to lower body temperature." },
    "melissa": { name: "Lemon Balm", part: "Leaves", ondeNasce: "Prefers milder climates, widely grown in the South and Southeast.", aquisicao: "Tea bags in supermarkets or fresh bunches at farmers' markets.", propriedades: "Rosmarinic acid gives it calming action and a mild anxiolytic effect." },
    "mil-folhas": { name: "Yarrow", part: "Flowers", ondeNasce: "A perennial herb that adapts to almost all of Brazil, commonly seen in gardens.", aquisicao: "Nurseries (seedlings) and natural product stores.", propriedades: "Traditional carminative action, helps relieve gas and cramps." },
    "mulungu": { name: "Mulungu", part: "Inner bark", ondeNasce: "A lush tree common in the Cerrado and Atlantic Forest.", aquisicao: "The inner bark is easily found at pharmacies and herbal shops.", propriedades: "Alkaloids with recognized mild sedative action, aiding sleep." },
    "pata-de-vaca": { name: "Cow's Hoof Tree", part: "Leaves", ondeNasce: "A white-flowered tree widely used for urban landscaping in the South/Southeast.", aquisicao: "Leaves picked in cities or bought at herbal shops.", propriedades: "Compounds traditionally associated with a blood-sugar-lowering action." },
    "poejo": { name: "Pennyroyal", part: "Leaves", ondeNasce: "Same family as peppermint, sprouts in very moist soil and riverbanks.", aquisicao: "Herbal shops and organic farmers' markets.", propriedades: "Menthol and pulegone give it digestive and antacid action." },
    "quebra-pedra": { name: "Stone Breaker", part: "Aerial parts", ondeNasce: "A spontaneous creeping herb; sprouts in sidewalk cracks all over Brazil.", aquisicao: "Natural product stores (buy it clean, don't pick it from the street).", propriedades: "Well-known diuretic action, traditionally linked to eliminating kidney stones." },
    "sabugueiro": { name: "Elderberry", part: "Flowers", ondeNasce: "An old traditional shrub, planted in yards in the South and Southeast.", aquisicao: "The dried flowers are sold at delicatessens and tea shops.", propriedades: "Flavonoids with fever-reducing, sweat-inducing and anti-inflammatory action." },
    "girassol": { name: "Sunflower (Seeds)", part: "Seeds", ondeNasce: "A plant grown extensively on farms in the Midwest and South.", aquisicao: "Bulk stores and supermarkets (buy them dried, unroasted, unsalted).", propriedades: "A rich source of magnesium and vitamin E, associated with headache relief." },
    "sucupira": { name: "Sucupira", part: "Seeds (pods)", ondeNasce: "A rustic, noble tree of the Brazilian Cerrado.", aquisicao: "The pods/seeds are found in markets and natural product stores.", propriedades: "An oil rich in anti-inflammatory action, traditionally used for joint and throat pain." },
    "tamarindo": { name: "Tamarind", part: "Fruit pulp", ondeNasce: "A leafy tree acclimated in Brazil, very common in the Northeast.", aquisicao: "The fruit pulp is sold on supermarket shelves.", propriedades: "Fibers and organic acids with a gentle natural laxative action." },
    "tanchagem": { name: "Broadleaf Plantain", part: "Leaves", ondeNasce: "A very hardy creeping herb, grows like a weed in lawns and moist pastures.", aquisicao: "Organic markets and traditional medicinal herb shops.", propriedades: "Mucilages and tannins with anti-inflammatory action for the throat." }
  },
  es: {
    "abutua": { name: "Abútua", part: "Raíz", ondeNasce: "Matorrales y bosques ralos, especialmente en el Cerrado y la Mata Atlántica.", aquisicao: "Raíces secas en herboristerías y mercados municipales.", propriedades: "Alcaloides con acción vasodilatadora, tradicionalmente asociados a la relajación de los vasos sanguíneos." },
    "acafrao": { name: "Cúrcuma", part: "Rizoma", ondeNasce: "Clima tropical y subtropical. Muy cultivada en Goiás y Minas Gerais.", aquisicao: "Fresca en mercados o en polvo en cualquier supermercado.", propriedades: "Rica en curcumina, compuesto con fuerte acción antiinflamatoria y antioxidante." },
    "agriao": { name: "Berro", part: "Hojas", ondeNasce: "Zonas inundadas, márgenes de ríos y arroyos limpios.", aquisicao: "Manojos frescos en ferias y verdulerías.", propriedades: "Rico en vitamina C y compuestos sulfurados; acción expectorante en las vías respiratorias." },
    "alecrim": { name: "Romero", part: "Hojas", ondeNasce: "Originario del Mediterráneo, se adapta bien a huertos caseros en todo Brasil.", aquisicao: "Fresco en ferias o seco en supermercados.", propriedades: "Aceite esencial rico en cineol y alcanfor; acción carminativa que ayuda a aliviar los gases." },
    "alfavaca": { name: "Albahaca de Clavo", part: "Hojas", ondeNasce: "Suelos húmedos y fértiles; común en patios del Norte y Noreste de Brasil.", aquisicao: "Ferias orgánicas y verdulerías.", propriedades: "El eugenol y el timol le confieren acción antiespasmódica y carminativa al sistema digestivo." },
    "alho": { name: "Ajo", part: "Bulbo", ondeNasce: "Cultivado preferiblemente en regiones de clima más templado (Sur/Sudeste).", aquisicao: "Cualquier supermercado o tienda de abarrotes.", propriedades: "La alicina aporta acción antimicrobiana natural, apoyando las vías respiratorias." },
    "barbatimao": { name: "Barbatimão", part: "Entrecorteza", ondeNasce: "Árbol muy nativo y común en el bioma del Cerrado brasileño.", aquisicao: "Tiendas de productos naturales (se comercializa la entrecorteza).", propriedades: "Altísimo contenido de taninos, con fuerte acción astringente y cicatrizante en uso externo." },
    "bardana": { name: "Bardana", part: "Raíz y hojas", ondeNasce: "Planta rústica que se desarrolla bien en tierras fértiles del Sur y Sudeste.", aquisicao: "Mercados municipales, casas de té y verdulerías grandes.", propriedades: "Acción depurativa y digestiva, usada tradicionalmente para aliviar la sensación de ardor." },
    "batata-purga": { name: "Batata de Purga", part: "Raíz", ondeNasce: "Enredadera común en la Caatinga y zonas secas del Noreste de Brasil.", aquisicao: "Tiendas de productos nordestinos y farmacias naturistas.", propriedades: "Resinas con acción laxante natural, empleada tradicionalmente en el tránsito intestinal." },
    "boldo": { name: "Boldo", part: "Hojas", ondeNasce: "Arbusto sumamente resistente, presente en casi todos los patios brasileños.", aquisicao: "Esquejes con vecinos, ferias y viveros.", propriedades: "La forscolina y los aceites amargos estimulan la digestión y la función hepática." },
    "caapeba": { name: "Caapeba", part: "Hojas", ondeNasce: "Bosques sombreados y húmedos de la Mata Atlántica y la Amazonía.", aquisicao: "Herboristerías y mercados populares de raíces.", propriedades: "Uso tradicional como digestivo y antiácido natural." },
    "calunga": { name: "Calunga", part: "Raíz y hojas", ondeNasce: "Arbusto pequeño nativo del bioma del Cerrado brasileño.", aquisicao: "Raíces/hojas secas en herboristerías y tiendas en línea de plantas medicinales.", propriedades: "Los principios amargos (cuasinoides) actúan como tónico digestivo y hepático." },
    "cana-macaco": { name: "Caña de Mono", part: "Tallo y rizoma", ondeNasce: "Zonas pantanosas, húmedas y orillas de lagos en todo el país.", aquisicao: "Ferias libres con herbolarios y viveros de plantas rústicas.", propriedades: "Acción diurética que ayuda a eliminar los cálculos renales." },
    "carqueja": { name: "Carqueja", part: "Partes aéreas", ondeNasce: "Crece espontáneamente en pastizales y bordes de caminos del Sur y Sudeste.", aquisicao: "Muy común en cualquier tienda de productos naturales y farmacia.", propriedades: "Las lactonas amargas estimulan la digestión y la función hepática." },
    "chapeu-couro": { name: "Chapéu-de-Couro", part: "Hojas", ondeNasce: "Pantanos, terrenos cenagosos y llanuras de inundación en casi todo Brasil.", aquisicao: "Herboristerías, mercados municipales y tiendas de suplementos naturales.", propriedades: "Acción diurética y depurativa, tradicionalmente asociada a la salud renal." },
    "congonha-bugre": { name: "Congonha-de-Bugre", part: "Hojas", ondeNasce: "Árbol nativo común en el bioma del Cerrado y en zonas de la Mata Atlántica.", aquisicao: "Especialmente en herboristerías de ciudades del interior.", propriedades: "Uso tradicional con acción antiinflamatoria para los dolores articulares." },
    "cordao-frade": { name: "Cordón de Fraile", part: "Flores y hojas", ondeNasce: "Maleza sumamente común en terrenos baldíos y pastizales.", aquisicao: "Recolección libre en la naturaleza (lugares limpios) o casas de té.", propriedades: "Acción diurética leve, usada tradicionalmente para ayudar en la eliminación renal." },
    "espinheira-santa": { name: "Espinheira Santa", part: "Hojas", ondeNasce: "Región Sur de Brasil y bosques de galería (clima templado).", aquisicao: "Farmacias de preparados magistrales y casi todas las tiendas naturistas.", propriedades: "Reconocida acción antiácida y protectora de la mucosa gástrica." },
    "eucalipto": { name: "Eucalipto Limón", part: "Hojas", ondeNasce: "Árbol de gran porte plantado comercialmente en todo el país.", aquisicao: "Ferias libres (ramas frescas) o farmacias (hojas secas).", propriedades: "El citronelal aporta acción expectorante y descongestionante de las vías respiratorias." },
    "funcho": { name: "Hinojo", part: "Semillas", ondeNasce: "Cultivado en huertos en regiones de clima templado (Sur/Sudeste).", aquisicao: "Supermercados (sección de tés) y ferias de verduras.", propriedades: "El anetol aporta acción carminativa y antiespasmódica al sistema digestivo." },
    "goiabeira": { name: "Guayabo", part: "Brotes y hojas", ondeNasce: "Se adapta perfectamente a todos los climas y suelos de Brasil.", aquisicao: "Brotes foliares recogidos de árboles en patios o fincas.", propriedades: "Taninos con acción astringente, usados tradicionalmente para contener la diarrea." },
    "gravata": { name: "Gravatá", part: "Fruto", ondeNasce: "Pertenece a la familia de las bromelias, se encuentra en biomas secos y cerrados.", aquisicao: "Frutos en herboristerías y ferias del interior de Brasil.", propriedades: "Enzimas proteolíticas con uso tradicional vermífugo." },
    "guaco": { name: "Guaco", part: "Hojas", ondeNasce: "Enredadera originaria de la Mata Atlántica (Sur y Sudeste).", aquisicao: "Hojas frescas en ferias o jarabes naturales en farmacias.", propriedades: "La cumarina natural tiene reconocida acción broncodilatadora y expectorante." },
    "hortela": { name: "Menta", part: "Hojas", ondeNasce: "Crece con extrema facilidad en macetas y huertos con suelo húmedo.", aquisicao: "En cualquier verdulería, supermercado o huerto de algún vecino.", propriedades: "El mentol aporta acción broncodilatadora, digestiva y antiparasitaria leve." },
    "jambolao": { name: "Jambolán", part: "Hojas y semillas", ondeNasce: "Árbol de gran porte adaptado a plazas y parques urbanos por todo el país.", aquisicao: "Recolección de hojas frescas en plazas o compra seca en herboristerías.", propriedades: "Taninos y flavonoides tradicionalmente asociados al equilibrio glucémico." },
    "limao": { name: "Limón", part: "Fruto", ondeNasce: "Adaptación perfecta al clima brasileño; cultivado en todo el territorio.", aquisicao: "Abundante en cualquier mercado, feria o verdulería.", propriedades: "Alta concentración de vitamina C y flavonoides que fortalecen la inmunidad." },
    "losna": { name: "Ajenjo", part: "Hojas", ondeNasce: "Hierba originaria de clima templado, se cultiva en el Sur de Brasil.", aquisicao: "Tiendas de productos naturales y raiceros en mercados municipales.", propriedades: "Principios amargos que estimulan la digestión y la función hepática." },
    "louro": { name: "Laurel", part: "Hojas", ondeNasce: "Árbol perenne que prefiere el clima mediterráneo, adaptado en el Sur de Brasil.", aquisicao: "Hojas secas vendidas en la sección de especias de cualquier supermercado.", propriedades: "Aceites esenciales con acción antiinflamatoria tradicional para los dolores articulares." },
    "malva": { name: "Malva", part: "Hojas y flores", ondeNasce: "Hierba silvestre común en terrenos y huertos de casi todo el país.", aquisicao: "Ferias orgánicas y herboristerías (fresca o seca).", propriedades: "Mucílagos con acción emoliente y calmante para la garganta inflamada." },
    "maracuja-acu": { name: "Maracuyá-Azú", part: "Hojas", ondeNasce: "Enredadera nativa de zonas tropicales; conocida por tener el \"tallo cuadrado\".", aquisicao: "Viveros especializados y grandes mercados municipales.", propriedades: "Flavonoides con reconocida acción calmante y leve efecto ansiolítico." },
    "melao-sao-caetano": { name: "Melón Amargo", part: "Hojas", ondeNasce: "Enredadera maleza sumamente común en cercas y muros del interior.", aquisicao: "Puede recolectarse (libre de agrotóxicos) o comprarse seca en herboristerías.", propriedades: "Uso tradicional con acción febrífuga, ayudando a bajar la temperatura corporal." },
    "melissa": { name: "Melisa (Toronjil)", part: "Hojas", ondeNasce: "Prefiere climas más templados, muy cultivada en el Sur y Sudeste.", aquisicao: "Bolsitas en el supermercado o manojos frescos en ferias libres.", propriedades: "El ácido rosmarínico aporta acción calmante y leve efecto ansiolítico." },
    "mil-folhas": { name: "Milenrama", part: "Flores", ondeNasce: "Hierba perenne que se adapta a casi todo Brasil, muy vista en jardines.", aquisicao: "Viveros (plantines) y tiendas de productos naturales.", propriedades: "Acción carminativa tradicional, ayuda a aliviar gases y cólicos." },
    "mulungu": { name: "Mulungu", part: "Entrecorteza", ondeNasce: "Árbol exuberante común en el Cerrado y la Mata Atlántica.", aquisicao: "La entrecorteza se encuentra fácilmente en farmacias y herboristerías.", propriedades: "Alcaloides con reconocida acción sedante leve, que favorece el sueño." },
    "pata-de-vaca": { name: "Pata de Vaca", part: "Hojas", ondeNasce: "Árbol de flor blanca, muy utilizado en la arborización urbana del Sur/Sudeste.", aquisicao: "Recolección de hojas limpias en las ciudades o compra en casas de hierbas.", propriedades: "Compuestos tradicionalmente asociados a la acción hipoglucemiante." },
    "poejo": { name: "Poleo", part: "Hojas", ondeNasce: "De la misma familia que la menta, brota en suelos muy húmedos y orillas de ríos.", aquisicao: "Herboristerías y ferias libres de productos orgánicos.", propriedades: "El mentol y la pulegona aportan acción digestiva y antiácida." },
    "quebra-pedra": { name: "Chanca Piedra", part: "Partes aéreas", ondeNasce: "Hierba rastrera espontánea; nace en las grietas de las aceras por todo Brasil.", aquisicao: "Tiendas de productos naturales (se recomienda comprarla limpia, no recolectarla de la calle).", propriedades: "Acción diurética muy conocida, tradicionalmente ligada a la eliminación de cálculos renales." },
    "sabugueiro": { name: "Saúco", part: "Flores", ondeNasce: "Arbusto tradicional antiguo, plantado en patios del Sur y Sudeste.", aquisicao: "Las flores secas se venden en tiendas de delicatessen y casas de té.", propriedades: "Flavonoides con acción febrífuga, sudorífica y antiinflamatoria." },
    "girassol": { name: "Girasol (Semillas)", part: "Semillas", ondeNasce: "Planta cultivada extensamente en plantaciones del Centro-Oeste y Sur.", aquisicao: "Tiendas a granel y supermercados (comprarlas secas, sin tostar y sin sal).", propriedades: "Rica fuente de magnesio y vitamina E, asociados al alivio de los dolores de cabeza." },
    "sucupira": { name: "Sucupira", part: "Semillas (vainas)", ondeNasce: "Árbol rústico y noble del Cerrado brasileño.", aquisicao: "Las vainas/semillas se encuentran en mercados y tiendas de productos naturales.", propriedades: "Aceite rico en acción antiinflamatoria, usado tradicionalmente para dolores articulares y de garganta." },
    "tamarindo": { name: "Tamarindo", part: "Pulpa del fruto", ondeNasce: "Árbol frondoso aclimatado en Brasil, muy común en el Noreste.", aquisicao: "La pulpa del fruto se vende en los estantes de los supermercados.", propriedades: "Fibras y ácidos orgánicos con suave acción laxante natural." },
    "tanchagem": { name: "Llantén Mayor", part: "Hojas", ondeNasce: "Hierba rastrera muy resistente, crece como maleza en céspedes y pastos húmedos.", aquisicao: "Ferias orgánicas y casas de hierbas medicinales tradicionales.", propriedades: "Mucílagos y taninos con acción antiinflamatoria para la garganta." }
  }
};

/* ---------------- Traduções dos chás ---------------- */
const TEA_TR = {
  pt: {
    "pressao-alta": { name: "Chá para Pressão Alta", symptom: "Pressão Alta", tagline: "Ação vasodilatadora e diurética para apoiar o equilíbrio da pressão arterial.", modo: "Cobrir com água fervente por 5 a 10 minutos. Ingerir preferencialmente morno, até duas plantas combinadas." },
    "gripe-resfriado": { name: "Chá para Gripe e Resfriado", symptom: "Gripe / Resfriado", tagline: "Combinação expectorante e imunoestimulante para os dias de gripe.", modo: "Cobrir com água fervente por 5 minutos. Tomar quente, de preferência antes de dormir." },
    "asma-bronquite": { name: "Chá para Asma e Bronquite", symptom: "Asma / Bronquite", tagline: "Plantas broncodilatadoras e expectorantes para as vias respiratórias.", modo: "Cobrir com água fervente por 5 minutos. Ingerir preferencialmente quente, até duas plantas combinadas." },
    "gases": { name: "Chá para Alívio de Gases", symptom: "Gases", tagline: "Óleos essenciais carminativos que ajudam a aliviar o desconforto abdominal.", modo: "Cobrir com água fervente por 5 minutos. Tomar morno após as refeições." },
    "ferimentos": { name: "Chá para Ferimentos Leves", symptom: "Ferimentos (uso externo)", tagline: "Ação adstringente e cicatrizante para compressas de uso externo.", modo: "Preparar por decocção por 10 minutos. Usar apenas externamente, em compressas frias." },
    "azia": { name: "Chá para Azia", symptom: "Azia / Queimação", tagline: "Plantas amargas e antiácidas que acalmam a queimação digestiva.", modo: "Cobrir com água fervente por 5 minutos. Pode ser ingerido morno, frio ou gelado (preferencialmente frio), até duas plantas combinadas." },
    "prisao-de-ventre": { name: "Chá para Prisão de Ventre", symptom: "Prisão de Ventre", tagline: "Fibras e resinas naturais que auxiliam o trânsito intestinal.", modo: "Cobrir com água fervente por 8 minutos. Tomar morno, preferencialmente à noite." },
    "estomago-figado": { name: "Chá para Estômago e Fígado", symptom: "Estômago / Fígado", tagline: "Amargos naturais que estimulam a digestão e a função hepática.", modo: "Cobrir com água fervente por 5 a 10 minutos. Tomar morno antes das refeições, até duas plantas combinadas." },
    "calculos-renais": { name: "Chá para Cálculos Renais", symptom: "Cálculos Renais", tagline: "Ação diurética que favorece a eliminação natural pelas vias urinárias.", modo: "Cobrir com água fervente por 10 minutos. Tomar morno, várias vezes ao dia, até duas plantas combinadas." },
    "reumatismo": { name: "Chá para Reumatismo", symptom: "Reumatismo", tagline: "Ação anti-inflamatória tradicional para dores articulares.", modo: "Cobrir com água fervente por 10 minutos. Tomar morno, até duas vezes ao dia." },
    "diarreia": { name: "Chá para Diarreia", symptom: "Diarreia", tagline: "Taninos adstringentes que ajudam a regular o trânsito intestinal.", modo: "Cobrir com água fervente por 5 minutos. Tomar morno ou frio." },
    "verminose": { name: "Chá para Verminose", symptom: "Verminose", tagline: "Uso tradicional com propriedades vermífugas.", modo: "Cobrir com água fervente por 5 minutos. Tomar em jejum pela manhã." },
    "diabetes": { name: "Chá para Diabetes", symptom: "Diabetes", tagline: "Plantas tradicionalmente associadas ao equilíbrio glicêmico.", modo: "Cobrir com água fervente por 8 minutos. Tomar morno, antes das principais refeições." },
    "garganta": { name: "Chá para Garganta Inflamada", symptom: "Garganta Inflamada", tagline: "Mucilagens emolientes que acalmam a garganta irritada.", modo: "Cobrir com água fervente por 5 minutos. Fazer gargarejos ou tomar morno, até duas plantas combinadas." },
    "calmante-insonia": { name: "Chá Calmante e para Insônia", symptom: "Calmante / Insônia", tagline: "Flavonoides e alcaloides com efeito calmante natural.", modo: "Cobrir com água fervente por 5 minutos. Tomar morno, meia hora antes de dormir." },
    "febre": { name: "Chá para Febre", symptom: "Febre", tagline: "Ação febrífuga e sudorífera para ajudar a baixar a temperatura.", modo: "Cobrir com água fervente por 10 minutos. Tomar quente, em pequenos goles." },
    "dor-cabeca": { name: "Chá para Dor de Cabeça e Enxaqueca", symptom: "Dor de Cabeça / Enxaqueca", tagline: "Nutrientes que auxiliam no relaxamento e alívio da dor.", modo: "Cobrir com água fervente por 5 minutos. Tomar morno, em ambiente tranquilo e com pouca luz." }
  },
  en: {
    "pressao-alta": { name: "Tea for High Blood Pressure", symptom: "High Blood Pressure", tagline: "Vasodilating and diuretic action to support balanced blood pressure.", modo: "Steep in boiling water for 5 to 10 minutes. Drink preferably warm, up to two combined plants." },
    "gripe-resfriado": { name: "Tea for Flu and Colds", symptom: "Flu / Cold", tagline: "Expectorant and immune-boosting blend for flu days.", modo: "Steep in boiling water for 5 minutes. Drink hot, preferably before bed." },
    "asma-bronquite": { name: "Tea for Asthma and Bronchitis", symptom: "Asthma / Bronchitis", tagline: "Bronchodilating and expectorant plants for the respiratory tract.", modo: "Steep in boiling water for 5 minutes. Drink preferably hot, up to two combined plants." },
    "gases": { name: "Tea for Gas Relief", symptom: "Gas", tagline: "Carminative essential oils that help relieve abdominal discomfort.", modo: "Steep in boiling water for 5 minutes. Drink warm after meals." },
    "ferimentos": { name: "Tea for Minor Wounds", symptom: "Wounds (external use)", tagline: "Astringent and healing action for external-use compresses.", modo: "Prepare by decoction for 10 minutes. Use externally only, as cold compresses." },
    "azia": { name: "Tea for Heartburn", symptom: "Heartburn", tagline: "Bitter, antacid plants that soothe digestive burning.", modo: "Steep in boiling water for 5 minutes. Can be drunk warm, cold or chilled (preferably cold), up to two combined plants." },
    "prisao-de-ventre": { name: "Tea for Constipation", symptom: "Constipation", tagline: "Natural fibers and resins that support intestinal transit.", modo: "Steep in boiling water for 8 minutes. Drink warm, preferably at night." },
    "estomago-figado": { name: "Tea for Stomach and Liver", symptom: "Stomach / Liver", tagline: "Natural bitters that stimulate digestion and liver function.", modo: "Steep in boiling water for 5 to 10 minutes. Drink warm before meals, up to two combined plants." },
    "calculos-renais": { name: "Tea for Kidney Stones", symptom: "Kidney Stones", tagline: "Diuretic action that favors natural elimination through the urinary tract.", modo: "Steep in boiling water for 10 minutes. Drink warm, several times a day, up to two combined plants." },
    "reumatismo": { name: "Tea for Rheumatism", symptom: "Rheumatism", tagline: "Traditional anti-inflammatory action for joint pain.", modo: "Steep in boiling water for 10 minutes. Drink warm, up to twice a day." },
    "diarreia": { name: "Tea for Diarrhea", symptom: "Diarrhea", tagline: "Astringent tannins that help regulate intestinal transit.", modo: "Steep in boiling water for 5 minutes. Drink warm or cold." },
    "verminose": { name: "Tea for Intestinal Worms", symptom: "Intestinal Worms", tagline: "Traditional use with vermifuge properties.", modo: "Steep in boiling water for 5 minutes. Drink on an empty stomach in the morning." },
    "diabetes": { name: "Tea for Diabetes", symptom: "Diabetes", tagline: "Plants traditionally associated with blood sugar balance.", modo: "Steep in boiling water for 8 minutes. Drink warm, before main meals." },
    "garganta": { name: "Tea for Sore Throat", symptom: "Sore / Inflamed Throat", tagline: "Soothing mucilages that calm an irritated throat.", modo: "Steep in boiling water for 5 minutes. Gargle or drink warm, up to two combined plants." },
    "calmante-insonia": { name: "Calming Tea for Insomnia", symptom: "Calming / Insomnia", tagline: "Flavonoids and alkaloids with a natural calming effect.", modo: "Steep in boiling water for 5 minutes. Drink warm, half an hour before bed." },
    "febre": { name: "Tea for Fever", symptom: "Fever", tagline: "Fever-reducing and sweat-inducing action to help lower temperature.", modo: "Steep in boiling water for 10 minutes. Drink hot, in small sips." },
    "dor-cabeca": { name: "Tea for Headache and Migraine", symptom: "Headache / Migraine", tagline: "Nutrients that help with relaxation and pain relief.", modo: "Steep in boiling water for 5 minutes. Drink warm, in a calm, dimly lit environment." }
  },
  es: {
    "pressao-alta": { name: "Té para la Presión Alta", symptom: "Presión Alta", tagline: "Acción vasodilatadora y diurética para ayudar al equilibrio de la presión arterial.", modo: "Cubrir con agua hirviendo de 5 a 10 minutos. Tomar preferiblemente tibio, hasta dos plantas combinadas." },
    "gripe-resfriado": { name: "Té para la Gripe y el Resfriado", symptom: "Gripe / Resfriado", tagline: "Combinación expectorante e inmunoestimulante para los días de gripe.", modo: "Cubrir con agua hirviendo por 5 minutos. Tomar caliente, preferiblemente antes de dormir." },
    "asma-bronquite": { name: "Té para el Asma y la Bronquitis", symptom: "Asma / Bronquitis", tagline: "Plantas broncodilatadoras y expectorantes para las vías respiratorias.", modo: "Cubrir con agua hirviendo por 5 minutos. Tomar preferiblemente caliente, hasta dos plantas combinadas." },
    "gases": { name: "Té para el Alivio de los Gases", symptom: "Gases", tagline: "Aceites esenciales carminativos que ayudan a aliviar el malestar abdominal.", modo: "Cubrir con agua hirviendo por 5 minutos. Tomar tibio después de las comidas." },
    "ferimentos": { name: "Té para Heridas Leves", symptom: "Heridas (uso externo)", tagline: "Acción astringente y cicatrizante para compresas de uso externo.", modo: "Preparar por decocción durante 10 minutos. Usar solo externamente, en compresas frías." },
    "azia": { name: "Té para la Acidez", symptom: "Acidez / Ardor", tagline: "Plantas amargas y antiácidas que calman el ardor digestivo.", modo: "Cubrir con agua hirviendo por 5 minutos. Puede tomarse tibio, frío o helado (preferiblemente frío), hasta dos plantas combinadas." },
    "prisao-de-ventre": { name: "Té para el Estreñimiento", symptom: "Estreñimiento", tagline: "Fibras y resinas naturales que ayudan al tránsito intestinal.", modo: "Cubrir con agua hirviendo por 8 minutos. Tomar tibio, preferiblemente por la noche." },
    "estomago-figado": { name: "Té para el Estómago y el Hígado", symptom: "Estómago / Hígado", tagline: "Amargos naturales que estimulan la digestión y la función hepática.", modo: "Cubrir con agua hirviendo de 5 a 10 minutos. Tomar tibio antes de las comidas, hasta dos plantas combinadas." },
    "calculos-renais": { name: "Té para los Cálculos Renales", symptom: "Cálculos Renales", tagline: "Acción diurética que favorece la eliminación natural por las vías urinarias.", modo: "Cubrir con agua hirviendo por 10 minutos. Tomar tibio, varias veces al día, hasta dos plantas combinadas." },
    "reumatismo": { name: "Té para el Reumatismo", symptom: "Reumatismo", tagline: "Acción antiinflamatoria tradicional para los dolores articulares.", modo: "Cubrir con agua hirviendo por 10 minutos. Tomar tibio, hasta dos veces al día." },
    "diarreia": { name: "Té para la Diarrea", symptom: "Diarrea", tagline: "Taninos astringentes que ayudan a regular el tránsito intestinal.", modo: "Cubrir con agua hirviendo por 5 minutos. Tomar tibio o frío." },
    "verminose": { name: "Té para las Lombrices", symptom: "Lombrices Intestinales", tagline: "Uso tradicional con propiedades vermífugas.", modo: "Cubrir con agua hirviendo por 5 minutos. Tomar en ayunas por la mañana." },
    "diabetes": { name: "Té para la Diabetes", symptom: "Diabetes", tagline: "Plantas tradicionalmente asociadas al equilibrio glucémico.", modo: "Cubrir con agua hirviendo por 8 minutos. Tomar tibio, antes de las comidas principales." },
    "garganta": { name: "Té para la Garganta Inflamada", symptom: "Garganta Inflamada", tagline: "Mucílagos emolientes que calman la garganta irritada.", modo: "Cubrir con agua hirviendo por 5 minutos. Hacer gárgaras o tomar tibio, hasta dos plantas combinadas." },
    "calmante-insonia": { name: "Té Calmante para el Insomnio", symptom: "Calmante / Insomnio", tagline: "Flavonoides y alcaloides con efecto calmante natural.", modo: "Cubrir con agua hirviendo por 5 minutos. Tomar tibio, media hora antes de dormir." },
    "febre": { name: "Té para la Fiebre", symptom: "Fiebre", tagline: "Acción febrífuga y sudorífica para ayudar a bajar la temperatura.", modo: "Cubrir con agua hirviendo por 10 minutos. Tomar caliente, en pequeños sorbos." },
    "dor-cabeca": { name: "Té para el Dolor de Cabeza y la Migraña", symptom: "Dolor de Cabeza / Migraña", tagline: "Nutrientes que ayudan a la relajación y al alivio del dolor.", modo: "Cubrir con agua hirviendo por 5 minutos. Tomar tibio, en un ambiente tranquilo y con poca luz." }
  }
};

function plantText(id){
  const lang = getLang();
  return (PLANT_TR[lang] && PLANT_TR[lang][id]) || PLANT_TR[DEFAULT_LANG][id];
}
function teaText(slug){
  const lang = getLang();
  return (TEA_TR[lang] && TEA_TR[lang][slug]) || TEA_TR[DEFAULT_LANG][slug];
}
function t(key){
  const lang = getLang();
  const dict = UI[lang] || UI[DEFAULT_LANG];
  return (key in dict) ? dict[key] : UI[DEFAULT_LANG][key];
}
