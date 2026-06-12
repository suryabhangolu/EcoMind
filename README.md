# EcoMind — Carbon Footprint Awareness Platform
> PromptWars Virtual — Challenge 3 Submission

EcoMind is a complete, fully functional, production-ready Carbon Footprint Awareness Single Page Application (SPA). It empowers individuals to track, understand, and reduce their daily carbon emissions through interactive data visualization, gamification, and an AI-powered coach.

## Live Demo
[EcoMind Live Demo on GitHub Pages](https://yourusername.github.io/ecomind)

## Challenge Vertical
**Carbon Footprint Awareness** — helping users develop awareness of their daily ecological impacts, log transport, food, home energy, and shopping data, and take actionable reduction steps under guidance of a Gemini-powered Coach.

## Features
- [x] **Hero CO2 Meter:** SVG circular progress ring indicating daily emissions against daily budget limits.
- [x] **Metric Cards Grid:** View Today, Week, Month, and Streaks with historical trend indications.
- [x] **7-Day Trend Chart:** Visual bar charts color-coded by daily emission bounds (green/amber/red).
- [x] **Category Breakdown:** Interactive bars representing sector footprints (Transport, Food, Energy, Shopping).
- [x] **Quick-Log Buttons:** Fast-track buttons to instantly log common activities.
- [x] **Daily Calculator Form:** 4 collapsible accordions with real-time computations and inputs verification.
- [x] **Location Grid Intensity:** Utilizes Geolocation API to auto-adjust electricity emission factors by region in India.
- [x] **AI Eco Coach:** Chatbot integrated with `gemini-1.5-flash` API and smart local keyword-based fallbacks.
- [x] **Goal Budgeting:** Dynamic monthly emission limits with target progress indicators.
- [x] **30-Day Trend Chart:** Line charts with dashed daily goal limits and filled progress bounds.
- [x] **Gamification System:** Accumulate XP (+10 per log, +25 per goal, +50 per badge, +5 per tip adopted) to level up from Eco Newbie to Planet Protector.
- [x] **Badge Grid:** Unlock 8 unique badges (e.g., First Log, Plant Power, Transport Hero) when target criteria are met.
- [x] **Reports Export:** Generate multi-page PDF reports (cover page, logged tables, comparative benchmarks) and RFC 4180 compliant CSV exports.
- [x] **PWA Installability:** Fully configured `manifest.json` and offline caching `sw.js` supporting push reminders.
- [x] **Dark/Light Toggles:** Complete theme flexibility with custom properties, loaded before first-paint to prevent flash.
- [x] **Multi-Language EN/HI:** Comprehensive EN and HI translation mapping.
- [x] **Built-in Test Runner:** Verify calculations and structures via `/#test` hash routing.

## Architecture & Approach
- **Single Page Application (SPA):** Built entirely in `index.html` with modular CSS styling and Vanilla JS, avoiding build processes or client overhead.
- **Data Model (localStorage):** All data is stored locally in the browser with `try/catch` JSON parses, validated schemas, and debounced writes.
  - Key `ecomind_logs` stores detailed daily JSON entries.
  - Key `ecomind_goal` stores monthly target budget.
  - Key `ecomind_theme` stores user theme preferences.
  - Key `ecomind_tips` stores adopting tip IDs.
  - Key `ecomind_badges` stores unlocked badges.
  - Key `ecomind_xp` tracks gamified experience points.
  - Key `ecomind_streak` tracks consistent logs.
  - Key `ecomind_chat` stores conversational history.
  - Key `ecomind_lang` tracks language choice.
  - Key `ecomind_notif` tracks notification permission settings.

## AI Coach Logic
The coach constructs a system prompt containing live state parameters:
```
User data summary:
- Top emission category: [calculated top sector]
- This month total: [sum current month logs] kg CO2
- Today's total: [today log sum] kg CO2
- Monthly goal: [goal limit] kg CO2
- Days logged this month: [log count]
```
This data is prepended to the system prompt and submitted to the `gemini-1.5-flash` model. If the API key is not configured or network issues occur, the app seamlessly reverts to a keyword-matching fallback analyzer providing localized suggestions.

## Emission Factors & Data Sources
Footprint multipliers are hardcoded based on India-specific grid profiles and international standards (IPCC, UNEP, MoEFCC):
- **Transport (kg CO2/km):** Petrol Car: `0.21` | Motorbike: `0.11` | Bus/Train: `0.03` | Flight: `255.0` per hour.
- **Food (kg CO2/meal):** Meat meal: `3.3` | Vegetarian: `1.1` | Vegan: `0.7` | Food waste: `2.5` per kg.
- **Energy (kg CO2/unit):** Electricity: `0.82` (national grid average, custom region mapping: North `0.79`, South `0.75`, East `0.91`, West `0.83`) | LPG Cylinder: `1.51` | 1.5 Ton AC: `1.23` per hour.
- **Shopping (kg CO2/item):** Clothes: `12.0` | Electronics: `70.0` | Deliveries: `0.5`.

## How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ecomind.git
   ```
2. Open `index.html` directly in any modern web browser.
3. Configure your Gemini API key in `CONFIG.GEMINI_API_KEY` (line ~1050 of `index.html`) to activate live AI chat.
4. To test PWA features locally, run a static server:
   ```bash
   npx serve .
   ```

## Tech Stack
- **Languages:** HTML5, CSS3, Vanilla JavaScript (ES6+).
- **Libraries:** Chart.js v4 (CDN), jsPDF v2 (CDN), Font Awesome 6 (CDN).
- **AI Integration:** Google Gemini API (`gemini-1.5-flash`).

## Testing
Append `#test` to your app URL (e.g. `http://localhost:5000/#test`) or visit the Test panel to run the 12 unit tests verifying calculations, storage, and sanitization.

## Assumptions
- Geolocation coordinates are mapped to India regional grid zones (North, South, East, West) to evaluate grid intensity factors.
- Baseline India per-capita daily emissions are set to `5.2 kg CO2` for tracking indicators.
- CSV exports conform to RFC 4180 rules.

## Score Optimization
- **Performance:** Optimized page speed by lazily loading Chart.js and jsPDF libraries only on demand or asynchronously.
- **Accessibility:** Meets WCAG 2.1 AA requirements by integrating explicit label tags, skip-to-content links, color contrast configurations, and screen reader announcements.
- **Security:** CSP policies prevent unauthorized code executions, and all user input is sanitized before rendering.

## Author
Built for PromptWars Virtual Challenge 3 | June 2026
