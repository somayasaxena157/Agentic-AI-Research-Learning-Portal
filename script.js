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

/* ---------- Kid-friendly topic content (for detail popup) ---------- */
const topicContent = {
  ml: {
    emoji:'🤖',
    simple:"Machine Learning is how we teach a computer to get better at something just by showing it lots of examples — instead of writing exact step-by-step instructions for every situation.",
    analogy:"Think of teaching a dog to sit. You don't explain the physics of sitting — you show it over and over with treats until it learns the pattern. Machine learning is the same idea, but with a computer and data instead of a dog and treats.",
    points:[
      "The computer looks at lots of examples (called 'data').",
      "It finds patterns in those examples on its own.",
      "The more good examples it sees, the smarter it gets.",
      "Once trained, it can guess the answer for new examples it has never seen."
    ],
    example:{
      desc:"A tiny example: teaching a computer to guess if a fruit is an apple or a banana by its color and shape.",
      code:`fruits = [\n  {"color": "red", "shape": "round", "label": "apple"},\n  {"color": "yellow", "shape": "long", "label": "banana"},\n]\n\n# The computer studies these examples,\n# then guesses new fruits based on the pattern it learned.\nnew_fruit = {"color": "yellow", "shape": "long"}\nguess = "banana"  # learned from the pattern above`
    }
  },
  nn: {
    emoji:'🧠',
    simple:"A Neural Network is a computer program built to work a little like a brain. It has tiny building blocks called 'neurons' that pass information to each other and learn patterns together.",
    analogy:"Imagine a big team of friends passing notes. Each friend only does one small job — like checking one clue — then passes their answer to the next friend. Together, the whole team solves a big puzzle.",
    points:[
      "Made of layers of tiny units called neurons.",
      "Each neuron looks at a small piece of the information.",
      "Layers pass their findings to the next layer.",
      "The last layer gives the final answer, like 'cat' or 'dog'."
    ],
    example:{
      desc:"A super-simplified neural network idea for recognizing a smiley face:",
      code:`# Layer 1: looks for basic shapes (circles, curves)\n# Layer 2: combines shapes into eyes + a mouth\n# Layer 3: decides "this looks like a smiley face!"\n\ninput_image = "🙂"\nresult = "smiley face detected"`
    }
  },
  llm: {
    emoji:'💬',
    simple:"A Large Language Model (LLM) is a computer program that has read a huge amount of text and learned how words usually follow each other, so it can write, chat, and answer questions like a person.",
    analogy:"It's like a friend who has read millions of books and can guess what word comes next in a sentence — over and over, one word at a time — until a whole answer is written.",
    points:[
      "Trained on huge amounts of text from books, articles, and websites.",
      "Learns which words usually go together.",
      "Writes answers one word (or piece of a word) at a time.",
      "Can chat, translate, summarize, and even write code."
    ],
    example:{
      desc:"How an LLM finishes a sentence, one word at a time:",
      code:`prompt = "The sun rises in the"\n\n# The model predicts the most likely next word\nnext_word = "east"\n\n# It keeps going, word by word, to build a full answer`
    }
  },
  prompt: {
    emoji:'✍️',
    simple:"Prompt Engineering is the skill of asking an AI clear and helpful questions so it gives you the best possible answer — kind of like asking a good question to get a good answer from a teacher.",
    analogy:"If you ask 'tell me stuff,' you'll get a confusing answer. But if you ask 'explain photosynthesis in 3 simple sentences for a 8-year-old,' you get something much more useful. That's prompt engineering!",
    points:[
      "Be clear and specific about what you want.",
      "Give examples if it helps explain what you mean.",
      "Tell the AI who the answer is for (like 'explain to a kid').",
      "Ask it to think step-by-step for tricky problems."
    ],
    example:{
      desc:"A weak prompt vs. a strong prompt:",
      code:`# Weak prompt\n"Tell me about space."\n\n# Strong prompt\n"Explain why the sky is blue in 3 simple\nsentences, like you're talking to a curious 8-year-old."`
    }
  },
  arch: {
    emoji:'🏗️',
    simple:"Agent Architecture is the blueprint for how an AI 'agent' is built — how it thinks, remembers things, uses tools, and decides what to do next, step by step, to finish a task.",
    analogy:"It's like the flowchart for a robot helper: first it listens to what you want, then it thinks about a plan, then it acts, then it checks if it worked — and repeats until the job is done.",
    points:[
      "An agent usually has 4 jobs: sense, think, act, and check.",
      "It can loop through these steps multiple times.",
      "It decides on its own which tool or step to use next.",
      "Good architecture keeps the agent organized and less confused."
    ],
    example:{
      desc:"A simple loop that shows how an agent thinks:",
      code:`while task_not_done:\n    observation = look_at_situation()\n    plan = decide_next_step(observation)\n    result = do_action(plan)\n    task_not_done = check_if_finished(result)`
    }
  },
  tools: {
    emoji:'🛠️',
    simple:"Tool Use & Function Calling means giving an AI extra 'tools' it can use — like a calculator, a search engine, or a calendar — so it isn't limited to just talking. It can actually do things.",
    analogy:"It's like giving a smart assistant a toolbox. Instead of just guessing a math answer, it can pick up the calculator tool and get the exact right number.",
    points:[
      "The AI is given a list of tools it's allowed to use.",
      "It decides which tool fits the current problem.",
      "It calls the tool with the right information.",
      "It uses the tool's answer to keep helping you."
    ],
    example:{
      desc:"An AI deciding to use a calculator tool:",
      code:`user_question = "What is 482 * 17?"\n\n# The AI recognizes this needs the calculator tool\ntool_call = calculator(482, "*", 17)\nanswer = tool_call.result  # 8194`
    }
  },
  memory: {
    emoji:'🗂️',
    simple:"Memory Systems let an AI agent remember things from earlier — like your name, what you asked before, or facts it learned — so it doesn't forget everything after each message.",
    analogy:"It's like giving the AI a notebook. Without a notebook, it forgets you the moment you stop talking. With one, it can flip back and remember what you told it yesterday.",
    points:[
      "Short-term memory: remembers the current conversation.",
      "Long-term memory: saves important facts for later use.",
      "Memories can be stored and searched, like a filing cabinet.",
      "Good memory makes an agent feel more helpful and personal."
    ],
    example:{
      desc:"A tiny memory notebook for an agent:",
      code:`memory = {}\n\nmemory["favorite_color"] = "blue"\n\n# Later in a new conversation...\nif "favorite_color" in memory:\n    print("I remember! Your favorite color is " + memory["favorite_color"])`
    }
  },
  planning: {
    emoji:'🧩',
    simple:"Planning & Reasoning is how an AI breaks a big, tricky task into smaller steps and figures out the best order to do them — instead of just guessing the whole answer at once.",
    analogy:"It's like planning a birthday party. You don't just 'have a party' — you break it into steps: pick a date, invite friends, buy a cake, decorate. Planning helps the AI do the same for hard problems.",
    points:[
      "Break a big goal into smaller, doable steps.",
      "Think about what needs to happen first, second, third.",
      "Check progress and adjust the plan if something goes wrong.",
      "This helps the AI solve problems it couldn't solve in one guess."
    ],
    example:{
      desc:"Breaking a big task into a simple plan:",
      code:`goal = "Plan a birthday party"\n\nsteps = [\n  "Pick a date",\n  "Make a guest list",\n  "Send invitations",\n  "Buy decorations and cake"\n]`
    }
  },
  langchain: {
    emoji:'🔗',
    simple:"LangChain is a toolkit that helps developers connect an AI model to other things — like documents, tools, and memory — so it's easier to build a full AI application instead of starting from scratch.",
    analogy:"Think of LEGO bricks for building AI apps. LangChain gives you ready-made bricks (pieces) for memory, tools, and data, so you can snap them together quickly.",
    points:[
      "Provides ready-made building blocks for AI apps.",
      "Helps connect the AI to your own documents and data.",
      "Makes it easier to add memory and tools to an AI.",
      "Popular for building chatbots and AI assistants."
    ],
    example:{
      desc:"A very simplified LangChain-style chain:",
      code:`chain = load_documents() | ask_question() | get_answer()\n\nanswer = chain.run("What does this PDF say about refunds?")`
    }
  },
  langgraph: {
    emoji:'🕸️',
    simple:"LangGraph is a tool for building AI agents as a 'graph' of steps — like a flowchart with arrows — so the agent can loop, branch, and make decisions instead of just following one straight line.",
    analogy:"Imagine a board game with different paths you can take depending on what happens. LangGraph lets developers draw that kind of map for an AI agent's thinking process.",
    points:[
      "Agent steps are drawn like a flowchart (a graph).",
      "The agent can loop back and try again if needed.",
      "It can branch into different paths depending on the situation.",
      "Useful for agents that need multiple rounds of thinking."
    ],
    example:{
      desc:"A simple graph-style flow:",
      code:`graph.add_step("research")\ngraph.add_step("write_answer")\ngraph.add_edge("research", "write_answer")\n\n# If the answer isn't good enough, loop back to research\ngraph.add_edge("write_answer", "research", condition="needs_more_info")`
    }
  },
  autogen: {
    emoji:'🤝',
    simple:"AutoGen is a framework that lets you create multiple AI agents that talk to each other to solve a problem together — like a little team of AI helpers working as a group.",
    analogy:"Imagine two classmates working on a project: one writes the answer, and the other checks it for mistakes. AutoGen makes it easy to set up AI 'classmates' like that.",
    points:[
      "Lets you create more than one AI agent at once.",
      "Agents can send messages to each other automatically.",
      "One agent might write, another might review or fix mistakes.",
      "Useful for tasks that are easier with teamwork."
    ],
    example:{
      desc:"Two agents working together:",
      code:`writer_agent = Agent("Writer")\nreviewer_agent = Agent("Reviewer")\n\ndraft = writer_agent.write("a poem about robots")\nfeedback = reviewer_agent.review(draft)`
    }
  },
  crewai: {
    emoji:'👥',
    simple:"CrewAI is a framework for building a 'crew' of AI agents, where each agent has its own job or role — like a researcher, a writer, and an editor — all working together on one big task.",
    analogy:"It's like assembling a mini company: one AI is the researcher who gathers facts, another is the writer who turns facts into a story, and another checks everything before it's done.",
    points:[
      "Each agent gets a specific role and goal.",
      "Agents pass their work to the next agent in the crew.",
      "Great for tasks with clear steps done by different 'experts'.",
      "Helps organize complex AI projects into simple roles."
    ],
    example:{
      desc:"Setting up a small crew:",
      code:`researcher = Agent(role="Researcher", goal="Find facts")\nwriter = Agent(role="Writer", goal="Write a report")\n\ncrew = Crew(agents=[researcher, writer])\nresult = crew.run("Write a report about volcanoes")`
    }
  },
  vectordb: {
    emoji:'📦',
    simple:"A Vector Database is a special storage system that saves information in a way that makes it easy for an AI to find things that 'mean' something similar — not just exact word matches.",
    analogy:"Imagine a toy box where similar toys are always placed near each other automatically — all the cars together, all the dolls together — so when you want 'something like a car,' you know exactly where to look.",
    points:[
      "Stores information as lists of numbers called 'vectors'.",
      "Similar meanings end up stored close together.",
      "Helps AI search by meaning, not just exact words.",
      "Used to help AI find the right facts quickly."
    ],
    example:{
      desc:"Finding similar items using a vector database:",
      code:`db.add("a happy dog playing")\ndb.add("a joyful puppy running")\ndb.add("a car engine part")\n\nresults = db.search("cheerful puppy")\n# returns the two dog-related entries first`
    }
  },
  rag: {
    emoji:'📚',
    simple:"RAG (Retrieval-Augmented Generation) means an AI first looks up helpful facts from your own documents, then uses those facts to write a better, more accurate answer — instead of only guessing from memory.",
    analogy:"It's like an open-book test. Instead of answering purely from memory, the AI is allowed to flip through a book first, find the right page, and then write its answer using what it found.",
    points:[
      "Step 1: search your documents for relevant information.",
      "Step 2: give that information to the AI along with your question.",
      "Step 3: the AI writes an answer using those real facts.",
      "This helps reduce made-up or wrong answers."
    ],
    example:{
      desc:"A simple RAG flow:",
      code:`question = "What is our refund policy?"\n\nfacts = search_documents(question)\nanswer = ask_ai(question, context=facts)`
    }
  },
  kg: {
    emoji:'🕸️',
    simple:"A Knowledge Graph is a way of storing facts as connected dots and lines — showing how people, places, and things are related to each other — so an AI can understand connections, not just single facts.",
    analogy:"Think of a family tree, but for everything: 'Paris' connects to 'France', 'France' connects to 'Europe'. A knowledge graph is like a giant map of connected facts.",
    points:[
      "Facts are stored as 'this is connected to that'.",
      "Helps AI understand relationships, not just isolated facts.",
      "Makes it easier to answer questions that need connecting the dots.",
      "Used in search engines, recommendations, and research tools."
    ],
    example:{
      desc:"A tiny knowledge graph in plain form:",
      code:`facts = [\n  ("Paris", "is capital of", "France"),\n  ("France", "is in", "Europe"),\n]\n\n# Question: "What continent is Paris in?"\n# The graph can connect the dots to answer: Europe`
    }
  },
  protocols: {
    emoji:'📡',
    simple:"Agent Communication Protocols are the shared rules that let different AI agents talk to each other clearly — like a common language — so they don't get confused when working together.",
    analogy:"Imagine two people from different countries trying to work together without a shared language — it would be messy! A protocol is like agreeing to both speak English so the teamwork goes smoothly.",
    points:[
      "Sets a clear format for how agents send messages.",
      "Helps avoid confusion between different AI agents.",
      "Makes it possible for agents built by different teams to cooperate.",
      "Similar to how computers use protocols to talk over the internet."
    ],
    example:{
      desc:"A simple shared message format between agents:",
      code:`message = {\n  "from": "agent_researcher",\n  "to": "agent_writer",\n  "type": "share_facts",\n  "content": "Volcanoes form at tectonic plate boundaries."\n}`
    }
  },
  orchestration: {
    emoji:'🎼',
    simple:"Orchestration Patterns are the different ways you can organize a team of AI agents — like who goes first, who checks the work, and how tasks are handed off — so the whole team works smoothly.",
    analogy:"Think of a conductor leading an orchestra. The conductor doesn't play an instrument, but makes sure every musician plays at the right time. Orchestration does that job for AI agents.",
    points:[
      "Decides the order agents work in (one after another, or all at once).",
      "Can have a 'manager' agent that assigns tasks to others.",
      "Helps avoid agents stepping on each other's work.",
      "Different patterns fit different kinds of problems."
    ],
    example:{
      desc:"A simple manager-style orchestration:",
      code:`manager.assign("research", to=researcher_agent)\nmanager.assign("write", to=writer_agent, after="research")\nmanager.assign("review", to=editor_agent, after="write")`
    }
  },
  eval: {
    emoji:'📊',
    simple:"Evaluation & Observability means checking how well an AI agent is actually doing its job — measuring mistakes, tracking its steps, and making sure it's working correctly, kind of like a report card plus a security camera.",
    analogy:"It's like a teacher grading your homework AND watching how you solved each problem — so they can tell not just if you got it right, but where you went wrong if you didn't.",
    points:[
      "Measures how accurate or helpful the AI's answers are.",
      "Logs each step the agent takes, so you can see what happened.",
      "Helps catch mistakes before they cause bigger problems.",
      "Important for trusting an AI system in the real world."
    ],
    example:{
      desc:"A simple evaluation check:",
      code:`correct_answers = 92\ntotal_questions = 100\n\naccuracy = correct_answers / total_questions * 100\nprint(f"Agent accuracy: {accuracy}%")  # 92%`
    }
  },
  safety: {
    emoji:'🛡️',
    simple:"Safety & Guardrails are the rules and checks put in place to stop an AI agent from doing something harmful, unfair, or wrong — like a fence that keeps it inside safe boundaries while it works.",
    analogy:"Think of the bumpers in a bowling lane for kids — they let the ball roll freely but stop it from going into the gutter. Guardrails let the AI act freely but stop it from causing harm.",
    points:[
      "Blocks the AI from harmful or unsafe actions.",
      "Checks outputs before they're shown to a user.",
      "Sets limits on what tools or data the AI can access.",
      "Keeps the AI helpful, honest, and safe to use."
    ],
    example:{
      desc:"A simple guardrail check:",
      code:`response = ai_generate(user_input)\n\nif contains_unsafe_content(response):\n    response = "Sorry, I can't help with that."`
    }
  },
  deploy: {
    emoji:'🚀',
    simple:"Deployment & Scaling is the process of taking an AI agent from your computer and making it available for lots of real people to use reliably — even if thousands of people use it at the same time.",
    analogy:"It's like the difference between cooking a meal for your family versus running a restaurant that serves hundreds of customers every night — you need a bigger kitchen, a solid process, and a way to keep things running smoothly.",
    points:[
      "Moves the AI agent from a test environment to the real world.",
      "Makes sure it can handle many users at once (scaling).",
      "Includes monitoring to catch problems quickly.",
      "Keeps the system fast, stable, and available."
    ],
    example:{
      desc:"A simple idea of scaling up:",
      code:`# One user talking to one agent: easy!\nhandle_request(user_1)\n\n# Thousands of users at once: needs deployment + scaling\nfor user in many_users:\n    handle_request_in_parallel(user)`
    }
  },
};

