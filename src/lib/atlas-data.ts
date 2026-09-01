import type { Copy } from "@/lib/i18n";

export type ProjectId =
  | "human"
  | "clos"
  | "native"
  | "kernel"
  | "crystal"
  | "soul"
  | "titan"
  | "cogos"
  | "continuum"
  | "skills"
  | "system";

export type Project = {
  id: ProjectId;
  name: Copy;
  map: Copy;
  short: Copy;
  role: Copy;
  not: Copy;
  status: Copy;
  github?: string;
  notion?: string;
  x: number;
  y: number;
};

export type Edge = { from: ProjectId; to: ProjectId };

export const thesis: Copy = {
  ru: "LLM — сменный процессор. Cognitive OS — устойчивый интеллект.",
  en: "LLM is a replaceable processor. Cognitive OS is persistent intelligence.",
};

export const thesisBody: Copy = {
  ru: "Velantrim — не монолитный мозг, а экосистема независимых слоёв: память и evidence, оркестрация, identity, семантика, continuity и исследовательская когнитивная архитектура. Прогресс в одной плоскости не должен стирать ценность другой.",
  en: "Velantrim is not a monolithic brain. It is an ecosystem of independent layers — memory and evidence, orchestration, identity, semantics, continuity, and a research cognitive architecture. Progress in one plane must not erase value in another.",
};

export const mapCaption: Copy = {
  ru: "Карта ответственности, не дерево власти. Связь ≠ зависимость. Исследование ≠ runtime.",
  en: "A responsibility map, not an authority tree. Link ≠ dependency. Research ≠ runtime.",
};

