/* ============================================================
   AGENTIC AI RESEARCH & LEARNING PORTAL — APP LOGIC
   ============================================================ */

const STORAGE_KEY = 'agentic_ai_portal_data_v2';

/* ============================================================
   SYLLABUS DATA — Agentic AI Journey (15 tracks, official curriculum)
   Each item: [Title, Resource Type]
   ============================================================ */
const trackData = [
  { name:'Agentic AI - Getting Started with Python and ChatGPT', items:[
    ['Python for Developers Literacy (Beginner Level)','Skill Benchmark'],
    ['Python Fundamentals with AI','Interactive Course'],
    ['Python Fundamentals with AI Cheatsheet','Cheatsheet'],
    ['Python Fundamentals with AI Lab: Student Grade Tracker','Lab'],
    ['ChatGPT Literacy (Beginner Level)','Skill Benchmark'],
    ['Intermediate Prompt Engineering Techniques','Interactive Course'],
    ['Intermediate Prompt Engineering Techniques Cheatsheet','Cheatsheet'],
    ['Python Best Practices with AI','Interactive Course'],
    ['Python Best Practices with AI Cheatsheet','Cheatsheet'],
    ['AI-Assisted Testing and Debugging Strategies','Interactive Course'],
    ['First Look: GPT-5','Course'],
    ['ChatGPT & Its Practical Use Cases','Course'],
    ['ChatGPT Prompt Engineering Examples & Use Cases','Course'],
  ]},
  { name:'Agentic AI - Data Types, Variables and Control Flow', items:[
    ['Control Structures and Loops','Video'],
    ['Python Object-Oriented Programming with AI','Interactive Course'],
    ['Python Object-Oriented Programming with AI Cheatsheet','Cheatsheet'],
    ['Introduction to AI Agents with Flowise Skillshort','Interactive Course'],
    ['Introduction to AI Agents with Flowise Skillshort Cheatsheet','Cheatsheet'],
    ['Introduction to AI Programming with Bolt Skillshort','Interactive Course'],
    ['Introduction to AI Programming with Bolt Skillshort Cheatsheet','Cheatsheet'],
    ['Using Generative AI for Helpdesk Operations','AI Simulator'],
    ['Introduction to AI Programming with V0 Skillshort','Interactive Course'],
    ['Introduction to AI Programming with V0 Skillshort Cheatsheet','Cheatsheet'],
    ['AI Chatbots for Stakeholder Self-Service','Video'],
  ]},
  { name:'Agentic AI - Functions and Working with Libraries', items:[
    ['Python Collections with AI','Interactive Course'],
    ['Python Collections with AI Cheatsheet','Cheatsheet'],
    ['Node.js Fundamentals with AI','Interactive Course'],
    ['Node.js Fundamentals with AI Cheatsheet','Cheatsheet'],
    ['Node.js Fundamentals with AI Lab: Expense Tracker CLI','Lab'],
    ['Building a Calculator Tool in LangChain','Video'],
    ['Create Scalable APIs Using AI','Interactive Course'],
    ['Create Scalable APIs Using AI Cheatsheet','Cheatsheet'],
    ['API Development Competency (Intermediate Level)','Skill Benchmark'],
    ['Python API Development Competency (Intermediate Level)','Skill Benchmark'],
    ['API Testing with REST Assured Java Competency (Intermediate Level)','Skill Benchmark'],
    ['ETL and ELT Pipelines','Video'],
    ['Creating a Custom Weather Tool in LangChain','Video'],
    ['Using Simple Geocode APIs','Video'],
  ]},
  { name:'Agentic AI - Agentic Tools', items:[
    ['Using Prompt Engineering Prompt Templates','Video'],
    ['Prompt Engineering Patterns Lab: Prompt Patterns for Structured Frameworks','Lab'],
    ['Using Tools with Agentic AI','Video'],
    ['Building Tool Calling Agents with LangGraph: A Complete Guide','Link'],
    ['Agentic AI in Action: Tool Use with LangChain','Course'],
    ['Agentic AI in Action: Hands-On with LangChain','Course'],
    ['Combining Multiple Tools in LangChain Agents','Video'],
  ]},
  { name:'Agentic AI - Introduction to Agentic AI', items:[
    ['Inside Agentic AI: Foundations and Frontiers','Course'],
    ['Agentic AI Design Patterns: Reusable Blueprints for Smarter Systems','Course'],
    ['Leading Ethical AI Transformation','AI Simulator'],
    ['Balancing Innovation and Ethics in AI Projects','AI Simulator'],
    ['AI in the IT Industry: Automating and Optimizing IT Operations','AI Simulator'],
  ]},
  { name:'Agentic AI - Programming and Frameworks for Agentic Systems', items:[
    ['Inside Agentic AI: Popular Frameworks','Course'],
    ['AI Agents and Workflows','Interactive Course'],
    ['Flows Types','Video'],
    ['Using Tools with Agentic AI','Video'],
    ['Introduction to AI Agents with Flowise Skillshort','Interactive Course'],
    ['Introduction to AI Agents with Flowise Skillshort Cheatsheet','Cheatsheet'],
  ]},
  { name:'Agentic AI - Large Language Models (LLMs)', items:[
    ['LLM Fundamentals','Video'],
    ['Large Language Models (LLMs)','Video'],
    ['Large Language Model Architecture','Video'],
    ['Large Language Model Concepts','Video'],
    ['LLM Types','Video'],
    ['Percipio - Understanding the Architecture of LLMs and How They Interpret Prompts','Link'],
    ['Introduction to Large Language Models (LLMs) Cheatsheet','Cheatsheet'],
    ['Natural Language Processing Awareness (Beginner Level)','Skill Benchmark'],
    ['Introduction to Neural Network Architectures','Interactive Course'],
    ['Introduction to Neural Network Architectures Cheatsheet','Cheatsheet'],
    ['Advanced Neural Network Architectures','Interactive Course'],
    ['Advanced Neural Network Architectures Cheatsheet','Cheatsheet'],
    ['Working With Memory in LangChain','Interactive Course'],
    ['Intermediate Prompt Engineering Techniques','Interactive Course'],
    ['Prompt Engineering Techniques Cheatsheet','Cheatsheet'],
    ['Prompt Engineering Fundamentals for Programmers Competency (Intermediate Level)','Skill Benchmark'],
    ['The Transformer Architecture: Part I','Video'],
    ['The Transformer Architecture: Part II','Video'],
    ['Large Language Model (LLM) Throughput','Video'],
  ]},
  { name:'Agentic AI - Embedding Models and Vector Basics', items:[
    ['Generating Embeddings and Computing Cosine Similarity','Video'],
    ['Computing Distance Metrics: Euclidean, Manhattan, Cosine','Video'],
    ['Comprehensive AI & Data Science Skills Assessment','Skill Benchmark'],
    ['CompTIA DataAI: Linear Algebra, Calculus, and Temporal Models','Course'],
    ['Using Vector Search','Video'],
    ['Data Visualization in Python with Seaborn and Altair Competency (Intermediate Level)','Skill Benchmark'],
    ['Clustering and Visualising Documents using Word Embeddings','Link'],
  ]},
  { name:'Agentic AI - Agent Architectures and Collaboration', items:[
    ['Inside Agentic AI: Core Architecture of Agentic Systems','Course'],
    ['Multi Agent Deployments','Video'],
    ['AI Collaboration Protocols','Course'],
  ]},
  { name:'Agentic AI - Memory and Knowledge Retrieval in Agents', items:[
    ['Word Embeddings and Semantic Analysis','Video'],
    ['Understanding Word, Sentence, Document, and Multimodal Embeddings in Large Language Models','Link'],
    ['Visualizing Word Embeddings Using the Embedding Projector Plug-in','Video'],
    ['Representing Words Using Embeddings','Video'],
    ['Using Vector Search as the Vector Database for RAG Engine','Video'],
    ['Creating and Deploying a Vector Search Index','Video'],
    ['Creating and Using Vector Indexes for Search','Video'],
    ['Working with OpenAI Storage and Vector Stores','Video'],
    ['Storing Embeddings Within Vector Databases','Video'],
    ['Using the File Search Tool','Video'],
  ]},
  { name:'Agentic AI - Prompt Engineering and Adaptive Instructions', items:[
    ['Prompt Engineering Patterns','Interactive Course'],
    ['Prompt Engineering Patterns Cheatsheet','Cheatsheet'],
    ['Prompt Engineering and Prompt Tuning','Video'],
    ['Feedback-Driven Agent Loops','Video'],
    ['Prompt Caching and Prompt Optimization','Video'],
  ]},
  { name:'Agentic AI - Advanced Retrieval-Augmented Generation (RAG)', items:[
    ['Retrieval Augmented Generation (RAG)','Video'],
    ['The Retrieval-Augmented Generation (RAG) Process','Video'],
    ['Retrieval-Augmented Generation (RAG) — Overview','Video'],
    ['Retrieval-Augmented Generation (RAG) — In Practice','Video'],
    ['Haystack: Modular RAG Pipelines','Video'],
    ['RAG with LangChain','Video'],
    ['Implementing Multi-Source RAG','Video'],
    ['Agents and Retrieval Systems in LangChain','Interactive Course'],
    ['Agents and Retrieval Systems in LangChain Cheatsheet','Cheatsheet'],
    ['Agents and Retrieval Systems in LangChain Lab: Building an Intelligent LangChain Agent with RAG','Lab'],
    ['Exploring RAG Architecture with OCI Generative AI Agents','Video'],
    ['Building and Exposing a RAG Service with FastAPI','Video'],
    ['RAG Essentials: Why We Need It?','Video'],
    ['LLMs on Google Cloud: Retrieval-Augmented Generation (RAGs) on Vertex AI','Course'],
    ['RAG Techniques Cheatsheet','Cheatsheet'],
    ['RAG Foundations','Course'],
    ['Azure AI Engineer Associate: Retrieval Augmented Generation','Course'],
  ]},
  { name:'Agentic AI - Ethics, Safety and Governance in Agentic AI', items:[
    ['Managing AI Risk in Projects','AI Simulator'],
    ['AI Product Manager: Navigating Governance and Risk Review','AI Simulator'],
    ['Securing AI: AI Governance, Ethics, & Compliance','Course'],
  ]},
  { name:'Agentic AI - Real-World Applications and Case Studies', items:[
    ['AI User Stories: Key Differences from Traditional Stories','Video'],
    ['Building Your Own Agentic Workflows','Video'],
    ['Real-World AI Failure Case Studies','Video'],
    ['Agentic Workflows in Action','Video'],
    ['Automating Tasks with the Workflows Agent in Microsoft 365 Copilot','Video'],
    ['Practical AI Agents in the Workplace','Course'],
    ['Workflow Automation: AI-Based Resume Filtering Using n8n','Lab'],
  ]},
  { name:'Agentic AI - Capstone Project – Build Your Own Agent', items:[
    ['AI Development Tools','Course'],
    ['Building Effective AI Agents','Link'],
    ['Creating Agents with Microsoft 365 Copilot Agent Builder','Video'],
    ['Create an Agent in the Agents Playground','Video'],
    ['Creating an Agent in Copilot Studio','Video'],
    ['Capstone Project: Build an AI Agent for Travel Planning','Lab'],
  ]},
];

