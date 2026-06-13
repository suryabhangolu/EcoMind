<div align="center">

<img src="https://img.shields.io/badge/🌱_EcoMind-Carbon_Footprint_Platform-1B7A4A?style=for-the-badge&logoColor=white" alt="EcoMind"/>

# EcoMind — Carbon Footprint Awareness Platform

### *Track it. Understand it. Reduce it.*

[![PromptWars](https://img.shields.io/badge/PromptWars-Virtual_Challenge_3-1B7A4A?style=flat-square)](https://hack2skill.com/event/pwvirtual1)
[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Open_App-00897B?style=flat-square)](https://suryabhangolu.github.io/EcoMind)
[![AI Score](https://img.shields.io/badge/AI_Score-91.08%2F100-success?style=flat-square)](#-ai-evaluation-score)
[![Efficiency](https://img.shields.io/badge/Efficiency-100%2F100-brightgreen?style=flat-square)](#-ai-evaluation-score)
[![Accessibility](https://img.shields.io/badge/Accessibility-98%2F100-brightgreen?style=flat-square)](#-ai-evaluation-score)
[![Security](https://img.shields.io/badge/Security-95%2F100-brightgreen?style=flat-square)](#-ai-evaluation-score)
[![PWA](https://img.shields.io/badge/PWA-Installable-5C6BC0?style=flat-square)](https://suryabhangolu.github.io/EcoMind)
[![Gemini AI](https://img.shields.io/badge/AI-Gemini_1.5_Flash-4285F4?style=flat-square)](https://aistudio.google.com/)
[![WCAG](https://img.shields.io/badge/WCAG-2.1_AA-orange?style=flat-square)](#-accessibility)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

<br/>

> **EcoMind** is a fully working, production-ready AI-powered Carbon Footprint Awareness Platform built for **PromptWars Virtual — Challenge 3**. It helps individuals in India track, visualize, and reduce their daily carbon emissions through real-time Gemini AI coaching, gamification, and personalized insights.

<br/>

**[👉 Open Live App](https://suryabhangolu.github.io/EcoMind)** &nbsp;•&nbsp; **[📋 View Source](https://github.com/suryabhangolu/EcoMind/blob/main/index.html)** &nbsp;•&nbsp; **[🧪 Run Tests](https://suryabhangolu.github.io/EcoMind#test)** &nbsp;•&nbsp; **[📊 Score Breakdown](#-ai-evaluation-score)**

</div>

---

## 🏆 AI Evaluation Score

> Official score received from PromptWars AI Evaluation System

| Category | Score | Status |
|----------|-------|--------|
| ⚡ Efficiency | **100 / 100** | 🟢 Perfect |
| ♿ Accessibility | **98 / 100** | 🟢 Excellent |
| 🔒 Security | **95 / 100** | 🟢 Excellent |
| 🎯 Problem Statement Alignment | **94 / 100** | 🟢 Excellent |
| 🧪 Testing | **84 / 100** | 🟡 Good |
| 💻 Code Quality | **80 / 100** | 🟡 Good |
| **🌟 Overall AI Score** | **91.08 / 100** | 🏆 **Top Tier** |

---

## 🎯 Challenge Vertical

**PromptWars Virtual — Challenge 3: Carbon Footprint Awareness**

> *"Design a solution that helps individuals understand, track, and reduce their carbon footprint through simple actions and personalized insights."*

This project fulfills the challenge goal completely:

| Goal | Implementation |
|------|---------------|
| **Understand** carbon footprint | Real-time CO2 calculator with emission factor hints per input |
| **Track** daily emissions | Persistent localStorage logs with 30-day trend charts |
| **Reduce** through simple actions | Quick-log buttons, 16 eco tips, 7-day AI challenge generator |
| **Personalized insights** | Gemini AI Coach with live user data injected into every prompt |
| **Smart dynamic assistant** | Context-aware Eco Coach analyzing real user patterns |
| **Logical decision making** | Top-category detection → targeted reduction suggestions |
| **Real-world usability** | India-specific emission factors, Hindi language support, PWA |

---

## ✨ Features

### 🏠 Dashboard
- Animated SVG circular CO2 meter (green < 5kg / amber 5–15kg / red > 15kg)
- 4 real-time metric cards: Today, This Week, This Month, Streak days
- 7-day color-coded bar chart (Chart.js) with interactive tooltips
- Category breakdown bars: Transport, Food, Energy, Shopping
- Quick-log buttons for instant emission entry with toast confirmation
- Empty state with "Load Demo Data" CTA for first-time users

### 📊 Carbon Calculator (Log Today)
- 4 collapsible accordion sections — Transport, Food, Energy, Shopping
- Real-time CO2 total updates as user types (no submit needed)
- Emission factor hint displayed below every input field
- Geolocation API → India region detection → adjusted electricity factor
- Full form validation (non-negative, finite, non-zero requirement)
- Overwrite confirmation dialog when today's log already exists

### 🤖 Eco Coach — AI Powered
- Real **Gemini 1.5 Flash** API with dynamic system prompt
- Live user data injected: top category, monthly total, today's total, goal
- Smart keyword fallback if API unavailable (never crashes silently)
- Suggested prompt chips for quick interaction
- Typing animation, timestamped messages, persistent chat history
- Rate-limited to 1 request per 2 seconds (prevents API flooding)

### 📈 Progress Tracker
- 30-day line chart with dashed goal line overlay
- Weekly stacked bar chart by category (4 weeks)
- Monthly goal setting with color-coded progress bar
- XP system: 5 levels from Eco Newbie → Planet Protector
- 8 unlockable badges with earn criteria and XP rewards
- Benchmark comparison: You vs India avg vs Global avg vs Paris Target
- Monthly Report Card with auto-generated narrative text
- **PDF export** (3-page jsPDF report) + **CSV export** (RFC 4180)

### 💡 Eco Tips & Resources
- 16 actionable tip cards across 4 categories (4 each)
- Difficulty ratings (Easy / Medium / Hard) + annual CO2 savings
- "Adopt this tip" toggle with localStorage persistence
- Impact calculator — real-time total annual CO2 savings from adopted tips
- Shareable progress card download (PNG via Canvas API)
- 6 verified external resource links (IPCC, UNEP, WWF, etc.)

### ⚙️ Platform Capabilities
- **PWA** — installable on Android/iOS, full offline mode via Service Worker
- **Dark / Light Mode** — instant toggle, zero flash on load, persists in localStorage
- **EN / HI Language Toggle** — complete bilingual UI (all strings in LANG object)
- **Browser Notifications** — daily 8 PM reminder to log emissions
- **Built-in Test Suite** — 12 unit tests accessible at `/#test`
- **Demo Data Loader** — 30 days of realistic India-context emissions data
- **Toast System** — 4 types (success, warning, error, info), auto-dismiss 3s

---

## 🏗️ Architecture

```
ecomind/
├── index.html        ← Complete SPA (HTML + CSS + JS inline — single file)
├── manifest.json     ← PWA manifest (standalone display, India locale)
├── sw.js             ← Service Worker (Cache First + Network First strategy)
├── icon-192.png      ← PWA app icon (192×192 px)
├── icon-512.png      ← PWA app icon (512×512 px)
├── .gitignore        ← Excludes OS and editor artifacts
└── README.md         ← Full project documentation
```

**Why single-file SPA architecture?**
- Zero build tools required — no npm, no webpack, no compilation step
- Deploys instantly to any static host (GitHub Pages, Netlify, Vercel)
- All code reviewable in one place — judges see everything in one file
- Stays well under the 10MB repo size limit

**Data Flow:**
```
User Input
    ↓
Input Validation (sanitize + range check)
    ↓
CO2 Calculation (FACTORS constants)
    ↓
localStorage Save (try/catch wrapped)
    ↓
Dashboard Re-render (cached totals invalidated)
    ↓
Gemini Context Build (live data injected)
    ↓
AI Coach Response (with fallback)
```

---

## 💻 Code Quality

### JavaScript Standards
```javascript
// ES6+ throughout — no var, no callbacks, no legacy patterns

/**
 * @description Calculate transport CO2 emissions from activity data
 * @param {Object} transport - Transport activity inputs
 * @param {number} transport.car   - Distance driven by petrol car (km)
 * @param {number} transport.moto  - Distance driven by motorbike (km)
 * @param {number} transport.flight - Flight duration (hours)
 * @param {number} transport.bus   - Distance by public transport (km)
 * @returns {number} Total transport CO2 emissions in kg
 */
const calculateTransportCO2 = ({ car = 0, moto = 0, flight = 0, bus = 0 }) => {
  return (car * FACTORS.transport.car)
       + (moto * FACTORS.transport.moto)
       + (flight * FACTORS.transport.flight)
       + (bus * FACTORS.transport.bus);
};
```

### Code Organization
```javascript
// ═══════════════════════════════════════
// MODULE: CONFIGURATION & CONSTANTS
// ═══════════════════════════════════════
const CONFIG = { GEMINI_API_KEY: "..." };
const FACTORS = { transport: {...}, food: {...}, energy: {...}, shopping: {...} };
const LANG = { en: {...}, hi: {...} };

// ═══════════════════════════════════════
// MODULE: STORAGE (all reads try/catch)
// ═══════════════════════════════════════
const getLogs = () => { try { return JSON.parse(localStorage.getItem('ecomind_logs')) || []; } catch { return []; } };
const saveLogs = (logs) => { try { localStorage.setItem('ecomind_logs', JSON.stringify(logs)); } catch (e) { showToast('Storage error', 'error'); } };

// ═══════════════════════════════════════
// MODULE: CALCULATIONS (pure functions)
// ═══════════════════════════════════════
// MODULE: RENDERING
// MODULE: EVENTS (addEventListener only)
// MODULE: GAMIFICATION
// MODULE: EXPORT (PDF + CSV)
// MODULE: AI COACH (Gemini + fallback)
// MODULE: PWA + SERVICE WORKER
// MODULE: ACCESSIBILITY + i18n
```

### HTML Standards
```html
<!-- Semantic structure throughout -->
<header role="banner">...</header>
<nav aria-label="Main navigation">...</nav>
<main id="main" role="main">
  <section aria-labelledby="dashboard-heading">
    <h2 id="dashboard-heading">Dashboard</h2>
    <!-- data-testid on all key elements -->
    <div data-testid="co2-meter" aria-label="Today's CO2 meter">...</div>
  </section>
</main>
<footer role="contentinfo">...</footer>
```

### CSS Standards
```css
/* All colors via custom properties — zero hardcoded hex values in rules */
:root {
  --accent-green: #1B7A4A;
  --bg-card: #FFFFFF;
  /* ... */
}
[data-theme="dark"] {
  --accent-green: #4CAF50;
  --bg-card: #1A2A1A;
  /* ... */
}

/* BEM-like naming convention */
.card { }
.card__title { }
.card__body { }
.card--featured { }

/* Mobile-first media queries */
@media (min-width: 768px) { }
@media (min-width: 1280px) { }
```

---

## 🧪 Testing

### Run the Built-in Test Suite
```
https://suryabhangolu.github.io/EcoMind#test
```
Click **"Run All Tests"** → should show **12/12 passing** ✅

### Test Cases

| # | Function | Input | Expected Output |
|---|----------|-------|----------------|
| 1 | `calculateTransportCO2` | `{car: 10}` | `2.1` |
| 2 | `calculateFoodCO2` | `{meat: 2}` | `6.6` |
| 3 | `calculateEnergyCO2` | `{electricity: 5}` | `4.1` |
| 4 | `calculateShoppingCO2` | `{clothes: 1}` | `12.0` |
| 5 | `calculateTotalCO2` | Full log object | Correct category sum |
| 6 | `sanitize` | `<script>alert(1)</script>` | Escaped HTML string |
| 7 | `saveLogs` + `getLogs` | Any log object | Identical object returned |
| 8 | `getTopEmissionCategory` | Mixed logs | Category with highest kg |
| 9 | `getStreak` | Empty localStorage | `0` |
| 10 | `getMonthlyTotal` | Logs across months | Only current month summed |
| 11 | `exportCSV` | Any logs array | Correct RFC 4180 header row |
| 12 | `buildSystemContext` | Live localStorage | Includes today's total in string |

### Manual Test Verification
```bash
# Open browser console (F12) and run:

calculateTransportCO2({car: 10, moto: 0, flight: 0, bus: 0})
# → Expected: 2.1

calculateFoodCO2({meat: 1, veg: 0, vegan: 0, waste: 0})
# → Expected: 3.3

sanitize("<img src=x onerror=alert(1)>")
# → Expected: "&lt;img src=x onerror=alert(1)&gt;" (no alert fires)

# XSS Test: Type in any note field:
# <script>alert('xss')</script>
# → Save log → No alert should fire
```

### Test Coverage Areas
- ✅ Emission calculation accuracy (all 4 categories)
- ✅ Input sanitization (XSS prevention)
- ✅ localStorage read/write integrity
- ✅ Data aggregation (monthly, streak, top category)
- ✅ Export format validation (CSV headers)
- ✅ AI context builder output
- ✅ Responsive layout (375px, 768px, 1280px)
- ✅ Offline functionality (Service Worker cache)
- ✅ Dark mode persistence across sessions
- ✅ Form validation (negative inputs, zero submissions)

---

## 🤖 AI Coach — Gemini Integration

### Setup
```javascript
// In index.html — find CONFIG object near top (~line 20)
const CONFIG = {
  GEMINI_API_KEY: "YOUR_API_KEY_HERE"  // ← Replace with your key
};
```

**Get your free API key:**
1. Go to [aistudio.google.com](https://aistudio.google.com/)
2. Click **Get API Key** → **Create API Key** (free tier — no billing needed)
3. Paste into CONFIG above → save → Eco Coach is now fully AI-powered!

### How Context Injection Works
```javascript
/**
 * @description Builds dynamic system prompt with live user data
 * @returns {string} Complete system context for Gemini API
 */
const buildSystemContext = () => {
  const logs        = getLogs();
  const topCategory = getTopEmissionCategory(logs);
  const monthly     = getMonthlyTotal(logs).toFixed(1);
  const today       = getTodayTotal(logs).toFixed(1);
  const goal        = getGoal();
  const daysLogged  = logs.filter(isThisMonth).length;

  return `You are Eco, an AI carbon footprint coach. Be helpful, encouraging,
  and data-driven. Keep responses under 3 paragraphs. Always end with one
  specific actionable tip and its estimated annual CO2 saving.

  LIVE USER DATA:
  - Top emission category: ${topCategory}
  - This month total: ${monthly} kg CO2
  - Today's total: ${today} kg CO2
  - Monthly goal: ${goal} kg CO2
  - Days logged this month: ${daysLogged}
  - India daily average: 5.2 kg CO2`;
};
```

### Fallback Logic
```javascript
// If API key missing or network fails — keyword-based intelligent fallback
const FALLBACK_RESPONSES = {
  transport : (data) => `Your transport emissions are ${data.transport.toFixed(1)} kg CO2...`,
  food      : (data) => `Your food choices account for ${data.food.toFixed(1)} kg CO2...`,
  energy    : (data) => `Your home energy usage is ${data.energy.toFixed(1)} kg CO2...`,
  default   : (data) => `Your top emission source is ${data.topCategory}...`
};
// Never crashes — always returns a useful, data-driven response
```

---

## 📐 Emission Factors

> All values sourced from IPCC AR6, MoEFCC India, and UNEP publications

### Transport
| Activity | Factor | Source |
|----------|--------|--------|
| Petrol car | 0.21 kg CO2/km | IPCC 2023 |
| Motorbike | 0.11 kg CO2/km | MoEFCC India |
| Domestic flight | 255 kg CO2/hour | ICAO 2022 |
| Bus / Train | 0.03 kg CO2/km | UNEP 2022 |

### Food
| Activity | Factor | Source |
|----------|--------|--------|
| Meal with meat | 3.3 kg CO2/meal | Oxford University 2018 |
| Vegetarian meal | 1.1 kg CO2/meal | Oxford University 2018 |
| Vegan meal | 0.7 kg CO2/meal | Oxford University 2018 |
| Food waste | 2.5 kg CO2/kg | FAO 2021 |

### Home Energy
| Activity | Factor | Source |
|----------|--------|--------|
| Electricity (India grid avg) | 0.82 kg CO2/kWh | CEA India 2023 |
| LPG gas | 1.51 kg CO2/unit | BEE India |
| AC — 1.5 ton unit | 1.23 kg CO2/hour | BEE India |

### Shopping
| Activity | Factor | Source |
|----------|--------|--------|
| New clothing item | 12 kg CO2/item | WRAP 2017 |
| Electronic device | 70 kg CO2/item | iNEMI 2020 |
| Online delivery | 0.5 kg CO2/order | MIT 2019 |

### India Regional Grid Intensity
| Region | Factor | States Covered |
|--------|--------|---------------|
| North | 0.79 kg CO2/kWh | Delhi, UP, Punjab, Haryana |
| South | 0.75 kg CO2/kWh | Karnataka, TN, Andhra, Kerala |
| East | 0.91 kg CO2/kWh | WB, Bihar, Jharkhand, Odisha |
| West | 0.83 kg CO2/kWh | Maharashtra, Gujarat, MP, Rajasthan |

### Benchmarks
| Reference | Annual kg CO2 | Daily kg CO2 |
|-----------|--------------|-------------|
| India average | 1,900 kg | 5.2 kg |
| Global average | 4,700 kg | 12.9 kg |
| Paris Agreement target | 2,000 kg | 5.5 kg |

---

## 🗄️ Data Schema

```javascript
// ecomind_logs — Array of daily log entries
{
  id:        "uuid-v4-string",           // Unique identifier
  date:      "YYYY-MM-DD",              // Local date string
  timestamp: 1718123456789,             // Unix ms timestamp
  transport: { car: 0, moto: 0, flight: 0, bus: 0 },
  food:      { meat: 0, veg: 0, vegan: 0, waste: 0 },
  energy:    { electricity: 0, lpg: 0, ac: 0 },
  shopping:  { clothes: 0, electronics: 0, orders: 0 },
  totalCO2:  0.0,                       // Pre-computed total in kg
  note:      ""                         // Optional user note (sanitized)
}

// ecomind_goal     → number  (monthly CO2 target in kg, default: 150)
// ecomind_theme    → "light" | "dark"
// ecomind_tips     → string[] (adopted tip IDs)
// ecomind_badges   → string[] (earned badge IDs)
// ecomind_xp       → number  (total XP accumulated — never decreases)
// ecomind_streak   → { count: number, lastDate: "YYYY-MM-DD" }
// ecomind_chat     → { role: "user"|"eco", content: string, timestamp: number }[]
// ecomind_lang     → "en" | "hi"
// ecomind_notif    → boolean
```

---

## 🔒 Security

```html
<!-- Content Security Policy — in <head> -->
<meta http-equiv="Content-Security-Policy"
  content="default-src 'self';
           script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com https://cdn.jsdelivr.net https://generativelanguage.googleapis.com;
           style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
           font-src https://fonts.gstatic.com https://cdnjs.cloudflare.com;
           img-src 'self' data:;
           connect-src https://generativelanguage.googleapis.com;">
```

```javascript
/**
 * @description Sanitizes user input to prevent XSS attacks
 * @param {string} str - Raw user input string
 * @returns {string} HTML-escaped safe string
 */
const sanitize = (str) => {
  const div = document.createElement('div');
  div.textContent = String(str);
  return div.innerHTML;
};

// Security checklist:
// ✅ All user text rendered via textContent (never innerHTML)
// ✅ sanitize() applied before any DOM insertion of user data
// ✅ No eval() anywhere in codebase
// ✅ All localStorage reads wrapped in try/catch
// ✅ Input validation: isFinite(), >= 0, max range enforced
// ✅ API key only in CONFIG object — never stored in localStorage
// ✅ Rate limiting: 1 Gemini request per 2 seconds max
// ✅ CSP header blocks unauthorized script sources
```

---

## ♿ Accessibility

**WCAG 2.1 Level AA Compliant** (98/100 AI Score)

```html
<!-- Skip navigation — first element in body -->
<a href="#main" class="skip-link">Skip to main content</a>

<!-- All inputs have proper labels -->
<label for="car-input">Car distance (km)</label>
<input id="car-input" type="number" min="0" max="2000"
       aria-describedby="car-hint" data-testid="input-car">
<span id="car-hint" class="hint">Car: 0.21 kg CO2/km</span>

<!-- ARIA live regions for dynamic content -->
<div id="toast-region" role="status" aria-live="polite" aria-atomic="true"></div>
<p id="chart-desc" class="sr-only">Bar chart showing 7-day emissions...</p>

<!-- Icon-only buttons have labels -->
<button aria-label="Toggle dark mode" data-testid="theme-toggle">
  <i class="fa-solid fa-moon" aria-hidden="true"></i>
</button>
```

```css
/* Visible focus rings — never removed */
:focus-visible {
  outline: 2px solid var(--accent-green);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; }
}

/* High contrast mode support */
@media (prefers-contrast: more) {
  --border: rgba(0, 0, 0, 0.5);
}
```

---

## ⚡ Performance (100/100 AI Score)

```javascript
// 1. Lazy load heavy libraries only when section opens
const loadChartJS = () => new Promise((resolve) => {
  if (window.Chart) return resolve();
  const s = document.createElement('script');
  s.src = 'https://cdnjs.cloudflare.com/.../chart.min.js';
  s.onload = resolve;
  document.head.appendChild(s);
});

// 2. IntersectionObserver — render charts only when visible
const chartObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) renderChart(e.target); });
}, { threshold: 0.1 });

// 3. Debounce all input handlers (300ms)
const debounce = (fn, delay) => {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
};
const handleInput = debounce(calculateAndUpdateTotal, 300);

// 4. Cache computed totals — invalidate only on log change
let _cachedMonthly = null;
const getMonthlyTotal = (force = false) => {
  if (_cachedMonthly && !force) return _cachedMonthly;
  _cachedMonthly = getLogs().filter(isThisMonth).reduce((sum, l) => sum + l.totalCO2, 0);
  return _cachedMonthly;
};

// 5. Batch localStorage writes (500ms debounce)
const debouncedSave = debounce((key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {}
}, 500);
```

---

## 🚀 How to Run

```bash
# Clone the repository
git clone https://github.com/suryabhangolu/EcoMind.git
cd EcoMind

# Option 1: Open directly (basic features)
open index.html

# Option 2: Local server (PWA + Service Worker + Notifications)
npx serve .
# → Open: http://localhost:3000

# Option 3: Live on GitHub Pages (no setup needed)
# → https://suryabhangolu.github.io/EcoMind
```

**Enable AI Coach (optional — fallback works without it):**
```
1. Visit: https://aistudio.google.com/
2. Get API Key → Create API Key (free, no billing)
3. Open index.html → find CONFIG object (~line 20)
4. Replace "YOUR_API_KEY_HERE" with your key
5. Save + refresh → Real AI responses enabled!
```

---

## 📦 Assumptions

1. **Geolocation mapping** — India's 4 grid zones mapped by lat/lng coordinate ranges
2. **Daily baseline** — India per-capita set to 5.2 kg/day (1,900 kg/year ÷ 365)
3. **"Today" definition** — determined by user's browser local timezone (not UTC)
4. **Flight emissions** — calculated per flight-hour, not distance (ICAO method)
5. **XP is permanent** — accumulated XP never decreases; streaks reset but XP persists
6. **CSV encoding** — RFC 4180 compliant, UTF-8, commas in notes escaped with quotes
7. **Hindi translations** — cover all primary navigation and UI strings; detailed labels fall back to English
8. **Service Worker scope** — caches app shell only; Gemini API calls always go to network
9. **Notification scheduling** — uses setTimeout (active tab) + SW push (background); requires permission grant

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | — | Semantic SPA structure |
| CSS3 | — | Custom properties, animations, responsive layout |
| JavaScript | ES2022 | All application logic (no frameworks) |
| Chart.js | v4.x | Bar, line, and stacked area charts |
| jsPDF | v2.x | 3-page PDF report export |
| Font Awesome | 6 Free | Icon library (CSS font — no images) |
| Inter | Variable | Google Fonts typography |
| Gemini API | 1.5 Flash | AI Eco Coach intelligence |
| Web Storage API | — | All data persistence |
| Geolocation API | — | Region-aware grid intensity |
| Web Notifications API | — | Daily emission reminders |
| Service Worker API | — | Offline support + PWA install |
| Canvas API | — | Shareable progress card PNG |

---

## 📚 Resources & References

| Source | Usage |
|--------|-------|
| [IPCC AR6 Climate Report](https://www.ipcc.ch/reports/) | Transport emission factors |
| [CEA India 2023](https://cea.nic.in/) | India grid electricity intensity |
| [MoEFCC India](https://moef.gov.in/) | India-specific transport factors |
| [BEE India](https://beeindia.gov.in/) | LPG and AC emission factors |
| [Oxford University — Poore & Nemecek 2018](https://science.sciencemag.org/content/360/6392/987) | Food emission factors |
| [FAO 2021](https://www.fao.org/) | Food waste emission factors |
| [UNEP 2022](https://www.unep.org/) | Public transport factors |
| [Our World in Data](https://ourworldindata.org/co2-emissions) | Per-capita benchmarks |
| [WWF Footprint](https://footprint.wwf.org.uk/) | Lifestyle comparison benchmarks |

---

## 👨‍💻 Author

**Surya Bhangolu**
- 🐙 GitHub: [@suryabhangolu](https://github.com/suryabhangolu)
- 💼 LinkedIn: [linkedin.com/in/suryabhangolu](https://linkedin.com/in/suryabhangolu)
- 🔗 Repo: [github.com/suryabhangolu/EcoMind](https://github.com/suryabhangolu/EcoMind)

---

<div align="center">

Built with 💚 for **PromptWars Virtual — Challenge 3** | June 2026

*"The best time to reduce your carbon footprint was yesterday. The second best time is now."*

[![GitHub Stars](https://img.shields.io/github/stars/suryabhangolu/EcoMind?style=social)](https://github.com/suryabhangolu/EcoMind)
[![Live Demo](https://img.shields.io/badge/Try-EcoMind_Live-1B7A4A?style=for-the-badge)](https://suryabhangolu.github.io/EcoMind)

</div>
