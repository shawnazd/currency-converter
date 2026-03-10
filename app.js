/* ═══════════════════════════════════════════════
   FX Converter · app.js
   Auto-convert · Live rates · Quick pairs
═══════════════════════════════════════════════ */

// ── Currency data ──────────────────────────────
const CURRENCIES = {
  AED:{n:"UAE Dirham",s:"United Arab Emirates",f:"ae"},
  AFN:{n:"Afghan Afghani",s:"Afghanistan",f:"af"},
  ALL:{n:"Albanian Lek",s:"Albania",f:"al"},
  AMD:{n:"Armenian Dram",s:"Armenia",f:"am"},
  ANG:{n:"Antillean Guilder",s:"Netherlands Antilles",f:"an"},
  AOA:{n:"Angolan Kwanza",s:"Angola",f:"ao"},
  ARS:{n:"Argentine Peso",s:"Argentina",f:"ar"},
  AUD:{n:"Australian Dollar",s:"Australia",f:"au"},
  AWG:{n:"Aruban Florin",s:"Aruba",f:"aw"},
  AZN:{n:"Azerbaijani Manat",s:"Azerbaijan",f:"az"},
  BAM:{n:"Bosnian Mark",s:"Bosnia",f:"ba"},
  BBD:{n:"Barbadian Dollar",s:"Barbados",f:"bb"},
  BDT:{n:"Bangladeshi Taka",s:"Bangladesh",f:"bd"},
  BGN:{n:"Bulgarian Lev",s:"Bulgaria",f:"bg"},
  BHD:{n:"Bahraini Dinar",s:"Bahrain",f:"bh"},
  BIF:{n:"Burundian Franc",s:"Burundi",f:"bi"},
  BMD:{n:"Bermudian Dollar",s:"Bermuda",f:"bm"},
  BND:{n:"Brunei Dollar",s:"Brunei",f:"bn"},
  BOB:{n:"Boliviano",s:"Bolivia",f:"bo"},
  BRL:{n:"Brazilian Real",s:"Brazil",f:"br"},
  BSD:{n:"Bahamian Dollar",s:"Bahamas",f:"bs"},
  BTN:{n:"Bhutanese Ngultrum",s:"Bhutan",f:"bt"},
  BWP:{n:"Botswana Pula",s:"Botswana",f:"bw"},
  BYN:{n:"Belarusian Ruble",s:"Belarus",f:"by"},
  BZD:{n:"Belize Dollar",s:"Belize",f:"bz"},
  CAD:{n:"Canadian Dollar",s:"Canada",f:"ca"},
  CDF:{n:"Congolese Franc",s:"Congo",f:"cd"},
  CHF:{n:"Swiss Franc",s:"Switzerland",f:"ch"},
  CLP:{n:"Chilean Peso",s:"Chile",f:"cl"},
  CNY:{n:"Chinese Yuan",s:"China",f:"cn"},
  COP:{n:"Colombian Peso",s:"Colombia",f:"co"},
  CRC:{n:"Costa Rican Colón",s:"Costa Rica",f:"cr"},
  CUP:{n:"Cuban Peso",s:"Cuba",f:"cu"},
  CVE:{n:"Cape Verdean Escudo",s:"Cape Verde",f:"cv"},
  CZK:{n:"Czech Koruna",s:"Czech Republic",f:"cz"},
  DJF:{n:"Djiboutian Franc",s:"Djibouti",f:"dj"},
  DKK:{n:"Danish Krone",s:"Denmark",f:"dk"},
  DOP:{n:"Dominican Peso",s:"Dominican Republic",f:"do"},
  DZD:{n:"Algerian Dinar",s:"Algeria",f:"dz"},
  EGP:{n:"Egyptian Pound",s:"Egypt",f:"eg"},
  ETB:{n:"Ethiopian Birr",s:"Ethiopia",f:"et"},
  EUR:{n:"Euro",s:"European Union",f:"eu"},
  FJD:{n:"Fijian Dollar",s:"Fiji",f:"fj"},
  GBP:{n:"British Pound",s:"United Kingdom",f:"gb"},
  GEL:{n:"Georgian Lari",s:"Georgia",f:"ge"},
  GHS:{n:"Ghanaian Cedi",s:"Ghana",f:"gh"},
  GTQ:{n:"Guatemalan Quetzal",s:"Guatemala",f:"gt"},
  GYD:{n:"Guyanese Dollar",s:"Guyana",f:"gy"},
  HKD:{n:"Hong Kong Dollar",s:"Hong Kong",f:"hk"},
  HNL:{n:"Honduran Lempira",s:"Honduras",f:"hn"},
  HTG:{n:"Haitian Gourde",s:"Haiti",f:"ht"},
  HUF:{n:"Hungarian Forint",s:"Hungary",f:"hu"},
  IDR:{n:"Indonesian Rupiah",s:"Indonesia",f:"id"},
  ILS:{n:"Israeli Shekel",s:"Israel",f:"il"},
  INR:{n:"Indian Rupee",s:"India",f:"in"},
  IQD:{n:"Iraqi Dinar",s:"Iraq",f:"iq"},
  ISK:{n:"Icelandic Króna",s:"Iceland",f:"is"},
  JMD:{n:"Jamaican Dollar",s:"Jamaica",f:"jm"},
  JOD:{n:"Jordanian Dinar",s:"Jordan",f:"jo"},
  JPY:{n:"Japanese Yen",s:"Japan",f:"jp"},
  KES:{n:"Kenyan Shilling",s:"Kenya",f:"ke"},
  KGS:{n:"Kyrgyzstani Som",s:"Kyrgyzstan",f:"kg"},
  KHR:{n:"Cambodian Riel",s:"Cambodia",f:"kh"},
  KRW:{n:"South Korean Won",s:"South Korea",f:"kr"},
  KWD:{n:"Kuwaiti Dinar",s:"Kuwait",f:"kw"},
  KZT:{n:"Kazakhstani Tenge",s:"Kazakhstan",f:"kz"},
  LAK:{n:"Lao Kip",s:"Laos",f:"la"},
  LBP:{n:"Lebanese Pound",s:"Lebanon",f:"lb"},
  LKR:{n:"Sri Lankan Rupee",s:"Sri Lanka",f:"lk"},
  LYD:{n:"Libyan Dinar",s:"Libya",f:"ly"},
  MAD:{n:"Moroccan Dirham",s:"Morocco",f:"ma"},
  MDL:{n:"Moldovan Leu",s:"Moldova",f:"md"},
  MGA:{n:"Malagasy Ariary",s:"Madagascar",f:"mg"},
  MKD:{n:"Macedonian Denar",s:"North Macedonia",f:"mk"},
  MMK:{n:"Myanmar Kyat",s:"Myanmar",f:"mm"},
  MNT:{n:"Mongolian Tögrög",s:"Mongolia",f:"mn"},
  MXN:{n:"Mexican Peso",s:"Mexico",f:"mx"},
  MYR:{n:"Malaysian Ringgit",s:"Malaysia",f:"my"},
  NGN:{n:"Nigerian Naira",s:"Nigeria",f:"ng"},
  NOK:{n:"Norwegian Krone",s:"Norway",f:"no"},
  NPR:{n:"Nepalese Rupee",s:"Nepal",f:"np"},
  NZD:{n:"New Zealand Dollar",s:"New Zealand",f:"nz"},
  OMR:{n:"Omani Rial",s:"Oman",f:"om"},
  PAB:{n:"Panamanian Balboa",s:"Panama",f:"pa"},
  PEN:{n:"Peruvian Sol",s:"Peru",f:"pe"},
  PHP:{n:"Philippine Peso",s:"Philippines",f:"ph"},
  PKR:{n:"Pakistani Rupee",s:"Pakistan",f:"pk"},
  PLN:{n:"Polish Złoty",s:"Poland",f:"pl"},
  PYG:{n:"Paraguayan Guaraní",s:"Paraguay",f:"py"},
  QAR:{n:"Qatari Riyal",s:"Qatar",f:"qa"},
  RON:{n:"Romanian Leu",s:"Romania",f:"ro"},
  RSD:{n:"Serbian Dinar",s:"Serbia",f:"rs"},
  RUB:{n:"Russian Ruble",s:"Russia",f:"ru"},
  RWF:{n:"Rwandan Franc",s:"Rwanda",f:"rw"},
  SAR:{n:"Saudi Riyal",s:"Saudi Arabia",f:"sa"},
  SEK:{n:"Swedish Krona",s:"Sweden",f:"se"},
  SGD:{n:"Singapore Dollar",s:"Singapore",f:"sg"},
  SOS:{n:"Somali Shilling",s:"Somalia",f:"so"},
  SRD:{n:"Surinamese Dollar",s:"Suriname",f:"sr"},
  THB:{n:"Thai Baht",s:"Thailand",f:"th"},
  TND:{n:"Tunisian Dinar",s:"Tunisia",f:"tn"},
  TRY:{n:"Turkish Lira",s:"Turkey",f:"tr"},
  TTD:{n:"T&T Dollar",s:"Trinidad & Tobago",f:"tt"},
  TWD:{n:"New Taiwan Dollar",s:"Taiwan",f:"tw"},
  TZS:{n:"Tanzanian Shilling",s:"Tanzania",f:"tz"},
  UAH:{n:"Ukrainian Hryvnia",s:"Ukraine",f:"ua"},
  UGX:{n:"Ugandan Shilling",s:"Uganda",f:"ug"},
  USD:{n:"US Dollar",s:"United States",f:"us"},
  UYU:{n:"Uruguayan Peso",s:"Uruguay",f:"uy"},
  UZS:{n:"Uzbekistani Som",s:"Uzbekistan",f:"uz"},
  VND:{n:"Vietnamese Dong",s:"Vietnam",f:"vn"},
  YER:{n:"Yemeni Rial",s:"Yemen",f:"ye"},
  ZAR:{n:"South African Rand",s:"South Africa",f:"za"},
  ZMW:{n:"Zambian Kwacha",s:"Zambia",f:"zm"},
};

