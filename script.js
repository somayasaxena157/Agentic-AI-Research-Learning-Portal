/* ============================================================
   AGENTIC AI RESEARCH & LEARNING PORTAL — APP LOGIC
   ============================================================ */

const STORAGE_KEY = 'agentic_ai_portal_data_v1';

/* ---------- Seed data ---------- */
function seedSyllabus(){
  return [
    { id:'foundations', name:'Artificial Intelligence Foundations', children:[
      leaf('ml','Machine Learning','Beginner'),
      { id:'dl', name:'Deep Learning', difficulty:'Intermediate', children:[
          leaf('nn','Neural Networks','Intermediate')
        ]},
      leaf('llm','Large Language Models','Advanced'),
      leaf('prompt','Prompt Engineering','Beginner'),
    ]},
    { id:'agentic-core', name:'Agentic AI Core Concepts', children:[
      leaf('arch','Agent Architectures','Intermediate'),
      leaf('tools','Tool Use & Function Calling','Intermediate'),
      leaf('memory','Memory Systems','Advanced'),
      leaf('planning','Planning & Reasoning','Advanced'),
    ]},
    { id:'frameworks', name:'Frameworks & Tooling', children:[
      leaf('langchain','LangChain','Intermediate'),
      leaf('langgraph','LangGraph','Advanced'),
      leaf('autogen','AutoGen','Advanced'),
      leaf('crewai','CrewAI','Intermediate'),
    ]},
    { id:'retrieval', name:'Retrieval & Knowledge Systems', children:[
      leaf('vectordb','Vector Databases','Intermediate'),
      leaf('rag','RAG Pipelines','Intermediate'),
      leaf('kg','Knowledge Graphs','Advanced'),
    ]},
    { id:'multiagent', name:'Multi-Agent Systems', children:[
      leaf('protocols','Agent Communication Protocols','Advanced'),
      leaf('orchestration','Orchestration Patterns','Advanced'),
    ]},
    { id:'production', name:'Production & Deployment', children:[
      leaf('eval','Evaluation & Observability','Intermediate'),
      leaf('safety','Safety & Guardrails','Advanced'),
      leaf('deploy','Deployment & Scaling','Advanced'),
    ]},
  ];
}
function leaf(id,name,difficulty){
  return { id, name, difficulty, progress:0, completionDate:null, remarks:'—', leaf:true };
}

let state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){ return JSON.parse(raw); }
  }catch(e){ console.warn('Could not read saved data', e); }
  return { syllabus: seedSyllabus(), submissions: [] };
}
function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/* ---------- Helpers ---------- */
function allLeaves(){
  const out = [];
  (function walk(nodes, parentName){
    nodes.forEach(n=>{
      if(n.children){ walk(n.children, n.name); }
      else { out.push({...n, topicName: parentName}); }
    });
  })(state.syllabus, '');
  return out;
}
function findLeafById(id){
  let found = null;
  (function walk(nodes){
    nodes.forEach(n=>{
      if(n.children) walk(n.children);
      else if(n.id === id) found = n;
    });
  })(state.syllabus);
  return found;
}
function statusFromProgress(p){
  if(p >= 100) return 'Completed';
  if(p > 0) return 'In Progress';
  return 'Pending';
}
function statusClass(s){ return s.replace(/\s+/g,''); }
function todayStr(){
  const d = new Date();
  return d.toISOString().slice(0,10);
}
function nowTimeStr(){
  return new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}
function fmtDate(iso){
  if(!iso) return '—';
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-GB', {day:'2-digit', month:'short', year:'numeric'});
}

/* ---------- Navigation ---------- */
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const target = btn.dataset.target;
    if(!target) return;
    navItems.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    views.forEach(v=>v.classList.remove('active'));
    document.getElementById('view-'+target).classList.add('active');
    closeMobileSidebar();
  });
});

