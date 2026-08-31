const fs = require("fs");
const path = require("path");

const root = process.cwd();
const inputName = "index-i18n-stable-8f6c2d1.js";
const outputName = "index-home-mvv-youtube-3c9a71b.js";
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

const runtime = `;(()=>{if(location.pathname==="/trabalho-global"){history.replaceState(null,"","/")}const norm=s=>(s||"").replace(/\\s+/g," ").trim();const has=(text,terms)=>terms.some(term=>norm(text).toLowerCase().includes(term.toLowerCase()));const byHeading=terms=>[...document.querySelectorAll("section")].find(section=>[...section.querySelectorAll("h1,h2")].some(h=>has(h.innerText,terms)));const ensureVideo=()=>{const org=byHeading(["Nossa Organização","Notre Organisation","Our Organization","Nuestra Organización","Unsere Organisation","La Nostra Organizzazione"]);if(!org||org.querySelector(".ics-organization-video"))return;const wrap=document.createElement("div");wrap.className="ics-organization-video";wrap.innerHTML='<iframe src="https://www.youtube.com/embed/-nEZsZAjCrk" title="Instituto Civitas Solis" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';const inner=org.querySelector(".max-w-4xl")||org.firstElementChild||org;inner.appendChild(wrap)};const detailData=[{keys:["Visão Planetária","Planetary Vision","Vision Planétaire","Visión Planetaria","Planetarische Vision","Visione Planetaria","PUBLICAÇÕES"],title:"PUBLICAÇÕES",body:"Desenvolvemos publicações que integram conhecimento, sensibilidade e transformação interior de forma relevante e prática para as pessoas",detail:"Espiritualidade, Arte, Ciência e Livros Infantis",images:["/assets/docx-home-global/global-detail-1.png"]},{keys:["Parcerias","Partnerships","Partenariats","Alianzas","Partnerschaften","Partnership","DIÁLOGOS"],title:"DIÁLOGOS",body:"Criamos espaços para o diálogo entre arte, ciência e espiritualidade, incluindo diferentes culturas, tradições e formas de conhecimento",detail:"Eventos, podcasts e entrevistas com nomes tais como Gilberto Gil, Kaká Werá, Carlos Nobre, Jesús Zatón e outros",images:["/assets/docx-home-global/global-detail-2.png","/assets/docx-home-global/global-detail-3.png","/assets/docx-home-global/global-detail-4.png"]},{keys:["Educação Holística","Holistic Education","Éducation Holistique","Educación Holística","Ganzheitliche Bildung","Educazione Olistica","PARCERIAS"],title:"PARCERIAS",body:"Estabelecemos cooperações para ampliar o alcance de projetos culturais e filosóficos",detail:"Parceria internacional com a Embassy of the Free Mind (Holanda), dedicada à preservação e disseminação da tradição hermética e dos conhecimentos esotéricos ocidentais; parcerias nacionais com pesquisadores acadêmicos, artistas e organizações afins para projetos atuais e futuros",images:["/assets/docx-home-global/global-detail-5.png"]}];const cardFor=(section,item)=>[...section.querySelectorAll("div")].find(el=>{const h=el.querySelector("h3");return h&&item.keys.some(key=>norm(h.innerText)===key)});const ensureGlobal=()=>{const section=byHeading(["Trabalho Global","Global Work","Travail Global","Trabajo Global","Globale Arbeit","Lavoro Globale"]);if(!section)return;section.setAttribute("id","trabalho-global");detailData.forEach((item,index)=>{const card=cardFor(section,item);if(!card)return;card.classList.add("ics-global-card");card.setAttribute("data-ics-global-card",String(index));const h3=card.querySelector("h3");const p=card.querySelector("p");if(h3)h3.textContent=item.title;if(p)p.textContent=item.body;if(!card.querySelector(".ics-more-button")){const button=document.createElement("button");button.type="button";button.className="ics-more-button";button.textContent="Saiba mais";button.addEventListener("click",()=>{const open=card.classList.toggle("ics-global-open");button.setAttribute("aria-expanded",open?"true":"false")});button.setAttribute("aria-expanded","false");card.appendChild(button)}if(!card.querySelector(".ics-global-detail")){const detail=document.createElement("div");detail.className="ics-global-detail";detail.innerHTML='<div class="ics-global-images">'+item.images.map(src=>'<img src="'+src+'" alt="'+item.title+'">').join("")+'</div><p>'+item.detail+'</p>';card.appendChild(detail)}});[...section.querySelectorAll("a[href='/trabalho-global']")].forEach(a=>(a.closest(".text-center")||a).remove());[...section.querySelectorAll("h2")].filter(h=>has(h.innerText,["Parceria Internacional","International Partnership","Partenariat International","Alianza Internacional","Internationale Partnerschaft","Partnership Internazionale"])).forEach(h=>(h.closest(".max-w-4xl")||h).remove())};const fixMvvHero=()=>{const hero=byHeading(["Missão, Visão e Valores","Mission, Vision and Values","Mission, Vision et Valeurs","Misión, Visión y Valores","Mission, Vision und Werte","Missione, Visione e Valori"]);if(hero)hero.querySelectorAll("svg").forEach(svg=>svg.remove())};const fixMissionVision=()=>{[...document.querySelectorAll("h2")].filter(h=>has(h.innerText,["Nossa Missão","Nossa Visão","Our Mission","Our Vision","Notre Mission","Notre Vision","Nuestra Misión","Nuestra Visión","Unsere Mission","Unsere Vision","La Nostra Missione","La Nostra Visione"])).forEach(h=>{const row=h.closest(".flex.items-center");if(row){const svg=row.querySelector("svg");if(svg)svg.remove()}})};const fixValues=()=>{document.querySelectorAll(".values-constellation").forEach(el=>el.classList.add("ics-values-spaced"))};const fixYouTube=()=>{document.querySelectorAll(".youtube-hero h1").forEach(el=>{el.classList.add("ics-youtube-title")});document.querySelectorAll(".youtube-hero p").forEach(el=>{el.classList.add("ics-youtube-subtitle")})};const apply=()=>{ensureVideo();ensureGlobal();fixMvvHero();fixMissionVision();fixValues();fixYouTube()};const schedule=()=>{clearTimeout(window.__icsHomeAdjustTimer);window.__icsHomeAdjustTimer=setTimeout(apply,120)};window.__icsHomeApply=apply;document.addEventListener("DOMContentLoaded",schedule);new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});let tries=0;const interval=setInterval(()=>{apply();tries+=1;if(tries>24)clearInterval(interval)},250);setTimeout(apply,0);setTimeout(apply,700);schedule()})();`;

