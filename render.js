/*
  RENDER ENGINE — you shouldn't need to edit this file.
  It reads the SITE object from content.js and builds the page.
  To change your content, edit content.js instead.
*/

function el(html){
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content;
}

// ---------- Topbar ----------
document.getElementById('topbar-status').append(
  el(`<span class="status-dot"></span>${SITE.topbarStatus}`)
);

// ---------- Hero ----------
document.getElementById('hero-eyebrow').textContent = SITE.hero.eyebrow;
document.getElementById('hero-name').innerHTML =
  `${SITE.hero.nameLine1}<br>${SITE.hero.nameLine2}<span class="cursor">&nbsp;</span>`;
document.getElementById('hero-tagline').textContent = SITE.hero.tagline;

const telemetryEl = document.getElementById('hero-telemetry');
SITE.hero.telemetry.forEach(cell=>{
  telemetryEl.append(el(`
    <div class="cell">
      <div class="label">${cell.label}</div>
      <div class="value ${cell.color}">${cell.value}</div>
    </div>
  `));
});

// ---------- About ----------
const aboutEl = document.getElementById('about-content');
const aboutParas = SITE.about.paragraphs.map(p=>`<p>${p}</p>`).join('');
const c = SITE.about.card;
aboutEl.append(el(`
  <div>${aboutParas}</div>
  <div class="clearance-card">
    <div class="row"><span>Handle</span><span>${c.handle}</span></div>
    <div class="row"><span>Domain</span><span>${c.domain}</span></div>
    <div class="row"><span>Experience</span><span>${c.experience}</span></div>
    <div class="row"><span>Stack</span><span>${c.stack}</span></div>
    <div class="row"><span>Languages</span><span>${c.languages}</span></div>
    <div class="row"><span>Availability</span><span style="color:var(--cyan)">${c.availability}</span></div>
    <div class="stamp">${c.stamp}</div>
  </div>
`));

// ---------- Skills ----------
const skillsEl = document.getElementById('skills-content');
SITE.skills.forEach(cat=>{
  const rows = cat.items.map(item=>`
    <div class="skill-bar-row">
      <div class="skill-bar-top"><span>${item.name}</span><span>${item.level}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${item.percent}%"></div></div>
    </div>
  `).join('');
  skillsEl.append(el(`
    <div class="skill-cat">
      <h3>${cat.category}</h3>
      ${rows}
    </div>
  `));
});

// ---------- Experience ----------
const expEl = document.getElementById('experience-content');
SITE.experience.forEach(job=>{
  const bullets = job.bullets.map(b=>`<li>${b}</li>`).join('');
  expEl.append(el(`
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-meta">${job.date}</div>
      <div class="tl-role">${job.role}</div>
      <div class="tl-org">// ${job.org}</div>
      <ul>${bullets}</ul>
    </div>
  `));
});

// ---------- Projects ----------
const projEl = document.getElementById('projects-content');
SITE.projects.forEach(p=>{
  const stack = p.stack.map(s=>`<span>${s}</span>`).join('');
  projEl.append(el(`
    <div class="proj-card">
      <div class="proj-top">
        <span class="proj-title">${p.title}</span>
        <span class="sev ${p.tagType}">${p.tag}</span>
      </div>
      <p>${p.description}</p>
      <div class="stack">${stack}</div>
    </div>
  `));
});

// ---------- Research ----------
const researchEl = document.getElementById('research-content');
SITE.research.forEach(r=>{
  researchEl.append(el(`
    <div class="research-item">
      <div class="research-id">${r.id}</div>
      <div class="research-body">
        <h4>${r.title}</h4>
        <p>${r.description}</p>
      </div>
      <div class="research-date">${r.date}</div>
    </div>
  `));
});

// ---------- Education ----------
const eduEl = document.getElementById('education-content');
SITE.education.degrees.forEach(d=>{
  eduEl.append(el(`
    <div class="edu-card">
      <div class="deg">${d.degree}</div>
      <div class="inst">// ${d.institution}</div>
      <div class="yr">${d.years}</div>
    </div>
  `));
});

const certsEl = document.getElementById('certs-content');
SITE.education.certifications.forEach(cert=>{
  const pendingClass = cert.pending ? 'pending' : '';
  certsEl.append(el(`
    <div class="cert-chip ${pendingClass}"><span class="dot"></span>${cert.name}</div>
  `));
});

