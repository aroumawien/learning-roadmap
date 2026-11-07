(() => {
  const game = document.getElementById('gameTrack');
  const key = game ? 'games' : document.querySelector('[data-track]')?.dataset.track;
  const track = window.learningTracks?.[key];
  if (!track) return;
  const stages = track.stages.map((s, i) => `<article class="stage"><span class="badge">${s[0]}</span><h3>${String(i + 1).padStart(2, '0')} · ${s[1]}</h3><p>${s[2]}</p></article>`).join('');
  if (game) game.innerHTML = `<div class="stage-grid">${stages}</div><p class="rating-note">Ratings are editorial learning-priority scores, not review averages. Choose Godot first; other engines are optional. YouTube links are labelled searches.</p><strong id="trackProgress"></strong><div id="toolGrid" class="tool-grid"></div>`;
  else document.getElementById('stageGrid').innerHTML = stages;
  const storageKey = 'devpath-track-' + key + '-v1';
  let done = new Set();
  try { const saved = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) done = new Set(saved.filter(n => Number.isInteger(n) && n >= 0 && n < track.tools.length)); } catch {}
  const grid = document.getElementById('toolGrid');
  const search = document.getElementById('toolSearch');
  const cost = document.getElementById('costFilter');
  function draw() {
    const query = (search?.value || '').toLowerCase();
    const filter = cost?.value || 'all';
    let visible = 0;
    grid.innerHTML = track.tools.map((t,i) => {
      const free = /free|open-source/i.test(t.cost);
      if (!(t.name + ' ' + t.overview + ' ' + t.use + ' ' + t.channel).toLowerCase().includes(query) || (filter === 'free' && !free) || (filter === 'paid' && free)) return '';
      visible++;
      const youtube = 'https://www.youtube.com/results?search_query=';
      return `<article class="tool-card ${done.has(i) ? 'is-complete' : ''}"><div class="tool-top"><span class="badge">${t.cost}</span><span class="rating" aria-label="Learning priority ${t.rating} out of 5">${t.rating}/5</span></div><h3>${t.name}</h3><p>${t.overview}</p><div class="tool-use"><strong>Best use &amp; industry fit</strong><p>${t.use}</p></div><details><summary>Learning task &amp; channels</summary><p><strong>Build:</strong> ${t.project}</p><p><strong>YouTube learning channels:</strong></p><div class="channel-links">${t.channel.split(/;| and /).map(name => `<a href="https://www.youtube.com/results?search_query=${encodeURIComponent(name.trim()+' YouTube channel')}" target="_blank" rel="noopener noreferrer">${name.trim()}</a>`).join('')}</div></details><div class="resource-links">${t.lessonUrl ? `<a href="${t.lessonUrl}" target="_blank" rel="noopener noreferrer">${t.lessonTitle} ↗</a>` : ''}<a href="${t.url}" target="_blank" rel="noopener noreferrer">Official learning / product ↗</a><a href="${youtube + encodeURIComponent(t.channel + ' official YouTube channel')}" target="_blank" rel="noopener noreferrer">Find channel ↗</a><a href="${youtube + encodeURIComponent(t.query)}" target="_blank" rel="noopener noreferrer">Find video tutorial ↗</a></div><label class="track-check"><input type="checkbox" data-tool="${i}" ${done.has(i) ? 'checked' : ''}> Practised the project</label></article>`;
    }).join('');
    document.getElementById('trackProgress').textContent = `${done.size} / ${track.tools.length} projects practised`;
    const empty = document.getElementById('noResults');
    if (empty) empty.hidden = visible !== 0;
  }
  grid.addEventListener('change', e => {
    if (!e.target.matches('input[data-tool]')) return;
    const i = Number(e.target.dataset.tool);
    if (e.target.checked) done.add(i); else done.delete(i);
    try { localStorage.setItem(storageKey, JSON.stringify([...done])); } catch {}
    // Update in place to preserve keyboard focus and open details.
    e.target.closest('.tool-card').classList.toggle('is-complete', e.target.checked);
    document.getElementById('trackProgress').textContent = `${done.size} / ${track.tools.length} projects practised`;
  });
  search?.addEventListener('input', draw);
  cost?.addEventListener('change', draw);
  draw();
})();