source = source.slice(0, hookIndex) + runtime + source.slice(hookIndex);

fs.writeFileSync(outputAssets, source);
fs.copyFileSync(outputAssets, outputDist);

const cssInput = path.join(root, "assets", "index-i18n-selector-d9754a4.css");
const cssOutputName = "index-home-mvv-youtube-3c9a71b.css";
const cssOutputAssets = path.join(root, "assets", cssOutputName);
const cssOutputDist = path.join(root, "dist", "assets", cssOutputName);
const cssAdditions = `
.ics-organization-video{width:min(860px,100%);margin:3rem auto 0;aspect-ratio:16/9;border-radius:8px;overflow:hidden;box-shadow:0 18px 45px rgba(17,24,39,.16);background:#111827}.ics-organization-video iframe{width:100%;height:100%;border:0;display:block}.ics-global-card{position:relative;overflow:hidden;border:1px solid rgba(249,115,22,.12);transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}.ics-global-card:hover{transform:translateY(-5px);box-shadow:0 18px 35px rgba(17,24,39,.15);border-color:rgba(249,115,22,.35)}.ics-global-card h3{text-transform:uppercase;letter-spacing:.04em}.ics-more-button{display:inline-flex;align-items:center;justify-content:center;margin-top:1.35rem;padding:.72rem 1.15rem;border-radius:6px;background:#f97316;color:#fff;font-weight:700;font-size:.9rem;line-height:1;transition:background .2s ease,transform .2s ease}.ics-more-button:hover{background:#ea580c;transform:translateY(-1px)}.ics-global-detail{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .32s ease,opacity .25s ease;margin-top:0}.ics-global-detail>*{overflow:hidden}.ics-global-open .ics-global-detail{grid-template-rows:1fr;opacity:1;margin-top:1.4rem}.ics-global-images{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:.65rem}.ics-global-images img{width:100%;height:120px;object-fit:cover;border-radius:6px;border:1px solid rgba(17,24,39,.08)}.ics-global-detail p{font-family:Georgia,serif;color:#4b5563;font-size:.95rem;line-height:1.55;margin-top:1rem}.ics-values-spaced{min-height:760px}.ics-values-spaced .values-geometry{top:160px;width:520px}.ics-youtube-title{font-family:Georgia,serif!important;font-weight:700!important}.ics-youtube-subtitle{font-family:Georgia,serif!important}@media (min-width:1024px){.ics-values-spaced .values-orbit-respeitar{top:0}.ics-values-spaced .values-orbit-transformar{top:155px;left:10px}.ics-values-spaced .values-orbit-coexistir{top:155px;right:10px}.ics-values-spaced .values-orbit-inspirar{top:350px;left:10px}.ics-values-spaced .values-orbit-compartilhar{top:350px;right:10px}.ics-values-spaced .values-orbit-entusiasmar{top:570px;left:80px}.ics-values-spaced .values-orbit-reconhecer{top:570px;right:80px}}@media (max-width:767px){.ics-organization-video{margin-top:2rem}.ics-global-images{grid-template-columns:1fr}.ics-global-images img{height:auto;max-height:260px}.ics-global-card h3{font-size:1.1rem}}
`;
const css = fs.readFileSync(cssInput, "utf8") + cssAdditions;
fs.writeFileSync(cssOutputAssets, css);
fs.copyFileSync(cssOutputAssets, cssOutputDist);

for (const htmlPath of [path.join(root, "index.html"), path.join(root, "dist", "index.html")]) {
  let html = fs.readFileSync(htmlPath, "utf8");
  html = html
    .replace(/(<meta name="deploy-revision" content=")[^"]*(" \/>)/, "$1home-mvv-youtube-2026-08-31$2")
    .replace(/\/assets\/index-[^"]+\.js/, `/assets/${outputName}`)
    .replace(/\/assets\/index-[^"]+\.css/, `/assets/${cssOutputName}`);
  fs.writeFileSync(htmlPath, html);
}

console.log(outputName);
