/* ══════════════════════════════════════════
   Currency Converter  ·  app.js
   Two-way input · Live rates · No flicker
══════════════════════════════════════════ */

// ── Currency data ──────────────────────────
const C = {
  AED:{n:"UAE Dirham",s:"United Arab Emirates",f:"ae"},
  AFN:{n:"Afghan Afghani",s:"Afghanistan",f:"af"},
  ALL:{n:"Albanian Lek",s:"Albania",f:"al"},
  AMD:{n:"Armenian Dram",s:"Armenia",f:"am"},
  ANG:{n:"Antillean Guilder",s:"Curaçao / Sint Maarten",f:"cw"},
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
  ERN:{n:"Eritrean Nakfa",s:"Eritrea",f:"er"},
  ETB:{n:"Ethiopian Birr",s:"Ethiopia",f:"et"},
  EUR:{n:"Euro",s:"European Union",f:"eu"},
  FJD:{n:"Fijian Dollar",s:"Fiji",f:"fj"},
  FKP:{n:"Falkland Islands Pound",s:"Falkland Islands",f:"fk"},
  GBP:{n:"British Pound",s:"United Kingdom",f:"gb"},
  GEL:{n:"Georgian Lari",s:"Georgia",f:"ge"},
  GHS:{n:"Ghanaian Cedi",s:"Ghana",f:"gh"},
  GIP:{n:"Gibraltar Pound",s:"Gibraltar",f:"gi"},
  GMD:{n:"Gambian Dalasi",s:"Gambia",f:"gm"},
  GNF:{n:"Guinean Franc",s:"Guinea",f:"gn"},
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
  KMF:{n:"Comorian Franc",s:"Comoros",f:"km"},
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
  MOP:{n:"Macanese Pataca",s:"Macau",f:"mo"},
  MRU:{n:"Mauritanian Ouguiya",s:"Mauritania",f:"mr"},
  MUR:{n:"Mauritian Rupee",s:"Mauritius",f:"mu"},
  MVR:{n:"Maldivian Rufiyaa",s:"Maldives",f:"mv"},
  MWK:{n:"Malawian Kwacha",s:"Malawi",f:"mw"},
  MXN:{n:"Mexican Peso",s:"Mexico",f:"mx"},
  MYR:{n:"Malaysian Ringgit",s:"Malaysia",f:"my"},
  MZN:{n:"Mozambican Metical",s:"Mozambique",f:"mz"},
  NAD:{n:"Namibian Dollar",s:"Namibia",f:"na"},
  NGN:{n:"Nigerian Naira",s:"Nigeria",f:"ng"},
  NOK:{n:"Norwegian Krone",s:"Norway",f:"no"},
  NPR:{n:"Nepalese Rupee",s:"Nepal",f:"np"},
  NZD:{n:"New Zealand Dollar",s:"New Zealand",f:"nz"},
  OMR:{n:"Omani Rial",s:"Oman",f:"om"},
  PAB:{n:"Panamanian Balboa",s:"Panama",f:"pa"},
  PEN:{n:"Peruvian Sol",s:"Peru",f:"pe"},
  PGK:{n:"Papua New Guinean Kina",s:"Papua New Guinea",f:"pg"},
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
  SCR:{n:"Seychellois Rupee",s:"Seychelles",f:"sc"},
  SDG:{n:"Sudanese Pound",s:"Sudan",f:"sd"},
  SEK:{n:"Swedish Krona",s:"Sweden",f:"se"},
  SGD:{n:"Singapore Dollar",s:"Singapore",f:"sg"},
  SHP:{n:"Saint Helena Pound",s:"Saint Helena",f:"sh"},
  SLL:{n:"Sierra Leonean Leone",s:"Sierra Leone",f:"sl"},
  SOS:{n:"Somali Shilling",s:"Somalia",f:"so"},
  SRD:{n:"Surinamese Dollar",s:"Suriname",f:"sr"},
  STN:{n:"São Tomé & Príncipe Dobra",s:"São Tomé & Príncipe",f:"st"},
  SZL:{n:"Swazi Lilangeni",s:"Eswatini",f:"sz"},
  THB:{n:"Thai Baht",s:"Thailand",f:"th"},
  TJS:{n:"Tajikistani Somoni",s:"Tajikistan",f:"tj"},
  TMT:{n:"Turkmenistani Manat",s:"Turkmenistan",f:"tm"},
  TND:{n:"Tunisian Dinar",s:"Tunisia",f:"tn"},
  TOP:{n:"Tongan Paʻanga",s:"Tonga",f:"to"},
  TRY:{n:"Turkish Lira",s:"Turkey",f:"tr"},
  TTD:{n:"T&T Dollar",s:"Trinidad & Tobago",f:"tt"},
  TWD:{n:"New Taiwan Dollar",s:"Taiwan",f:"tw"},
  TZS:{n:"Tanzanian Shilling",s:"Tanzania",f:"tz"},
  UAH:{n:"Ukrainian Hryvnia",s:"Ukraine",f:"ua"},
  UGX:{n:"Ugandan Shilling",s:"Uganda",f:"ug"},
  USD:{n:"US Dollar",s:"United States",f:"us"},
  UYU:{n:"Uruguayan Peso",s:"Uruguay",f:"uy"},
  UZS:{n:"Uzbekistani Som",s:"Uzbekistan",f:"uz"},
  VES:{n:"Venezuelan Bolívar",s:"Venezuela",f:"ve"},
  VND:{n:"Vietnamese Dong",s:"Vietnam",f:"vn"},
  VUV:{n:"Vanuatu Vatu",s:"Vanuatu",f:"vu"},
  WST:{n:"Samoan Tālā",s:"Samoa",f:"ws"},
  XAF:{n:"Central African CFA Franc",s:"Central Africa",f:"cm"},
  XCD:{n:"East Caribbean Dollar",s:"East Caribbean",f:"ag"},
  XOF:{n:"West African CFA Franc",s:"West Africa",f:"sn"},
  XPF:{n:"CFP Franc",s:"French Polynesia",f:"pf"},
  YER:{n:"Yemeni Rial",s:"Yemen",f:"ye"},
  ZAR:{n:"South African Rand",s:"South Africa",f:"za"},
  ZMW:{n:"Zambian Kwacha",s:"Zambia",f:"zm"},
  ZWL:{n:"Zimbabwean Dollar",s:"Zimbabwe",f:"zw"},
};

