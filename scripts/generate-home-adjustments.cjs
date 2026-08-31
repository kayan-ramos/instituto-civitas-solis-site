const fs = require("fs");
const path = require("path");

const root = process.cwd();
const inputName = "index-i18n-stable-8f6c2d1.js";
const outputName = "index-home-review-2f7a91c.js";
const cssOutputName = "index-home-review-2f7a91c.css";
const revision = "home-review-2026-08-31";

const input = path.join(root, "assets", inputName);
const outputAssets = path.join(root, "assets", outputName);
const outputDist = path.join(root, "dist", "assets", outputName);

let source = fs.readFileSync(input, "utf8");

const replacements = [
  [
    "Fomentar internacionalmente o desenvolvimento humano integral em seu aspecto material, emocional, racional e espiritual, individualmente por meio do autodesenvolvimento e coletivamente por meio da cultura, promovendo diálogo e um espaço aberto de encontro.",
    "Fomentar o desenvolvimento humano integral em seus aspectos fisico, emocional, racional e espiritual, individualmente, por meio do autodesenvolvimento, e coletivamente, por meio da cultura, promovendo diálogo e um espaço aberto de encontro."
  ],
  [
    "Tornar-se referência no cenário nacional e iniciar a internacionalização com a realização de atividades que propiciem o desenvolvimento integral do ser humano, em seu aspecto individual e coletivo. Ser um polo atrator para especialistas e formadores de opinião para um diálogo aberto entre visões distintas, visando a colaboração construtiva.",
    "Tornar-se referência cultural por meio da realização de atividades que propiciem o desenvolvimento integral do ser humano."
  ]
];

for (const [from, to] of replacements) {
  source = source.split(from).join(to);
}

const hook = "Wd(document.getElementById(\"root\")).render";
const hookIndex = source.indexOf(hook);
if (hookIndex < 0) throw new Error("Could not find React render hook.");

