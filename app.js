/* ═══════════════════════════════════════════════
   Currency Converter · Ultimate Edition
   Auto-convert, animated mesh bg, dynamic hero
═══════════════════════════════════════════════ */

/* ── Currency data ────────────────────────── */
const C = {
    AED:{n:"UAE Dirham",f:"ae"},AFN:{n:"Afghan Afghani",f:"af"},ALL:{n:"Albanian Lek",f:"al"},
    AMD:{n:"Armenian Dram",f:"am"},ANG:{n:"Neth. Antillean Guilder",f:"an"},AOA:{n:"Angolan Kwanza",f:"ao"},
    ARS:{n:"Argentine Peso",f:"ar"},AUD:{n:"Australian Dollar",f:"au"},AWG:{n:"Aruban Florin",f:"aw"},
    AZN:{n:"Azerbaijani Manat",f:"az"},BAM:{n:"Bosnian Mark",f:"ba"},BBD:{n:"Barbadian Dollar",f:"bb"},
    BDT:{n:"Bangladeshi Taka",f:"bd"},BGN:{n:"Bulgarian Lev",f:"bg"},BHD:{n:"Bahraini Dinar",f:"bh"},
    BIF:{n:"Burundian Franc",f:"bi"},BMD:{n:"Bermudian Dollar",f:"bm"},BND:{n:"Brunei Dollar",f:"bn"},
    BOB:{n:"Bolivian Boliviano",f:"bo"},BRL:{n:"Brazilian Real",f:"br"},BSD:{n:"Bahamian Dollar",f:"bs"},
    BTN:{n:"Bhutanese Ngultrum",f:"bt"},BWP:{n:"Botswana Pula",f:"bw"},BYN:{n:"Belarusian Ruble",f:"by"},
    BZD:{n:"Belize Dollar",f:"bz"},CAD:{n:"Canadian Dollar",f:"ca"},CDF:{n:"Congolese Franc",f:"cd"},
    CHF:{n:"Swiss Franc",f:"ch"},CLP:{n:"Chilean Peso",f:"cl"},CNY:{n:"Chinese Yuan",f:"cn"},
    COP:{n:"Colombian Peso",f:"co"},CRC:{n:"Costa Rican Colón",f:"cr"},CUP:{n:"Cuban Peso",f:"cu"},
    CVE:{n:"Cape Verdean Escudo",f:"cv"},CZK:{n:"Czech Koruna",f:"cz"},DJF:{n:"Djiboutian Franc",f:"dj"},
    DKK:{n:"Danish Krone",f:"dk"},DOP:{n:"Dominican Peso",f:"do"},DZD:{n:"Algerian Dinar",f:"dz"},
    EGP:{n:"Egyptian Pound",f:"eg"},ETB:{n:"Ethiopian Birr",f:"et"},EUR:{n:"Euro",f:"eu"},
    FJD:{n:"Fijian Dollar",f:"fj"},GBP:{n:"British Pound",f:"gb"},GEL:{n:"Georgian Lari",f:"ge"},
    GHS:{n:"Ghanaian Cedi",f:"gh"},GTQ:{n:"Guatemalan Quetzal",f:"gt"},GYD:{n:"Guyanese Dollar",f:"gy"},
    HKD:{n:"Hong Kong Dollar",f:"hk"},HNL:{n:"Honduran Lempira",f:"hn"},HTG:{n:"Haitian Gourde",f:"ht"},
    HUF:{n:"Hungarian Forint",f:"hu"},IDR:{n:"Indonesian Rupiah",f:"id"},ILS:{n:"Israeli New Shekel",f:"il"},
    INR:{n:"Indian Rupee",f:"in"},IQD:{n:"Iraqi Dinar",f:"iq"},ISK:{n:"Icelandic Króna",f:"is"},
    JMD:{n:"Jamaican Dollar",f:"jm"},JOD:{n:"Jordanian Dinar",f:"jo"},JPY:{n:"Japanese Yen",f:"jp"},
    KES:{n:"Kenyan Shilling",f:"ke"},KGS:{n:"Kyrgyzstani Som",f:"kg"},KHR:{n:"Cambodian Riel",f:"kh"},
    KRW:{n:"South Korean Won",f:"kr"},KWD:{n:"Kuwaiti Dinar",f:"kw"},KZT:{n:"Kazakhstani Tenge",f:"kz"},
    LAK:{n:"Lao Kip",f:"la"},LBP:{n:"Lebanese Pound",f:"lb"},LKR:{n:"Sri Lankan Rupee",f:"lk"},
    LYD:{n:"Libyan Dinar",f:"ly"},MAD:{n:"Moroccan Dirham",f:"ma"},MDL:{n:"Moldovan Leu",f:"md"},
    MGA:{n:"Malagasy Ariary",f:"mg"},MMK:{n:"Myanmar Kyat",f:"mm"},MNT:{n:"Mongolian Tögrög",f:"mn"},
    MXN:{n:"Mexican Peso",f:"mx"},MYR:{n:"Malaysian Ringgit",f:"my"},NGN:{n:"Nigerian Naira",f:"ng"},
    NOK:{n:"Norwegian Krone",f:"no"},NPR:{n:"Nepalese Rupee",f:"np"},NZD:{n:"New Zealand Dollar",f:"nz"},
    OMR:{n:"Omani Rial",f:"om"},PAB:{n:"Panamanian Balboa",f:"pa"},PEN:{n:"Peruvian Sol",f:"pe"},
    PHP:{n:"Philippine Peso",f:"ph"},PKR:{n:"Pakistani Rupee",f:"pk"},PLN:{n:"Polish Złoty",f:"pl"},
    PYG:{n:"Paraguayan Guaraní",f:"py"},QAR:{n:"Qatari Riyal",f:"qa"},RON:{n:"Romanian Leu",f:"ro"},
    RSD:{n:"Serbian Dinar",f:"rs"},RUB:{n:"Russian Ruble",f:"ru"},RWF:{n:"Rwandan Franc",f:"rw"},
    SAR:{n:"Saudi Riyal",f:"sa"},SEK:{n:"Swedish Krona",f:"se"},SGD:{n:"Singapore Dollar",f:"sg"},
    SOS:{n:"Somali Shilling",f:"so"},SRD:{n:"Surinamese Dollar",f:"sr"},SYP:{n:"Syrian Pound",f:"sy"},
    THB:{n:"Thai Baht",f:"th"},TND:{n:"Tunisian Dinar",f:"tn"},TRY:{n:"Turkish Lira",f:"tr"},
    TTD:{n:"Trinidad & Tobago Dollar",f:"tt"},TWD:{n:"New Taiwan Dollar",f:"tw"},TZS:{n:"Tanzanian Shilling",f:"tz"},
    UAH:{n:"Ukrainian Hryvnia",f:"ua"},UGX:{n:"Ugandan Shilling",f:"ug"},USD:{n:"United States Dollar",f:"us"},
    UYU:{n:"Uruguayan Peso",f:"uy"},UZS:{n:"Uzbekistani Som",f:"uz"},VND:{n:"Vietnamese Dong",f:"vn"},
    YER:{n:"Yemeni Rial",f:"ye"},ZAR:{n:"South African Rand",f:"za"},ZMW:{n:"Zambian Kwacha",f:"zm"},
};