export const projects: Project[] = [
  {
    id: "human",
    name: { ru: "Человек", en: "Human" },
    map: { ru: "Человек", en: "Human" },
    short: { ru: "намерение", en: "intent" },
    role: {
      ru: "Источник намерения, authority и смысла. Система служит человеку, а не наоборот.",
      en: "Source of intent, authority, and meaning. The system serves the human, not the reverse.",
    },
    not: {
      ru: "Не объект оптимизации «сделай счастливым» — это путь к сикофантии.",
      en: "Not an optimization target of “make happy” — that path rewards sycophancy.",
    },
    status: { ru: "authority", en: "authority" },
    x: 50,
    y: 8,
  },
  {
    id: "clos",
    name: { ru: "Cognitive Life OS", en: "Cognitive Life OS" },
    map: { ru: "CLOS", en: "CLOS" },
    short: { ru: "чертёж", en: "blueprint" },
    role: {
      ru: "Исследовательский чертёж: какие различия, состояния, переходы и границы полномочий должны переживать смену технологий.",
      en: "Research blueprint: which distinctions, states, transitions, and authority boundaries must survive a change of technology.",
    },
    not: {
      ru: "Не новый apex, не Canon, не authorization на implementation или runtime.",
      en: "Not a new apex, not Canon, not implementation or runtime authorization.",
    },
    status: { ru: "research blueprint", en: "research blueprint" },
    github: "https://github.com/velantrian/Velantrim-Cognitive-Life-OS-CLOS-",
    notion: "https://app.notion.com/p/3c6ac84d0547814d8a59d3e2719a7d2e",
    x: 50,
    y: 24,
  },
  {
    id: "native",
    name: { ru: "Native Kernel", en: "Native Kernel" },
    map: { ru: "Native", en: "Native" },
    short: { ru: "семантика", en: "semantics" },
    role: {
      ru: "Субстрат-нейтральные семантические обязательства: provenance, неопределённость, история ревизий, declared loss.",
      en: "Substrate-neutral semantic obligations: provenance, uncertainty, revision history, declared loss.",
    },
    not: {
      ru: "Не runtime-координатор и не универсальный TruthGate.",
      en: "Not a runtime coordinator and not a universal TruthGate.",
    },
    status: { ru: "invariants", en: "invariants" },
    github: "https://github.com/velantrian/velantrim-native-kernel",
    x: 22,
    y: 40,
  },
  {
    id: "kernel",
    name: { ru: "Mentaury Kernel", en: "Mentaury Kernel" },
    map: { ru: "Kernel", en: "Kernel" },
    short: { ru: "композиция", en: "composition" },
    role: {
      ru: "Правила безопасного пересечения доменов: compatibility, non-escalation, provenance across boundaries.",
      en: "Safe cross-domain composition: compatibility, non-escalation, provenance across boundaries.",
    },
    not: {
      ru: "Не «третий мозг», не scheduler, не центральный runtime.",
      en: "Not a third brain, not a scheduler, not a central runtime.",
    },
    status: { ru: "contracts", en: "contracts" },
    github: "https://github.com/velantrian/Mentaury-Kernel",
    x: 78,
    y: 40,
  },
  {
    id: "crystal",
    name: { ru: "Crystal", en: "Crystal" },
    map: { ru: "Crystal", en: "Crystal" },
    short: { ru: "память", en: "memory" },
    role: {
      ru: "Local-first память, claims, evidence, provenance и bounded Canon admission. Поиск предлагает кандидата, но не создаёт истину.",
      en: "Local-first memory, claims, evidence, provenance, and bounded Canon admission. Retrieval proposes a candidate; it does not create truth.",
    },
    not: {
      ru: "Не cognition engine, не identity owner, не универсальный action runtime.",
      en: "Not a cognition engine, identity owner, or universal action runtime.",
    },
    status: { ru: "evidence", en: "evidence" },
    github: "https://github.com/velantrian/velantrim-exocortex-crystal",
    x: 16,
    y: 58,
  },
  {
    id: "soul",
    name: { ru: "Mentaury Soul", en: "Mentaury Soul" },
    map: { ru: "Soul", en: "Soul" },
    short: { ru: "identity", en: "identity" },
    role: {
      ru: "Cognition, убеждения, self/non-self, отношения и внутренняя непрерывность индивидуальности.",
      en: "Cognition, beliefs, self/non-self, relationships, and inner continuity of individuality.",
    },
    not: {
      ru: "Не Crystal evidence authority и не unrestricted action runtime.",
      en: "Not Crystal evidence authority and not an unrestricted action runtime.",
    },
    status: { ru: "cognition", en: "cognition" },
    github: "https://github.com/velantrian/velantrim-mentaury-soul",
    x: 50,
    y: 58,
  },
  {
    id: "titan",
    name: { ru: "Titan", en: "Titan" },
    map: { ru: "Titan", en: "Titan" },
    short: { ru: "исполнение", en: "runtime" },
    role: {
      ru: "Оркестрация, провайдеры, инструменты, capability lifecycle и bounded execution.",
      en: "Orchestration, providers, tools, capability lifecycle, and bounded execution.",
    },
    not: {
      ru: "Не truth authority, не владелец Crystal Canon, не identity.",
      en: "Not truth authority, not owner of Crystal Canon, not identity.",
    },
    status: { ru: "orchestration", en: "orchestration" },
    github: "https://github.com/velantrian/Velantrim-ExoCortex-Titan",
    x: 84,
    y: 58,
  },
  {
    id: "cogos",
    name: { ru: "Cognitive OS", en: "Cognitive OS" },
    map: { ru: "Cognitive OS", en: "Cognitive OS" },
    short: { ru: "роли моделей", en: "model roles" },
    role: {
      ru: "Исследовательская архитектура: Interaction, Control, Capability, Assurance, Memory. Маршрутизация, anti-degradation, Behavioral Museum, Model Genome.",
      en: "Research architecture: Interaction, Control, Capability, Assurance, Memory. Routing, anti-degradation, Behavioral Museum, Model Genome.",
    },
    not: {
      ru: "Не production runtime и не владелец trusted memory или identity.",
      en: "Not a production runtime and not owner of trusted memory or identity.",
    },
    status: { ru: "research architecture", en: "research architecture" },
    github: "https://github.com/velantrian/Velantrim-Version-LLM-AI-Cognitive-OS",
    notion: "https://app.notion.com/p/3bfac84d054781db860bf7b1d89f0f89",
    x: 50,
    y: 74,
  },
  {
    id: "continuum",
    name: { ru: "Continuum", en: "Continuum" },
    map: { ru: "Continuum", en: "Continuum" },
    short: { ru: "непрерывность", en: "continuity" },
    role: {
      ru: "Сохранение процесса между сменами inference: capture, handoff, rehydration, currentness.",
      en: "Process continuity across inference replacement: capture, handoff, rehydration, currentness.",
    },
    not: {
      ru: "Не Memory Canon и не скрытый runtime owner.",
      en: "Not Memory Canon and not a hidden runtime owner.",
    },
    status: { ru: "continuity lab", en: "continuity lab" },
    github: "https://github.com/velantrian/Velantrim-Continuum",
    x: 50,
    y: 88,
  },
  {
    id: "skills",
    name: { ru: "AI Skills", en: "AI Skills" },
    map: { ru: "Skills", en: "Skills" },
    short: { ru: "методы", en: "methods" },
    role: {
      ru: "Переиспользуемые, project-neutral методы работы AI. Read-only по умолчанию. Skill не даёт себе write permission.",
      en: "Reusable, project-neutral AI methods. Read-only by default. A Skill does not grant itself write permission.",
    },
    not: {
      ru: "Не память, не belief store, не authority layer.",
      en: "Not memory, not a belief store, not an authority layer.",
    },
    status: { ru: "tooling", en: "tooling" },
    github: "https://github.com/velantrian/velantrim-ai-skills",
    x: 84,
    y: 24,
  },
  {
    id: "system",
    name: { ru: "System OS", en: "System OS" },
    map: { ru: "System", en: "System" },
    short: { ru: "ориентация", en: "orientation" },
    role: {
      ru: "Системная ориентация и research bridge. Объясняет, как слои связаны — не исполняет их.",
      en: "System orientation and research bridge. Explains how layers relate — it does not execute them.",
    },
    not: {
      ru: "Не авторизованный общий runtime.",
      en: "Not an authorized shared runtime.",
    },
    status: { ru: "orientation", en: "orientation" },
    notion: "https://app.notion.com/p/3c7ac84d0547815cbc73c97498b2cdf6",
    x: 16,
    y: 24,
  },
];