/* Extra, non-official track used to log the building of this very portal */
const portfolioTrack = {
  name:'Portfolio Log — Building This Portal', portfolio:true, items:[
    ['Website Build — Dashboard, Syllabus & Submissions UI','Project'],
    ['Website Build — Progress Tracker & Research Notes UI','Project'],
    ['Database Integration — Notes & Code File Storage','Project'],
  ]
};

function inferDifficulty(title){
  if(/beginner/i.test(title)) return 'Beginner';
  if(/advanced/i.test(title)) return 'Advanced';
  if(/intermediate/i.test(title)) return 'Intermediate';
  return null; // resolved by track position if not explicit
}

function seedSyllabus(){
  const allTracks = [...trackData, portfolioTrack];
  return allTracks.map((track, ti)=>{
    const tierDefault = ti <= 2 ? 'Beginner' : (ti <= 10 ? 'Intermediate' : 'Advanced');
    return {
      id: track.portfolio ? 'portfolio' : ('t'+(ti+1)),
      name: track.name,
      portfolio: !!track.portfolio,
      children: track.items.map((item, ii)=>{
        const [name, type] = item;
        return {
          id: (track.portfolio ? 'portfolio' : ('t'+(ti+1))) + '-i' + (ii+1),
          name,
          type,
          difficulty: inferDifficulty(name) || tierDefault,
          progress: 0,
          completionDate: null,
          remarks: type,
          leaf: true,
        };
      })
    };
  });
}

