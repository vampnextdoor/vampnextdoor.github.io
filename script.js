/* =========================================================
   Lavanya R · portfolio
   Edit CONFIG and PROJECTS below to update the site.
   ========================================================= */

const CONFIG = {
  // Paste your LinkedIn profile URL here, e.g. "https://www.linkedin.com/in/your-handle/".
  // While it is empty, the LinkedIn links stay hidden.
  linkedin: "https://www.linkedin.com/in/lavanya-r05/",
  github: "https://github.com/vampnextdoor",
  email: "lavir2005@gmail.com",
};

const S = 'stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"';
const ART = {
  interview: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <rect x="22" y="30" width="70" height="56" rx="18" fill="#ffd66b" ${S}/>
    <rect x="34" y="42" width="46" height="30" rx="10" fill="#2b2820" ${S}/>
    <circle cx="48" cy="57" r="5" fill="#9be3c4"/><circle cx="66" cy="57" r="5" fill="#9be3c4"/>
    <path d="M57 30V18" ${S}/><circle cx="57" cy="14" r="6" fill="#ff5a36" ${S}/>
    <path d="M40 86v14h34V86" fill="#ffd66b" ${S}/>
    <path d="M108 26h60a12 12 0 0 1 12 12v16a12 12 0 0 1-12 12h-40l-14 10V66h-6a12 12 0 0 1-12-12V38a12 12 0 0 1 12-12z" fill="#fffaf0" ${S}/>
    <path d="M118 42h44M118 52h28" ${S}/>
    <path d="M112 102c6-14 10 14 16 0s10 14 16 0 10 14 16 0 10 14 16 0" ${S} fill="none"/>
    <circle cx="30" cy="118" r="5" fill="#c9b8ff" ${S}/><circle cx="52" cy="112" r="5" fill="#9be3c4" ${S}/><circle cx="74" cy="122" r="5" fill="#ff5a36" ${S}/>
    <path d="M35 117l12-4M57 113l12 8" ${S}/>
  </svg>`,
  snack: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <path d="M60 22h80l-6 14 8 84H58l8-84z" fill="#fffaf0" ${S}/>
    <path d="M60 22l6 14h68l6-14" fill="#ff5a36" ${S}/>
    <rect x="72" y="56" width="56" height="38" rx="8" fill="#9be3c4" ${S}/>
    <text x="100" y="82" text-anchor="middle" font-family="Anek Kannada, Noto Sans Kannada, sans-serif" font-weight="700" font-size="18" fill="#1d1b16">ತಿಂಡಿ</text>
    <circle cx="160" cy="104" r="14" fill="#ffd66b" ${S}/><text x="160" y="110" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="15" fill="#1d1b16">₹</text>
    <path d="M30 96c4-8 14-8 18 0-4 8-14 8-18 0z" fill="#ffd66b" ${S}/><path d="M24 60l6 4M172 46l-6 6M176 70h-8" ${S}/>
  </svg>`,
  scholar: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <path d="M36 54l60-26 60 26-60 26z" fill="#1d1b16" stroke="#1d1b16" stroke-width="4" stroke-linejoin="round"/>
    <path d="M60 66v26c0 10 72 10 72 0V66" fill="#fffaf0" ${S}/>
    <path d="M150 58v30" ${S}/><circle cx="150" cy="92" r="5" fill="#ff5a36" ${S}/>
    <path d="M128 94h46a10 10 0 0 1 10 10v14a10 10 0 0 1-10 10h-26l-12 8v-8h-8a10 10 0 0 1-10-10v-14a10 10 0 0 1 10-10z" fill="#ffd66b" ${S}/>
    <path d="M140 111h6M152 111h6M164 111h6" ${S}/>
    <text x="30" y="118" font-family="JetBrains Mono, monospace" font-weight="700" font-size="14" fill="#1d1b16">हि · ಕ · en</text>
  </svg>`,
  finance: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <path d="M40 26h100a14 14 0 0 1 14 14v38a14 14 0 0 1-14 14H82l-22 18V92H40a14 14 0 0 1-14-14V40a14 14 0 0 1 14-14z" fill="#fffaf0" ${S}/>
    <path d="M62 66l18-14 16 10 26-20" ${S} fill="none"/><path d="M110 42h12v12" ${S} fill="none"/>
    <path d="M158 100v16M168 92v32M178 102v12M148 104v8" ${S}/>
    <circle cx="160" cy="44" r="18" fill="#ffd66b" ${S}/><text x="160" y="51" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="19" fill="#1d1b16">₹</text>
  </svg>`,
  traffic: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <rect x="30" y="18" width="40" height="100" rx="14" fill="#1d1b16" stroke="#1d1b16" stroke-width="4"/>
    <circle cx="50" cy="42" r="10" fill="#ff5a36"/><circle cx="50" cy="68" r="10" fill="#ffd66b"/><circle cx="50" cy="94" r="10" fill="#9be3c4"/>
    <path d="M96 100L124 56l34 22 22-44" ${S} fill="none" stroke-dasharray="1 10"/>
    <path d="M96 100l40 10 44-76" ${S} fill="none"/>
    <circle cx="96" cy="100" r="9" fill="#fffaf0" ${S}/><circle cx="124" cy="56" r="8" fill="#fffaf0" ${S}/>
    <circle cx="158" cy="78" r="8" fill="#fffaf0" ${S}/><circle cx="136" cy="110" r="8" fill="#fffaf0" ${S}/>
    <circle cx="180" cy="34" r="10" fill="#ff5a36" ${S}/>
  </svg>`,
};

const PROJECTS = [
  {
    id: "interviewer", feat: true, art: "interview", bg: "var(--mint)", tilt: -1.2,
    title: "Agentic AI Interviewer", year: "2026", badge: "co-founded!",
    blurb: "An AI interviewer that holds realistic voice mock interviews. LLM agents adapt every question to your answers, using RAG over pgvector.",
    lede: "A mock-interview platform where an AI agent runs the whole interview: it asks a question, listens, decides what to probe next, then scores you. I co-founded and engineered it during my PlaceValue internship.",
    points: [
      "<b>Agentic AI:</b> autonomous LLM agent loops plan each turn of the interview and decide when to ask a follow-up question and when to move on.",
      "<b>RAG with pgvector:</b> vector embeddings of the role and the conversation so far are retrieved to generate context-aware, adaptive questions in real time.",
      "<b>Conversational memory</b> carries context across the whole session, so follow-up questions build on what the candidate actually said.",
      "<b>Voice AI pipeline:</b> Sarvam AI speech-to-text, Gemini, and OpenAI embeddings, all served through FastAPI.",
      "<b>Automated LLM evaluation:</b> structured LLM scoring turns each interview into personalised, rubric-based feedback for the candidate.",
    ],
    stack: ["Agentic AI", "RAG", "pgvector", "Gemini", "OpenAI embeddings", "Sarvam AI STT", "FastAPI", "Python"],
    links: [],
    note: "Built at PlaceValue.in.",
  },
  {
    id: "suvidha", art: "scholar", bg: "var(--sky)", tilt: 1.6,
    title: "Suvidha AI", year: "2026",
    blurb: "A multilingual LLM platform that matches students to the scholarships they're eligible for, and guides them through applying.",
    lede: "Scholarship information is scattered and hard to read, and it's rarely in your own language. Suvidha brings it together in one place and explains it.",
    points: [
      "<b>AI-driven eligibility matching</b> compares each scholarship against a student's academic profile and requirements.",
      "A <b>multilingual LLM assistant</b> gives personalised help with applications in the student's own language.",
      "One central platform for finding scholarships and applying, so students no longer have to search across many websites.",
    ],
    stack: ["LLM APIs", "NLP", "Next.js", "Node.js", "Supabase", "Python"],
    links: [],
  },
  {
    id: "finbuddy", art: "finance", bg: "var(--lilac)", tilt: -1.8,
    title: "FinBuddy", year: "2025",
    blurb: "A multimodal Gemini assistant that reads your screen and explains finance in your own language.",
    lede: "A multilingual AI financial assistant for people who find banking and investing websites confusing.",
    points: [
      "<b>Multimodal LLM:</b> you share a browser tab, Gemini analyses a screenshot of it, and explains what's on screen and what to click next.",
      "Multilingual chat with answers read aloud in the language you've selected.",
      "Includes a SIP calculator for regular and step-up plans, a market dashboard and a live business news feed.",
      "Email and password sign-up, with passwords hashed using bcrypt.",
    ],
    stack: ["Gemini API", "Multimodal AI", "Next.js 15", "TypeScript", "SQLite"],
    links: [{ label: "Code on GitHub ↗", href: "https://github.com/vampnextdoor/finbuddy" }],
  },
  {
    id: "thindi", feat: true, art: "snack", bg: "var(--butter)", tilt: 1.2,
    title: "Thindi Angadi", year: "2026", badge: "live!",
    blurb: "The shop, admin panel and payments behind thindiangadi.com, which brings Karnataka's regional snacks to Bengaluru.",
    lede: "A real online snack shop with real customers. I built the backend, the vendor dashboard and the wiring that connects the storefront to them.",
    points: [
      "Shop API covering products, cart pricing, delivery pincodes, orders, stock, likes, sign-ups and phone-code login.",
      "Razorpay payments, with the server-to-server webhook treated as the source of truth and a clearly labelled mock mode for testing before go-live.",
      "The server decides every price: the browser only sends slugs and quantities, and money is stored as integer paise.",
      "Vendor dashboard showing current, past and unpaid orders, restocking, sales analytics and delivery areas.",
      "Input validated with Zod, CORS limited to known sites, and rate limits on sensitive routes.",
      "Tested at four levels: unit, API, end-to-end with Playwright, and load tests with autocannon.",
    ],
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Zod", "Razorpay", "Playwright", "Vercel"],
    links: [{ label: "Visit thindiangadi.com ↗", href: "https://thindiangadi.com/" }],
    note: "The code is in a private repo.",
  },
  {
    id: "traffic", art: "traffic", bg: "var(--sky)", tilt: -1.4, wide: true,
    title: "Smart City Traffic", year: "2025",
    blurb: "Dijkstra-powered routing and a traffic control dashboard for a smart city.",
    lede: "A traffic operations console that finds the shortest path around congestion.",
    points: [
      "Live routing with Dijkstra's algorithm that suggests alternate routes around jams and roadworks.",
      "Traffic heatmap, signal control panel and analytics views.",
      "A separate emergency-vehicle page and a notification centre for alerts about accidents and road closures.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Radix UI", "Graph algorithms"],
    links: [{ label: "Code on GitHub ↗", href: "https://github.com/vampnextdoor/traffic-management" }],
  },
];

const VOCAB = [
  { group: "LLMs · agents · RAG", c: "var(--tomato)", toks: {
    "Agentic AI": "the AI Interviewer, where autonomous agent loops plan each turn of the interview",
    "LLM agents": "the AI Interviewer: decides on follow-up questions and when to move on",
    "RAG": "the AI Interviewer: retrieval over pgvector for context-aware questions",
    "pgvector": "vector search in Postgres for the AI Interviewer",
    "Vector embeddings": "OpenAI embeddings powering retrieval in the AI Interviewer",
    "Conversational memory": "keeps context across a whole interview session",
    "LLM evaluation": "structured LLM scoring for interview feedback, plus language-model evaluation at LogiScope",
    "Gemini": "the AI Interviewer and FinBuddy (multimodal)",
    "Voice AI / STT": "Sarvam AI speech-to-text in the interview pipeline",
    "Multimodal AI": "FinBuddy, where Gemini reads screenshots",
    "FastAPI": "serving the voice AI and evaluation pipeline",
  } },
  { group: "ML · NLP", c: "var(--mint)", toks: {
    "Machine Learning": "my AIML degree, every semester", "Scikit-learn": "ML models in coursework and experiments",
    "Pandas": "data wrangling for ML experiments", "NLP": "n-gram models, POS tagging and NER at LogiScope",
    "Transformers": "studying LLM architectures and fine-tuning at LogiScope",
    "N-gram models": "language models built with Apache OpenNLP at LogiScope", "Generative AI": "the AI Interviewer, Suvidha AI and FinBuddy",
    "Apache OpenNLP": "research internship at LogiScope", "NLTK": "text preprocessing experiments",
  } },
  { group: "languages", c: "var(--butter)", toks: {
    "Python": "the AI Interviewer (FastAPI), NLP research, Suvidha AI and 32 LeetCode problems",
    "TypeScript": "Thindi Angadi, FinBuddy and Smart City Traffic",
    "SQL": "Thindi Angadi (Postgres), pgvector and PlaceValue services",
    "JavaScript": "every frontend I've built", "C++": "DSA and coursework",
  } },
  { group: "web & backend", c: "var(--lilac)", toks: {
    "Next.js": "Thindi Angadi, FinBuddy, Suvidha AI and Smart City Traffic", "ASP.NET Core": "order, cart and payment microservices at PlaceValue",
    "EF Core": "data layer for the PlaceValue services", "Angular": "live-data dashboards at PlaceValue",
    "Node.js": "Suvidha AI and Thindi Angadi tooling", "REST APIs": "the Thindi Angadi shop API and PlaceValue services",
    "Microservices": "layered services with health checks at PlaceValue", "HTML/CSS": "this site, written by hand",
  } },
  { group: "data · cloud · ops", c: "var(--sky)", toks: {
    "PostgreSQL": "Thindi Angadi and PlaceValue", "MySQL": "relational database design in my DBMS coursework", "Supabase": "Suvidha AI",
    "Docker": "multi-service Compose with health checks at PlaceValue", "AWS": "RDS, VPC, IAM and Secrets Manager",
    "Azure AI": "AI service experiments", "GitHub Actions": "CI pipelines", "Vercel": "Thindi Angadi deploys",
  } },
  { group: "analytics", c: "var(--blush)", toks: {
    "Power BI": "dashboards and reporting", "Tableau": "data storytelling",
  } },
];

/* ---------- helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- theme ---------- */
const savedTheme = store.get("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
$("#themeBtn").addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme
    ? document.documentElement.dataset.theme === "dark"
    : matchMedia("(prefers-color-scheme: dark)").matches;
  const next = dark ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  store.set("theme", next);
  toast(next === "dark" ? "lights off. night mode 🌙" : "lights on! ☀️");
});

/* ---------- links ---------- */
if (CONFIG.linkedin) {
  const a = $("#linkedinLink"); a.href = CONFIG.linkedin; a.hidden = false;
}

/* ---------- projects ---------- */
const board = $("#board");
PROJECTS.forEach((p) => {
  const b = document.createElement("button");
  b.className = "proj" + (p.feat ? " proj--feat" : "") + (p.wide ? " proj--wide" : "");
  b.dataset.id = p.id;
  b.style.setProperty("--tilt", p.tilt + "deg");
  b.innerHTML = `
    ${p.feat ? '<span class="pin"></span>' : ""}
    ${p.badge ? `<span class="sticker">${p.badge}</span>` : ""}
    <div class="proj__art" style="background:${p.bg};color:#1d1b16">${ART[p.art]}</div>
    <div class="proj__meta"><span>${p.year}</span><span>${p.stack.slice(0, 3).join(" · ")}</span></div>
    <h3>${p.title}</h3>
    <p>${p.blurb}</p>
    <span class="proj__open">open →</span>`;
  b.addEventListener("click", () => openProject(p));
  board.insertBefore(b, $(".streak", board));
});

const modal = $("#modal");
function openProject(p) {
  $("#mArt").innerHTML = ART[p.art];
  $("#mArt").style.background = p.bg; $("#mArt").style.color = "#1d1b16";
  $("#mMeta").textContent = `${p.year} · ${p.stack[0]}`;
  $("#mTitle").textContent = p.title;
  $("#mLede").textContent = p.lede;
  $("#mList").innerHTML = p.points.map((x) => `<li>${x}</li>`).join("");
  $("#mTags").innerHTML = p.stack.map((x) => `<span>${x}</span>`).join("");
  $("#mLinks").innerHTML = p.links.map((l) => `<a class="btn btn--ink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")
    + (p.note ? `<span class="modal__note">🔒 ${p.note}</span>` : "");
  modal.showModal();
}
$("#mClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

/* ---------- streak ---------- */
const streak = $("#streak");
for (let i = 0; i < 32; i++) {
  const c = document.createElement("i");
  const r = (i * 37) % 7;
  c.className = r > 4 ? "l3" : r > 2 ? "l2" : "";
  c.style.animationDelay = i * 25 + "ms";
  streak.appendChild(c);
}

/* ---------- vocab ---------- */
const vocab = $("#vocab"), info = $("#tokinfo");
let tokId = 100;
VOCAB.forEach((g) => {
  const row = document.createElement("div");
  row.className = "vgroup";
  row.innerHTML = `<span class="vgroup__name">${g.group}</span>`;
  Object.entries(g.toks).forEach(([name, used]) => {
    const t = document.createElement("button");
    t.className = "tok"; t.style.setProperty("--c", g.c);
    t.innerHTML = `${name}<small>#${tokId++}</small>`;
    const show = () => {
      vocab.querySelectorAll(".tok.is-on").forEach((x) => x.classList.remove("is-on"));
      t.classList.add("is-on");
      info.innerHTML = `<span style="color:var(--mint)">&gt;</span> <b>${name}</b> → used in ${used}`;
    };
    t.addEventListener("mouseenter", show); t.addEventListener("focus", show); t.addEventListener("click", show);
    row.appendChild(t);
  });
  vocab.appendChild(row);
});

/* ---------- robot ---------- */
const bot = $("#bot"), eyes = $("#eyes"), bubble = $("#bubble");
const LINES = [
  "beep boop! I'm Bit. I help Lavanya debug. ✨",
  "fun fact: Lavanya's CGPA is 8.91. I'm still at 0.0 😔",
  "she built a whole snack shop. I'm not allowed to eat any. 🥲",
  "my loss is going down! wait, that's my battery.",
  "I ran RAG on Lavanya's resume. top result: 'hire her' 📎",
  "she built an AI that interviews people. I'm nervous it'll interview ME 😳",
  "try the >_ button up top. there's a secret!",
  "hire her pls, I need a bigger desk 🥺",
  "I tokenised your click: [CLS] hi [SEP]",
  "ok ok I'm ticklish, stop clicking!! 😂",
];
let li = 0, clicks = 0, bubbleTimer;
function say(text, ms = 4200) {
  bubble.hidden = false;
  bubble.textContent = text;
  bubble.style.animation = "none"; void bubble.offsetWidth; bubble.style.animation = "";
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(() => { bubble.hidden = true; }, ms);
}
say(LINES[0], 5000);
bot.addEventListener("click", () => {
  clicks++; li = (li + 1) % LINES.length;
  bot.classList.remove("is-happy"); void bot.getBBox(); bot.classList.add("is-happy");
  if (clicks === 10) { say("10 clicks?! you've unlocked confetti 🎉"); confetti(); }
  else say(LINES[li]);
});
if (!reduceMotion) {
  addEventListener("pointermove", (e) => {
    const r = bot.getBoundingClientRect();
    const cx = r.left + r.width * 0.42, cy = r.top + r.height * 0.35;
    const a = Math.atan2(e.clientY - cy, e.clientX - cx);
    const d = Math.min(1, Math.hypot(e.clientX - cx, e.clientY - cy) / 300);
    eyes.setAttribute("transform", `translate(${Math.cos(a) * 5 * d} ${Math.sin(a) * 4 * d})`);
  });
  (function blink() {
    setTimeout(() => { bot.classList.add("is-blink"); setTimeout(() => bot.classList.remove("is-blink"), 140); blink(); }, 2500 + Math.random() * 3000);
  })();
}

/* ---------- training bar + header ---------- */
const fill = $("#trainFill"), label = $("#trainLabel"), train = $(".train"), topBar = $(".top");
const navLinks = [...document.querySelectorAll(".top__nav a")];
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const p = max > 0 ? Math.min(1, scrollY / max) : 0;
  fill.style.width = p * 100 + "%";
  const epoch = Math.min(6, 1 + Math.floor(p * 6));
  const loss = (0.982 * Math.exp(-3.6 * p) + 0.012).toFixed(3);
  label.textContent = p > 0.995 ? "training complete ✓ · hire?" : `epoch ${epoch}/6 · loss ${loss}`;
  train.classList.toggle("is-on", scrollY > 80);
  topBar.classList.toggle("is-scrolled", scrollY > 10);
  let cur = null;
  navLinks.forEach((a) => { const s = $(a.getAttribute("href")); if (s && s.getBoundingClientRect().top < innerHeight * 0.4) cur = a; });
  navLinks.forEach((a) => a.classList.toggle("is-active", a === cur));
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* ---------- reveal on scroll ---------- */
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll(".section__head, .modelcard, .log__item, .proj, .streak, .vgroup, .cert, .contact__inner").forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = (el.classList.contains("proj") ? (i % 3) * 80 : 0) + "ms";
  io.observe(el);
});