const ZERO = new Set(["JPY","KRW","IDR","VND","CLP","PYG","UGX","RWF","BIF","GNF","KMF","XOF","XAF","XPF"]);
const FLAG = c => `https://flagcdn.com/w40/${C[c]?.f ?? "un"}.png`;
const $    = id => document.getElementById(id);

function fmt(n, cur) {
    const d = ZERO.has(cur) ? 0 : 2;
    return n.toLocaleString("en-US", {minimumFractionDigits:d, maximumFractionDigits:d});
}

/* ── State ───────────────────────────────── */
let from = "USD", to = "EUR", rates = {}, openType = null;

/* ── Refs ────────────────────────────────── */
const amtEl    = $("amount");
const resEl    = $("result-val");
const spinEl   = $("result-spin");
const rfBadge  = $("rate-from-badge");
const rtBadge  = $("rate-to-badge");
const rUpdate  = $("rate-updated");
const heroAmt  = $("hero-amount");

/* ── Sync UI ─────────────────────────────── */
function syncUI() {
    ["from","to"].forEach(t => {
        const cur = t === "from" ? from : to;
        const d   = C[cur]; if (!d) return;
        $(`${t}-flag`).src = FLAG(cur);
        $(`${t}-flag`).alt = cur;
        $(`${t}-code`).textContent = cur;
        $(`${t}-country`).textContent = d.n;
        if (t === "from") $("from-ghost").textContent = cur;
    });
    const a = parseFloat(amtEl.value) || 1;
    heroAmt.textContent = `${fmt(a, from)} ${from}`;
    rfBadge.textContent = `1 ${from}`;
}

/* ── Convert ─────────────────────────────── */
function convert() {
    const a = parseFloat(amtEl.value);
    heroAmt.textContent = `${fmt(isNaN(a)||a<=0?1:a, from)} ${from}`;

    if (!a || isNaN(a) || a <= 0 || !rates[to]) {
        resEl.textContent = "—";
        resEl.classList.add("dim");
        rtBadge.textContent = "—";
        rtBadge.style.background = "";
        return;
    }
    const rate   = rates[to];
    const result = a * rate;

    resEl.textContent = fmt(result, to);
    resEl.classList.remove("dim");
    resEl.classList.remove("flash");
    void resEl.offsetWidth;
    resEl.classList.add("flash");

    rtBadge.textContent = `${fmt(rate, to)} ${to}`;
    rfBadge.textContent = `1 ${from}`;
}