/* Mobile sidebar */
const sidebar = document.getElementById('sidebar');
const scrim = document.getElementById('sidebarScrim');
document.getElementById('navToggle').addEventListener('click', ()=>{
  sidebar.classList.toggle('open');
  scrim.classList.toggle('show');
});
scrim.addEventListener('click', closeMobileSidebar);
function closeMobileSidebar(){
  sidebar.classList.remove('open');
  scrim.classList.remove('show');
}

/* ============================================================
   RENDER: DASHBOARD
   ============================================================ */
function renderDashboard(){
  const leaves = allLeaves();
  const total = leaves.length;
  const completed = leaves.filter(l=>l.progress>=100).length;
  const pending = leaves.filter(l=>l.progress===0).length;
  const totalSubs = state.submissions.length;
  const totalNotes = state.submissions.filter(s=>s.notes && s.notes.trim()).length;
  const overall = total ? Math.round(leaves.reduce((a,l)=>a+l.progress,0)/total) : 0;
  const streak = computeStreak();
  const latest = state.submissions.slice().sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time))[0];

  const cards = [
    { label:'Total Topics', value: total, icon: iconLayers() },
    { label:'Completed Topics', value: completed, icon: iconCheck() },
    { label:'Pending Topics', value: pending, icon: iconClock() },
    { label:'Total Submissions', value: totalSubs, icon: iconUpload() },
    { label:'Total Notes', value: totalNotes, icon: iconNote() },
    { label:'Overall Progress', value: overall+'%', icon: iconGauge() },
    { label:'Learning Streak', value: streak+' day'+(streak===1?'':'s'), icon: iconFlame() },
    { label:'Latest Submission', value: latest ? latest.topicName : '—', icon: iconStar() },
  ];

  const grid = document.getElementById('dashboardCards');
  grid.innerHTML = cards.map(c=>`
    <div class="stat-card">
      <div class="stat-card-top">
        <div class="stat-icon">${c.icon}</div>
      </div>
      <div class="stat-value">${c.value}</div>
      <div class="stat-label">${c.label}</div>
    </div>
  `).join('');

  // ring
  const circumference = 2*Math.PI*60;
  const ringFill = document.getElementById('ringFill');
  ringFill.style.strokeDasharray = circumference;
  requestAnimationFrame(()=>{
    ringFill.style.strokeDashoffset = circumference - (circumference*overall/100);
  });
  document.getElementById('ringNumber').textContent = overall+'%';

  // completion bars per parent topic
  const bars = state.syllabus.map(topic=>{
    const tl = allLeaves().filter(l=>l.topicName===topic.name);
    const pct = tl.length ? Math.round(tl.reduce((a,l)=>a+l.progress,0)/tl.length) : 0;
    return { name: topic.name, pct };
  });
  document.getElementById('completionBars').innerHTML = bars.map(b=>`
    <div class="cbar-row">
      <span class="cbar-name" title="${b.name}">${b.name}</span>
      <div class="cbar-track"><div class="cbar-fill" style="width:${b.pct}%"></div></div>
      <span class="cbar-pct">${b.pct}%</span>
    </div>
  `).join('');

  // activity list
  const recent = state.submissions.slice().sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time)).slice(0,6);
  const activityList = document.getElementById('activityList');
  if(recent.length===0){
    activityList.innerHTML = `<li><span class="activity-main"><span class="activity-sub">No activity recorded yet.</span></span></li>`;
  } else {
    activityList.innerHTML = recent.map(s=>`
      <li>
        <span class="activity-dot"></span>
        <span class="activity-main">
          <div class="activity-title">${s.topicName}</div>
          <div class="activity-sub">${s.fileName ? 'Code uploaded · ' : ''}${s.notes ? 'Notes added' : 'Logged'}</div>
        </span>
        <span class="activity-time">${fmtDate(s.date)}</span>
      </li>
    `).join('');
  }
  document.getElementById('streakLabel').textContent = streak+'-day streak';

  // sidebar mini progress
  document.getElementById('sidebarProgressFill').style.width = overall+'%';
  document.getElementById('sidebarProgressValue').textContent = overall+'%';
}