const runtime = `;(()=>{
  if(location.pathname==="/trabalho-global"){history.replaceState(null,"","/")}

  const normalize=text=>(text||"").replace(/\\s+/g," ").trim();
  const has=(text,terms)=>terms.some(term=>normalize(text).toLowerCase().includes(term.toLowerCase()));
  const currentLang=()=>((document.documentElement.lang||localStorage.getItem("i18nextLng")||"pt").toLowerCase().split("-")[0]||"pt");
  const byHeading=terms=>[...document.querySelectorAll("section")].find(section=>[...section.querySelectorAll("h1,h2")].some(h=>has(h.innerText,terms)));

  const copy={
    pt:{
      more:"Saiba mais",
      close:"Recolher",
      items:[
        {keys:["Visão Planetária","Planetary Vision","Vision Planétaire","Visión Planetaria","Planetarische Vision","Visione Planetaria","PUBLICAÇÕES","PUBLICATIONS","PUBLICACIONES","PUBLICATIONS","PUBLIKATIONEN","PUBBLICAZIONI"],title:"PUBLICAÇÕES",body:"Desenvolvemos publicações que integram conhecimento, sensibilidade e transformação interior de forma relevante e prática para as pessoas",detail:"Espiritualidade, Arte, Ciência e Livros Infantis",images:["/assets/docx-home-global/global-detail-1.png"]},
        {keys:["Parcerias","Partnerships","Partenariats","Alianzas","Partnerschaften","Partnership","DIÁLOGOS","DIALOGUES","DIÁLOGOS","DIALOGUES","DIALOGE","DIALOGHI"],title:"DIÁLOGOS",body:"Criamos espaços para o diálogo entre arte, ciência e espiritualidade, incluindo diferentes culturas, tradições e formas de conhecimento",detail:"Eventos, podcasts e entrevistas com nomes tais como Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón e outros",images:["/assets/docx-home-global/global-detail-2.png","/assets/docx-home-global/global-detail-3.png","/assets/docx-home-global/global-detail-4.png"]},
        {keys:["Educação Holística","Holistic Education","Éducation Holistique","Educación Holística","Ganzheitliche Bildung","Educazione Olistica","PARCERIAS","PARTNERSHIPS","ALIANZAS","PARTENARIATS","PARTNERSCHAFTEN","PARTNERSHIP"],title:"PARCERIAS",body:"Estabelecemos cooperações para ampliar o alcance de projetos culturais e filosóficos",detail:"Parceria internacional com a Embassy of the Free Mind (Holanda), dedicada à preservação e disseminação da tradição hermética e dos conhecimentos esotéricos ocidentais; parcerias nacionais com pesquisadores acadêmicos, artistas e organizações afins para projetos atuais e futuros",images:["/assets/docx-home-global/global-detail-5.png"]}
      ]
    },
    en:{
      more:"Learn more",
      close:"Close",
      items:[
        {title:"PUBLICATIONS",body:"We develop publications that integrate knowledge, sensitivity and inner transformation in a relevant and practical way for people.",detail:"Spirituality, Art, Science and Children's Books"},
        {title:"DIALOGUES",body:"We create spaces for dialogue among art, science and spirituality, including different cultures, traditions and forms of knowledge.",detail:"Events, podcasts and interviews with names such as Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón and others."},
        {title:"PARTNERSHIPS",body:"We establish cooperation to expand the reach of cultural and philosophical projects.",detail:"International partnership with the Embassy of the Free Mind in the Netherlands, dedicated to preserving and disseminating the Hermetic tradition and Western esoteric knowledge; national partnerships with academic researchers, artists and aligned organizations for current and future projects."}
      ]
    },
    es:{
      more:"Saber más",
      close:"Cerrar",
      items:[
        {title:"PUBLICACIONES",body:"Desarrollamos publicaciones que integran conocimiento, sensibilidad y transformación interior de forma relevante y práctica para las personas.",detail:"Espiritualidad, Arte, Ciencia y Libros Infantiles"},
        {title:"DIÁLOGOS",body:"Creamos espacios para el diálogo entre arte, ciencia y espiritualidad, incluyendo diferentes culturas, tradiciones y formas de conocimiento.",detail:"Eventos, podcasts y entrevistas con nombres como Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón y otros."},
        {title:"ALIANZAS",body:"Establecemos cooperaciones para ampliar el alcance de proyectos culturales y filosóficos.",detail:"Alianza internacional con Embassy of the Free Mind en los Países Bajos, dedicada a la preservación y difusión de la tradición hermética y los conocimientos esotéricos occidentales; alianzas nacionales con investigadores académicos, artistas y organizaciones afines para proyectos actuales y futuros."}
      ]
    },
    fr:{
      more:"En savoir plus",
      close:"Fermer",
      items:[
        {title:"PUBLICATIONS",body:"Nous développons des publications qui intègrent connaissance, sensibilité et transformation intérieure de façon pertinente et pratique.",detail:"Spiritualité, Art, Science et Livres pour enfants"},
        {title:"DIALOGUES",body:"Nous créons des espaces de dialogue entre art, science et spiritualité, en incluant différentes cultures, traditions et formes de connaissance.",detail:"Événements, podcasts et entretiens avec des noms tels que Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón et d'autres."},
        {title:"PARTENARIATS",body:"Nous établissons des coopérations pour élargir la portée de projets culturels et philosophiques.",detail:"Partenariat international avec l'Embassy of the Free Mind aux Pays-Bas, dédiée à la préservation et à la diffusion de la tradition hermétique et des connaissances ésotériques occidentales; partenariats nationaux avec des chercheurs, artistes et organisations affines pour les projets actuels et futurs."}
      ]
    },
    de:{
      more:"Mehr erfahren",
      close:"Schließen",
      items:[
        {title:"PUBLIKATIONEN",body:"Wir entwickeln Publikationen, die Wissen, Sensibilität und innere Transformation auf relevante und praktische Weise verbinden.",detail:"Spiritualität, Kunst, Wissenschaft und Kinderbücher"},
        {title:"DIALOGE",body:"Wir schaffen Räume für den Dialog zwischen Kunst, Wissenschaft und Spiritualität und beziehen verschiedene Kulturen, Traditionen und Wissensformen ein.",detail:"Veranstaltungen, Podcasts und Interviews mit Namen wie Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón und anderen."},
        {title:"PARTNERSCHAFTEN",body:"Wir etablieren Kooperationen, um die Reichweite kultureller und philosophischer Projekte zu erweitern.",detail:"Internationale Partnerschaft mit der Embassy of the Free Mind in den Niederlanden zur Bewahrung und Verbreitung der hermetischen Tradition und westlichen esoterischen Wissens; nationale Partnerschaften mit Forschenden, Künstlern und verwandten Organisationen für aktuelle und zukünftige Projekte."}
      ]
    },
    it:{
      more:"Scopri di più",
      close:"Chiudi",
      items:[
        {title:"PUBBLICAZIONI",body:"Sviluppiamo pubblicazioni che integrano conoscenza, sensibilità e trasformazione interiore in modo rilevante e pratico per le persone.",detail:"Spiritualità, Arte, Scienza e Libri per bambini"},
        {title:"DIALOGHI",body:"Creiamo spazi di dialogo tra arte, scienza e spiritualità, includendo diverse culture, tradizioni e forme di conoscenza.",detail:"Eventi, podcast e interviste con nomi come Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón e altri."},
        {title:"PARTNERSHIP",body:"Stabiliamo cooperazioni per ampliare la portata di progetti culturali e filosofici.",detail:"Partnership internazionale con Embassy of the Free Mind nei Paesi Bassi, dedicata alla preservazione e diffusione della tradizione ermetica e delle conoscenze esoteriche occidentali; partnership nazionali con ricercatori accademici, artisti e organizzazioni affini per progetti attuali e futuri."}
      ]
    }
  };

  const baseItems=copy.pt.items;
  const localized=()=>{const lang=copy[currentLang()]?currentLang():"pt";return {lang,more:copy[lang].more,close:copy[lang].close,items:baseItems.map((base,index)=>({...base,...copy[lang].items[index],keys:base.keys,images:base.images}))}};
  const cardFor=(section,item)=>[...section.querySelectorAll("div")].find(el=>{const h=el.querySelector("h3");return h&&item.keys.some(key=>normalize(h.innerText)===key)});
  const panelHtml=item=>'<div class="ics-global-panel-media">'+item.images.map(src=>'<img src="'+src+'" alt="'+item.title+'">').join("")+'</div><div class="ics-global-panel-copy"><h3>'+item.title+'</h3><p>'+item.detail+'</p></div>';

  const ensureVideo=()=>{
    const org=byHeading(["Nossa Organização","Notre Organisation","Our Organization","Nuestra Organización","Unsere Organisation","La Nostra Organizzazione"]);
    if(!org||org.querySelector(".ics-organization-video"))return;
    const wrap=document.createElement("div");
    wrap.className="ics-organization-video";
    wrap.innerHTML='<iframe src="https://www.youtube.com/embed/-nEZsZAjCrk" title="Instituto Civitas Solis" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    (org.querySelector(".max-w-4xl")||org.firstElementChild||org).appendChild(wrap);
  };

  const ensureGlobal=()=>{
    const section=byHeading(["Trabalho Global","Global Work","Travail Global","Trabajo Global","Globale Arbeit","Lavoro Globale"]);
    if(!section)return;
    const data=localized();
    section.setAttribute("id","trabalho-global");
    const cards=data.items.map((item,index)=>{
      const card=cardFor(section,item);
      if(!card)return null;
      card.classList.add("ics-global-card");
      card.setAttribute("data-ics-global-card",String(index));
      const h3=card.querySelector("h3");
      const p=card.querySelector("p");
      if(h3)h3.textContent=item.title;
      if(p)p.textContent=item.body;
      card.querySelectorAll(".ics-global-detail").forEach(el=>el.remove());
      let button=card.querySelector(".ics-more-button");
      if(!button){
        button=document.createElement("button");
        button.type="button";
        button.className="ics-more-button";
        card.appendChild(button);
      }
      button.textContent=data.more;
      button.setAttribute("aria-expanded",card.classList.contains("ics-global-selected")?"true":"false");
      button.onclick=()=>{
        const selected=card.classList.contains("ics-global-selected");
        section.querySelectorAll(".ics-global-card").forEach(el=>el.classList.remove("ics-global-selected"));
        section.querySelectorAll(".ics-more-button").forEach(el=>el.setAttribute("aria-expanded","false"));
        const panel=section.querySelector(".ics-global-info-panel");
        if(selected){
          if(panel)panel.hidden=true;
          return;
        }
        card.classList.add("ics-global-selected");
        button.setAttribute("aria-expanded","true");
        if(panel){
          panel.hidden=false;
          panel.innerHTML=panelHtml(data.items[index]);
        }
      };
      return card;
    }).filter(Boolean);
    if(cards.length){
      const grid=cards[0].parentElement;
      grid.classList.add("ics-global-grid");
      let panel=section.querySelector(".ics-global-info-panel");
      if(!panel){
        panel=document.createElement("div");
        panel.className="ics-global-info-panel";
        panel.hidden=true;
        grid.insertAdjacentElement("afterend",panel);
      }
      const selected=section.querySelector(".ics-global-card.ics-global-selected");
      if(selected&&!panel.hidden){
        const index=Number(selected.getAttribute("data-ics-global-card")||0);
        panel.innerHTML=panelHtml(data.items[index]);
      }
    }
    [...section.querySelectorAll("a[href='/trabalho-global']")].forEach(a=>(a.closest(".text-center")||a).remove());
    [...section.querySelectorAll("h2")].filter(h=>has(h.innerText,["Parceria Internacional","International Partnership","Partenariat International","Alianza Internacional","Internationale Partnerschaft","Partnership Internazionale"])).forEach(h=>(h.closest(".max-w-4xl")||h).remove());
  };

  const fixMvvHero=()=>{
    const hero=byHeading(["Missão, Visão e Valores","Mission, Vision and Values","Mission, Vision et Valeurs","Misión, Visión y Valores","Mission, Vision und Werte","Missione, Visione e Valori"]);
    if(hero)hero.querySelectorAll("svg").forEach(svg=>svg.remove());
  };
  const fixMissionVision=()=>{
    [...document.querySelectorAll("h2")].filter(h=>has(h.innerText,["Nossa Missão","Nossa Visão","Our Mission","Our Vision","Notre Mission","Notre Vision","Nuestra Misión","Nuestra Visión","Unsere Mission","Unsere Vision","La Nostra Missione","La Nostra Visione"])).forEach(h=>{
      const row=h.closest(".flex.items-center");
      if(row)row.querySelectorAll("svg").forEach(svg=>svg.remove());
    });
  };
  const fixValues=()=>document.querySelectorAll(".values-constellation").forEach(el=>el.classList.add("ics-values-spaced"));
  const fixYouTube=()=>{
    document.querySelectorAll(".youtube-hero h1").forEach(el=>el.classList.add("ics-youtube-title"));
    document.querySelectorAll(".youtube-hero p").forEach(el=>el.classList.add("ics-youtube-subtitle"));
  };
  const apply=()=>{ensureVideo();ensureGlobal();fixMvvHero();fixMissionVision();fixValues();fixYouTube()};
  const schedule=()=>{clearTimeout(window.__icsHomeAdjustTimer);window.__icsHomeAdjustTimer=setTimeout(apply,120)};
  window.__icsHomeApply=apply;
  document.addEventListener("DOMContentLoaded",schedule);
  new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
  let tries=0;
  const interval=setInterval(()=>{apply();tries+=1;if(tries>24)clearInterval(interval)},250);
  setTimeout(apply,0);
  setTimeout(apply,700);
  schedule();
})();`;

