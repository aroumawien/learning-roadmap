(() => {
  // Shared floating controls. The guide runs locally; no API keys are needed.
  const floating = document.createElement('div');
  floating.className = 'floating-tools';
  floating.innerHTML = `<button class="float-button" id="assistantToggle" aria-label="Open Devpath AI Assistant" aria-expanded="false" aria-controls="assistantPanel"><span aria-hidden="true">✦</span></button><a class="float-button" href="#home" aria-label="Back to top"><span aria-hidden="true">↑</span></a>`;
  document.body.append(floating);
  const panel = document.createElement('section');
  panel.id='assistantPanel'; panel.className='assistant-panel'; panel.hidden=true;
  panel.setAttribute('aria-label','Devpath AI Assistant');
  panel.innerHTML=`<div class="assistant-head"><strong>✦ Devpath AI Assistant</strong><button id="assistantClose" aria-label="Close assistant">×</button></div><p class="assistant-disclosure">Local roadmap guide. No online AI model is connected. Searches your learning tracks; no message is sent to a server.</p><div id="assistantMessages" class="assistant-messages" role="log" aria-live="polite"><p>Ask “What should I learn next?”, “Excel”, “free graphics tools” or “AI for reporting”.</p></div><form id="assistantForm"><label class="sr-only" for="assistantQuestion">Ask about your roadmap</label><input id="assistantQuestion" maxlength="300" placeholder="Ask about your learning…" required><button type="submit">Ask</button></form><a class="assistant-online" href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">Open ChatGPT for an online AI conversation ↗</a>`;
  document.body.append(panel);
  const opener=document.getElementById('assistantToggle'), input=document.getElementById('assistantQuestion');
  function close(){panel.hidden=true;opener.setAttribute('aria-expanded','false');opener.focus();}
  opener.addEventListener('click',()=>{panel.hidden=!panel.hidden;opener.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden)input.focus();});
  document.getElementById('assistantClose').addEventListener('click',close);
  panel.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
  const messages=document.getElementById('assistantMessages');
  document.getElementById('assistantForm').addEventListener('submit',async e=>{
    e.preventDefault();const question=input.value.trim();if(!question)return;input.value='';
    const user=document.createElement('p');user.className='user-message';user.textContent=question;messages.append(user);
    const answer=document.createElement('div');answer.className='guide-message';messages.append(answer);
    let tracks=window.learningTracks;
    if(!tracks){try{await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='catalog.js';script.onload=resolve;script.onerror=reject;document.head.append(script);});tracks=window.learningTracks;}catch{answer.textContent='Open a course tab to browse learning resources. The local catalogue could not be loaded.';return;}}
    const q=question.toLowerCase();
    if(/next|start|schedule|when|plan/.test(q)){
      answer.textContent='Continue your current Software & Web plan through April 2028. Practise AI in short flexible sessions. Then follow Games → Graphics → Video → Audio → Architecture → Cyber Security → Cloud → Data → Networking → Repair → Microsoft Office. Refresh prerequisites earlier when needed.';
      const a=document.createElement('a');a.href='software.html';a.textContent='Continue Software & Web →';answer.append(a);
    }else{
      const tokens=q.replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(w=>w.length>2&&!['the','for','and','how','can','what','tools','learn','learning'].includes(w));
      const results=[];
      for(const [key,track]of Object.entries(tracks))for(const t of track.tools){const hay=(t.name+' '+t.overview+' '+t.use+' '+track.title).toLowerCase();const score=tokens.reduce((n,w)=>n+(hay.includes(w)?1:0),0);if(score)results.push({key,t,score});}
      results.sort((a,b)=>b.score-a.score||b.t.rating-a.t.rating);
      answer.textContent=results.length?'Here are matching roadmap resources:':'Try a specific subject such as Python, Excel, Photoshop, AI, networking or free graphics.';
      for(const {key,t}of results.slice(0,3)){const card=document.createElement('p');card.textContent=t.name+' — '+t.overview+' ';const a=document.createElement('a');a.href=key==='games'?'software.html#game-development':key+'.html';a.textContent='Open learning track →';card.append(a);answer.append(card);}
    }
    messages.scrollTop=messages.scrollHeight;
  });

  // Home-only image slideshow and learning-preview screen.
  const slides=[...document.querySelectorAll('.hero-slide')];
  if(!slides.length)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let slideIndex=0, demoIndex=0, position=0, paused=reduced;
  slides[0].classList.add('active');
  const hero=document.querySelector('.home-slideshow');
  const controls=document.createElement('div');controls.className='slideshow-controls';
  controls.innerHTML='<button id="previousSlide" aria-label="Previous hero image">‹</button><span id="slideLabel">1 / 5</span><button id="nextSlide" aria-label="Next hero image">›</button><button id="slidePause" aria-label="Pause hero slideshow">Pause</button>';
  hero.append(controls);
  let slidePaused=reduced;
  const slidePause=document.getElementById('slidePause');
  function showSlide(i){slides[slideIndex].classList.remove('active');slideIndex=(i+slides.length)%slides.length;slides[slideIndex].classList.add('active');document.getElementById('slideLabel').textContent=`${slideIndex+1} / 5`;}
  document.getElementById('previousSlide').onclick=()=>showSlide(slideIndex-1);
  document.getElementById('nextSlide').onclick=()=>showSlide(slideIndex+1);
  function updateSlidePause(){slidePause.textContent=slidePaused?'Play':'Pause';slidePause.setAttribute('aria-label',slidePaused?'Play hero slideshow':'Pause hero slideshow');hero.classList.toggle('motion-paused',slidePaused);}
  slidePause.onclick=()=>{slidePaused=!slidePaused;updateSlidePause();};updateSlidePause();
  setInterval(()=>{if(!slidePaused&&!document.hidden)showSlide(slideIndex+1);},6500);
  const demos=[
    {title:'Python · Check a report',code:'def check_total(planned, actual):\n    difference = actual - planned\n    return difference\n\nprint(check_total(200, 185))\n# Result: -15'},
    {title:'HTML · Build a learning page',code:'<main>\n  <h1>Keep learning</h1>\n  <section class="courses">\n    <h2>Your next project</h2>\n    <p>Learn. Practise. Build.</p>\n  </section>\n</main>'},
    {title:'JavaScript · Make a decision',code:"function playRound(playerMove) {\n  const computerMove = pickMove();\n  if (playerMove === computerMove) {\n    return 'Tie!';\n  }\n  return compareMoves(playerMove, computerMove);\n}"},
    {title:'CSS · Responsive layouts',code:'.courses {\n  display: grid;\n  gap: 1rem;\n  grid-template-columns:\n    repeat(auto-fit, minmax(240px, 1fr));\n}\n/* Adapts to the available width */'},
    {title:'CorelDRAW · Draw a vector',visual:'vector'},
    {title:'Photoshop · Edit a photograph',visual:'photo'},
    {title:'Final Cut Pro · Assemble a video',visual:'video'}
  ];
  const canvas=document.getElementById('demoCanvas'), title=document.getElementById('demoTitle'), count=document.getElementById('demoCount'), pause=document.getElementById('demoPause');
  let codeNode=null;
  function renderDemo(){const d=demos[demoIndex];position=0;title.textContent=d.title;count.textContent=`${demoIndex+1} / ${demos.length}`;canvas.className='demo-canvas demo-enter';canvas.replaceChildren();codeNode=null;
    if(d.code){codeNode=document.createElement('pre');codeNode.textContent=paused?d.code:'';canvas.append(codeNode);}
    if(d.visual==='vector')canvas.innerHTML='<div class="vector-demo"><svg viewBox="0 0 400 140" aria-label="Illustrative vector drawing"><path class="vector-path" d="M55 110 C80 20 150 20 180 100 S290 130 345 35" fill="none" stroke="#54e1ae" stroke-width="5"/><g fill="#668fff"><rect x="49" y="104" width="12" height="12"/><rect x="174" y="94" width="12" height="12"/><rect x="339" y="29" width="12" height="12"/></g><path d="M55 110 L80 20 M180 100 L150 20 M345 35 L290 130" stroke="#7184a4" stroke-dasharray="4 4"/></svg><span>Pen tool → Edit nodes → Export SVG</span></div>';
    if(d.visual==='photo')canvas.innerHTML='<div class="photo-demo"><img src="hero1.png" alt="Example photograph for an editing demonstration"><div class="photo-controls"><span>Layers</span><span>Exposure +0.3</span><span>Colour balance</span><span>Mask &amp; retouch</span></div></div>';
    if(d.visual==='video')canvas.innerHTML='<div class="video-demo"><div class="video-monitor"><img src="hero2.png" alt="Example video frame"></div><div class="timeline"><span>Interview</span><span>B-roll</span><span>Titles</span><span>Music waveform ▂▅▃▇▂▅</span><i class="playhead"></i></div></div>';
  }
  function updateDemoPause(){pause.textContent=paused?'Play':'Pause';pause.setAttribute('aria-label',paused?'Play learning preview':'Pause learning preview');canvas.classList.toggle('demo-paused',paused);}
  pause.onclick=()=>{paused=!paused;updateDemoPause();};
  renderDemo();updateDemoPause();
  setInterval(()=>{if(paused||document.hidden)return;const d=demos[demoIndex];if(d.code&&codeNode){position=Math.min(position+3,d.code.length);codeNode.textContent=d.code.slice(0,position);}},45);
  setInterval(()=>{if(paused||document.hidden)return;demoIndex=(demoIndex+1)%demos.length;renderDemo();updateDemoPause();},8000);
})();