/* ============================================================
   KID-FRIENDLY TOPIC CONTENT (keyword-matched, for the detail popup)
   ============================================================ */
const contentRules = [
  { re:/transformer/i, emoji:'🔧',
    simple:"The Transformer is the special design that powers most modern AI language models. It lets the AI look at an entire sentence at once and figure out which words matter most to each other, instead of reading one word at a time.",
    analogy:"Imagine reading a mystery novel and being able to instantly see how every clue connects to every other clue, instead of just remembering them one at a time. That's what the Transformer design lets the AI do with words.",
    points:["Looks at a whole sentence at once instead of word-by-word.","Uses 'attention' to decide which words matter most.","Is the core design behind models like GPT.","Made today's fast, powerful AI chatbots possible."],
    example:{ desc:"A simplified idea of 'attention' — deciding which words matter:", code:`sentence = "The cat sat on the mat because it was tired"\n\n# "it" mostly relates back to "cat" — attention helps\n# the model figure that connection out automatically\nattention_focus = {"it": "cat"}` }
  },
  { re:/neural network/i, emoji:'🧠',
    simple:"A Neural Network is a computer program built to work a little like a brain. It has tiny building blocks called 'neurons' that pass information to each other and learn patterns together.",
    analogy:"Imagine a big team of friends passing notes. Each friend only does one small job — like checking one clue — then passes their answer to the next friend. Together, the whole team solves a big puzzle.",
    points:["Made of layers of tiny units called neurons.","Each neuron looks at a small piece of the information.","Layers pass their findings to the next layer.","The last layer gives the final answer, like 'cat' or 'dog'."],
    example:{ desc:"A super-simplified neural network idea for recognizing a smiley face:", code:`# Layer 1: looks for basic shapes (circles, curves)\n# Layer 2: combines shapes into eyes + a mouth\n# Layer 3: decides "this looks like a smiley face!"\n\ninput_image = "🙂"\nresult = "smiley face detected"` }
  },
  { re:/\bllm\b|large language model/i, emoji:'💬',
    simple:"A Large Language Model (LLM) is a computer program that has read a huge amount of text and learned how words usually follow each other, so it can write, chat, and answer questions like a person.",
    analogy:"It's like a friend who has read millions of books and can guess what word comes next in a sentence — over and over, one word at a time — until a whole answer is written.",
    points:["Trained on huge amounts of text from books, articles, and websites.","Learns which words usually go together.","Writes answers one word (or piece of a word) at a time.","Can chat, translate, summarize, and even write code."],
    example:{ desc:"How an LLM finishes a sentence, one word at a time:", code:`prompt = "The sun rises in the"\n\n# The model predicts the most likely next word\nnext_word = "east"\n\n# It keeps going, word by word, to build a full answer` }
  },
  { re:/prompt/i, emoji:'✍️',
    simple:"Prompt Engineering is the skill of asking an AI clear and helpful questions so it gives you the best possible answer — kind of like asking a good question to get a good answer from a teacher.",
    analogy:"If you ask 'tell me stuff,' you'll get a confusing answer. But if you ask 'explain photosynthesis in 3 simple sentences for an 8-year-old,' you get something much more useful. That's prompt engineering!",
    points:["Be clear and specific about what you want.","Give examples if it helps explain what you mean.","Tell the AI who the answer is for (like 'explain to a kid').","Ask it to think step-by-step for tricky problems."],
    example:{ desc:"A weak prompt vs. a strong prompt:", code:`# Weak prompt\n"Tell me about space."\n\n# Strong prompt\n"Explain why the sky is blue in 3 simple\nsentences, like you're talking to a curious 8-year-old."` }
  },
  { re:/\brag\b|retrieval.augmented|retrieval systems/i, emoji:'📚',
    simple:"RAG (Retrieval-Augmented Generation) means an AI first looks up helpful facts from your own documents, then uses those facts to write a better, more accurate answer — instead of only guessing from memory.",
    analogy:"It's like an open-book test. Instead of answering purely from memory, the AI is allowed to flip through a book first, find the right page, and then write its answer using what it found.",
    points:["Step 1: search your documents for relevant information.","Step 2: give that information to the AI along with your question.","Step 3: the AI writes an answer using those real facts.","This helps reduce made-up or wrong answers."],
    example:{ desc:"A simple RAG flow:", code:`question = "What is our refund policy?"\n\nfacts = search_documents(question)\nanswer = ask_ai(question, context=facts)` }
  },
  { re:/vector|embedding/i, emoji:'📦',
    simple:"Embeddings and Vector Search are how an AI turns words, sentences, or documents into lists of numbers that capture their meaning — so it can find things that mean something similar, not just things spelled the same way.",
    analogy:"Imagine a toy box where similar toys are always placed near each other automatically — all the cars together, all the dolls together — so when you want 'something like a car,' you instantly know where to look.",
    points:["Turns text into lists of numbers called 'vectors'.","Similar meanings end up stored close together.","Helps AI search by meaning, not just exact words.","Powers features like semantic search and RAG."],
    example:{ desc:"Finding similar items using vector search:", code:`db.add("a happy dog playing")\ndb.add("a joyful puppy running")\ndb.add("a car engine part")\n\nresults = db.search("cheerful puppy")\n# returns the two dog-related entries first` }
  },
  { re:/memory/i, emoji:'🗂️',
    simple:"Memory (in AI agents) means letting an AI remember things from earlier — like your name, what you asked before, or facts it learned — so it doesn't forget everything after each message.",
    analogy:"It's like giving the AI a notebook. Without a notebook, it forgets you the moment you stop talking. With one, it can flip back and remember what you told it yesterday.",
    points:["Short-term memory: remembers the current conversation.","Long-term memory: saves important facts for later use.","Memories can be stored and searched, like a filing cabinet.","Good memory makes an agent feel more helpful and personal."],
    example:{ desc:"A tiny memory notebook for an agent:", code:`memory = {}\n\nmemory["favorite_color"] = "blue"\n\n# Later in a new conversation...\nif "favorite_color" in memory:\n    print("I remember! Your favorite color is " + memory["favorite_color"])` }
  },
  { re:/langgraph/i, emoji:'🕸️',
    simple:"LangGraph is a tool for building AI agents as a 'graph' of steps — like a flowchart with arrows — so the agent can loop, branch, and make decisions instead of just following one straight line.",
    analogy:"Imagine a board game with different paths you can take depending on what happens. LangGraph lets developers draw that kind of map for an AI agent's thinking process.",
    points:["Agent steps are drawn like a flowchart (a graph).","The agent can loop back and try again if needed.","It can branch into different paths depending on the situation.","Useful for agents that need multiple rounds of thinking."],
    example:{ desc:"A simple graph-style flow:", code:`graph.add_step("research")\ngraph.add_step("write_answer")\ngraph.add_edge("research", "write_answer")\n\n# If the answer isn't good enough, loop back to research\ngraph.add_edge("write_answer", "research", condition="needs_more_info")` }
  },
  { re:/langchain/i, emoji:'🔗',
    simple:"LangChain is a toolkit that helps developers connect an AI model to other things — like documents, tools, and memory — so it's easier to build a full AI application instead of starting from scratch.",
    analogy:"Think of LEGO bricks for building AI apps. LangChain gives you ready-made bricks (pieces) for memory, tools, and data, so you can snap them together quickly.",
    points:["Provides ready-made building blocks for AI apps.","Helps connect the AI to your own documents and data.","Makes it easier to add memory and tools to an AI.","Popular for building chatbots and AI assistants."],
    example:{ desc:"A very simplified LangChain-style chain:", code:`chain = load_documents() | ask_question() | get_answer()\n\nanswer = chain.run("What does this PDF say about refunds?")` }
  },
  { re:/tool/i, emoji:'🛠️',
    simple:"Giving an AI 'tools' means letting it use things like a calculator, a search engine, or a weather API — so it isn't limited to just talking. It can actually go and do things, then use the result to help you.",
    analogy:"It's like giving a smart assistant a toolbox. Instead of just guessing a math answer, it can pick up the calculator tool and get the exact right number.",
    points:["The AI is given a list of tools it's allowed to use.","It decides which tool fits the current problem.","It calls the tool with the right information.","It uses the tool's answer to keep helping you."],
    example:{ desc:"An AI deciding to use a calculator tool:", code:`user_question = "What is 482 * 17?"\n\n# The AI recognizes this needs the calculator tool\ntool_call = calculator(482, "*", 17)\nanswer = tool_call.result  # 8194` }
  },
  { re:/multi agent|collaboration|deployments/i, emoji:'🤝',
    simple:"Multi-Agent Collaboration means having more than one AI agent work together on a task — like a little team of AI helpers, each with a different job, that share information to reach a shared goal.",
    analogy:"Imagine two classmates working on a project: one writes the answer, and the other checks it for mistakes. Multi-agent systems set up AI 'classmates' like that.",
    points:["More than one AI agent works on the same problem.","Agents send messages to each other automatically.","One agent might research, another might write or check.","Useful for tasks that are easier to split up into roles."],
    example:{ desc:"Two agents working together:", code:`writer_agent = Agent("Writer")\nreviewer_agent = Agent("Reviewer")\n\ndraft = writer_agent.write("a poem about robots")\nfeedback = reviewer_agent.review(draft)` }
  },
  { re:/architecture/i, emoji:'🏗️',
    simple:"Agent Architecture is the blueprint for how an AI 'agent' is built — how it thinks, remembers things, uses tools, and decides what to do next, step by step, to finish a task.",
    analogy:"It's like the flowchart for a robot helper: first it listens to what you want, then it thinks about a plan, then it acts, then it checks if it worked — and repeats until the job is done.",
    points:["An agent usually has 4 jobs: sense, think, act, and check.","It can loop through these steps multiple times.","It decides on its own which tool or step to use next.","Good architecture keeps the agent organized and less confused."],
    example:{ desc:"A simple loop that shows how an agent thinks:", code:`while task_not_done:\n    observation = look_at_situation()\n    plan = decide_next_step(observation)\n    result = do_action(plan)\n    task_not_done = check_if_finished(result)` }
  },
  { re:/python/i, emoji:'🐍',
    simple:"Python is a beginner-friendly programming language that's very popular for building AI. This resource teaches Python skills that you'll use to build and control AI agents.",
    analogy:"If AI models are like powerful car engines, Python is the steering wheel and pedals — it's how a person actually controls and directs what the AI does.",
    points:["Uses plain, readable commands that look a bit like English.","Widely used for AI, data, and automation.","Great first language for beginners.","Most AI tools (like LangChain) are built for Python."],
    example:{ desc:"A tiny taste of Python:", code:`name = "Agent Smith"\nfor i in range(3):\n    print(f"Hello, I am {name}!")` }
  },
  { re:/api/i, emoji:'🔌',
    simple:"An API (Application Programming Interface) is a way for one computer program to ask another program for information or to do something — like ordering food through a menu instead of walking into the kitchen yourself.",
    analogy:"Think of a restaurant menu. You don't need to know how the kitchen cooks the food — you just order from the menu (the API) and the kitchen (the other program) sends back your meal (the data).",
    points:["Lets two different programs talk to each other.","You send a request, and get a response back.","AI agents use APIs to check weather, search the web, and more.","APIs usually follow a clear, agreed-upon format."],
    example:{ desc:"A simple API-style request:", code:`response = call_api("/weather", city="Delhi")\nprint(response["temperature"])  # e.g. 34°C` }
  },
  { re:/chatgpt|gpt-5|gpt/i, emoji:'💬',
    simple:"ChatGPT is a well-known AI chatbot built on a large language model. This resource shows you how to use it well — asking good questions and understanding what it can and can't do.",
    analogy:"Think of ChatGPT as a very well-read assistant who can chat, write, and explain things — but who sometimes needs clear instructions from you to give its best answer.",
    points:["A chatbot built on a large language model (LLM).","Gets better answers when you give it clear instructions.","Useful for writing, brainstorming, coding help, and more.","Doesn't always know the most recent information."],
    example:{ desc:"A simple back-and-forth with a chatbot:", code:`user: "Summarize this in one sentence: ..."\nassistant: "Here's a one-sentence summary: ..."` }
  },
  { re:/governance|risk|ethic|compliance|securing/i, emoji:'🛡️',
    simple:"AI Governance, Risk & Ethics is about making sure AI is used safely, fairly, and responsibly — setting rules so AI helps people without accidentally causing harm, being unfair, or leaking private information.",
    analogy:"Think of the rules and referees in a sports game. Without rules, the game could get unsafe or unfair. Governance is the set of rules that keeps AI 'playing fair'.",
    points:["Checks that AI systems are safe before they're used widely.","Looks out for bias or unfairness in AI decisions.","Protects people's private information.","Builds trust between AI systems and the people who use them."],
    example:{ desc:"A simple safety check idea:", code:`response = ai_generate(user_input)\n\nif contains_unsafe_content(response):\n    response = "Sorry, I can't help with that."` }
  },
  { re:/capstone|travel planning|copilot agent builder|agents playground|copilot studio/i, emoji:'🚀',
    simple:"This is part of the final Capstone Project, where you bring together everything you've learned — Python, LLMs, tools, memory, and RAG — to actually design and build your own working AI agent from scratch.",
    analogy:"It's like a school science fair project: instead of just learning facts in class, you now build something real using everything you've studied all year.",
    points:["Combines skills from every earlier track into one project.","You design an agent with a clear goal (like planning travel).","You decide what tools and memory the agent needs.","The result is a real, working AI agent you built yourself."],
    example:{ desc:"A tiny outline of a travel-planning agent:", code:`agent = Agent(goal="Plan a 3-day trip to Goa")\nagent.add_tool(flight_search)\nagent.add_tool(hotel_search)\n\nplan = agent.run()` }
  },
  { re:/workflow|automat/i, emoji:'⚙️',
    simple:"An Agentic Workflow is a series of steps an AI agent follows automatically to get a job done — like a recipe the AI follows on its own, without a human doing each step by hand.",
    analogy:"Think of a factory assembly line: each station does one job automatically, and the product moves down the line until it's finished. An agentic workflow is that same idea, but for AI tasks.",
    points:["Breaks a task into a series of automatic steps.","Removes repetitive manual work for people.","Can include AI decisions at each step.","Used for things like filtering resumes or processing forms."],
    example:{ desc:"A simple automated workflow:", code:`workflow = [read_resume, score_candidate, sort_by_score]\n\nfor step in workflow:\n    data = step(data)` }
  },
  { re:/website build|dashboard, syllabus/i, emoji:'🖥️',
    simple:"Building this Portal meant designing and coding a full website from scratch — a dashboard, a syllabus tracker, a submissions log, and a notes section — all working together as one smooth app.",
    analogy:"It's like building a school inside a single building: one room for the timetable (dashboard), one for the subject list (syllabus), one for homework drop-off (submissions), and one for the library (notes) — all connected by the same hallway (navigation).",
    points:["Planned the layout: header, sidebar navigation, and content area.","Built each section as its own page inside one app.","Made the design calm, professional, and easy to read.","Made sure it works on desktop, tablet, and mobile."],
    example:{ desc:"A tiny look at how the app switches between sections:", code:`function showSection(name) {\n  hideAllSections();\n  document.getElementById(name).classList.add("active");\n}\n\nshowSection("dashboard");` }
  },
  { re:/database integration/i, emoji:'🗄️',
    simple:"Database & Notes Integration means connecting the notes and code files you submit to a storage system, so nothing gets lost — everything you save stays there even after you close and reopen the website.",
    analogy:"It's like the difference between writing notes on a whiteboard (they disappear when erased) versus writing them in a notebook (they stay saved, and you can flip back to any page later). This step gave the portal its 'notebook'.",
    points:["Every submission (file + notes) is saved to storage automatically.","Saved data is loaded back whenever you open the portal again.","Progress bars update automatically based on what's been saved.","This connects the Submissions, Notes, and Progress Tracker sections together."],
    example:{ desc:"A simplified look at saving and loading data:", code:`// Save a submission\nstorage.save("submission_1", { topic: "ML", notes: "Learned basics" });\n\n// Load it back later\nconst saved = storage.load("submission_1");\nconsole.log(saved.notes); // "Learned basics"` }
  },
  { re:/agent/i, emoji:'🤖',
    simple:"An AI Agent is a program that doesn't just answer one question — it can plan, use tools, remember things, and take a series of actions on its own to reach a goal you give it.",
    analogy:"A regular chatbot is like a friend who only answers what you ask. An agent is more like a personal assistant who you give a goal to — like 'book me a trip' — and it goes off and figures out the steps itself.",
    points:["Given a goal, not just a single question.","Can use tools, remember context, and make decisions.","Often loops: think, act, check, repeat.","This is the core idea behind 'Agentic AI'."],
    example:{ desc:"A simple agent loop:", code:`while not goal_reached:\n    plan = agent.think(goal, memory)\n    result = agent.act(plan)\n    memory.append(result)` }
  },
];