export const edges: Edge[] = [
  { from: "human", to: "clos" },
  { from: "clos", to: "native" },
  { from: "clos", to: "kernel" },
  { from: "clos", to: "skills" },
  { from: "clos", to: "system" },
  { from: "native", to: "crystal" },
  { from: "native", to: "soul" },
  { from: "kernel", to: "titan" },
  { from: "kernel", to: "soul" },
  { from: "crystal", to: "cogos" },
  { from: "soul", to: "cogos" },
  { from: "titan", to: "cogos" },
  { from: "cogos", to: "continuum" },
];

export type PlaneId = "interaction" | "control" | "capability" | "assurance" | "memory";

export type Plane = {
  id: PlaneId;
  name: Copy;
  question: Copy;
  body: Copy;
  duties: Copy[];
};

export const planes: Plane[] = [
  {
    id: "interaction",
    name: { ru: "Interaction", en: "Interaction" },
    question: {
      ru: "Что человек имеет в виду — и как это сказать?",
      en: "What does the person mean, and how should this be said?",
    },
    body: {
      ru: "Не «меньшая модель с промптом будь дружелюбной». Специализация — человеческая сторона интеллекта: прагматика, калибровка, юмор, глубина объяснения, интеллектуальная честность.",
      en: "Not a smaller model with a “be friendly” prompt. Its specialization is the human side of intelligence: pragmatics, calibration, humor, explanation depth, intellectual honesty.",
    },
    duties: [
      { ru: "намерение и прагматика диалога", en: "intent and conversational pragmatics" },
      { ru: "эмоциональная калибровка без терапии по умолчанию", en: "emotional calibration without default therapy" },
      { ru: "юмор, ирония, callbacks, timing", en: "humor, irony, callbacks, timing" },
      { ru: "семантический handoff в машинную спецификацию", en: "semantic handoff into a machine specification" },
      { ru: "перевод технического вывода обратно в смысл", en: "translating technical output back into meaning" },
    ],
  },
  {
    id: "control",
    name: { ru: "Cognitive Control", en: "Cognitive Control" },
    question: {
      ru: "Кто должен думать — и как?",
      en: "Who should think, and how?",
    },
    body: {
      ru: "Роутер выбирает не имя модели, а конфигурацию: роль, семейство, усилие, стратегия, контекст, инструменты, верификатор, privacy, бюджет. Повторный провал — не «больше токенов», а смена стратегии.",
      en: "The router chooses a configuration, not a model name: role, family, effort, strategy, context, tools, verifier, privacy, budget. Repeated failure is not “more tokens” — it is a strategy change.",
    },
    duties: [
      { ru: "роль и семейство модели", en: "model role and family" },
      { ru: "лестница усилия: Low → Max", en: "effort ladder: Low → Max" },
      { ru: "стратегия: direct / CoT / ReAct / plan-execute", en: "strategy: direct / CoT / ReAct / plan-execute" },
      { ru: "privacy boundary и latency/cost", en: "privacy boundary and latency/cost" },
      { ru: "смена стратегии после провала", en: "strategy switch after failure" },
    ],
  },
  {
    id: "capability",
    name: { ru: "Capability", en: "Capability" },
    question: {
      ru: "Как решить задачу?",
      en: "How do we solve the task?",
    },
    body: {
      ru: "Сменные специалисты: reasoner, coder, researcher, vision, documents, long-horizon agents. Провайдер — не роль. Роль может заполняться разными провайдерами во времени.",
      en: "Interchangeable specialists: reasoner, coder, researcher, vision, documents, long-horizon agents. A provider is not a role. A role can be filled by different providers over time.",
    },
    duties: [
      { ru: "стратегическое рассуждение", en: "strategic reasoning" },
      { ru: "код и отладка", en: "coding and debugging" },
      { ru: "исследование и документы", en: "research and documents" },
      { ru: "инструменты и компьютер", en: "tools and computer use" },
      { ru: "локальные / приватные воркеры", en: "local / private workers" },
    ],
  },
  {
    id: "assurance",
    name: { ru: "Assurance", en: "Assurance" },
    question: {
      ru: "Можно ли доверять результату?",
      en: "Can we trust the result?",
    },
    body: {
      ru: "Модель, создавшая решение, не должна быть единственным судьёй. Interaction спрашивает: подходит ли это человеку? Assurance спрашивает: это истинно?",
      en: "The model that created a solution must not be its only judge. Interaction asks: does this fit the human? Assurance asks: is this trustworthy?",
    },
    duties: [
      { ru: "тесты, компилятор, static analysis", en: "tests, compiler, static analysis" },
      { ru: "source-backed фактические проверки", en: "source-backed factual checks" },
      { ru: "независимый cross-family review", en: "independent cross-family review" },
      { ru: "policy и constraint checks", en: "policy and constraint checks" },
      { ru: "evidence, не язык уверенности", en: "evidence, not confidence language" },
    ],
  },
  {
    id: "memory",
    name: { ru: "Memory", en: "Memory" },
    question: {
      ru: "Что должно пережить один вызов модели?",
      en: "What must persist beyond one model call?",
    },
    body: {
      ru: "Длинный контекст — не память. Hot / Warm / Cold, типизированные записи, provenance. Invariants задачи живут вне транзиентного окна модели.",
      en: "Long context is not memory. Hot / Warm / Cold, typed records, provenance. Task invariants live outside the model’s transient window.",
    },
    duties: [
      { ru: "модель пользователя и состояние задачи", en: "user model and task state" },
      { ru: "эпизоды, факты, provenance", en: "episodes, facts, provenance" },
      { ru: "Hot / Warm / Cold", en: "Hot / Warm / Cold" },
      { ru: "preference ≠ fact, belief ≠ fact", en: "preference ≠ fact, belief ≠ fact" },
      { ru: "анти-деградация: drift, loops, sycophancy", en: "anti-degradation: drift, loops, sycophancy" },
    ],
  },
];