/* ── Fetch ───────────────────────────────── */
async function fetchRates() {
    spinEl.classList.remove("hidden");
    resEl.classList.add("dim");
    $("live-txt").textContent = "Syncing";

    try {
        const res  = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        const data = await res.json();
        if (data.result !== "success") throw new Error();
        rates = data.rates;
        const d = new Date(data.time_last_update_utc);
        rUpdate.textContent = d.toLocaleDateString("en-US", {month:"short", day:"numeric", year:"numeric"});
        $("live-txt").textContent = "Live";
        convert();
    } catch {
        $("live-txt").textContent = "Offline";
        resEl.textContent = "—";
        resEl.classList.add("dim");
        rUpdate.textContent = "fetch failed";
    } finally {
        spinEl.classList.add("hidden");
        resEl.classList.remove("dim");
    }
}

/* ── Dropdown ────────────────────────────── */
function buildList(ulEl, type, filter = "") {
    ulEl.innerHTML = "";
    const q   = filter.toUpperCase();
    const sel = type === "from" ? from : to;
    Object.keys(C)
        .filter(c => c.includes(q) || C[c].n.toUpperCase().includes(q))
        .forEach(code => {
            const d  = C[code];
            const li = document.createElement("li");
            li.className = "dd-li" + (code === sel ? " on" : "");
            li.setAttribute("role","option");
            li.setAttribute("aria-selected", code === sel ? "true" : "false");
            li.innerHTML = `
                <img src="${FLAG(code)}" alt="${code}" width="24" height="16" loading="lazy">
                <span class="li-code">${code}</span>
                <span class="li-name">${d.n}</span>
            `;
            li.addEventListener("mousedown", e => {
                e.preventDefault();
                if (type === "from") { from = code; fetchRates(); }
                else                 { to   = code; convert();    }
                syncUI();
                closeDD();
            });
            ulEl.appendChild(li);
        });
}

function openDD(type) {
    closeDD();
    openType = type;
    $(`${type}-btn`).classList.add("open");
    $(`${type}-btn`).setAttribute("aria-expanded","true");
    $(`${type}-dd`).classList.add("open");
    buildList($(`${type}-ul`), type);
    $(`${type}-search`).value = "";
    requestAnimationFrame(() => $(`${type}-search`).focus());
}

function closeDD() {
    if (!openType) return;
    $(`${openType}-btn`).classList.remove("open");
    $(`${openType}-btn`).setAttribute("aria-expanded","false");
    $(`${openType}-dd`).classList.remove("open");
    openType = null;
}

/* ── Events ──────────────────────────────── */
$("from-btn").addEventListener("click", () => openType === "from" ? closeDD() : openDD("from"));
$("to-btn").addEventListener("click",   () => openType === "to"   ? closeDD() : openDD("to"));

[$("from-btn"), $("to-btn")].forEach((el, i) => {
    el.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDD(i === 0 ? "from" : "to"); }
    });
});

$("from-search").addEventListener("input", e => buildList($("from-ul"), "from", e.target.value));
$("to-search").addEventListener("input",   e => buildList($("to-ul"),   "to",   e.target.value));

document.addEventListener("mousedown", e => {
    if (!e.target.closest(".slot") && !e.target.closest(".dd")) closeDD();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDD(); });

$("swap-btn").addEventListener("click", () => {
    [from, to] = [to, from];
    syncUI();
    fetchRates();
});

amtEl.addEventListener("input", convert);
amtEl.addEventListener("focus", () => amtEl.select());

/* ── Animated canvas mesh background ─────── */
(function initCanvas() {
    const canvas = $("bg-canvas");
    const ctx    = canvas.getContext("2d");
    let W, H, pts = [];

    const COLORS = ["#22d3ee","#f59e0b","#6366f1","#22c55e"];
    const N = 6;

    function resize() {
        W = canvas.width  = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function makePoints() {
        pts = Array.from({length: N}, (_, i) => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - .5) * .4,
            vy: (Math.random() - .5) * .4,
            color: COLORS[i % COLORS.length],
            r: 180 + Math.random() * 160,
        }));
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        pts.forEach(p => {
            p.x += p.vx; p.y += p.vy;
            if (p.x < -p.r) p.x = W + p.r;
            if (p.x > W + p.r) p.x = -p.r;
            if (p.y < -p.r) p.y = H + p.r;
            if (p.y > H + p.r) p.y = -p.r;

            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
            g.addColorStop(0, p.color + "28");
            g.addColorStop(1, p.color + "00");
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = g;
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }

    window.addEventListener("resize", () => { resize(); makePoints(); });
    resize();
    makePoints();
    draw();
})();

/* ── Init ─────────────────────────────────── */
syncUI();
fetchRates();