const ZERO_DEC = new Set(["JPY","KRW","IDR","VND","CLP","PYG","UGX","RWF","BIF","GNF","MMK"]);
const QUICK_PAIRS = [["USD","EUR"],["USD","GBP"],["USD","JPY"],["USD","CAD"],["EUR","GBP"],["GBP","INR"]];

const flag = c => `https://flagcdn.com/w40/${CURRENCIES[c]?.f ?? "un"}.png`;
const $    = id => document.getElementById(id);

function fmt(n, c) {
  if (!isFinite(n)) return "—";
  const d = ZERO_DEC.has(c) ? 0 : 2;
  return n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
}

// ── State ──────────────────────────────────────
let fromCur   = "USD";
let toCur     = "EUR";
let rates     = {};
let openType  = null;

// ── Sync selectors ──────────────────────────────
function syncUI() {
  const fd = CURRENCIES[fromCur] || CURRENCIES.USD;
  const td = CURRENCIES[toCur]   || CURRENCIES.EUR;

  $("from-flag").src              = flag(fromCur);
  $("from-flag").alt              = fromCur;
  $("from-code").textContent      = fromCur;
  $("from-country").textContent   = fd.s;
  $("from-cur-tag").textContent   = fromCur;
  $("from-full-name").textContent = fd.n + " · " + fd.s;

  $("to-flag").src              = flag(toCur);
  $("to-flag").alt              = toCur;
  $("to-code").textContent      = toCur;
  $("to-country").textContent   = td.s;
  $("to-cur-tag").textContent   = toCur;
  $("to-full-name").textContent = td.n + " · " + td.s;
}