// ---------- Contact ----------
const contactEl = document.getElementById('contact-content');
const term = SITE.contact.terminal.map(line=>{
  if(line.prompt){
    return `<div><span class="p1">visitor@web</span>:~$ ${line.text}</div>`;
  }
  const cls = line.highlight ? 'p2' : '';
  return `<div class="${cls}">${line.text}</div>`;
}).join('');

contactEl.append(el(`
  <div>
    <h3>${SITE.contact.heading}</h3>
    <p>${SITE.contact.description}</p>
    <div class="contact-links">
      <a href="mailto:${SITE.contact.email}">${SITE.contact.email} <span class="arrow">→</span></a>
      <a href="${SITE.contact.linkedinUrl}">${SITE.contact.linkedin} <span class="arrow">→</span></a>
      <a href="${SITE.contact.githubUrl}">${SITE.contact.github} <span class="arrow">→</span></a>
    </div>
  </div>
  <div class="terminal-box">
    ${term}
    <div><span class="p1">visitor@web</span>:~$ _</div>
  </div>
`));

// ---------- Footer ----------
document.getElementById('footer-content').textContent = SITE.footer;

// ---------- Scroll reveal animation ----------
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:0.12});
revealEls.forEach(el=>io.observe(el));

// ---------- Animated skill bars (fill on scroll into view) ----------
const barFills = document.querySelectorAll('.bar-fill');
barFills.forEach(bar=>{
  bar.dataset.target = bar.style.width;
  bar.style.width = '0%';
});
const barIo = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.width = e.target.dataset.target;
      barIo.unobserve(e.target);
    }
  });
}, {threshold:0.3});
barFills.forEach(bar=>barIo.observe(bar));

// ---------- Scroll progress bar ----------
const progressBar = document.getElementById('scroll-progress');
function updateProgress(){
  const h = document.documentElement;
  const scrolled = h.scrollTop;
  const max = h.scrollHeight - h.clientHeight;
  const pct = max > 0 ? (scrolled / max) * 100 : 0;
  if(progressBar) progressBar.style.width = pct + '%';
}
document.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

// ---------- Cursor spotlight ----------
const spotlight = document.getElementById('cursor-spotlight');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(spotlight && !prefersReducedMotion){
  document.addEventListener('mousemove', (e)=>{
    spotlight.style.setProperty('--mx', e.clientX + 'px');
    spotlight.style.setProperty('--my', e.clientY + 'px');
  }, {passive:true});
}

// ---------- Boot sequence intro ----------
(function bootSequence(){
  const screen = document.getElementById('boot-screen');
  const linesEl = document.getElementById('boot-lines');
  const skipBtn = document.getElementById('boot-skip');
  if(!screen) return;

  // Skip entirely if seen already this session, or reduced motion preferred
  if(sessionStorage.getItem('bootSeen') || prefersReducedMotion){
    screen.remove();
    return;
  }

  const name = (SITE && SITE.hero && SITE.hero.nameLine1 && SITE.hero.nameLine2)
    ? `${SITE.hero.nameLine1} ${SITE.hero.nameLine2}` : 'PROFILE';

  const lines = [
    `> initializing secure_profile.exe`,
    `> loading subject: ${name}`,
    `> scanning modules: recon, exploit, defense... <span class="ok">done</span>`,
    `> verifying credentials... <span class="ok">ok</span>`,
    `> access <span class="tag">GRANTED</span>`
  ];

  let i = 0;
  function nextLine(){
    if(i >= lines.length){
      setTimeout(finish, 450);
      return;
    }
    const div = document.createElement('div');
    div.className = 'line';
    div.innerHTML = lines[i] + (i === lines.length - 1 ? ' <span id="boot-cursor"></span>' : '');
    linesEl.appendChild(div);
    requestAnimationFrame(()=> div.classList.add('show'));
    i++;
    setTimeout(nextLine, 340);
  }

  function finish(){
    sessionStorage.setItem('bootSeen', '1');
    screen.classList.add('hide');
    setTimeout(()=> screen.remove(), 700);
  }

  skipBtn.addEventListener('click', finish);
  document.addEventListener('keydown', function escSkip(e){
    if(e.key === 'Escape'){ finish(); document.removeEventListener('keydown', escSkip); }
  });

  setTimeout(nextLine, 300);
})();
