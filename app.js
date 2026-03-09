/* ═══════════════════════════════════════════════════════════
   Currency Converter · app.js
   ═══════════════════════════════════════════════════════════ */

/* ─── Currency Data ─────────────────────────────────────────── */
const CURRENCIES = {
    "AED": { name: "UAE",              flag: "ae" },
    "AFN": { name: "Afghanistan",      flag: "af" },
    "ALL": { name: "Albania",          flag: "al" },
    "AMD": { name: "Armenia",          flag: "am" },
    "ANG": { name: "Neth. Antilles",   flag: "an" },
    "AOA": { name: "Angola",           flag: "ao" },
    "ARS": { name: "Argentina",        flag: "ar" },
    "AUD": { name: "Australia",        flag: "au" },
    "AWG": { name: "Aruba",            flag: "aw" },
    "AZN": { name: "Azerbaijan",       flag: "az" },
    "BAM": { name: "Bosnia",           flag: "ba" },
    "BBD": { name: "Barbados",         flag: "bb" },
    "BDT": { name: "Bangladesh",       flag: "bd" },
    "BGN": { name: "Bulgaria",         flag: "bg" },
    "BHD": { name: "Bahrain",          flag: "bh" },
    "BIF": { name: "Burundi",          flag: "bi" },
    "BMD": { name: "Bermuda",          flag: "bm" },
    "BND": { name: "Brunei",           flag: "bn" },
    "BOB": { name: "Bolivia",          flag: "bo" },
    "BRL": { name: "Brazil",           flag: "br" },
    "BSD": { name: "Bahamas",          flag: "bs" },
    "BTN": { name: "Bhutan",           flag: "bt" },
    "BWP": { name: "Botswana",         flag: "bw" },
    "BYN": { name: "Belarus",          flag: "by" },
    "BZD": { name: "Belize",           flag: "bz" },
    "CAD": { name: "Canada",           flag: "ca" },
    "CDF": { name: "DR Congo",         flag: "cd" },
    "CHF": { name: "Switzerland",      flag: "ch" },
    "CLP": { name: "Chile",            flag: "cl" },
    "CNY": { name: "China",            flag: "cn" },
    "COP": { name: "Colombia",         flag: "co" },
    "CRC": { name: "Costa Rica",       flag: "cr" },
    "CUP": { name: "Cuba",             flag: "cu" },
    "CVE": { name: "Cape Verde",       flag: "cv" },
    "CZK": { name: "Czech Republic",   flag: "cz" },
    "DJF": { name: "Djibouti",         flag: "dj" },
    "DKK": { name: "Denmark",          flag: "dk" },
    "DOP": { name: "Dom. Republic",    flag: "do" },
    "DZD": { name: "Algeria",          flag: "dz" },
    "EGP": { name: "Egypt",            flag: "eg" },
    "ERN": { name: "Eritrea",          flag: "er" },
    "ETB": { name: "Ethiopia",         flag: "et" },
    "EUR": { name: "European Union",   flag: "eu" },
    "FJD": { name: "Fiji",             flag: "fj" },
    "FKP": { name: "Falkland Islands", flag: "fk" },
    "GBP": { name: "United Kingdom",   flag: "gb" },
    "GEL": { name: "Georgia",          flag: "ge" },
    "GHS": { name: "Ghana",            flag: "gh" },
    "GIP": { name: "Gibraltar",        flag: "gi" },
    "GMD": { name: "Gambia",           flag: "gm" },
    "GNF": { name: "Guinea",           flag: "gn" },
    "GTQ": { name: "Guatemala",        flag: "gt" },
    "GYD": { name: "Guyana",           flag: "gy" },
    "HKD": { name: "Hong Kong",        flag: "hk" },
    "HNL": { name: "Honduras",         flag: "hn" },
    "HTG": { name: "Haiti",            flag: "ht" },
    "HUF": { name: "Hungary",          flag: "hu" },
    "IDR": { name: "Indonesia",        flag: "id" },
    "ILS": { name: "Israel",           flag: "il" },
    "INR": { name: "India",            flag: "in" },
    "IQD": { name: "Iraq",             flag: "iq" },
    "IRR": { name: "Iran",             flag: "ir" },
    "ISK": { name: "Iceland",          flag: "is" },
    "JMD": { name: "Jamaica",          flag: "jm" },
    "JOD": { name: "Jordan",           flag: "jo" },
    "JPY": { name: "Japan",            flag: "jp" },
    "KES": { name: "Kenya",            flag: "ke" },
    "KGS": { name: "Kyrgyzstan",       flag: "kg" },
    "KHR": { name: "Cambodia",         flag: "kh" },
    "KMF": { name: "Comoros",          flag: "km" },
    "KPW": { name: "North Korea",      flag: "kp" },
    "KRW": { name: "South Korea",      flag: "kr" },
    "KWD": { name: "Kuwait",           flag: "kw" },
    "KYD": { name: "Cayman Islands",   flag: "ky" },
    "KZT": { name: "Kazakhstan",       flag: "kz" },
    "LAK": { name: "Laos",             flag: "la" },
    "LBP": { name: "Lebanon",          flag: "lb" },
    "LKR": { name: "Sri Lanka",        flag: "lk" },
    "LRD": { name: "Liberia",          flag: "lr" },
    "LSL": { name: "Lesotho",          flag: "ls" },
    "LYD": { name: "Libya",            flag: "ly" },
    "MAD": { name: "Morocco",          flag: "ma" },
    "MDL": { name: "Moldova",          flag: "md" },
    "MGA": { name: "Madagascar",       flag: "mg" },
    "MKD": { name: "N. Macedonia",     flag: "mk" },
    "MMK": { name: "Myanmar",          flag: "mm" },
    "MNT": { name: "Mongolia",         flag: "mn" },
    "MOP": { name: "Macau",            flag: "mo" },
    "MUR": { name: "Mauritius",        flag: "mu" },
    "MVR": { name: "Maldives",         flag: "mv" },
    "MWK": { name: "Malawi",           flag: "mw" },
    "MXN": { name: "Mexico",           flag: "mx" },
    "MYR": { name: "Malaysia",         flag: "my" },
    "MZN": { name: "Mozambique",       flag: "mz" },
    "NAD": { name: "Namibia",          flag: "na" },
    "NGN": { name: "Nigeria",          flag: "ng" },
    "NIO": { name: "Nicaragua",        flag: "ni" },
    "NOK": { name: "Norway",           flag: "no" },
    "NPR": { name: "Nepal",            flag: "np" },
    "NZD": { name: "New Zealand",      flag: "nz" },
    "OMR": { name: "Oman",             flag: "om" },
    "PAB": { name: "Panama",           flag: "pa" },
    "PEN": { name: "Peru",             flag: "pe" },
    "PGK": { name: "Papua New Guinea", flag: "pg" },
    "PHP": { name: "Philippines",      flag: "ph" },
    "PKR": { name: "Pakistan",         flag: "pk" },
    "PLN": { name: "Poland",           flag: "pl" },
    "PYG": { name: "Paraguay",         flag: "py" },
    "QAR": { name: "Qatar",            flag: "qa" },
    "RON": { name: "Romania",          flag: "ro" },
    "RSD": { name: "Serbia",           flag: "rs" },
    "RUB": { name: "Russia",           flag: "ru" },
    "RWF": { name: "Rwanda",           flag: "rw" },
    "SAR": { name: "Saudi Arabia",     flag: "sa" },
    "SBD": { name: "Solomon Islands",  flag: "sb" },
    "SCR": { name: "Seychelles",       flag: "sc" },
    "SDG": { name: "Sudan",            flag: "sd" },
    "SEK": { name: "Sweden",           flag: "se" },
    "SGD": { name: "Singapore",        flag: "sg" },
    "SLL": { name: "Sierra Leone",     flag: "sl" },
    "SOS": { name: "Somalia",          flag: "so" },
    "SRD": { name: "Suriname",         flag: "sr" },
    "SSP": { name: "South Sudan",      flag: "ss" },
    "SYP": { name: "Syria",            flag: "sy" },
    "SZL": { name: "Eswatini",         flag: "sz" },
    "THB": { name: "Thailand",         flag: "th" },
    "TJS": { name: "Tajikistan",       flag: "tj" },
    "TMT": { name: "Turkmenistan",     flag: "tm" },
    "TND": { name: "Tunisia",          flag: "tn" },
    "TOP": { name: "Tonga",            flag: "to" },
    "TRY": { name: "Turkey",           flag: "tr" },
    "TTD": { name: "Trinidad & Tobago",flag: "tt" },
    "TWD": { name: "Taiwan",           flag: "tw" },
    "TZS": { name: "Tanzania",         flag: "tz" },
    "UAH": { name: "Ukraine",          flag: "ua" },
    "UGX": { name: "Uganda",           flag: "ug" },
    "USD": { name: "United States",    flag: "us" },
    "UYU": { name: "Uruguay",          flag: "uy" },
    "UZS": { name: "Uzbekistan",       flag: "uz" },
    "VEF": { name: "Venezuela",        flag: "ve" },
    "VND": { name: "Vietnam",          flag: "vn" },
    "VUV": { name: "Vanuatu",          flag: "vu" },
    "WST": { name: "Samoa",            flag: "ws" },
    "XAF": { name: "Central Africa",   flag: "cf" },
    "XCD": { name: "E. Caribbean",     flag: "vc" },
    "XOF": { name: "West Africa",      flag: "bf" },
    "XPF": { name: "French Polynesia", flag: "pf" },
    "YER": { name: "Yemen",            flag: "ye" },
    "ZAR": { name: "South Africa",     flag: "za" },
    "ZMW": { name: "Zambia",           flag: "zm" },
    "ZWD": { name: "Zimbabwe",         flag: "zw" },
};