// ── Convert (from → to) ─────────────────────────
function convert() {
  const a   = parseFloat($("amount").value);
  const out = $("result");

  if (!a || isNaN(a) || a <= 0 || !rates[toCur]) {
    out.value = "";
    if (rates[toCur]) {
      $("rate-val").innerHTML = `1 ${fromCur} = <span>${fmt(rates[toCur], toCur)} ${toCur}</span>`;
    } else {
      $("rate-val").innerHTML = "Enter an amount above";
    }
    return;
  }

  const rate   = rates[toCur];
  const result = a * rate;
  out.value = fmt(result, toCur).replace(/,/g, "");
  $("rate-val").innerHTML = `1 ${fromCur} = <span>${fmt(rate, toCur)} ${toCur}</span>`;
}

// ── Reverse convert (to → from) ─────────────────
function reverseConvert() {
  const a   = parseFloat($("result").value);
  const inp = $("amount");

  if (!a || isNaN(a) || a <= 0 || !rates[toCur]) {
    inp.value = "";
    return;
  }

  const rate    = rates[toCur];
  const reversed = a / rate;
  inp.value = fmt(reversed, fromCur).replace(/,/g, "");
  $("rate-val").innerHTML = `1 ${fromCur} = <span>${fmt(rate, toCur)} ${toCur}</span>`;
}