function computeStreak(){
  const dates = [...new Set(state.submissions.map(s=>s.date))].sort().reverse();
  if(dates.length===0) return 0;
  let streak = 0;
  let cursor = new Date(todayStr()+'T00:00:00');
  for(let i=0;i<dates.length;i++){
    const d = new Date(dates[i]+'T00:00:00');
    const diff = Math.round((cursor - d)/86400000);
    if(diff === 0 || diff === 1){
      streak++;
      cursor = d;
    } else break;
  }
  return streak;
}

/* Simple inline icon set */
function iconLayers(){ return `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3l9 5-9 5-9-5 9-5Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M3 13l9 5 9-5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`; }
function iconCheck(){ return `<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`; }
function iconClock(){ return `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.5V12l3 2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`; }
function iconUpload(){ return `<svg viewBox="0 0 24 24" fill="none"><path d="M12 16V5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M7.5 9.5L12 5l4.5 4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 16v2.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`; }
function iconNote(){ return `<svg viewBox="0 0 24 24" fill="none"><path d="M6 4h9l5 5v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" stroke="currentColor" stroke-width="1.7"/><path d="M8 13h8M8 16.5h5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`; }
function iconGauge(){ return `<svg viewBox="0 0 24 24" fill="none"><path d="M4 15a8 8 0 1 1 16 0" stroke="currentColor" stroke-width="1.7"/><path d="M12 15l4-4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`; }
function iconFlame(){ return `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3s5 4.5 5 9a5 5 0 1 1-10 0c0-1 .3-2 1-3 .2 1 1 1.5 1.5 1 .5-3-1-5-1-5C10 4 12 3 12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`; }
function iconStar(){ return `<svg viewBox="0 0 24 24" fill="none"><path d="M12 3.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L12 16.7l-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7L12 3.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`; }

/* ============================================================
   RENDER: SYLLABUS TREE + TABLE
   ============================================================ */
let activeFilter = 'all';
let searchTerm = '';

function renderSyllabus(){
  renderTree();
  renderSyllabusTable();
}

function renderTree(){
  const root = document.getElementById('treeRoot');
  root.innerHTML = '';
  state.syllabus.forEach(topic=>{
    root.appendChild(buildTreeNode(topic, true));
  });
}

function buildTreeNode(node, isParent){
  const wrap = document.createElement('div');
  wrap.className = 'tree-node' + (isParent ? ' parent' : '');
  const status = node.leaf ? statusFromProgress(node.progress) : parentStatus(node);
  wrap.dataset.status = status;

  const row = document.createElement('div');
  row.className = 'tree-row';

  const hasChildren = !!node.children;
  row.innerHTML = `
    ${hasChildren ? `<svg class="tree-caret" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : `<span class="tree-caret"></span>`}
    <span class="tree-dot"></span>
    <span class="tree-label">${node.name}</span>
    <span class="tree-pct">${hasChildren ? parentProgress(node)+'%' : node.progress+'%'}</span>
  `;
  wrap.appendChild(row);

  if(hasChildren){
    const childWrap = document.createElement('div');
    childWrap.className = 'tree-children';
    node.children.forEach(c=> childWrap.appendChild(buildTreeNode(c, !!c.children)));
    wrap.appendChild(childWrap);
    row.addEventListener('click', ()=> wrap.classList.toggle('open'));
  }
  return wrap;
}

function parentProgress(topic){
  const leaves = [];
  (function walk(n){ n.children ? n.children.forEach(walk) : leaves.push(n); })(topic);
  return leaves.length ? Math.round(leaves.reduce((a,l)=>a+l.progress,0)/leaves.length) : 0;
}
function parentStatus(topic){
  const p = parentProgress(topic);
  return statusFromProgress(p);
}

function renderSyllabusTable(){
  const leaves = allLeaves();
  const filtered = leaves.filter(l=>{
    const status = statusFromProgress(l.progress);
    let matchFilter = true;
    if(activeFilter !== 'all'){
      matchFilter = (status === activeFilter) || (l.difficulty === activeFilter);
    }
    const term = searchTerm.trim().toLowerCase();
    const matchSearch = !term || l.name.toLowerCase().includes(term) || l.topicName.toLowerCase().includes(term);
    return matchFilter && matchSearch;
  });

  const tbody = document.getElementById('syllabusTableBody');
  if(filtered.length === 0){
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; color:var(--text-faint); padding:26px;">No matching topics.</td></tr>`;
    return;
  }
  tbody.innerHTML = filtered.map(l=>{
    const status = statusFromProgress(l.progress);
    return `
    <tr>
      <td>${l.topicName}</td>
      <td>${l.name}</td>
      <td><span class="tag tag-${l.difficulty}">${l.difficulty}</span></td>
      <td><span class="tag tag-${statusClass(status)}">${status}</span></td>
      <td>
        <div class="row-progress">
          <div class="track"><div class="fill" style="width:${l.progress}%"></div></div>
          <span class="pct">${l.progress}%</span>
        </div>
      </td>
      <td>${fmtDate(l.completionDate)}</td>
      <td class="remarks-cell">${l.remarks || '—'}</td>
    </tr>`;
  }).join('');
}