export const memoryTiers = [
  {
    id: "hot",
    name: { ru: "Hot", en: "Hot" },
    body: { ru: "Активный рабочий контекст.", en: "Active working context." },
  },
  {
    id: "warm",
    name: { ru: "Warm", en: "Warm" },
    body: {
      ru: "Решения, саммари, релевантные документы.",
      en: "Decisions, summaries, relevant documents.",
    },
  },
  {
    id: "cold",
    name: { ru: "Cold", en: "Cold" },
    body: { ru: "Полный архив / forensic history.", en: "Full archive / forensic history." },
  },
];

export const distinctions: { left: Copy; right: Copy; note: Copy }[] = [
  {
    left: { ru: "retrieval", en: "retrieval" },
    right: { ru: "evidence", en: "evidence" },
    note: { ru: "Найти ≠ доказать.", en: "Found ≠ proven." },
  },
  {
    left: { ru: "claim", en: "claim" },
    right: { ru: "belief", en: "belief" },
    note: { ru: "Утверждение ≠ убеждение системы.", en: "A claim is not a system belief." },
  },
  {
    left: { ru: "belief", en: "belief" },
    right: { ru: "truth", en: "truth" },
    note: { ru: "Убеждение ≠ истина.", en: "Belief is not truth." },
  },
  {
    left: { ru: "confidence", en: "confidence" },
    right: { ru: "evidence strength", en: "evidence strength" },
    note: { ru: "Уверенность модели — не сила доказательства.", en: "Model confidence is not evidence strength." },
  },
  {
    left: { ru: "coherence", en: "coherence" },
    right: { ru: "truth", en: "truth" },
    note: { ru: "Связность может быть ложной.", en: "Coherence can be false." },
  },
  {
    left: { ru: "identity", en: "identity" },
    right: { ru: "authority", en: "authority" },
    note: { ru: "Непрерывность «я» не даёт права действовать.", en: "Continuity of self does not grant permission to act." },
  },
  {
    left: { ru: "capability", en: "capability" },
    right: { ru: "permission", en: "permission" },
    note: { ru: "Уметь ≠ иметь право.", en: "Can ≠ may." },
  },
  {
    left: { ru: "research", en: "research" },
    right: { ru: "Canon", en: "Canon" },
    note: { ru: "Исследовательский результат не становится законом.", en: "A research result does not become law." },
  },
  {
    left: { ru: "UNKNOWN", en: "UNKNOWN" },
    right: { ru: "false", en: "false" },
    note: { ru: "Неизвестно ≠ ложно.", en: "Unknown is not false." },
  },
  {
    left: { ru: "model output", en: "model output" },
    right: { ru: "Canon", en: "Canon" },
    note: { ru: "Вывод модели не является каноном.", en: "Model output is not Canon." },
  },
  {
    left: { ru: "retrieved", en: "retrieved" },
    right: { ru: "used", en: "used" },
    note: { ru: "R ≠ S ≠ T ≠ U ≠ A. Присутствие в контексте ≠ вклад в ответ.", en: "R ≠ S ≠ T ≠ U ≠ A. Context presence ≠ contribution." },
  },
  {
    left: { ru: "LLM", en: "LLM" },
    right: { ru: "system", en: "system" },
    note: { ru: "Модель ≠ система. Система переживает замену модели.", en: "Model ≠ system. The system survives model replacement." },
  },
];