/* ---------- toast ---------- */
const toastEl = $("#toast");
let toastTimer;
const MINI_BOT = `<svg width="28" height="28" viewBox="0 0 64 64"><rect x="8" y="14" width="48" height="40" rx="12" fill="#ffd66b" stroke="#1d1b16" stroke-width="4"/><circle cx="24" cy="34" r="5" fill="#1d1b16"/><circle cx="40" cy="34" r="5" fill="#1d1b16"/><path d="M32 14V6" stroke="#1d1b16" stroke-width="4"/><circle cx="32" cy="6" r="4" fill="#ff5a36"/></svg>`;
function toast(msg, ms = 3200) {
  toastEl.innerHTML = MINI_BOT + `<span>${msg}</span>`;
  toastEl.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), ms);
}
setTimeout(() => {
  if (!$("#term").hidden || modal.open) return;
  const touch = matchMedia("(pointer: coarse)").matches;
  toast(touch ? "psst… tap the >_ button up top for a secret terminal" : "psst… press ` (backtick) for a secret terminal", 5500);
}, 9000);

/* ---------- copy email ---------- */
$("#copyEmail").addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(CONFIG.email); toast("email copied! talk soon 💌"); }
  catch { location.href = "mailto:" + CONFIG.email; }
});

/* ---------- terminal ---------- */
const term = $("#term"), out = $("#termOut"), input = $("#termInput");
const hist = []; let hi = 0;
function print(html) { out.insertAdjacentHTML("beforeend", html + "\n"); out.scrollTop = out.scrollHeight; }
function openTerm() {
  term.hidden = false; input.focus();
  if (!out.textContent) print(`<span class="g">lavanya-os v4.0</span> <span class="d">(final year build)</span>\ntype <span class="c">help</span> to see what I can do.\n`);
}
function closeTerm() { term.hidden = true; }
const CMDS = {
  help: () => `<span class="c">whoami</span>      who's this?
<span class="c">ls</span>          list projects
<span class="c">open</span> &lt;name&gt; open a project (e.g. open thindi)
<span class="c">skills</span>      what my tokeniser knows
<span class="c">exp</span>         internships
<span class="c">contact</span>     how to reach me
<span class="c">theme</span>       toggle dark mode
<span class="c">sudo hire-me</span> 👀
<span class="c">clear</span> / <span class="c">exit</span>`,
  whoami: () => "Lavanya R, final-year B.E. AIML @ SJBIT, Bengaluru.\nagentic AI · RAG · NLP · backend. CGPA 8.91. powered by filter coffee.\nlooking for: AI/ML Engineer roles (2027).",
  ls: () => PROJECTS.map((p) => `<span class="g">${p.id.padEnd(10)}</span>${p.title} <span class="d">(${p.year})</span>`).join("\n"),
  skills: () => VOCAB.map((g) => `<span class="c">${g.group}</span>: ${Object.keys(g.toks).join(", ")}`).join("\n"),
  exp: () => `<span class="g">2026</span> SDE Intern @ PlaceValue.in: agentic AI interviewer (RAG, pgvector, voice AI), ASP.NET Core, Docker
<span class="g">2025</span> NLP Research Intern @ LogiScope: n-gram LMs, transformers, LLM fine-tuning research`,
  contact: () => `email   ${CONFIG.email}\ngithub  ${CONFIG.github}` + (CONFIG.linkedin ? `\nlinkedin ${CONFIG.linkedin}` : ""),
  theme: () => { $("#themeBtn").click(); return "toggled ✓"; },
  clear: () => { out.innerHTML = ""; return null; },
  exit: () => { closeTerm(); return null; },
  "sudo hire-me": () => { confetti(); setTimeout(() => say("SHE'S HIRED?! 🎉🎉"), 300); return `<span class="g">[sudo] permission granted.</span>\nexcellent decision. drafting offer letter… → ${CONFIG.email}`; },
  "hire-me": () => `<span class="r">permission denied.</span> try with sudo 😉`,
  sudo: () => "sudo what? 👀",
  ls_a: () => ".secret_snacks  .coffee_reserves  .unfinished_side_projects",
};
$("#termForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const raw = input.value.trim(); input.value = "";
  if (!raw) return;
  hist.push(raw); hi = hist.length;
  print(`<span class="g">$</span> ${raw.replace(/</g, "&lt;")}`);
  const cmd = raw.toLowerCase();
  let res;
  if (cmd.startsWith("open ") || cmd.startsWith("cat ")) {
    const q = cmd.split(" ")[1];
    const p = PROJECTS.find((x) => x.id.startsWith(q) || x.title.toLowerCase().includes(q));
    res = p ? (setTimeout(() => openProject(p), 250), `opening ${p.title}…`) : `<span class="r">no project matching "${q}"</span>, try ls`;
  } else if (cmd === "ls -a" || cmd === "ls -la") res = CMDS.ls_a();
  else if (CMDS[cmd]) res = CMDS[cmd]();
  else res = `<span class="r">command not found:</span> ${cmd.replace(/</g, "&lt;")}. try <span class="c">help</span>`;
  if (res) print(res + "\n");
});
input.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && hi > 0) { input.value = hist[--hi]; e.preventDefault(); }
  if (e.key === "ArrowDown") { hi = Math.min(hist.length, hi + 1); input.value = hist[hi] || ""; }
  if (e.key === "Escape") closeTerm();
});
$("#termBtn").addEventListener("click", () => (term.hidden ? openTerm() : closeTerm()));
$("#termClose").addEventListener("click", closeTerm);
addEventListener("keydown", (e) => {
  if (e.key === "`" && !e.target.closest("input, textarea")) { e.preventDefault(); term.hidden ? openTerm() : closeTerm(); }
});

