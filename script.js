const modules = [
  {
    id: 17,
    group: "web",
    title: "HTML5",
    dates: "Completed before Nov 2026",
    duration: "Completed",
    topics:
      "Semantic HTML, forms, tables, images, multimedia, accessibility and document structure.",
    channel: "Dani Krossing",
    channelUrl: "https://www.youtube.com/channel/UCzyuZJ8zZ-Lhfnz41DG5qLw",
    tutorial: "Dani Krossing HTML5 & CSS course",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Dani+Krossing+HTML+CSS+2023+full+course",
    project: "Already completed: structured, multi-page websites.",
  },
  {
    id: 18,
    group: "web",
    title: "CSS3",
    dates: "Completed before Nov 2026",
    duration: "Completed",
    topics:
      "Selectors, box model, Flexbox, Grid, responsive media queries, layouts and animations.",
    channel: "Dani Krossing",
    channelUrl: "https://www.youtube.com/channel/UCzyuZJ8zZ-Lhfnz41DG5qLw",
    tutorial: "Dani Krossing CSS Grid and responsive design",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Dani+Krossing+CSS+Grid+responsive+website+HTML+CSS",
    project: "Already completed: responsive website design.",
  },

  {
    id: 1,
    group: "web",
    title: "Advanced JavaScript",
    dates: "2–22 Nov 2026",
    duration: "3 weeks",
    topics:
      "ES6+, array methods, DOM, async/await, Fetch API, JSON, modules and error handling.",
    channel: "SuperSimpleDev",
    channelUrl: "https://www.youtube.com/@TraversyMedia",
    tutorial: "JavaScript Tutorial Full Course - Beginner to Pro",
    tutorialUrl: "https://www.youtube.com/watch?v=EerdGm-ehJQ&t=17755s",
    project: "Build interactive applications with multiple connected features",
  },
  {
    id: 2,
    group: "web",
    title: "TypeScript",
    dates: "23 Nov–6 Dec 2026",
    duration: "2 weeks",
    topics:
      "Types, interfaces, unions, generics, classes, type narrowing and modules.",
    channel: "The Net Ninja",
    channelUrl: "https://www.youtube.com/@NetNinja",
    tutorial: "TypeScript Tutorial Series",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=The+Net+Ninja+TypeScript+Tutorial",
    project: "Convert your task manager from JavaScript to TypeScript.",
  },
  {
    id: 3,
    group: "web",
    title: "React",
    dates: "7 Dec 2026–3 Jan 2027",
    duration: "4 weeks",
    topics:
      "JSX, components, props, hooks, state, forms, data fetching and reusable interfaces.",
    channel: "The Net Ninja",
    channelUrl: "https://www.youtube.com/@NetNinja",
    tutorial: "Modern React Tutorial",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Net+Ninja+Modern+React+Tutorial",
    project: "Responsive administrative dashboard.",
  },
  {
    id: 4,
    group: "web",
    title: "Next.js",
    dates: "4–31 Jan 2027",
    duration: "4 weeks",
    topics:
      "App Router, layouts, server components, route handlers, caching and data fetching.",
    channel: "freeCodeCamp",
    channelUrl: "https://www.youtube.com/@freecodecamp",
    tutorial: "Next.js App Router Full Course",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=freeCodeCamp+Next.js+App+Router+full+course",
    project: "Dynamic website with public pages and admin interface.",
  },
  {
    id: 5,
    group: "web",
    title: "Node.js and REST APIs",
    dates: "1–14 Feb 2027",
    duration: "2 weeks",
    topics:
      "HTTP, server fundamentals, API endpoints, middleware, JSON and API testing.",
    channel: "Traversy Media",
    channelUrl: "https://www.youtube.com/@TraversyMedia",
    tutorial: "Node.js and Express REST API",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Traversy+Media+Node.js+Express+REST+API",
    project: "REST API for articles, projects and vacancies.",
  },
  {
    id: 6,
    group: "web",
    title: "SQL and MySQL",
    dates: "15 Feb–7 Mar 2027",
    duration: "3 weeks",
    topics:
      "Tables, CRUD, primary and foreign keys, joins, indexes, normalization and transactions.",
    channel: "Programming with Mosh",
    channelUrl: "https://www.youtube.com/@programmingwithmosh",
    tutorial: "MySQL Tutorial for Beginners",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Programming+with+Mosh+MySQL+Tutorial+for+Beginners",
    project: "Relational MySQL database connected to your backend.",
  },
  {
    id: 7,
    group: "web",
    title: "Authentication and Security",
    dates: "8–21 Mar 2027",
    duration: "2 weeks",
    topics:
      "Sessions, password hashing, authorization, roles, validation, CSRF and secure cookies.",
    channel: "Web Dev Simplified",
    channelUrl: "https://www.youtube.com/@WebDevSimplified",
    tutorial: "Authentication and Web Security",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Web+Dev+Simplified+authentication+authorization+web+security",
    project: "Secure administrator and editor accounts.",
  },
  {
    id: 8,
    group: "web",
    title: "Python Programming",
    dates: "22 Mar–4 Apr 2027",
    duration: "2 weeks",
    topics:
      "Functions, collections, file handling, exceptions, virtual environments and automation.",
    channel: "Corey Schafer",
    channelUrl: "https://www.youtube.com/@coreyms",
    tutorial: "Python Beginner Tutorials",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Corey+Schafer+Python+Tutorials+Beginner",
    project: "Python script to validate Excel reports.",
  },
  {
    id: 9,
    group: "web",
    title: "Testing, Docker and Deployment",
    dates: "5–18 Apr 2027",
    duration: "2 weeks",
    topics:
      "Unit and end-to-end tests, Docker basics, environment variables, CI/CD and deployment.",
    channel: "TechWorld with Nana",
    channelUrl: "https://www.youtube.com/@TechWorldwithNana",
    tutorial: "Docker Tutorial for Beginners",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=TechWorld+with+Nana+Docker+Tutorial+for+Beginners",
    project: "Test and deploy a database-connected application.",
  },
  {
    id: 10,
    group: "web",
    title: "Full-Stack Web Capstone",
    dates: "19 Apr–2 May 2027",
    duration: "2 weeks",
    topics:
      "Architecture, integration, testing, documentation, performance and deployment.",
    channel: "JavaScript Mastery",
    channelUrl: "https://www.youtube.com/@JavaScriptMastery",
    tutorial: "Full-Stack Next.js Projects",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=JavaScript+Mastery+Next.js+full+stack+application",
    project: "Initial working version of SAFE South Sudan CMS.",
  },
  {
    id: 11,
    group: "mobile",
    title: "React Native Fundamentals",
    dates: "3–23 May 2027",
    duration: "3 weeks",
    topics:
      "Native components, styles, props, state, touch events, lists and platform differences.",
    channel: "notJust.dev",
    channelUrl: "https://www.youtube.com/@notjustdev",
    tutorial: "React Native Beginner Course",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=notJust.dev+React+Native+Expo+beginner+course",
    project: "Mobile task management application.",
  },
  {
    id: 12,
    group: "mobile",
    title: "Expo and Mobile Navigation",
    dates: "24 May–13 Jun 2027",
    duration: "3 weeks",
    topics:
      "Expo setup, Expo Router, stacks, tabs, layouts, forms and device capabilities.",
    channel: "Expo",
    channelUrl: "https://www.youtube.com/@expo",
    tutorial: "Expo Router Tutorial",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Expo+Router+React+Native+navigation+tutorial",
    project: "Multi-screen mobile application.",
  },
  {
    id: 13,
    group: "mobile",
    title: "Mobile APIs, Storage and Authentication",
    dates: "14 Jun–4 Jul 2027",
    duration: "3 weeks",
    topics:
      "API integration, authentication, secure storage, SQLite, offline queues and synchronization.",
    channel: "notJust.dev",
    channelUrl: "https://www.youtube.com/@notjustdev",
    tutorial: "React Native APIs, Auth and SQLite",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=notJust.dev+Expo+React+Native+authentication+SQLite+API",
    project: "Mobile application connected to your backend.",
  },
  {
    id: 14,
    group: "mobile",
    title: "Advanced Mobile Development",
    dates: "5–25 Jul 2027",
    duration: "3 weeks",
    topics:
      "Camera, image uploads, notifications, location permissions, performance and testing.",
    channel: "Expo",
    channelUrl: "https://www.youtube.com/@expo",
    tutorial: "Advanced Expo and EAS Build",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Expo+React+Native+camera+notifications+EAS+Build",
    project: "Field monitoring application with offline features.",
  },
  {
    id: 15,
    group: "mobile",
    title: "Mobile Application Capstone",
    dates: "26 Jul–1 Aug 2027",
    duration: "1 week",
    topics:
      "Android builds, app signing, release preparation, testing and distribution.",
    channel: "JavaScript Mastery",
    channelUrl: "https://www.youtube.com/@JavaScriptMastery",
    tutorial: "Full-Stack React Native Project",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=JavaScript+Mastery+React+Native+Expo+full+stack+mobile+app",
    project: "Working Android build of your monitoring app.",
  },
  {
    id: 16,
    group: "portfolio",
    title: "Advanced Projects and Portfolio",
    dates: "2 Aug–31 Oct 2027",
    duration: "13 weeks",
    topics:
      "Algorithms, system design, offline synchronization, code quality, security, documentation and portfolio.",
    channel: "CS50",
    channelUrl: "https://www.youtube.com/@cs50",
    tutorial: "Computer Science and Software Engineering",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=CS50+software+engineering+computer+science",
    project: "Three documented, tested and deployed portfolio projects.",
  },
];
const storageKey = "devpath-completed-v2";
const previousStorageKey = "devpath-completed-v1";
const themeKey = "devpath-theme-v1";
let completed = new Set([17, 18]);
try {
  const raw = localStorage.getItem(storageKey);
  const legacy = localStorage.getItem(previousStorageKey);
  const saved = JSON.parse(raw ?? legacy ?? "[]");
  if (Array.isArray(saved))
    completed = new Set([
      ...saved.filter((n) => Number.isInteger(n) && n >= 1 && n <= 18),
      17,
      18,
    ]);
} catch {}
const grid = document.getElementById("moduleGrid");
function render(filter = "all") {
  const selected = modules
    .filter((m) => filter === "all" || m.group === filter)
    .sort(
      (a, b) =>
        (a.id >= 17 ? -20 + a.id : a.id) - (b.id >= 17 ? -20 + b.id : b.id),
    );
  grid.innerHTML = selected
    .map(
      (m) =>
        `<article class="module-card ${completed.has(m.id) ? "is-complete" : ""}"><div class="module-card-top"><span class="module-number">${String(m.id).padStart(2, "0")}</span><span class="category ${m.group}">${m.group === "web" ? "WEB DEVELOPMENT" : m.group === "mobile" ? "MOBILE DEVELOPMENT" : "PORTFOLIO"}</span></div><h3>${m.title}</h3><div class="module-meta"><span>◷ ${m.duration}</span><span>▦ ${m.dates}</span></div><p class="topics">${m.topics}</p><div class="deliverable"><span>PROJECT OUTCOME</span><p>${m.project}</p></div><div class="module-links"><a href="${m.channelUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${m.channel} YouTube channel">${m.channel} ↗</a><a href="${m.tutorialUrl}" target="_blank" rel="noopener noreferrer" aria-label="Find ${m.tutorial} on YouTube">Watch tutorial ↗</a></div><label class="complete-label"><input type="checkbox" data-id="${m.id}" ${completed.has(m.id) ? "checked" : ""}/><span class="fake-checkbox" aria-hidden="true">✓</span><span>${completed.has(m.id) ? "Completed" : "Mark as completed"}</span></label></article>`,
    )
    .join("");
  updateProgress();
}
function updateProgress() {
  const pct = Math.round((completed.size / modules.length) * 100);
  document.getElementById("heroPercent").textContent = pct + "%";
  document.getElementById("heroProgress").style.width = pct + "%";
  document.getElementById("heroCount").textContent =
    `${completed.size} of ${modules.length} modules completed`;
}
let activeFilter = "all";
grid.addEventListener("change", (e) => {
  const input = e.target.closest("input[data-id]");
  if (!input) return;
  const id = Number(input.dataset.id);
  if (input.checked) completed.add(id);
  else completed.delete(id);
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completed]));
  } catch {}
  render(activeFilter);
});
document.querySelectorAll(".filter").forEach((button) =>
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    render(activeFilter);
  }),
);
document.getElementById("resetProgress").addEventListener("click", () => {
  if (!completed.size) return;
  if (confirm("Reset all completed modules? This cannot be undone.")) {
    completed = new Set([17, 18]);
    try {
      localStorage.setItem(storageKey, JSON.stringify([...completed]));
    } catch {}
    render(activeFilter);
  }
});
const toggle = document.getElementById("themeToggle");
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "☀" : "☾";
  toggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
}
let theme = "dark";
try {
  theme = localStorage.getItem(themeKey) || "dark";
} catch {}
applyTheme(theme === "light" ? "light" : "dark");
toggle.addEventListener("click", () => {
  const next =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem(themeKey, next);
  } catch {}
});
render();