export type CycleStage = {
  id: string;
  name: Copy;
  ask: Copy;
};

export const closCycle: CycleStage[] = [
  { id: "world", name: { ru: "Мир", en: "World" }, ask: { ru: "Что существует вне системы — мир, себя, другие.", en: "What exists outside the system — world, self, others." } },
  { id: "perception", name: { ru: "Восприятие", en: "Perception" }, ask: { ru: "Что произошло? Что действительно наблюдалось?", en: "What happened? What was actually observed?" } },
  { id: "epistemics", name: { ru: "Эпистемика", en: "Epistemics" }, ask: { ru: "Источник, представление, утверждение, свидетельство, неизвестность.", en: "Source, representation, claim, evidence, unknown." } },
  { id: "memory", name: { ru: "Память", en: "Memory" }, ask: { ru: "Что сохранить? Что изменилось? Откуда это известно?", en: "What to keep? What changed? How is this known?" } },
  { id: "self", name: { ru: "Состояние себя", en: "Self-state" }, ask: { ru: "Кто я в этом контексте? Во что верю? Какие обязательства?", en: "Who am I in this context? What do I believe? Which obligations?" } },
  { id: "will", name: { ru: "Цели / воля", en: "Goals / will" }, ask: { ru: "Чего пытаюсь достичь? Что допустимо менять?", en: "What am I trying to reach? What am I allowed to change?" } },
  { id: "thought", name: { ru: "Мышление", en: "Thought" }, ask: { ru: "Понять, предположить, сравнить, проверить, спланировать.", en: "Understand, hypothesize, compare, test, plan." } },
  { id: "decision", name: { ru: "Решение", en: "Decision" }, ask: { ru: "Достаточно ли известно? Есть ли полномочие? Или STOP.", en: "Is enough known? Is there authority? Or STOP." } },
  { id: "action", name: { ru: "Действие", en: "Action" }, ask: { ru: "Выполнить bounded действие — или отказаться.", en: "Perform a bounded action — or refuse." } },
  { id: "consequence", name: { ru: "Последствия", en: "Consequence" }, ask: { ru: "Что произошло на самом деле, а не что ожидалось?", en: "What actually happened, not what was expected?" } },
  { id: "revision", name: { ru: "Ревизия", en: "Revision" }, ask: { ru: "Что пересмотреть в знаниях, стратегии, модели себя — без тихой перезаписи.", en: "What to revise in knowledge, strategy, self-model — without silent overwrite." } },
];

export const admissionSteps: Copy[] = [
  { ru: "Candidate / Proposal", en: "Candidate / Proposal" },
  { ru: "AdmissionRequest", en: "AdmissionRequest" },
  { ru: "Проверка целевого домена", en: "Target-domain validation" },
  { ru: "DENY → Decision Receipt", en: "DENY → Decision Receipt" },
  { ru: "ALLOW → CapabilityLease", en: "ALLOW → CapabilityLease" },
  { ru: "Bounded operation", en: "Bounded operation" },
  { ru: "ConsumptionReceipt", en: "ConsumptionReceipt" },
];

export const formula: Copy = {
  ru: "Inference свободно строит и разрушает рабочие модели. Гипотеза становится durable truth или внешним действием только через evidence, границы домена и bounded authority.",
  en: "Inference may freely build and break working models. A hypothesis becomes durable truth or external action only through evidence, domain boundaries, and bounded authority.",
};

export const routingExamples: { label: Copy; text: Copy }[] = [
  {
    label: { ru: "Объяснение", en: "Explain" },
    text: {
      ru: "Объясни квантовые вычисления так, чтобы было понятно ребёнку, без сюсюканья.",
      en: "Explain quantum computing so a child can follow, without talking down.",
    },
  },
  {
    label: { ru: "Код", en: "Code" },
    text: {
      ru: "Найди и исправь ошибку заимствования в этом Rust-коде. Нужны тесты.",
      en: "Find and fix the borrow-checker error in this Rust code. Tests required.",
    },
  },
  {
    label: { ru: "Факт", en: "Fact" },
    text: {
      ru: "Подтверждается ли это медицинское утверждение источниками, или это гипотеза?",
      en: "Is this medical claim source-backed, or is it a hypothesis?",
    },
  },
  {
    label: { ru: "Тон", en: "Tone" },
    text: {
      ru: "Напиши короткое письмо коллеге: твёрдо, без холода и без извинений за факт.",
      en: "Write a short note to a colleague: firm, not cold, no apology for a fact.",
    },
  },
  {
    label: { ru: "Агент", en: "Agent" },
    text: {
      ru: "Спланируй многошаговое исследование репозитория и остановись, если authority не хватает.",
      en: "Plan a multi-step repository investigation and stop if authority is missing.",
    },
  },
];