function genericByType(leafNode, trackName){
  const templates = {
    'Video':`This is a short video lesson called "${leafNode.name}". Watching it walks you through the idea in a simple, visual way — like a mini tutorial.`,
    'Interactive Course':`This is a hands-on course called "${leafNode.name}". You'll read short lessons and try small exercises to practice the idea step by step.`,
    'Course':`This is a full course called "${leafNode.name}". It teaches the topic from the ground up with lessons you can go through at your own pace.`,
    'Cheatsheet':`This is a quick one-page cheatsheet for "${leafNode.name}" — a handy summary you can glance at to remind yourself of the key points.`,
    'Lab':`This is a hands-on lab called "${leafNode.name}". Instead of just reading, you actually build or practice something real here.`,
    'Skill Benchmark':`This is a short quiz-style test called "${leafNode.name}" that checks how much you already know about this topic.`,
    'Link':`This is an external reference called "${leafNode.name}" that explains the topic in more detail on another page.`,
    'AI Simulator':`This is an interactive simulation called "${leafNode.name}" where you practice making decisions in a safe, pretend AI scenario.`,
    'Project':`This is a real, hands-on project called "${leafNode.name}" where you put what you've learned together and actually build something.`,
  };
  return {
    emoji:'📘',
    simple: templates[leafNode.type] || `"${leafNode.name}" is a learning resource in the "${trackName}" module.`,
    analogy:null,
    points:null,
    example:null,
  };
}