// Supplementary subjects are informational and intentionally separate from the core completion percentage.
const supplementary = [
  {
    title: "Systems Analysis and Design",
    start: "November 2026",
    time: "20–30 min/week",
    topics:
      "Requirements gathering, feasibility, use cases, process modelling and system specifications.",
    channel: "Neso Academy",
    url: "https://www.youtube.com/@nesoacademy",
    query: "Neso Academy system analysis and design tutorial",
  },
  {
    title: "Computer Networks and Data Communications",
    start: "November 2026",
    time: "20–30 min/week",
    topics:
      "OSI and TCP/IP models, switching, routing, addressing, DNS and communication protocols.",
    channel: "Practical Networking",
    url: "https://www.youtube.com/@PracticalNetworking",
    query: "Practical Networking networking fundamentals OSI TCP IP",
  },
  {
    title: "Research Methodology in Computing",
    start: "November 2026",
    time: "15–20 min/week",
    topics:
      "Research problems, literature reviews, methodology, sampling, ethics and referencing.",
    channel: "Grad Coach",
    url: "https://www.youtube.com/@GradCoach",
    query: "Grad Coach research methodology literature review research design",
  },
  {
    title: "Computer Repair and Maintenance",
    start: "December 2026",
    time: "15–20 min/week",
    topics:
      "Hardware identification, troubleshooting, RAM, storage, BIOS/UEFI and preventive maintenance.",
    channel: "Professor Messer",
    url: "https://www.youtube.com/@professormesser",
    query: "Professor Messer CompTIA A+ hardware troubleshooting maintenance",
  },
  {
    title: "Principles of Operating Systems",
    start: "November 2026",
    time: "20–30 min/week",
    topics:
      "Processes, threads, scheduling, memory, files, I/O, protection and security.",
    channel: "Neso Academy",
    url: "https://www.youtube.com/@nesoacademy",
    query: "Neso Academy operating systems complete playlist",
  },
  {
    title: "Principles of Software Engineering",
    start: "December 2026",
    time: "20–30 min/week",
    topics:
      "SDLC, Agile, design principles, requirements, quality assurance and testing.",
    channel: "Neso Academy",
    url: "https://www.youtube.com/@nesoacademy",
    query: "Neso Academy software engineering complete course",
  },
  {
    title: "ICT Project Planning and Management",
    start: "February 2027",
    time: "20–30 min/week",
    topics:
      "Project charter, scope, WBS, Gantt charts, milestones, risk, budget and stakeholder management.",
    channel: "Project Management Institute",
    url: "https://www.youtube.com/@PMInstitute",
    query:
      "Project Management Institute project planning scope WBS risk management",
  },
  {
    title: "Network Configuration and Management",
    start: "February 2027",
    time: "20–30 min/week",
    topics:
      "IP subnetting, VLANs, routing, switches, device configuration and troubleshooting.",
    channel: "Jeremy’s IT Lab",
    url: "https://www.youtube.com/@JeremysITLab",
    query: "Jeremy IT Lab CCNA network configuration VLAN routing",
  },
  {
    title: "Network and Information Security",
    start: "August 2027",
    time: "30–45 min/week",
    topics:
      "CIA triad, access control, secure network configuration, encryption, threats and incident response.",
    channel: "Professor Messer",
    url: "https://www.youtube.com/@professormesser",
    query: "Professor Messer Security+ network information security course",
  },
];
const supplementGrid = document.getElementById("supplementGrid");
if (supplementGrid)
  supplementGrid.innerHTML = supplementary
    .map(
      (s, i) =>
        `<article class="supplement-card"><div class="supplement-top"><span class="supplement-number">${String(i + 1).padStart(2, "0")}</span><span class="supplement-date">START ${s.start.toUpperCase()}</span></div><h3>${s.title}</h3><p>${s.topics}</p><div class="supplement-time">◷ ${s.time} · flexible rotation</div><div class="module-links"><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.channel} ↗</a><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(s.query)}" target="_blank" rel="noopener noreferrer">Find tutorial ↗</a></div></article>`,
    )
    .join("");

