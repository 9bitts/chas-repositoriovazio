/* ============================================================
   BÁLSAMO DA NATUREZA — Base de dados de plantas e chás
   ============================================================ */

// Tipos de ícone: leaf | root | bark | flower | seed | fruit | bulb
const PLANTS = {
  "abutua": {
    name: "Abútua",
    sci: "Chondrodendron platyphyllum",
    part: "Raiz",
    icon: "root",
    ondeNasce: "Capoeiras e matas ralas, especialmente no Cerrado e Mata Atlântica.",
    aquisicao: "Raízes secas em casas de ervas, ervanários e mercados municipais.",
    propriedades: "Alcaloides com ação vasodilatadora, tradicionalmente associados ao relaxamento dos vasos sanguíneos."
  },
  "acafrao": {
    name: "Açafrão-da-Terra",
    sci: "Curcuma longa",
    part: "Rizoma",
    icon: "root",
    ondeNasce: "Clima tropical e subtropical. Muito cultivado em Goiás e Minas Gerais.",
    aquisicao: "Fresco em feiras ou em pó em qualquer supermercado.",
    propriedades: "Rico em curcumina, composto com forte ação anti-inflamatória e antioxidante."
  },
  "agriao": {
    name: "Agrião",
    sci: "Nasturtium officinale",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Áreas alagadas, margens de rios e riachos limpos.",
    aquisicao: "Maços frescos em feiras livres e sacolões.",
    propriedades: "Rico em vitamina C e compostos sulfurados; ação expectorante nas vias respiratórias."
  },
  "alecrim": {
    name: "Alecrim",
    sci: "Salvia rosmarinus",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Originário do Mediterrâneo, adapta-se em hortas caseiras por todo o Brasil.",
    aquisicao: "Fresco em feiras ou seco em supermercados.",
    propriedades: "Óleo essencial rico em cineol e cânfora; ação carminativa que ajuda a aliviar gases."
  },
  "alfavaca": {
    name: "Alfavaca",
    sci: "Ocimum gratissimum",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Solos úmidos e férteis; comum em quintais das regiões Norte e Nordeste.",
    aquisicao: "Feiras orgânicas e hortifrútis.",
    propriedades: "Eugenol e timol conferem ação antiespasmódica e carminativa ao sistema digestivo."
  },
  "alho": {
    name: "Alho",
    sci: "Allium sativum",
    part: "Bulbo",
    icon: "bulb",
    ondeNasce: "Cultivado preferencialmente em regiões de clima mais ameno (Sul/Sudeste).",
    aquisicao: "Qualquer supermercado ou mercearia.",
    propriedades: "A alicina confere ação antimicrobiana natural, auxiliando as vias respiratórias."
  },
  "barbatimao": {
    name: "Barbatimão",
    sci: "Stryphnodendron adstringens",
    part: "Entrecasca",
    icon: "bark",
    ondeNasce: "Árvore muito nativa e comum no bioma do Cerrado brasileiro.",
    aquisicao: "Lojas de produtos naturais (comercializa-se a entre-casca).",
    propriedades: "Altíssimo teor de taninos, com forte ação adstringente e cicatrizante em uso externo."
  },
  "bardana": {
    name: "Bardana",
    sci: "Arctium lappa",
    part: "Raiz e folhas",
    icon: "root",
    ondeNasce: "Planta rústica que se desenvolve bem em terras férteis do Sul e Sudeste.",
    aquisicao: "Mercados municipais, casas de chás e hortifrútis grandes.",
    propriedades: "Ação depurativa e digestiva, tradicionalmente usada para aliviar a sensação de queimação."
  },
  "batata-purga": {
    name: "Batata de Purga",
    sci: "Operculina macrocarpa",
    part: "Raiz",
    icon: "root",
    ondeNasce: "Trepadeira comum na Caatinga e em áreas secas do Nordeste.",
    aquisicao: "Casas de produtos nordestinos e farmácias naturais.",
    propriedades: "Resinas com ação laxante natural, tradicionalmente empregada no trânsito intestinal."
  },
  "boldo": {
    name: "Boldo (Caferana)",
    sci: "Plectranthus barbatus",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Arbusto incrivelmente resistente, presente em quase todos os quintais brasileiros.",
    aquisicao: "Mudas por estaquia com vizinhos, feiras e floriculturas.",
    propriedades: "Forscolina e óleos amargos estimulam a digestão e a função hepática."
  },
  "caapeba": {
    name: "Caapeba (Pariparoba)",
    sci: "Piper umbellatum",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Matas sombreadas e úmidas da Mata Atlântica e Amazônia.",
    aquisicao: "Ervanários e mercados populares de raízes.",
    propriedades: "Uso tradicional como digestivo e antiácido natural."
  },
  "calunga": {
    name: "Calunga",
    sci: "Simaba ferruginea",
    part: "Raiz e folhas",
    icon: "root",
    ondeNasce: "Arbusto pequeno nativo do bioma Cerrado brasileiro.",
    aquisicao: "Raízes/folhas secas em ervanários e lojas online de plantas medicinais.",
    propriedades: "Princípios amargos (quassinoides) atuam como tônico digestivo e hepático."
  },
  "cana-macaco": {
    name: "Cana-de-Macaco",
    sci: "Costus spicatus",
    part: "Caule e rizoma",
    icon: "root",
    ondeNasce: "Áreas brejosas, úmidas e margens de lagos por todo o país.",
    aquisicao: "Feiras livres com erveiros e viveiros de plantas rústicas.",
    propriedades: "Ação diurética que auxilia na eliminação de cálculos renais."
  },
  "carqueja": {
    name: "Carqueja",
    sci: "Baccharis trimera",
    part: "Partes aéreas",
    icon: "leaf",
    ondeNasce: "Cresce espontaneamente em pastos e beiras de estradas no Sul e Sudeste.",
    aquisicao: "Muito comum em qualquer casa de produtos naturais e farmácias.",
    propriedades: "Lactonas amargas estimulam a digestão e a função hepática."
  },
  "chapeu-couro": {
    name: "Chapéu de Couro",
    sci: "Echinodorus grandiflorus",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Brejos, terrenos pantanosos e várzeas de quase todo o Brasil.",
    aquisicao: "Ervanários, mercados municipais e lojas de suplementos naturais.",
    propriedades: "Ação diurética e depurativa, tradicionalmente associada à saúde renal."
  },
  "congonha-bugre": {
    name: "Congonha de Bugre",
    sci: "Rudgea viburnoides",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Árvore nativa comum no bioma do Cerrado e partes da Mata Atlântica.",
    aquisicao: "Especialmente em casas de ervas de cidades do interior.",
    propriedades: "Uso tradicional com ação anti-inflamatória para dores articulares."
  },
  "cordao-frade": {
    name: "Cordão de Frade",
    sci: "Leonotis nepetifolia",
    part: "Flores e folhas",
    icon: "flower",
    ondeNasce: "Planta daninha incrivelmente comum em terrenos baldios e pastagens.",
    aquisicao: "Coleta livre na natureza (locais limpos) ou casas de chás.",
    propriedades: "Ação diurética leve, tradicionalmente usada para auxiliar a eliminação renal."
  },
  "espinheira-santa": {
    name: "Espinheira Santa",
    sci: "Maytenus ilicifolia",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Região Sul do Brasil e em matas de galeria (clima ameno).",
    aquisicao: "Farmácias de manipulação e quase todas as lojas naturais.",
    propriedades: "Reconhecida ação antiácida e protetora da mucosa gástrica."
  },
  "eucalipto": {
    name: "Eucalipto Cheiroso",
    sci: "Corymbia citriodora",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Árvore de grande porte plantada comercialmente em todo o país.",
    aquisicao: "Feiras livres (galhos frescos) ou farmácias (folhas secas).",
    propriedades: "Citronelal confere ação expectorante e descongestionante das vias respiratórias."
  },
  "funcho": {
    name: "Funcho (Erva-Doce)",
    sci: "Foeniculum vulgare",
    part: "Sementes",
    icon: "seed",
    ondeNasce: "Cultivado em hortas em regiões de clima ameno (Sul/Sudeste).",
    aquisicao: "Mercados (seção de chás) e feiras de hortifrúti.",
    propriedades: "Anetol confere ação carminativa e antiespasmódica ao sistema digestivo."
  },
  "goiabeira": {
    name: "Goiabeira",
    sci: "Psidium guajava",
    part: "Brotos e folhas",
    icon: "leaf",
    ondeNasce: "Adapta-se perfeitamente a todos os climas e solos do Brasil.",
    aquisicao: "Brotos foliares colhidos de árvores em quintais ou chácaras.",
    propriedades: "Taninos com ação adstringente, tradicionalmente usados para conter a diarreia."
  },
  "gravata": {
    name: "Gravatá (Caraguatá)",
    sci: "Bromelia pinguin",
    part: "Frutos",
    icon: "fruit",
    ondeNasce: "Pertence à família das bromélias, encontrada em biomas secos e cerrados.",
    aquisicao: "Frutos em ervanários e feiras do interior do Brasil.",
    propriedades: "Enzimas proteolíticas com uso tradicional vermífugo."
  },
  "guaco": {
    name: "Guaco",
    sci: "Mikania glomerata",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Trepadeira originária da Mata Atlântica (Sul e Sudeste).",
    aquisicao: "Folhas frescas em feiras livres ou xaropes naturais em farmácias.",
    propriedades: "Cumarina natural com reconhecida ação broncodilatadora e expectorante."
  },
  "hortela": {
    name: "Hortelã",
    sci: "Mentha × piperita",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Cresce com extrema facilidade em vasos e hortas com solo úmido.",
    aquisicao: "Em qualquer sacolão, supermercado ou vizinho que tenha horta.",
    propriedades: "Mentol com ação broncodilatadora, digestiva e antiparasitária leve."
  },
  "jambolao": {
    name: "Jambolão",
    sci: "Syzygium cumini",
    part: "Folhas e sementes",
    icon: "seed",
    ondeNasce: "Árvore de grande porte adaptada a praças e parques urbanos pelo país.",
    aquisicao: "Coleta de folhas frescas em praças ou compra seca em ervanários.",
    propriedades: "Taninos e flavonoides tradicionalmente associados ao equilíbrio glicêmico."
  },
  "limao": {
    name: "Limão",
    sci: "Citrus × limon",
    part: "Fruto",
    icon: "fruit",
    ondeNasce: "Adaptação perfeita ao clima brasileiro; plantado em todo o território.",
    aquisicao: "Abundante em qualquer mercado, feira ou hortifrúti.",
    propriedades: "Alta concentração de vitamina C e flavonoides que fortalecem a imunidade."
  },
  "losna": {
    name: "Losna",
    sci: "Artemisia absinthium",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Herbácea originária de clima temperado, cultiva-se no Sul do Brasil.",
    aquisicao: "Lojas de produtos naturais e raizeiros em mercados municipais.",
    propriedades: "Princípios amargos que estimulam a digestão e a função hepática."
  },
  "louro": {
    name: "Louro",
    sci: "Laurus nobilis",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Árvore perene que gosta de clima mediterrâneo, adaptada no Sul do Brasil.",
    aquisicao: "Folhas secas vendidas em qualquer seção de temperos de supermercados.",
    propriedades: "Óleos essenciais com ação anti-inflamatória tradicional para dores articulares."
  },
  "malva": {
    name: "Malva",
    sci: "Malva sylvestris",
    part: "Folhas e flores",
    icon: "flower",
    ondeNasce: "Erva silvestre comum em terrenos e hortas de quase todo o país.",
    aquisicao: "Feiras orgânicas e casas de ervas (fresca ou seca).",
    propriedades: "Mucilagens com ação emoliente e calmante para a garganta inflamada."
  },
  "maracuja-acu": {
    name: "Maracujá-Açu",
    sci: "Passiflora quadrangularis",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Trepadeira nativa de áreas tropicais; conhecida por ter o \"caule quadrado\".",
    aquisicao: "Viveiros especializados e grandes mercados municipais.",
    propriedades: "Flavonoides com reconhecida ação calmante e leve efeito ansiolítico."
  },
  "melao-sao-caetano": {
    name: "Melão de São Caetano",
    sci: "Momordica charantia",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Trepadeira daninha incrivelmente comum em cercas e muros no interior.",
    aquisicao: "Pode ser coletada (livre de agrotóxicos) ou comprada seca em ervanários.",
    propriedades: "Uso tradicional com ação febrífuga, auxiliando a reduzir a temperatura corporal."
  },
  "melissa": {
    name: "Melissa (Erva-Cidreira)",
    sci: "Melissa officinalis",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Prefere climas mais amenos, sendo muito cultivada no Sul e Sudeste.",
    aquisicao: "Saquinhos no supermercado ou maços frescos nas feiras livres.",
    propriedades: "Ácido rosmarínico confere ação calmante e leve efeito ansiolítico."
  },
  "mil-folhas": {
    name: "Mil Folhas",
    sci: "Achillea millefolium",
    part: "Flores",
    icon: "flower",
    ondeNasce: "Erva perene que se adapta a quase todo o Brasil, muito vista em jardins.",
    aquisicao: "Floriculturas (mudas) e lojas de produtos naturais.",
    propriedades: "Ação carminativa tradicional, auxilia no alívio de gases e cólicas."
  },
  "mulungu": {
    name: "Mulungu",
    sci: "Erythrina mulungu",
    part: "Entrecasca",
    icon: "bark",
    ondeNasce: "Árvore exuberante comum no Cerrado e Mata Atlântica.",
    aquisicao: "A entre-casca é facilmente achada em farmácias e ervanários.",
    propriedades: "Alcaloides com reconhecida ação sedativa leve, auxiliando o sono."
  },
  "pata-de-vaca": {
    name: "Pata-de-Vaca",
    sci: "Bauhinia forficata",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Árvore de flor branca, muito utilizada na arborização urbana do Sul/Sudeste.",
    aquisicao: "Coleta de folhas limpas nas cidades ou compra em casas de ervas.",
    propriedades: "Compostos tradicionalmente associados à ação hipoglicemiante."
  },
  "poejo": {
    name: "Poejo",
    sci: "Mentha pulegium",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Da mesma família da hortelã, brota em solos muito úmidos e margens de rios.",
    aquisicao: "Ervanários e feiras livres de produtos orgânicos.",
    propriedades: "Mentol e pulegona com ação digestiva e antiácida."
  },
  "quebra-pedra": {
    name: "Quebra-Pedra",
    sci: "Phyllanthus niruri",
    part: "Partes aéreas",
    icon: "leaf",
    ondeNasce: "Erva rasteira espontânea; nasce nas frestas de calçadas por todo o Brasil.",
    aquisicao: "Casas de produtos naturais (recomenda-se comprar limpo, não colher da rua).",
    propriedades: "Ação diurética bem conhecida, tradicionalmente ligada à eliminação de cálculos renais."
  },
  "sabugueiro": {
    name: "Sabugueiro",
    sci: "Sambucus nigra",
    part: "Flores",
    icon: "flower",
    ondeNasce: "Arbusto tradicional antigo, plantado nos quintais do Sul e Sudeste.",
    aquisicao: "As flores secas são vendidas em empórios e casas de chás.",
    propriedades: "Flavonoides com ação febrífuga, sudorífera e anti-inflamatória."
  },
  "girassol": {
    name: "Girassol (Sementes)",
    sci: "Helianthus annuus",
    part: "Sementes",
    icon: "seed",
    ondeNasce: "Planta cultivada extensivamente em plantações no Centro-Oeste e Sul.",
    aquisicao: "Lojas a granel e supermercados (comprar secas, sem torrar e sem sal).",
    propriedades: "Rica fonte de magnésio e vitamina E, associados ao alívio de dores de cabeça."
  },
  "sucupira": {
    name: "Sucupira",
    sci: "Pterodon emarginatus",
    part: "Sementes (favas)",
    icon: "seed",
    ondeNasce: "Árvore rústica e nobre do Cerrado brasileiro.",
    aquisicao: "As favas/sementes são achadas em mercados e lojas de produtos naturais.",
    propriedades: "Óleo rico em ação anti-inflamatória, tradicionalmente usado para dores articulares e de garganta."
  },
  "tamarindo": {
    name: "Tamarindo",
    sci: "Tamarindus indica",
    part: "Polpa do fruto",
    icon: "fruit",
    ondeNasce: "Árvore frondosa aclimatada no Brasil, muito comum no Nordeste.",
    aquisicao: "A polpa do fruto é vendida nas prateleiras dos supermercados.",
    propriedades: "Fibras e ácidos orgânicos com suave ação laxante natural."
  },
  "tanchagem": {
    name: "Tanchagem",
    sci: "Plantago major",
    part: "Folhas",
    icon: "leaf",
    ondeNasce: "Erva rasteira muito resistente, cresce como mato em gramados e pastos úmidos.",
    aquisicao: "Feiras orgânicas e casas de ervas medicinais tradicionais.",
    propriedades: "Mucilagens e taninos com ação anti-inflamatória para a garganta."
  }
};