source = source.slice(0, hookIndex) + runtime + source.slice(hookIndex);

fs.writeFileSync(outputAssets, source);
fs.copyFileSync(outputAssets, outputDist);

const cssInput = path.join(root, "assets", "index-i18n-selector-d9754a4.css");
const cssOutputAssets = path.join(root, "assets", cssOutputName);
const cssOutputDist = path.join(root, "dist", "assets", cssOutputName);
const cssAdditions = `
.ics-organization-video{width:min(860px,100%);margin:3rem auto 0;aspect-ratio:16/9;border-radius:8px;overflow:hidden;box-shadow:0 18px 45px rgba(17,24,39,.16);background:#111827}.ics-organization-video iframe{width:100%;height:100%;border:0;display:block}.ics-global-grid{align-items:stretch!important;margin-bottom:0!important}.ics-global-card{display:flex!important;flex-direction:column!important;justify-content:flex-start!important;min-height:280px!important;height:100%;position:relative;overflow:visible!important;border:1px solid rgba(249,115,22,.14)!important;border-radius:8px!important;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease,background .25s ease}.ics-global-card:hover{transform:translateY(-4px);box-shadow:0 18px 35px rgba(17,24,39,.14)!important;border-color:rgba(249,115,22,.34)!important}.ics-global-card.ics-global-selected{border-color:rgba(249,115,22,.65)!important;box-shadow:0 20px 40px rgba(249,115,22,.16)!important}.ics-global-card h3{text-transform:uppercase;letter-spacing:.04em;min-height:1.6em}.ics-global-card p{flex:1}.ics-more-button{display:inline-flex;align-items:center;justify-content:center;align-self:center;margin-top:1.35rem;padding:.72rem 1.15rem;border-radius:6px;background:#f97316;color:#fff;font-weight:700;font-size:.9rem;line-height:1;transition:background .2s ease,transform .2s ease}.ics-more-button:hover{background:#ea580c;transform:translateY(-1px)}.ics-global-info-panel{max-width:980px;margin:2.2rem auto 0;padding:1.4rem;background:#fff;border:1px solid rgba(249,115,22,.18);border-radius:8px;box-shadow:0 20px 45px rgba(17,24,39,.12);display:grid;grid-template-columns:minmax(260px,1.05fr) minmax(260px,.95fr);gap:1.4rem;align-items:center;animation:icsPanelIn .26s ease both}.ics-global-info-panel[hidden]{display:none!important}.ics-global-panel-media{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.75rem}.ics-global-panel-media img{width:100%;height:170px;object-fit:cover;border-radius:6px;border:1px solid rgba(17,24,39,.08);background:#f3f4f6}.ics-global-panel-copy h3{font-family:Georgia,serif;font-size:1.55rem;font-weight:700;color:#111827;margin:0 0 .75rem}.ics-global-panel-copy p{font-family:Georgia,serif;color:#4b5563;font-size:1.03rem;line-height:1.7;margin:0}.ics-values-spaced{min-height:760px}.ics-values-spaced .values-geometry{top:160px;width:520px}.ics-youtube-title{font-family:Georgia,serif!important;font-weight:700!important}.ics-youtube-subtitle{font-family:Georgia,serif!important}@keyframes icsPanelIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@media (min-width:1024px){.ics-values-spaced .values-orbit-respeitar{top:0}.ics-values-spaced .values-orbit-transformar{top:155px;left:10px}.ics-values-spaced .values-orbit-coexistir{top:155px;right:10px}.ics-values-spaced .values-orbit-inspirar{top:350px;left:10px}.ics-values-spaced .values-orbit-compartilhar{top:350px;right:10px}.ics-values-spaced .values-orbit-entusiasmar{top:570px;left:80px}.ics-values-spaced .values-orbit-reconhecer{top:570px;right:80px}}@media (max-width:767px){.ics-organization-video{margin-top:2rem}.ics-global-grid{gap:1.25rem!important}.ics-global-card{min-height:auto!important}.ics-global-info-panel{grid-template-columns:1fr;padding:1rem;margin-top:1.4rem}.ics-global-panel-media{grid-template-columns:1fr}.ics-global-panel-media img{height:auto;max-height:260px}.ics-global-card h3{font-size:1.05rem}}
`;
const css = fs.readFileSync(cssInput, "utf8") + cssAdditions;
fs.writeFileSync(cssOutputAssets, css);
fs.copyFileSync(cssOutputAssets, cssOutputDist);

for (const htmlPath of [path.join(root, "index.html"), path.join(root, "dist", "index.html")]) {
  let html = fs.readFileSync(htmlPath, "utf8");
  html = html
    .replace(/(<meta name="deploy-revision" content=")[^"]*(" \/>)/, `$1${revision}$2`)
    .replace(/\/assets\/index-[^"]+\.js/, `/assets/${outputName}`)
    .replace(/\/assets\/index-[^"]+\.css/, `/assets/${cssOutputName}`);
  fs.writeFileSync(htmlPath, html);
}

console.log(outputName);