function getLeafContent(leafNode, trackName){
  for(const rule of contentRules){
    if(rule.re.test(leafNode.name)) return rule;
  }
  return genericByType(leafNode, trackName);
}

function getParentContent(topic){
  const leaves = [];
  (function walk(n){ n.children ? n.children.forEach(walk) : leaves.push(n); })(topic);
  return {
    emoji:'📁',
    simple:`"${topic.name}" is a track in the syllabus with ${leaves.length} resource${leaves.length===1?'':'s'} inside. Open any of them to see a simple explanation and an example.`,
    analogy:null,
    points:null,
    childLeaves: leaves,
  };
}

/* ============================================================
   SUBMISSIONS SEED — Mon/Tue/Wed portfolio log entries
   ============================================================ */
function seedSubmissions(){
  return [
    {
      id:'sub_seed_mon',
      date:'2026-07-13',
      time:'06:45 PM',
      topicId:'portfolio-i1',
      topicName:'Portfolio Log — Building This Portal',
      fileName:'index.html',
      notes:'Built the full Agentic AI Research & Learning Portal — dashboard, syllabus, submissions tracker, research notes view, and progress tracker. Set up the sidebar navigation, header, and responsive layout.',
      projectDone:true,
      fullyComplete:true,
    },
    {
      id:'sub_seed_tue',
      date:'2026-07-14',
      time:'11:20 AM',
      topicId:'portfolio-i2',
      topicName:'Portfolio Log — Building This Portal',
      fileName:'style.css',
      notes:'Built the Progress Tracker and Research Notes views, and redesigned the Syllabus page into a clean, Coursera-style expandable accordion with all 15 official tracks.',
      projectDone:true,
      fullyComplete:true,
    },
    {
      id:'sub_seed_wed',
      date:'2026-07-15',
      time:'04:10 PM',
      topicId:'portfolio-i3',
      topicName:'Portfolio Log — Building This Portal',
      fileName:'script.js',
      notes:'Connected the Research Notes and Code Submission sections to persistent storage so every note and uploaded code file is saved and can be retrieved later. Linked submissions directly to the Progress Tracker so topic progress updates automatically.',
      projectDone:true,
      fullyComplete:true,
    },
  ];
}