/* ─── Zero-decimal currencies ───────────────────────────────── */
const ZERO_DECIMAL = new Set(["JPY","KRW","IDR","VND","CLP","PYG","UGX","RWF","BIF","GNF","KMF","XOF","XAF","XPF"]);

/* ─── Helpers ───────────────────────────────────────────────── */
const $ = id => document.getElementById(id);
const FLAG = code => `https://flagcdn.com/w40/${code}.png`;

function fmt(num, currency) {
    const dec = ZERO_DECIMAL.has(currency) ? 0 : 2;
    return num.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
}

/* ─── State ─────────────────────────────────────────────────── */
let fromCur = "USD";
let toCur   = "EUR";
let rates   = {};

/* ─── DOM Refs ──────────────────────────────────────────────── */
const amountInput   = $("amount");
const fromBtn       = $("from-btn");
const toBtn         = $("to-btn");
const fromDropdown  = $("from-dropdown");
const toDropdown    = $("to-dropdown");
const fromSearch    = $("from-search");
const toSearch      = $("to-search");
const fromList      = $("from-list");
const toList        = $("to-list");
const swapBtn       = $("swap-btn");
const convertBtn    = $("convert-btn");
const resultDisplay = $("result-display");
const rateText      = $("rate-text");
const lastUpdated   = $("last-updated");