document.getElementById('syllabusFilters').addEventListener('click', (e)=>{
  const chip = e.target.closest('.chip');
  if(!chip) return;
  document.querySelectorAll('#syllabusFilters .chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  activeFilter = chip.dataset.filter;
  renderSyllabusTable();
});

/* ============================================================
   RENDER: SUBMISSIONS
   ============================================================ */
function renderSubmissions(){
  const tbody = document.getElementById('submissionsTableBody');
  const empty = document.getElementById('submissionsEmpty');
  const term = searchTerm.trim().toLowerCase();
  const rows = state.submissions
    .slice()
    .sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time))
    .filter(s=> !term || s.topicName.toLowerCase().includes(term) || (s.notes||'').toLowerCase().includes(term));

  if(rows.length === 0){
    tbody.innerHTML = '';
    empty.classList.add('show');
    return;
  }
  empty.classList.remove('show');
  tbody.innerHTML = rows.map(s=>{
    const status = statusFromProgress(findLeafById(s.topicId)?.progress ?? 0);
    return `
    <tr>
      <td>
        <div>${fmtDate(s.date)}</div>
        <div class="mono" style="font-size:10.5px; color:var(--text-faint);">${s.time}</div>
      </td>
      <td>${s.topicName}</td>
      <td>${s.fileName ? `<span class="file-chip">📄 ${s.fileName}</span>` : '<span class="muted">—</span>'}</td>
      <td class="notes-cell collapsed" title="Click to expand">${s.notes || '—'}</td>
      <td><span class="tag tag-${statusClass(status)}">${status}</span></td>
    </tr>`;
  }).join('');

  // toggle full notes on click
  tbody.querySelectorAll('.notes-cell').forEach(cell=>{
    cell.addEventListener('click', ()=> cell.classList.toggle('collapsed'));
  });
}

/* ============================================================
   RENDER: RESEARCH NOTES
   ============================================================ */
function renderNotes(){
  const grid = document.getElementById('notesGrid');
  const empty = document.getElementById('notesEmpty');
  const term = searchTerm.trim().toLowerCase();
  const notes = state.submissions
    .filter(s=> s.notes && s.notes.trim())
    .filter(s=> !term || s.notes.toLowerCase().includes(term) || s.topicName.toLowerCase().includes(term))
    .sort((a,b)=> (b.date+b.time).localeCompare(a.date+a.time));

  if(notes.length===0){
    grid.innerHTML = '';
    empty.classList.add('show');
    return;
  }
  empty.classList.remove('show');
  grid.innerHTML = notes.map(n=>`
    <div class="note-card">
      <div class="note-card-head">
        <span class="note-topic">${n.topicName}</span>
        <span class="note-date">${fmtDate(n.date)}</span>
      </div>
      <div class="note-body">${n.notes}</div>
    </div>
  `).join('');
}