function getParentContent(topic){
  const leaves = [];
  (function walk(n){ n.children ? n.children.forEach(walk) : leaves.push(n); })(topic);
  return {
    emoji:'📁',
    simple:`"${topic.name}" is a group of related topics in the syllabus. Open any of the ${leaves.length} topic${leaves.length===1?'':'s'} inside to see a simple explanation and an example.`,
    analogy:null,
    points:null,
    childLeaves: leaves,
  };
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
function findNodeById(id){
  let found = null;
  (function walk(nodes){
    nodes.forEach(n=>{
      if(n.id === id) found = n;
      if(n.children) walk(n.children);
    });
  })(state.syllabus);
  return found;
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

    const caret = row.querySelector('.tree-caret');
    caret.addEventListener('click', (e)=>{ e.stopPropagation(); wrap.classList.toggle('open'); });
    row.addEventListener('click', ()=> openTopicDetail(node.id));
  } else {
    row.addEventListener('click', ()=> openTopicDetail(node.id));
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
      <td><span class="topic-link" data-topic-id="${l.id}">${l.name}</span></td>
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

  tbody.querySelectorAll('.topic-link').forEach(el=>{
    el.addEventListener('click', ()=> openTopicDetail(el.dataset.topicId));
  });
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
  
  // Gets the date from your new calendar input
  const submissionDate = document.getElementById('formDate').value; 

  const leafNode = findLeafById(topicId);
  if(!leafNode) return;

  // Progressive progress logic
  let p = leafNode.progress;
  if(fileName && p < 25) p = 25;
  if(notes && p < 50) p = 50;
  if(projectDone && p < 75) p = 75;
  if(fullyComplete) p = 100;
  leafNode.progress = p;
  
  if(p >= 100 && !leafNode.completionDate) leafNode.completionDate = submissionDate;
  if(p < 100) leafNode.completionDate = leafNode.completionDate; // keep as-is unless completed
  if(notes) leafNode.remarks = notes.length > 80 ? notes.slice(0,77)+'…' : notes;

  const topicName = allLeaves().find(l=>l.id===topicId)?.topicName || '';

  state.submissions.push({
    id: 'sub_'+Date.now(),
    date: submissionDate, // Now uses the date you selected instead of just today
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
   TOPIC DETAIL MODAL (popup with simple explanation + example)
   ============================================================ */
const detailBackdrop = document.getElementById('detailBackdrop');

function openTopicDetail(nodeId){
  const node = findNodeById(nodeId);
  if(!node) return;

  const isLeaf = !node.children;
  const breadcrumb = isLeaf ? (allLeaves().find(l=>l.id===nodeId)?.topicName || '') : 'Topic Group';
  document.getElementById('detailBreadcrumb').textContent = breadcrumb.toUpperCase();
  document.getElementById('detailTitle').textContent = node.name;

  const body = document.getElementById('detailBody');

  if(isLeaf){
    const c = topicContent[node.id] || {
      emoji:'📘', simple:`"${node.name}" — content for this topic is coming soon.`, analogy:null, points:null, example:null
    };
    const status = statusFromProgress(node.progress);
    body.innerHTML = `
      <div class="detail-tags">
        <span class="tag tag-${node.difficulty}">${node.difficulty}</span>
        <span class="tag tag-${statusClass(status)}">${status}</span>
        <span class="tag" style="background:var(--bg-tertiary); color:var(--text-muted);">${node.progress}% complete</span>
      </div>
      <div>
        <div class="detail-section-label">${c.emoji || '📘'} What is it? (in simple words)</div>
        <p class="detail-text">${c.simple}</p>
      </div>
      ${c.analogy ? `
      <div>
        <div class="detail-section-label">🧸 Imagine this</div>
        <div class="detail-analogy">${c.analogy}</div>
      </div>` : ''}
      ${c.points ? `
      <div>
        <div class="detail-section-label">🔑 Key points</div>
        <ul class="detail-points">${c.points.map(p=>`<li>${p}</li>`).join('')}</ul>
      </div>` : ''}
      ${c.example ? `
      <div>
        <div class="detail-section-label">💻 Simple example</div>
        <p class="detail-text" style="margin-bottom:8px;">${c.example.desc}</p>
        <div class="code-block">${escapeHtml(c.example.code)}</div>
      </div>` : ''}
    `;
  } else {
    const c = getParentContent(node);
    body.innerHTML = `
      <div>
        <div class="detail-section-label">📁 About this group</div>
        <p class="detail-text">${c.simple}</p>
      </div>
      <div>
        <div class="detail-section-label">📚 Topics inside</div>
        <div class="detail-child-list">
          ${c.childLeaves.map(l=>`
            <button class="detail-child-row" data-topic-id="${l.id}">
              <span>${l.name}</span>
              <span class="pct">${l.progress}%</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
    body.querySelectorAll('.detail-child-row').forEach(btn=>{
      btn.addEventListener('click', ()=> openTopicDetail(btn.dataset.topicId));
    });
  }

  detailBackdrop.classList.add('show');
}

function closeTopicDetail(){
  detailBackdrop.classList.remove('show');
}

document.getElementById('detailClose').addEventListener('click', closeTopicDetail);
detailBackdrop.addEventListener('click', (e)=>{ if(e.target === detailBackdrop) closeTopicDetail(); });
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeTopicDetail(); });

function escapeHtml(str){
  return str
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

/* ============================================================
   INIT
   ============================================================ */
renderAll();