const ZERO = new Set(["JPY","KRW","IDR","VND","CLP","PYG","UGX","RWF","BIF","GNF","MMK"]);
const flag = code => `https://flagcdn.com/w40/${C[code]?.f ?? "un"}.png`;
const $    = id   => document.getElementById(id);

function fmt(n, cur) {
  if (!isFinite(n)) return "";
  const d = ZERO.has(cur) ? 0 : 2;
  return n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
}
function fmtRaw(n, cur) {
  // no commas — for setting input .value
  if (!isFinite(n)) return "";
  const d = ZERO.has(cur) ? 0 : 4;
  return parseFloat(n.toFixed(d)).toString();
}

// ── State ──────────────────────────────────
let fromCur  = "USD";
let toCur    = "EUR";
let rates    = {};
let openDD   = null;
// Track which input the user is actively typing in
// so we don't create infinite loops
let activeInput = "from"; // "from" | "to"

// ── Sync selectors & labels ─────────────────
function syncUI() {
  const fd = C[fromCur];
  const td = C[toCur];

  $("from-flag").src          = flag(fromCur);
  $("from-flag").alt          = fromCur;
  $("from-code").textContent  = fromCur;
  $("from-name").textContent  = fd.s;
  $("from-cur-label").textContent = fd.n;

  $("to-flag").src          = flag(toCur);
  $("to-flag").alt          = toCur;
  $("to-code").textContent  = toCur;
  $("to-name").textContent  = td.s;
  $("to-cur-label").textContent = td.n;

  // Swap button tooltip — always shows correct direction
  const tip = `Swap: ${fromCur} ⇄ ${toCur}`;
  $("swap-btn").setAttribute("title", tip);
}

// ── Rate display ────────────────────────────
function updateRateBar() {
  if (!rates[toCur]) return;
  const r = rates[toCur];
  $("rate-val").innerHTML = `1 ${fromCur} = <b>${fmt(r, toCur)} ${toCur}</b>`;
}

// ── Convert forward: amount → result ────────
function convertForward() {
  const a = parseFloat($("amount").value);
  if (!a || isNaN(a) || a <= 0 || !rates[toCur]) {
    $("result").value = "";
    return;
  }
  $("result").value = fmtRaw(a * rates[toCur], toCur);
  updateRateBar();
}

// ── Convert backward: result → amount ───────
function convertBackward() {
  const r = parseFloat($("result").value);
  if (!r || isNaN(r) || r <= 0 || !rates[toCur]) {
    $("amount").value = "";
    return;
  }
  $("amount").value = fmtRaw(r / rates[toCur], fromCur);
  updateRateBar();
}