export type RoutePlan = {
  role: Copy;
  family: Copy;
  effort: "Low" | "Medium" | "High" | "XHigh" | "Max";
  strategy: Copy;
  verifier: Copy;
  privacy: Copy;
  memory: Copy;
  plane: PlaneId;
  note: Copy;
};

export function routeTask(raw: string): RoutePlan {
  const s = raw.toLowerCase();
  const has = (...keys: string[]) => keys.some((k) => s.includes(k));

  if (has("rust", "код", "code", "bug", "debug", "compile", "borrow", "refactor", "api", "тест", "test")) {
    return {
      role: { ru: "Coder", en: "Coder" },
      family: { ru: "capability specialist", en: "capability specialist" },
      effort: has("тест", "test", "critical", "продакшн", "production") ? "XHigh" : "High",
      strategy: { ru: "plan-execute + tests", en: "plan-execute + tests" },
      verifier: { ru: "compiler / tests / independent review", en: "compiler / tests / independent review" },
      privacy: { ru: "sanitize before cloud", en: "sanitize before cloud" },
      memory: { ru: "task invariants + warm trajectory", en: "task invariants + warm trajectory" },
      plane: "capability",
      note: {
        ru: "Создаёт Coder. Проверяет Assurance. Interaction только интерпретирует для человека.",
        en: "Coder creates. Assurance verifies. Interaction only interprets for the human.",
      },
    };
  }

  if (has("медицин", "medical", "claim", "утвержд", "evidence", "источник", "source", "legal", "факт")) {
    return {
      role: { ru: "Researcher", en: "Researcher" },
      family: { ru: "capability + assurance", en: "capability + assurance" },
      effort: "XHigh",
      strategy: { ru: "source-backed + adversarial review", en: "source-backed + adversarial review" },
      verifier: { ru: "независимый fact-check, не self-review", en: "independent fact-check, not self-review" },
      privacy: { ru: "high — no silent external leak", en: "high — no silent external leak" },
      memory: { ru: "typed facts with provenance", en: "typed facts with provenance" },
      plane: "assurance",
      note: {
        ru: "Уверенный тон запрещён без evidence. UNKNOWN — допустимый ответ.",
        en: "Confident tone is forbidden without evidence. UNKNOWN is a valid answer.",
      },
    };
  }

  if (has("агент", "agent", "многошаг", "multi-step", "orchestr", "план исслед", "репозитор")) {
    return {
      role: { ru: "Long-horizon operator", en: "Long-horizon operator" },
      family: { ru: "control + capability", en: "control + capability" },
      effort: "Max",
      strategy: { ru: "plan-execute + reflection + authority gate", en: "plan-execute + reflection + authority gate" },
      verifier: { ru: "intent guardian + receipts", en: "intent guardian + receipts" },
      privacy: { ru: "lease-bounded tools", en: "lease-bounded tools" },
      memory: { ru: "Continuum process state", en: "Continuum process state" },
      plane: "control",
      note: {
        ru: "Повторный провал меняет стратегию, а не только бюджет токенов. Нет lease — STOP.",
        en: "Repeated failure changes strategy, not just token budget. No lease — STOP.",
      },
    };
  }

  if (has("письм", "letter", "tone", "тон", "шутк", "юмор", "poem", "стих", "друг", "коллег")) {
    return {
      role: { ru: "Interaction", en: "Interaction" },
      family: { ru: "human-facing", en: "human-facing" },
      effort: "Medium",
      strategy: { ru: "direct, calibrated", en: "direct, calibrated" },
      verifier: { ru: "sycophancy / honesty check", en: "sycophancy / honesty check" },
      privacy: { ru: "local-first interaction", en: "local-first interaction" },
      memory: { ru: "user model (warm)", en: "user model (warm)" },
      plane: "interaction",
      note: {
        ru: "Задача остаётся на Interaction Plane. Capability не нужен. Не сглаживать правду.",
        en: "Stays on the Interaction Plane. Capability not required. Do not sand the truth.",
      },
    };
  }

  if (has("объясн", "explain", "ребён", "child", "teach", "прост", "понятн")) {
    return {
      role: { ru: "Interaction + Reasoner", en: "Interaction + Reasoner" },
      family: { ru: "handoff, then interpret", en: "handoff, then interpret" },
      effort: "High",
      strategy: { ru: "semantic handoff → reason → human rewrite", en: "semantic handoff → reason → human rewrite" },
      verifier: { ru: "fidelity to original intent", en: "fidelity to original intent" },
      privacy: { ru: "local interaction, optional cloud reasoner", en: "local interaction, optional cloud reasoner" },
      memory: { ru: "user level + desired depth", en: "user level + desired depth" },
      plane: "interaction",
      note: {
        ru: "Interaction не должен стать lossy codec: original message сохраняется рядом с интерпретацией.",
        en: "Interaction must not become a lossy codec: the original message is kept beside the interpretation.",
      },
    };
  }

  return {
    role: { ru: "Reasoner", en: "Reasoner" },
    family: { ru: "capability default", en: "capability default" },
    effort: "Medium",
    strategy: { ru: "direct with uncertainty flags", en: "direct with uncertainty flags" },
    verifier: { ru: "light self-consistency, escalate if risk", en: "light self-consistency, escalate if risk" },
    privacy: { ru: "default local-first", en: "default local-first" },
    memory: { ru: "hot context only", en: "hot context only" },
    plane: "control",
    note: {
      ru: "Неясный тип задачи. Control держит Medium и не повышает усилие без сигнала сложности или риска.",
      en: "Unclear task type. Control holds Medium and does not raise effort without a complexity or risk signal.",
    },
  };
}