/* ─── Update selector UI ────────────────────────────────────── */
function updateSelectors() {
    const from = CURRENCIES[fromCur];
    const to   = CURRENCIES[toCur];

    $("from-flag").src = FLAG(from.flag);
    $("from-flag").alt = fromCur;
    $("from-code").textContent = fromCur;

    $("to-flag").src = FLAG(to.flag);
    $("to-flag").alt = toCur;
    $("to-code").textContent = toCur;
}

/* ─── Convert ───────────────────────────────────────────────── */
function convert() {
    const amount = parseFloat(amountInput.value);
    if (!amount || isNaN(amount) || amount <= 0 || !rates[toCur]) {
        resultDisplay.textContent = "—";
        resultDisplay.classList.remove("loading");
        rateText.textContent = "Enter an amount above";
        return;
    }

    const rate   = rates[toCur];
    const result = amount * rate;

    resultDisplay.textContent = fmt(result, toCur);
    resultDisplay.classList.remove("loading");
    rateText.textContent = `1 ${fromCur} = ${fmt(rate, toCur)} ${toCur}`;
}

/* ─── Fetch Rates ───────────────────────────────────────────── */
async function fetchRates() {
    convertBtn.classList.add("loading");
    resultDisplay.textContent = "…";
    resultDisplay.classList.add("loading");

    try {
        const res  = await fetch(`https://open.er-api.com/v6/latest/${fromCur}`);
        const data = await res.json();

        if (data.result === "success") {
            rates = data.rates;
            const d = new Date(data.time_last_update_utc);
            lastUpdated.textContent =
                `Rates updated · ${d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
            convert();
        } else throw new Error();
    } catch {
        lastUpdated.textContent = "Could not fetch rates — check connection";
        resultDisplay.textContent = "err";
        rateText.textContent = "Rate fetch failed. Try again.";
    } finally {
        convertBtn.classList.remove("loading");
    }
}

/* ─── Build dropdown list ───────────────────────────────────── */
function buildList(listEl, type, filter = "") {
    listEl.innerHTML = "";
    const q = filter.toUpperCase();

    Object.keys(CURRENCIES)
        .filter(c => c.includes(q) || CURRENCIES[c].name.toUpperCase().includes(q))
        .forEach(code => {
            const cur = CURRENCIES[code];
            const li  = document.createElement("li");
            li.className = "dd-item" + (code === (type === "from" ? fromCur : toCur) ? " active" : "");
            li.innerHTML = `
                <img src="${FLAG(cur.flag)}" alt="${code}" width="22" loading="lazy">
                <span class="dd-code">${code}</span>
                <span class="dd-country">${cur.name}</span>
            `;
            li.addEventListener("mousedown", e => {
                e.preventDefault();
                if (type === "from") { fromCur = code; fetchRates(); }
                else                 { toCur   = code; convert();    }
                updateSelectors();
                closeAll();
            });
            listEl.appendChild(li);
        });
}

/* ─── Dropdown open / close ─────────────────────────────────── */
let openType = null;

function openDropdown(type) {
    closeAll();
    openType = type;

    const btn = type === "from" ? fromBtn : toBtn;
    const dd  = type === "from" ? fromDropdown : toDropdown;
    const inp = type === "from" ? fromSearch : toSearch;
    const lst = type === "from" ? fromList : toList;

    btn.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    dd.classList.add("open");
    buildList(lst, type);
    inp.value = "";
    // Small delay so the animation starts before focus steals it
    requestAnimationFrame(() => inp.focus());
}

function closeAll() {
    [fromBtn, toBtn].forEach(b => { b.classList.remove("open"); b.setAttribute("aria-expanded", "false"); });
    [fromDropdown, toDropdown].forEach(d => d.classList.remove("open"));
    openType = null;
}

/* ─── Event Listeners ───────────────────────────────────────── */

fromBtn.addEventListener("click", () => openType === "from" ? closeAll() : openDropdown("from"));
toBtn.addEventListener("click",   () => openType === "to"   ? closeAll() : openDropdown("to"));

[fromBtn, toBtn].forEach((btn, i) => {
    btn.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDropdown(i === 0 ? "from" : "to"); }
    });
});

fromSearch.addEventListener("input", e => buildList(fromList, "from", e.target.value));
toSearch.addEventListener("input",   e => buildList(toList,   "to",   e.target.value));

document.addEventListener("mousedown", e => {
    if (!e.target.closest(".input-block")) closeAll();
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeAll();
});

swapBtn.addEventListener("click", () => {
    [fromCur, toCur] = [toCur, fromCur];
    updateSelectors();
    fetchRates();
});

amountInput.addEventListener("input", convert);

convertBtn.addEventListener("click", fetchRates);

/* ─── Init ──────────────────────────────────────────────────── */
updateSelectors();
fetchRates();