let state = loadState();

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){ return JSON.parse(raw); }
  }catch(e){ console.warn('Could not read saved data', e); }
  const syllabus = seedSyllabus();
  const submissions = seedSubmissions();
  applySeedProgress(syllabus, submissions);
  return { syllabus, submissions };
}

function applySeedProgress(syllabus, submissions){
  const findLeaf = (id)=>{
    let found = null;
    (function walk(nodes){
      nodes.forEach(n=>{
        if(n.children) walk(n.children);
        else if(n.id === id) found = n;
      });
    })(syllabus);
    return found;
  };
  submissions.forEach(s=>{
    const node = findLeaf(s.topicId);
    if(!node) return;
    let p = node.progress;
    if(s.fileName && p < 25) p = 25;
    if(s.notes && p < 50) p = 50;
    if(s.projectDone && p < 75) p = 75;
    if(s.fullyComplete) p = 100;
    node.progress = p;
    if(p >= 100 && !node.completionDate) node.completionDate = s.date;
    if(s.notes) node.remarks = s.notes.length > 80 ? s.notes.slice(0,77)+'…' : s.notes;
  });
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
   RENDER: SYLLABUS ACCORDION (Coursera-style)
   ============================================================ */
let activeFilter = 'all';
let searchTerm = '';
let expandedTracks = new Set(['t1']); // Track 1 open by default, like Coursera

function typeIcon(type){
  const map = {
    'Video':'▶','Course':'📘','Interactive Course':'💻','Cheatsheet':'📄','Lab':'🧪',
    'Skill Benchmark':'🎯','Link':'🔗','AI Simulator':'🕹','Project':'🚀',
  };
  return map[type] || '•';
}

function trackProgressPct(track){
  const kids = track.children;
  return kids.length ? Math.round(kids.reduce((a,l)=>a+l.progress,0)/kids.length) : 0;
}

function renderSyllabus(){
  renderAccordion();
}

function renderAccordion(){
  const container = document.getElementById('accordionList');
  const term = searchTerm.trim().toLowerCase();
  const filtering = !!term || activeFilter !== 'all';

  let totalItems = 0, totalDone = 0;
  const html = [];

  state.syllabus.forEach((track, idx)=>{
    totalItems += track.children.length;
    totalDone += track.children.filter(l=>l.progress>=100).length;

    const matchingRows = track.children.filter(l=>{
      const status = statusFromProgress(l.progress);
      const matchFilter = activeFilter === 'all' || status === activeFilter || l.difficulty === activeFilter;
      const matchSearch = !term || l.name.toLowerCase().includes(term) || track.name.toLowerCase().includes(term);
      return matchFilter && matchSearch;
    });

    if(filtering && matchingRows.length === 0) return; // hide empty tracks while filtering

    const rowsToShow = filtering ? matchingRows : track.children;
    const isOpen = filtering ? true : expandedTracks.has(track.id);
    const pct = trackProgressPct(track);

    html.push(`
      <div class="accordion-item${isOpen ? ' open' : ''}${track.portfolio ? ' portfolio' : ''}" data-track-id="${track.id}">
        <div class="accordion-header" data-track-id="${track.id}">
          <div class="accordion-badge">${track.portfolio ? 'P' : idx+1}</div>
          <div class="accordion-title-wrap">
            <div class="accordion-title">${track.name}</div>
            <div class="accordion-meta">${track.children.length} resource${track.children.length===1?'':'s'} · ${pct}% complete</div>
          </div>
          <div class="accordion-progress-mini">
            <div class="mini-bar"><div class="mini-bar-fill" style="width:${pct}%"></div></div>
            <span class="mini-pct mono">${pct}%</span>
          </div>
          <svg class="accordion-caret" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="accordion-body">
          ${rowsToShow.map(l=>renderAccordionRow(l)).join('')}
        </div>
      </div>
    `);
  });

  container.innerHTML = html.length ? html.join('') : `<div class="accordion-empty">No matching resources.</div>`;

  container.querySelectorAll('.accordion-header').forEach(h=>{
    h.addEventListener('click', ()=>{
      const id = h.dataset.trackId;
      const item = h.closest('.accordion-item');
      if(expandedTracks.has(id)){ expandedTracks.delete(id); } else { expandedTracks.add(id); }
      item.classList.toggle('open');
    });
  });
  container.querySelectorAll('.accordion-row').forEach(r=>{
    r.addEventListener('click', (e)=>{ e.stopPropagation(); openTopicDetail(r.dataset.topicId); });
  });

  const statsEl = document.getElementById('syllabusStats');
  if(statsEl){
    const pct = totalItems ? Math.round(totalDone/totalItems*100) : 0;
    statsEl.textContent = `${state.syllabus.length} tracks · ${totalItems} resources · ${totalDone} completed (${pct}%)`;
  }

  const toggleBtn = document.getElementById('toggleAllBtn');
  if(toggleBtn){
    const allOpen = state.syllabus.every(t=>expandedTracks.has(t.id));
    toggleBtn.textContent = allOpen ? 'Collapse all' : 'Expand all';
  }
}

function renderAccordionRow(l){
  const status = statusFromProgress(l.progress);
  return `
    <div class="accordion-row" data-topic-id="${l.id}">
      <span class="row-icon">${typeIcon(l.type)}</span>
      <span class="row-title">${l.name}</span>
      <span class="row-type mono">${l.type}</span>
      <span class="tag tag-${l.difficulty}">${l.difficulty}</span>
      <div class="row-progress-cell">
        <div class="track"><div class="fill" style="width:${l.progress}%"></div></div>
        <span class="pct">${l.progress}%</span>
      </div>
      <span class="tag tag-${statusClass(status)}">${status}</span>
    </div>
  `;
}

document.getElementById('syllabusFilters').addEventListener('click', (e)=>{
  const chip = e.target.closest('.chip');
  if(!chip) return;
  document.querySelectorAll('#syllabusFilters .chip').forEach(c=>c.classList.remove('active'));
  chip.classList.add('active');
  activeFilter = chip.dataset.filter;
  renderAccordion();
});

document.getElementById('toggleAllBtn').addEventListener('click', ()=>{
  const allOpen = state.syllabus.every(t=>expandedTracks.has(t.id));
  if(allOpen){ expandedTracks.clear(); } else { state.syllabus.forEach(t=>expandedTracks.add(t.id)); }
  renderAccordion();
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
      <td><button class="delete-btn" data-sub-id="${s.id}" title="Delete submission">🗑</button></td>
    </tr>`;
  }).join('');

  // toggle full notes on click
  tbody.querySelectorAll('.notes-cell').forEach(cell=>{
    cell.addEventListener('click', ()=> cell.classList.toggle('collapsed'));
  });

 // delete submission
  tbody.querySelectorAll('.delete-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      if(!confirm('Delete this submission? This cannot be undone.')) return;
      state.submissions = state.submissions.filter(s=>s.id !== btn.dataset.subId);
      saveState();
      renderAll();
    });
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
  renderAccordion();
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
  document.getElementById('formDate').value = todayStr();
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
  const subDate = document.getElementById('formDate').value || todayStr();
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
  
  if(p >= 100 && !leafNode.completionDate) leafNode.completionDate = subDate;
  if(p < 100) leafNode.completionDate = leafNode.completionDate; // keep as-is unless completed
  if(notes) leafNode.remarks = notes.length > 80 ? notes.slice(0,77)+'…' : notes;

  const topicName = allLeaves().find(l=>l.id===topicId)?.topicName || '';

  state.submissions.push({
    id: 'sub_'+Date.now(),
    date: subDate,
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
    const c = getLeafContent(node, breadcrumb);
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