// Optional post-roadmap specialization: independent progress, never alters the 18-module core score.
const specializationModules = [
  {
    id: "php",
    title: "PHP Fundamentals & Modern PHP",
    dates: "1–28 Nov 2027",
    duration: "4 weeks",
    topics:
      "PHP 8+, syntax, forms, arrays, functions, OOP, namespaces, Composer, PDO and safe database access.",
    channel: "Program With Gio",
    channelUrl: "https://www.youtube.com/@ProgramWithGio",
    tutorial: "Learn PHP the Right Way",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Program+With+Gio+Learn+PHP+The+Right+Way",
    project: "PHP-powered contact form and CRUD dashboard.",
  },
  {
    id: "laravel",
    title: "Laravel Framework",
    dates: "29 Nov–26 Dec 2027",
    duration: "4 weeks",
    topics:
      "MVC, routing, Blade, Eloquent ORM, migrations, validation, authentication and REST APIs.",
    channel: "The Net Ninja",
    channelUrl: "https://www.youtube.com/@NetNinja",
    tutorial: "Laravel Tutorial for Beginners",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=The+Net+Ninja+Laravel+Tutorial+for+Beginners",
    project: "Laravel API with secure admin access.",
  },
  {
    id: "mysqladvanced",
    title: "Advanced MySQL & Database Design",
    dates: "27 Dec 2027–23 Jan 2028",
    duration: "4 weeks",
    topics:
      "Query plans, indexing, transactions, locking, optimization, backups, restore, permissions and schema migrations.",
    channel: "freeCodeCamp",
    channelUrl: "https://www.youtube.com/@freecodecamp",
    tutorial: "Advanced MySQL Query Optimization",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=freeCodeCamp+MySQL+indexes+query+optimization+database+design",
    project: "Optimize and back up the SAFE database.",
  },
  {
    id: "linux",
    title: "Linux, Servers & Nginx",
    dates: "24 Jan–13 Feb 2028",
    duration: "3 weeks",
    topics:
      "Linux command line, SSH keys, file permissions, web servers, TLS, environment variables and server logs.",
    channel: "Learn Linux TV",
    channelUrl: "https://www.youtube.com/@LearnLinuxTV",
    tutorial: "Linux Server Administration",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Learn+Linux+TV+Linux+server+administration+Nginx",
    project: "Deploy a test application to a Linux server.",
  },
  {
    id: "devops",
    title: "GitHub Actions, Docker & CI/CD",
    dates: "14 Feb–5 Mar 2028",
    duration: "3 weeks",
    topics:
      "Containerized services, automated tests, GitHub Actions, deployments, secret management and rollback planning.",
    channel: "TechWorld with Nana",
    channelUrl: "https://www.youtube.com/@TechWorldwithNana",
    tutorial: "Docker and CI/CD for Beginners",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=TechWorld+with+Nana+Docker+CI+CD+GitHub+Actions",
    project: "Automated build, test and deployment workflow.",
  },
  {
    id: "performance",
    title: "Caching, APIs & Application Performance",
    dates: "6–26 Mar 2028",
    duration: "3 weeks",
    topics:
      "API design, pagination, rate limiting, Redis fundamentals, caching, monitoring and performance profiling.",
    channel: "Hussein Nasser",
    channelUrl: "https://www.youtube.com/@hnasr",
    tutorial: "Backend Engineering and Caching",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=Hussein+Nasser+backend+engineering+Redis+caching+API",
    project: "Improve response times and reliability of your API.",
  },
  {
    id: "production",
    title: "Production Security & Full-Stack Capstone",
    dates: "27 Mar–30 Apr 2028",
    duration: "5 weeks",
    topics:
      "OWASP fundamentals, authorization tests, backups, monitoring, documentation, accessibility and production deployment.",
    channel: "freeCodeCamp",
    channelUrl: "https://www.youtube.com/@freecodecamp",
    tutorial: "Laravel Full Stack Project and Security",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=freeCodeCamp+Laravel+PHP+MySQL+full+stack+project+security",
    project:
      "Secure Laravel/MySQL API integrated with an existing web or mobile app.",
  },
];
const specializationKey = "devpath-specialization-v1";
let specializationDone = new Set();
try {
  const saved = JSON.parse(localStorage.getItem(specializationKey) || "[]");
  if (Array.isArray(saved))
    specializationDone = new Set(
      saved.filter((id) => specializationModules.some((m) => m.id === id)),
    );
} catch {}
const specializationGrid = document.getElementById("specializationGrid");
function renderSpecialization() {
  if (!specializationGrid) return;
  specializationGrid.innerHTML = specializationModules
    .map(
      (m, i) =>
        `<article class="module-card ${specializationDone.has(m.id) ? "is-complete" : ""}"><div class="module-card-top"><span class="module-number">${String(i + 19).padStart(2, "0")}</span><span class="category web">POST-ROADMAP</span></div><h3>${m.title}</h3><div class="module-meta"><span>◷ ${m.duration}</span><span>▦ ${m.dates}</span></div><p class="topics">${m.topics}</p><div class="deliverable"><span>PROJECT OUTCOME</span><p>${m.project}</p></div><div class="module-links"><a href="${m.channelUrl}" target="_blank" rel="noopener noreferrer">${m.channel} ↗</a><a href="${m.tutorialUrl}" target="_blank" rel="noopener noreferrer">Watch tutorial ↗</a></div><label class="complete-label"><input type="checkbox" data-specialization="${m.id}" ${specializationDone.has(m.id) ? "checked" : ""}/><span class="fake-checkbox" aria-hidden="true">✓</span><span>${specializationDone.has(m.id) ? "Completed" : "Mark as completed"}</span></label></article>`,
    )
    .join("");
  const pct = Math.round(
    (specializationDone.size / specializationModules.length) * 100,
  );
  document.getElementById("specializationPercent").textContent = pct + "%";
  document.getElementById("specializationCount").textContent =
    `${specializationDone.size} of ${specializationModules.length} completed`;
  document.getElementById("specializationProgress").style.width = pct + "%";
}
if (specializationGrid) {
  specializationGrid.addEventListener("change", (event) => {
    const input = event.target.closest("input[data-specialization]");
    if (!input) return;
    if (input.checked) specializationDone.add(input.dataset.specialization);
    else specializationDone.delete(input.dataset.specialization);
    try {
      localStorage.setItem(
        specializationKey,
        JSON.stringify([...specializationDone]),
      );
    } catch {}
    renderSpecialization();
  });
  renderSpecialization();
}