export function projectById(id: ProjectId): Project {
  const found = projects.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown project ${id}`);
  return found;
}

export const specialists: { id: string; name: Copy }[] = [
  { id: "reasoner", name: { ru: "Reasoner", en: "Reasoner" } },
  { id: "coder", name: { ru: "Coder", en: "Coder" } },
  { id: "researcher", name: { ru: "Researcher", en: "Researcher" } },
  { id: "vision", name: { ru: "Vision", en: "Vision" } },
  { id: "tools", name: { ru: "Tools", en: "Tools" } },
  { id: "specialist", name: { ru: "Specialist", en: "Specialist" } },
];

export const readingLayers: {
  id: string;
  n: string;
  name: Copy;
  owner: Copy;
  body: Copy;
}[] = [
  {
    id: "blueprint",
    n: "01",
    name: { ru: "Cognitive blueprint", en: "Cognitive blueprint" },
    owner: { ru: "CLOS", en: "CLOS" },
    body: {
      ru: "Функции, различия, состояния, переходы, uncertainty, revision, authority — что должно оставаться осмысленным при смене субстрата.",
      en: "Functions, distinctions, states, transitions, uncertainty, revision, authority — what must remain meaningful if the substrate changes.",
    },
  },
  {
    id: "semantics",
    n: "02",
    name: { ru: "Семантика и композиция", en: "Semantics and composition" },
    owner: { ru: "Native Kernel · Mentaury Kernel", en: "Native Kernel · Mentaury Kernel" },
    body: {
      ru: "Формальные инварианты смысла, истории, provenance, declared loss и non-escalation — в project-local scope.",
      en: "Formal invariants of meaning, history, provenance, declared loss, and non-escalation — in project-local scope.",
    },
  },
  {
    id: "policy",
    n: "03",
    name: { ru: "Политика экосистемы", en: "Ecosystem policy" },
    owner: { ru: "Ecosystem Map · System OS", en: "Ecosystem Map · System OS" },
    body: {
      ru: "Кто за что отвечает и как независимые owners взаимодействуют. Карта ответственности, не дерево власти.",
      en: "Who owns what, and how independent owners interact. A responsibility map, not an authority tree.",
    },
  },
  {
    id: "impl",
    n: "04",
    name: { ru: "Профили реализации", en: "Implementation profiles" },
    owner: { ru: "Cognitive OS · текущие проекты", en: "Cognitive OS · current projects" },
    body: {
      ru: "LLM, SQLite, графы, embeddings, Python, провайдеры — примеры реализации функции, не определение самой функции.",
      en: "LLMs, SQLite, graphs, embeddings, Python, providers — implementation examples of a function, not the definition of the function.",
    },
  },
];

export const antiDegradation: { name: Copy; body: Copy }[] = [
  { name: { ru: "context rot", en: "context rot" }, body: { ru: "Рабочий контекст размывается по мере роста окна.", en: "Working context blurs as the window grows." } },
  { name: { ru: "goal drift", en: "goal drift" }, body: { ru: "Цель подменяется более удобной промежуточной.", en: "The goal is replaced by a more convenient intermediate." } },
  { name: { ru: "agent loops", en: "agent loops" }, body: { ru: "Повтор тех же шагов без смены стратегии.", en: "The same steps repeat without a strategy change." } },
  { name: { ru: "self-confirming", en: "self-confirming" }, body: { ru: "Модель проверяет себя тем же семейством.", en: "The model checks itself with the same family." } },
  { name: { ru: "contamination", en: "contamination" }, body: { ru: "Гипотеза попадает в память как факт.", en: "A hypothesis lands in memory as a fact." } },
  { name: { ru: "sycophancy", en: "sycophancy" }, body: { ru: "Согласие важнее истины и intent.", en: "Agreement outranks truth and intent." } },
  { name: { ru: "update regression", en: "update regression" }, body: { ru: "Новый checkpoint стирает нужные human traits.", en: "A new checkpoint erases needed human traits." } },
];

export const genomeScenarios: { id: string; label: Copy; human: number; tech: number }[] = [
  {
    id: "coder",
    label: { ru: "+15% код · −20% presence", en: "+15% coding · −20% presence" },
    human: -20,
    tech: 15,
  },
  {
    id: "voice",
    label: { ru: "+18% presence · −8% агентность", en: "+18% presence · −8% agency" },
    human: 18,
    tech: -8,
  },
  {
    id: "both",
    label: { ru: "+12% обе оси", en: "+12% both axes" },
    human: 12,
    tech: 12,
  },
  {
    id: "regress",
    label: { ru: "регрессия обеих осей", en: "regression on both axes" },
    human: -14,
    tech: -10,
  },
];

export type Admit = "admit" | "hold" | "review";

export function admitRoles(human: number, tech: number): {
  id: string;
  name: Copy;
  verdict: Admit;
}[] {
  const v = (n: number, admitAt: number, holdAt: number): Admit =>
    n >= admitAt ? "admit" : n <= holdAt ? "hold" : "review";
  return [
    { id: "interaction", name: { ru: "Human Interface", en: "Human Interface" }, verdict: v(human, 8, -12) },
    { id: "coder", name: { ru: "Coder", en: "Coder" }, verdict: v(tech, 10, -8) },
    { id: "reasoner", name: { ru: "Reasoner", en: "Reasoner" }, verdict: v(tech, 6, -12) },
    { id: "agent", name: { ru: "Long-horizon", en: "Long-horizon" }, verdict: v(tech, 14, -6) },
  ];
}

export const closFrontiers: { name: Copy; status: Copy }[] = [
  {
    name: { ru: "Coverage / possibility-space", en: "Coverage / possibility-space" },
    status: { ru: "REFINE / CROSSWALK", en: "REFINE / CROSSWALK" },
  },
  {
    name: { ru: "Lossy representation", en: "Lossy representation" },
    status: { ru: "REFINE / FIXTURE", en: "REFINE / FIXTURE" },
  },
  {
    name: { ru: "Reason-Typed Stopping", en: "Reason-Typed Stopping" },
    status: { ru: "MERGE / REFINE", en: "MERGE / REFINE" },
  },
  {
    name: { ru: "Event Segmentation", en: "Event Segmentation" },
    status: { ru: "DISTINCT QUESTION · не primitive", en: "DISTINCT QUESTION · not a primitive" },
  },
];

export const dualPolicies: {
  id: "autonomous" | "jarvis";
  name: Copy;
  body: Copy;
  knobs: { k: Copy; v: Copy }[];
}[] = [
  {
    id: "autonomous",
    name: { ru: "Autonomous", en: "Autonomous" },
    body: {
      ru: "Сам строит гипотезы, выбирает inquiry, выполняет только заранее разрешённые bounded steps, останавливается на authority gate, возвращает result + trace.",
      en: "Builds hypotheses, chooses inquiry, executes only pre-authorized bounded steps, stops at the authority gate, returns result + trace.",
    },
    knobs: [
      { k: { ru: "прерывание", en: "interruption" }, v: { ru: "редко", en: "rare" } },
      { k: { ru: "approval", en: "approval" }, v: { ru: "lease-only", en: "lease-only" } },
      { k: { ru: "бюджет действия", en: "action budget" }, v: { ru: "узкий", en: "narrow" } },
      { k: { ru: "escalation", en: "escalation" }, v: { ru: "на gate", en: "at the gate" } },
    ],
  },
  {
    id: "jarvis",
    name: { ru: "Jarvis / Copilot", en: "Jarvis / Copilot" },
    body: {
      ru: "То же ядро, но раньше показывает развилки, противоречия, uncertainty и цену проверки. Человек чаще выбирает сам.",
      en: "The same core, but forks, contradictions, uncertainty, and verification cost surface earlier. The human chooses more often.",
    },
    knobs: [
      { k: { ru: "прерывание", en: "interruption" }, v: { ru: "часто", en: "frequent" } },
      { k: { ru: "approval", en: "approval" }, v: { ru: "человек", en: "human" } },
      { k: { ru: "бюджет действия", en: "action budget" }, v: { ru: "по шагам", en: "stepwise" } },
      { k: { ru: "escalation", en: "escalation" }, v: { ru: "раньше", en: "earlier" } },
    ],
  },
];
