(() => {
  const output = document.getElementById('stackDemoCode');
  if (!output) return;
  const examples = [
    ['HTML5 · Page structure', 'Structure webpage content', 'html', '<main class="learning-page">\n  <h1>Learn by building</h1>\n  <section id="courses">\n    <h2>Your learning roadmap</h2>\n    <p>Choose your next project.</p>\n  </section>\n</main>'],
    ['CSS3 · Responsive design', 'Style pages for different screens', 'css', '.courses {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns:\n    repeat(auto-fit, minmax(240px, 1fr));\n}\n/* Columns adapt to available space. */'],
    ['JavaScript · Interactivity', 'Respond to actions and update state', 'javascript', 'function addToCart(quantity) {\n  const nextQuantity = quantity + 1;\n  if (nextQuantity <= 10) {\n    return nextQuantity;\n  }\n  return quantity;\n}\nconsole.log(addToCart(2));'],
    ['Git & GitHub · Version control', 'Track changes and share code', 'shell', '# Save a checked change, then share it.\ngit status\ngit add index.html styles.css\ngit commit -m "Improve responsive layout"\ngit push origin main\n# GitHub hosts the remote repository.'],
    ['TypeScript · Type safety', 'Catch type mistakes while coding', 'typescript', 'interface Course {\n  title: string;\n  completed: boolean;\n}\nconst course: Course = {\n  title: "TypeScript",\n  completed: false\n};'],
    ['React · Reusable interfaces', 'Build UI from components', 'jsx', 'function CourseCard({ title }) {\n  return (\n    <article className="course-card">\n      <h2>{title}</h2>\n      <button>Start learning</button>\n    </article>\n  );\n}'],
    ['Next.js · Application routes', 'Combine pages and server features', 'jsx', '// app/page.jsx: a page component\nexport default function HomePage() {\n  return (\n    <main>\n      <h1>Developer learning hub</h1>\n      <a href="/courses">Browse courses</a>\n    </main>\n  );\n}'],
    ['Node.js · Backend services', 'Handle web requests on the server', 'javascript', 'import { createServer } from "node:http";\n\nconst server = createServer((req, res) => {\n  res.setHeader("Content-Type", "application/json");\n  res.end(JSON.stringify({ status: "ready" }));\n});\nserver.listen(3000);'],
    ['MySQL · Structured data', 'Store, query and relate records', 'sql', '-- Find active courses in a database.\nSELECT title, category\nFROM courses\nWHERE active = 1\nORDER BY title;\n\n-- SQL joins connect related tables.'],
    ['Python · Analysis & automation', 'Check data and automate routine work', 'python', 'def calculate_balance(received, used):\n    balance = received - used\n    return balance\n\nremaining = calculate_balance(500, 125)\nprint(f"Remaining stock: {remaining} kg")\n# Output: Remaining stock: 375 kg'],
    ['React Native · Mobile UI', 'Build interfaces for phones', 'jsx', 'import { View, Text } from "react-native";\n\nexport default function CourseScreen() {\n  return (\n    <View>\n      <Text>Your mobile learning hub</Text>\n    </View>\n  );\n}'],
    ['Expo · Mobile development tools', 'Create, preview and build mobile apps', 'shell', '# Create a new Expo application.\nnpx create-expo-app@latest learning-app\ncd learning-app\n\n# Start the development server.\nnpx expo start\n# Open it in a supported device or emulator.']
  ];
  const title = document.getElementById('stackDemoTitle');
  const purpose = document.getElementById('stackDemoPurpose');
  const counter = document.getElementById('stackDemoCount');
  const pause = document.getElementById('stackDemoPause');
  let index = 0, length = 0, hold = 0;
  let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Lightweight token highlighting for these illustrative snippets.
  // Token text is always inserted with textContent, including HTML examples.
  function tokens(code, language) {
    const pattern = /(<!--[^]*?-->|\/\*[^]*?\*\/|\/\/[^\n]*|--[^\n]*|#[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?(?:px|rem)?\b|[A-Za-z_$][\w$-]*|[^])/g;
    const parts = [];
    let match;
    while ((match = pattern.exec(code))) {
      const text = match[0], offset = match.index;
      let kind = 'punctuation';
      if (/^(<!--|\/\*|\/\/|--|#)/.test(text)) kind = 'comment';
      else if (/^["'`]/.test(text)) kind = 'string';
      else if (/^\d/.test(text)) kind = 'number';
      else if (/^(const|let|var|function|return|if|else|import|from|export|default|interface|def|class|SELECT|FROM|WHERE|ORDER|BY|AS|AND|OR|true|false|None|True|False)$/.test(text)) kind = 'keyword';
      else if (language === 'html' || language === 'jsx') {
        if (/<\/?$/.test(code.slice(0, offset))) kind = 'tag';
        else if (/^\s*=/.test(code.slice(offset + text.length))) kind = 'property';
        else if (/^[A-Z]/.test(text)) kind = 'name';
        else if (/^\s*\(/.test(code.slice(offset + text.length))) kind = 'function';
        else if (/^[A-Za-z_$]/.test(text)) kind = 'property';
      } else if (/^\s*\(/.test(code.slice(offset + text.length))) kind = 'function';
      else if (/^[A-Z]/.test(text)) kind = 'name';
      else if (/^[A-Za-z_$]/.test(text)) kind = 'property';
      parts.push({ text, kind, start: offset });
    }
    return parts;
  }
  let highlighted = [];
  function paint() {
    const fragment = document.createDocumentFragment();
    for (const token of highlighted) {
      if (token.start >= length) break;
      const span = document.createElement('span');
      span.className = 'syntax-' + token.kind;
      span.textContent = token.text.slice(0, length - token.start);
      fragment.append(span);
    }
    output.replaceChildren(fragment);
  }
  function change(next) {
    index = (next + examples.length) % examples.length;
    const [heading, description, language, code] = examples[index];
    title.textContent = heading;
    purpose.textContent = description;
    counter.textContent = `${index + 1} / ${examples.length}`;
    highlighted = tokens(code, language);
    length = paused ? code.length : 0;
    hold = 0;
    paint();
    const canvas = document.getElementById('stackDemoCanvas');
    canvas.classList.remove('demo-enter');
    void canvas.offsetWidth;
    canvas.classList.add('demo-enter');
  }
  function updatePause() {
    pause.textContent = paused ? 'Play' : 'Pause';
    pause.setAttribute('aria-label', paused ? 'Play technology preview' : 'Pause technology preview');
  }
  pause.addEventListener('click', () => { paused = !paused; updatePause(); });
  document.getElementById('stackDemoPrevious').addEventListener('click', () => change(index - 1));
  document.getElementById('stackDemoNext').addEventListener('click', () => change(index + 1));
  change(0); updatePause();
  setInterval(() => {
    if (paused || document.hidden) return;
    const code = examples[index][3];
    if (length < code.length) { length = Math.min(length + 2, code.length); paint(); }
    else if (++hold >= 65) change(index + 1);
  }, 40);
})();