// ── Fetch rates ─────────────────────────────────
async function fetchRates() {
  $("spinner").classList.remove("hidden");
  $("live-lbl").textContent  = "Syncing…";
  $("rate-val").innerHTML    = "Fetching rates…";

  try {
    const res  = await fetch(`https://open.er-api.com/v6/latest/${fromCur}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.result !== "success") throw new Error("API error");

    rates = data.rates;

    const dt = new Date(data.time_last_update_utc);
    $("rate-date").textContent = dt.toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric"
    });

    $("live-lbl").textContent = "Live";
    $("result").removeAttribute("readonly");
    convert();
    buildQuickPairs();

  } catch (err) {
    console.warn("Rate fetch failed:", err);
    $("live-lbl").textContent  = "Offline";
    $("rate-val").innerHTML    = "⚠️ Could not load rates. Check connection.";
  } finally {
    $("spinner").classList.add("hidden");
  }
}

// ── Quick pairs ─────────────────────────────────
function buildQuickPairs() {
  const grid = $("quick-grid");
  grid.innerHTML = "";

  QUICK_PAIRS.forEach(([a, b]) => {
    const rate = rates[b] ? fmt(rates[b], b) : "—";
    const btn  = document.createElement("button");
    btn.className = "quick-btn";
    btn.setAttribute("aria-label", `Switch to ${a} to ${b}`);
    btn.innerHTML = `
      <div class="quick-flags">
        <img src="${flag(a)}" alt="${a}" width="24" height="15" loading="lazy">
        <img src="${flag(b)}" alt="${b}" width="24" height="15" loading="lazy">
      </div>
      <span class="quick-pair">${a} / ${b}</span>
      <span class="quick-rate">1 ${a} = ${rate} ${b}</span>
    `;
    btn.addEventListener("click", () => {
      fromCur = a;
      toCur   = b;
      syncUI();
      fetchRates();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    grid.appendChild(btn);
  });
}

// ── Build dropdown list ─────────────────────────
function buildList(ulEl, type, filter = "") {
  ulEl.innerHTML = "";
  const sel  = type === "from" ? fromCur : toCur;
  const q    = filter.toUpperCase().trim();

  const keys = Object.keys(CURRENCIES).filter(c =>
    !q ||
    c.startsWith(q) ||
    CURRENCIES[c].n.toUpperCase().includes(q) ||
    CURRENCIES[c].s.toUpperCase().includes(q)
  );

  if (keys.length === 0) {
    const li = document.createElement("li");
    li.style.cssText = "padding:1.1rem;text-align:center;color:#A5B4FC;font-size:.82rem;font-weight:600";
    li.textContent = "No results found";
    ulEl.appendChild(li);
    return;
  }

  keys.forEach(code => {
    const d  = CURRENCIES[code];
    const li = document.createElement("li");
    li.className = "dd-li" + (code === sel ? " on" : "");
    li.setAttribute("role", "option");
    li.setAttribute("aria-selected", code === sel ? "true" : "false");
    li.innerHTML = `
      <img src="${flag(code)}" alt="${code}" width="26" height="17" loading="lazy">
      <span class="di-code">${code}</span>
      <span class="di-name">${d.s}</span>
    `;
    li.addEventListener("mousedown", e => {
      e.preventDefault();
      if (type === "from") { fromCur = code; fetchRates(); }
      else                 { toCur   = code; convert(); }
      syncUI();
      closeDD();
    });
    ulEl.appendChild(li);
  });
}

// ── Dropdown open / close ───────────────────────
function openDD(type) {
  if (openType === type) { closeDD(); return; }
  closeDD();

  openType = type;
  $(`${type}-btn`).classList.add("is-open");
  $(`${type}-btn`).setAttribute("aria-expanded", "true");
  $(`${type}-dd`).classList.add("open");

  buildList($(`${type}-ul`), type);
  $(`${type}-search`).value = "";
  requestAnimationFrame(() => $(`${type}-search`).focus());
}

function closeDD() {
  if (!openType) return;
  $(`${openType}-btn`).classList.remove("is-open");
  $(`${openType}-btn`).setAttribute("aria-expanded", "false");
  $(`${openType}-dd`).classList.remove("open");
  openType = null;
}

// ── Event listeners ─────────────────────────────
$("from-btn").addEventListener("click", () => openDD("from"));
$("to-btn").addEventListener("click",   () => openDD("to"));

// Keyboard support for pills
[$("from-btn"), $("to-btn")].forEach((el, i) => {
  el.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDD(i === 0 ? "from" : "to");
    }
    if (e.key === "Escape") closeDD();
  });
});

// Search filters
$("from-search").addEventListener("input", e => buildList($("from-ul"), "from", e.target.value));
$("to-search").addEventListener("input",   e => buildList($("to-ul"),   "to",   e.target.value));

// Close on outside click
document.addEventListener("mousedown", e => {
  if (!e.target.closest(".panel") && !e.target.closest(".dd")) closeDD();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeDD();
});

// Swap button
$("swap-btn").addEventListener("click", () => {
  [fromCur, toCur] = [toCur, fromCur];
  syncUI();
  fetchRates();
});

// Amount input → convert forward
$("amount").addEventListener("input", () => {
  $("result").removeEventListener("input", reverseConvert);
  convert();
  setTimeout(() => $("result").addEventListener("input", reverseConvert), 0);
});
$("amount").addEventListener("focus", () => $("amount").select());

// Result input → convert backward
$("result").addEventListener("input", () => {
  $("amount").removeEventListener("input", convert);
  reverseConvert();
  setTimeout(() => $("amount").addEventListener("input", convert), 0);
});
$("result").addEventListener("focus", () => $("result").select());

// ── Init ────────────────────────────────────────
syncUI();
fetchRates();