/* ============================================================
   RENDER: PROGRESS TRACKER
   ============================================================ */
function renderProgressTracker(){
  const leaves = allLeaves().slice().sort((a,b)=> b.progress - a.progress);
  const list = document.getElementById('progressTrackerList');
  list.innerHTML = leaves.map(l=>`
    <div class="pt-row">
      <span class="pt-name" title="${l.name}">${l.name}</span>
      <div class="pt-track"><div class="pt-fill" style="width:${l.progress}%"></div></div>
      <span class="pt-pct">${l.progress}%</span>
    </div>
  `).join('');
}

/* ============================================================
   RENDER ALL
   ============================================================ */
function renderAll(){
  renderDashboard();
  renderSyllabus();
  renderSubmissions();
  renderNotes();
  renderProgressTracker();
  populateTopicSelect();
}

/* ============================================================
   GLOBAL SEARCH
   ============================================================ */
document.getElementById('globalSearch').addEventListener('input', (e)=>{
  searchTerm = e.target.value;
  renderSyllabusTable();
  renderSubmissions();
  renderNotes();
});

/* ============================================================
   SUBMISSION MODAL
   ============================================================ */
const modalBackdrop = document.getElementById('modalBackdrop');
const submissionForm = document.getElementById('submissionForm');

function populateTopicSelect(){
  const select = document.getElementById('formTopic');
  const leaves = allLeaves();
  select.innerHTML = leaves.map(l=> `<option value="${l.id}">${l.topicName} — ${l.name}</option>`).join('');
}

function openModal(){
  modalBackdrop.classList.add('show');
  populateTopicSelect();
}
function closeModal(){
  modalBackdrop.classList.remove('show');
  submissionForm.reset();
  document.getElementById('fileDropLabel').textContent = 'Click to attach a file (.html .css .js .py .md .txt)';
}

document.getElementById('newSubmissionBtn').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('cancelSubmission').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', (e)=>{ if(e.target === modalBackdrop) closeModal(); });

document.getElementById('formFile').addEventListener('change', (e)=>{
  const file = e.target.files[0];
  document.getElementById('fileDropLabel').textContent = file ? file.name : 'Click to attach a file (.html .css .js .py .md .txt)';
});

submissionForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const topicId = document.getElementById('formTopic').value;
  const fileInput = document.getElementById('formFile');
  const fileName = fileInput.files[0] ? fileInput.files[0].name : '';
  const notes = document.getElementById('formNotes').value.trim();
  const projectDone = document.getElementById('formProjectDone').checked;
  const fullyComplete = document.getElementById('formFullyComplete').checked;

  const leafNode = findLeafById(topicId);
  if(!leafNode) return;

  // Progressive progress logic
  let p = leafNode.progress;
  if(fileName && p < 25) p = 25;
  if(notes && p < 50) p = 50;
  if(projectDone && p < 75) p = 75;
  if(fullyComplete) p = 100;
  leafNode.progress = p;
  if(p >= 100 && !leafNode.completionDate) leafNode.completionDate = todayStr();
  if(p < 100) leafNode.completionDate = leafNode.completionDate; // keep as-is unless completed
  if(notes) leafNode.remarks = notes.length > 80 ? notes.slice(0,77)+'…' : notes;

  const topicName = allLeaves().find(l=>l.id===topicId)?.topicName || '';

  state.submissions.push({
    id: 'sub_'+Date.now(),
    date: todayStr(),
    time: nowTimeStr(),
    topicId,
    topicName,
    fileName,
    notes,
    projectDone,
    fullyComplete,
  });

  saveState();
  renderAll();
  closeModal();
});

/* ============================================================
   INIT
   ============================================================ */
renderAll();