// Chás agrupados por sintoma/estado de saúde
const TEAS = [
  {
    slug: "pressao-alta",
    name: "Chá para Pressão Alta",
    symptom: "Pressão Alta",
    accent: "#00e5ff",
    tagline: "Ação vasodilatadora e diurética para apoiar o equilíbrio da pressão arterial.",
    modo: "Cobrir com água fervente por 5 a 10 minutos. Ingerir preferencialmente morno, até duas plantas combinadas.",
    plants: ["abutua", "cana-macaco", "chapeu-couro", "quebra-pedra"]
  },
  {
    slug: "gripe-resfriado",
    name: "Chá para Gripe e Resfriado",
    symptom: "Gripe / Resfriado",
    accent: "#22ff8c",
    tagline: "Combinação expectorante e imunoestimulante para os dias de gripe.",
    modo: "Cobrir com água fervente por 5 minutos. Tomar quente, de preferência antes de dormir.",
    plants: ["acafrao", "alho", "eucalipto", "limao"]
  },
  {
    slug: "asma-bronquite",
    name: "Chá para Asma e Bronquite",
    symptom: "Asma / Bronquite",
    accent: "#38bdf8",
    tagline: "Plantas broncodilatadoras e expectorantes para as vias respiratórias.",
    modo: "Cobrir com água fervente por 5 minutos. Ingerir preferencialmente quente, até duas plantas combinadas.",
    plants: ["agriao", "eucalipto", "guaco", "hortela"]
  },
  {
    slug: "gases",
    name: "Chá para Alívio de Gases",
    symptom: "Gases",
    accent: "#a3ff5e",
    tagline: "Óleos essenciais carminativos que ajudam a aliviar o desconforto abdominal.",
    modo: "Cobrir com água fervente por 5 minutos. Tomar morno após as refeições.",
    plants: ["alecrim", "alfavaca", "mil-folhas"]
  },
  {
    slug: "ferimentos",
    name: "Chá para Ferimentos Leves",
    symptom: "Ferimentos (uso externo)",
    accent: "#ffb347",
    tagline: "Ação adstringente e cicatrizante para compressas de uso externo.",
    modo: "Preparar por decocção por 10 minutos. Usar apenas externamente, em compressas frias.",
    plants: ["barbatimao"]
  },
  {
    slug: "azia",
    name: "Chá para Azia",
    symptom: "Azia / Queimação",
    accent: "#4ade80",
    tagline: "Plantas amargas e antiácidas que acalmam a queimação digestiva.",
    modo: "Cobrir com água fervente por 5 minutos. Pode ser ingerido morno, frio ou gelado (preferencialmente frio), até duas plantas combinadas.",
    plants: ["bardana", "boldo", "caapeba", "espinheira-santa", "funcho", "losna", "poejo"]
  },
  {
    slug: "prisao-de-ventre",
    name: "Chá para Prisão de Ventre",
    symptom: "Prisão de Ventre",
    accent: "#fbbf24",
    tagline: "Fibras e resinas naturais que auxiliam o trânsito intestinal.",
    modo: "Cobrir com água fervente por 8 minutos. Tomar morno, preferencialmente à noite.",
    plants: ["batata-purga", "tamarindo"]
  },
  {
    slug: "estomago-figado",
    name: "Chá para Estômago e Fígado",
    symptom: "Estômago / Fígado",
    accent: "#34d399",
    tagline: "Amargos naturais que estimulam a digestão e a função hepática.",
    modo: "Cobrir com água fervente por 5 a 10 minutos. Tomar morno antes das refeições, até duas plantas combinadas.",
    plants: ["boldo", "calunga", "carqueja", "espinheira-santa", "losna"]
  },
  {
    slug: "calculos-renais",
    name: "Chá para Cálculos Renais",
    symptom: "Cálculos Renais",
    accent: "#22d3ee",
    tagline: "Ação diurética que favorece a eliminação natural pelas vias urinárias.",
    modo: "Cobrir com água fervente por 10 minutos. Tomar morno, várias vezes ao dia, até duas plantas combinadas.",
    plants: ["cana-macaco", "chapeu-couro", "cordao-frade", "quebra-pedra"]
  },
  {
    slug: "reumatismo",
    name: "Chá para Reumatismo",
    symptom: "Reumatismo",
    accent: "#c084fc",
    tagline: "Ação anti-inflamatória tradicional para dores articulares.",
    modo: "Cobrir com água fervente por 10 minutos. Tomar morno, até duas vezes ao dia.",
    plants: ["congonha-bugre", "louro", "sabugueiro", "sucupira"]
  },
  {
    slug: "diarreia",
    name: "Chá para Diarreia",
    symptom: "Diarreia",
    accent: "#60a5fa",
    tagline: "Taninos adstringentes que ajudam a regular o trânsito intestinal.",
    modo: "Cobrir com água fervente por 5 minutos. Tomar morno ou frio.",
    plants: ["funcho", "goiabeira"]
  },
  {
    slug: "verminose",
    name: "Chá para Verminose",
    symptom: "Verminose",
    accent: "#84cc16",
    tagline: "Uso tradicional com propriedades vermífugas.",
    modo: "Cobrir com água fervente por 5 minutos. Tomar em jejum pela manhã.",
    plants: ["gravata", "hortela"]
  },
  {
    slug: "diabetes",
    name: "Chá para Diabetes",
    symptom: "Diabetes",
    accent: "#2dd4bf",
    tagline: "Plantas tradicionalmente associadas ao equilíbrio glicêmico.",
    modo: "Cobrir com água fervente por 8 minutos. Tomar morno, antes das principais refeições.",
    plants: ["jambolao", "pata-de-vaca"]
  },
  {
    slug: "garganta",
    name: "Chá para Garganta Inflamada",
    symptom: "Garganta Inflamada",
    accent: "#67e8f9",
    tagline: "Mucilagens emolientes que acalmam a garganta irritada.",
    modo: "Cobrir com água fervente por 5 minutos. Fazer gargarejos ou tomar morno, até duas plantas combinadas.",
    plants: ["limao", "malva", "sucupira", "tanchagem"]
  },
  {
    slug: "calmante-insonia",
    name: "Chá Calmante e para Insônia",
    symptom: "Calmante / Insônia",
    accent: "#a78bfa",
    tagline: "Flavonoides e alcaloides com efeito calmante natural.",
    modo: "Cobrir com água fervente por 5 minutos. Tomar morno, meia hora antes de dormir.",
    plants: ["maracuja-acu", "melissa", "mulungu"]
  },
  {
    slug: "febre",
    name: "Chá para Febre",
    symptom: "Febre",
    accent: "#fb923c",
    tagline: "Ação febrífuga e sudorífera para ajudar a baixar a temperatura.",
    modo: "Cobrir com água fervente por 10 minutos. Tomar quente, em pequenos goles.",
    plants: ["melao-sao-caetano", "sabugueiro"]
  },
  {
    slug: "dor-cabeca",
    name: "Chá para Dor de Cabeça e Enxaqueca",
    symptom: "Dor de Cabeça / Enxaqueca",
    accent: "#f0abfc",
    tagline: "Nutrientes que auxiliam no relaxamento e alívio da dor.",
    modo: "Cobrir com água fervente por 5 minutos. Tomar morno, em ambiente tranquilo e com pouca luz.",
    plants: ["girassol"]
  }
];