// ── Fetch rates from API ────────────────────
async function fetchRates() {
  $("spinner").classList.remove("hidden");
  // Don't touch the live badge dot at all — it runs on pure CSS animation
  $("live-lbl").textContent = "Live";
  $("rate-val").innerHTML   = "Loading…";

  try {
    const res  = await fetch(`https://open.er-api.com/v6/latest/${fromCur}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.result !== "success") throw new Error("API error");

    rates = data.rates;

    // Update date
    const dt = new Date(data.time_last_update_utc);
    $("rate-date").textContent = dt.toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric"
    });

    updateRateBar();

    // Convert whichever side was last active
    if (activeInput === "from") convertForward();
    else convertBackward();

  } catch (err) {
    console.warn(err);
    $("live-lbl").textContent = "Offline";
    $("rate-val").innerHTML   = "⚠️ Could not load rates";
  } finally {
    $("spinner").classList.add("hidden");
  }
}

// ── Build dropdown ──────────────────────────
function buildDropdown(listEl, type, q = "") {
  listEl.innerHTML = "";
  const sel = type === "from" ? fromCur : toCur;
  const uq  = q.toUpperCase().trim();

  const keys = Object.keys(C).filter(code =>
    !uq ||
    code.startsWith(uq) ||
    C[code].n.toUpperCase().includes(uq) ||
    C[code].s.toUpperCase().includes(uq)
  );

  if (!keys.length) {
    const li = document.createElement("li");
    Object.assign(li.style, { padding: "1rem", textAlign: "center", color: "#a5b4fc", fontSize: ".82rem", fontWeight: "600" });
    li.textContent = "No results found";
    listEl.appendChild(li);
    return;
  }

  keys.forEach(code => {
    const li = document.createElement("li");
    li.className = "dd-item" + (code === sel ? " active" : "");
    li.innerHTML = `
      <img src="${flag(code)}" alt="${code}" width="25" height="16" loading="lazy">
      <span class="di-code">${code}</span>
      <span class="di-name">${C[code].s}</span>
    `;
    li.addEventListener("mousedown", e => {
      e.preventDefault();
      if (type === "from") {
        fromCur = code;
        syncUI();
        fetchRates();
      } else {
        toCur = code;
        syncUI();
        updateRateBar();
        if (activeInput === "from") convertForward();
        else convertBackward();
      }
      closeDropdown();
    });
    listEl.appendChild(li);
  });
}

// ── Open / close dropdown ───────────────────
function openDropdown(type) {
  if (openDD === type) { closeDropdown(); return; }
  closeDropdown();

  openDD = type;
  $(`${type}-btn`).classList.add("open");
  $(`${type}-btn`).setAttribute("aria-expanded", "true");
  $(`${type}-dd`).classList.add("open");

  $(`${type}-search`).value = "";
  buildDropdown($(`${type}-list`), type);
  requestAnimationFrame(() => $(`${type}-search`).focus());
}

function closeDropdown() {
  if (!openDD) return;
  $(`${openDD}-btn`).classList.remove("open");
  $(`${openDD}-btn`).setAttribute("aria-expanded", "false");
  $(`${openDD}-dd`).classList.remove("open");
  openDD = null;
}

// ── Events ──────────────────────────────────
// Currency selectors
$("from-btn").addEventListener("click", () => openDropdown("from"));
$("to-btn").addEventListener("click",   () => openDropdown("to"));

[$("from-btn"), $("to-btn")].forEach((el, i) => {
  el.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDropdown(i === 0 ? "from" : "to"); }
    if (e.key === "Escape") closeDropdown();
  });
});

// Search inputs
$("from-search").addEventListener("input", e => buildDropdown($("from-list"), "from", e.target.value));
$("to-search").addEventListener("input",   e => buildDropdown($("to-list"),   "to",   e.target.value));

// Close dropdown on outside click
document.addEventListener("mousedown", e => {
  if (!e.target.closest(".panel") && !e.target.closest(".dropdown")) closeDropdown();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDropdown(); });

// ── SWAP ────────────────────────────────────
$("swap-btn").addEventListener("click", () => {
  // Save the current "from" amount before swap
  const currentAmount = parseFloat($("amount").value) || 1;

  // Swap currencies
  [fromCur, toCur] = [toCur, fromCur];
  syncUI();

  // Reset: put the original amount back, clear result
  $("amount").value = currentAmount;
  $("result").value = "";
  activeInput = "from";

  // Fetch fresh rates for new fromCur, then convert
  fetchRates();
});

// ── Amount input (You Send) ─────────────────
$("amount").addEventListener("focus", () => {
  activeInput = "from";
  $("amount").select();
});
$("amount").addEventListener("input", () => {
  activeInput = "from";
  convertForward();
});

// ── Result input (You Receive) ──────────────
$("result").addEventListener("focus", () => {
  activeInput = "to";
  $("result").select();
});
$("result").addEventListener("input", () => {
  activeInput = "to";
  convertBackward();
});

// ── Init ────────────────────────────────────
syncUI();
fetchRates();