/* ---------- confetti ---------- */
const cv = $("#confetti"), cx = cv.getContext("2d");
function confetti() {
  if (reduceMotion) return;
  cv.width = innerWidth * devicePixelRatio; cv.height = innerHeight * devicePixelRatio;
  cx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  const cols = ["#ff5a36", "#ffd66b", "#9be3c4", "#c9b8ff", "#9fd3ff"];
  const bits = Array.from({ length: 160 }, () => ({
    x: innerWidth / 2 + (Math.random() - 0.5) * 120, y: innerHeight * 0.6,
    vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 16 - 6,
    r: Math.random() * Math.PI, vr: (Math.random() - 0.5) * 0.4,
    w: 6 + Math.random() * 7, h: 4 + Math.random() * 5, c: cols[(Math.random() * cols.length) | 0],
  }));
  let t = 0;
  (function frame() {
    cx.clearRect(0, 0, innerWidth, innerHeight);
    bits.forEach((b) => {
      b.vy += 0.38; b.vx *= 0.99; b.x += b.vx; b.y += b.vy; b.r += b.vr;
      cx.save(); cx.translate(b.x, b.y); cx.rotate(b.r); cx.fillStyle = b.c; cx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h); cx.restore();
    });
    if (++t < 200) requestAnimationFrame(frame); else cx.clearRect(0, 0, innerWidth, innerHeight);
  })();
}

console.log("%c hi recruiter 👋 try the terminal: press ` ", "background:#ffd66b;color:#1d1b16;font:700 14px monospace;padding:6px 10px;border-radius:6px");
