const staggerGroups = [
  ".stats > div",
  ".hero-mini-grid > div",
  ".hero-card-stack > div",
  ".about-copy p",
  ".skills-wrap span",
  ".contact-links a",
];

staggerGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((item, index) => {
    item.classList.add("stagger-item");
    item.style.setProperty("--stagger", `${index * 80}ms`);
  });
});

document.querySelectorAll(".section, .ticker").forEach((section) => {
  section.classList.add("scroll-scene");
});

const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const glowTargets = [
  ".button",
  ".slider-button",
  ".project-action",
  ".project-card",
  ".hero-card",
  ".featured-project",
  ".featured-panel",
  ".stats",
  ".about-copy",
  ".skills-wrap span",
  ".contact-links a",
  ".hero-mini-grid > div",
];

function updateFloatingNav() {
  if (!nav) {
    return;
  }

  nav.classList.toggle("is-floating", window.scrollY > 80);
}

window.addEventListener("scroll", updateFloatingNav, { passive: true });
updateFloatingNav();

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

function addGlowTarget(item) {
  item.classList.add("glow-target");
  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();

    item.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
    item.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
  });
}

glowTargets.forEach((selector) => {
  document.querySelectorAll(selector).forEach((item) => addGlowTarget(item));
});

function animateNumber(item) {
  if (item.dataset.animated === "true") {
    return;
  }

  const target = Number(item.dataset.count);

  if (Number.isNaN(target)) {
    return;
  }

  item.dataset.animated = "true";

  const suffix = item.dataset.suffix || "";
  const duration = 2400;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);

    item.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function observeReveal(item) {
  revealObserver.observe(item);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target
          .querySelectorAll("[data-count]")
          .forEach((item) => animateNumber(item));
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document
  .querySelectorAll(".reveal, .scroll-scene")
  .forEach((item) => observeReveal(item));

const featuredProjects = [
  {
  name: "Autonomous Data Scientist AI System",
  summary:
    "Developed an autonomous AI-powered data science platform capable of automating data cleaning, EDA, machine learning, clustering, hyperparameter tuning, and interactive analytics through a premium dashboard.",
  stack: "Python / Streamlit / Plotly",
  highlight: "Autonomous AI Data Science Platform",
  projectLink: "https://ajay-autonomous-data-scientist-ai-system.streamlit.app/",
  link: "https://github.com/Ajay-hb/Autonomous-Data-Scientist-AI-System",
  },
  {
  name: "Automatic Folk Music Composer",
  summary:
    "Engineered a generative AI application that creates traditional folk melodies using a character-level LSTM model trained on the Nottingham Music Database, featuring interactive music notation rendering and real-time audio playback.",
  stack: "Deep Learning / LSTM / RNN",
  highlight: "Generative AI Music",
  projectLink: "https://ajay-hb-folk-music-generator.streamlit.app/",
  link: "https://github.com/Ajay-hb/Folk-Music-Generator",
  },
  {
  name: "Multilingual Language Translation System",
  summary:
    "Engineered a Transformer-powered multilingual translation platform using Meta AI's NLLB model, enabling real-time translation across 22 Indian languages and English with speech-to-text, text-to-speech, automatic language detection, and persistent translation history.",
  stack: "Transformers / Deep Learning / NLP",
  highlight: "Language Translator",
  projectLink: "https://ajay-hb-multilingual-language-translation-system.streamlit.app/",
  link: "https://github.com/Ajay-hb/Multilingual_Language_Translation_System_Using_Transformers"
  },
  {
  name: "IMDB Movie Review Sentiment Predictor",
  summary:
    "Built a Deep Learning powered NLP application that analyzes movie reviews and predicts sentiment as Positive or Negative using an LSTM neural network with real-time inference through an interactive Streamlit web interface.",
  stack: "Python / TensorFlow / NLP / LSTM",
  highlight: "LSTM Sentiment Analyzer",
  projectLink: "https://ajay-hb-imdb-movie-review-sentiment-predictor.streamlit.app/",
  link: "https://github.com/Ajay-hb/IMDB-Movie-Review-Sentiment-Predictor",
  },
  {
  name: "Object Recognition in Images",
  summary:
    "Developed a Deep Learning powered computer vision application capable of recognizing and classifying objects from images using CNN architecture with real-time prediction through an interactive Streamlit interface.",
  stack: "Python / CNN / Deep Learning",
  highlight: "CNN Object Recognizer",
  projectLink: "https://ajay-hb-object-recognition-in-images.streamlit.app/",
  link: "https://github.com/Ajay-hb/Object-Recognition-in-Images",
 },
  
  {
    name: "Medical Insurance Cost Prediction",
    summary:
      "Built a production-ready regression app that estimates insurance costs, classifies risk, and provides practical recommendations with downloadable reporting.",
    stack: "Python / Scikit-learn / Streamlit",
    highlight: "R2 score 0.85+",
    projectLink: "https://ajay-medical-insurance-cost-prediction.streamlit.app/",
    link: "https://github.com/Ajay-hb/Medical-Insurance-Cost-Prediction",
  },
  {
    name: "Smart Adaptive Focus Prediction System",
    summary:
      "Created an ML-based focus prediction system using lifestyle factors and paired it with a Streamlit interface for real-time predictions.",
    stack: "Python / XGBoost / Streamlit",
    highlight: "Real-time prediction app",
    projectLink: "https://ajay-smart-adaptive-focus-prediction-system.streamlit.app/",
    link: "https://github.com/Ajay-hb/Smart-Adaptive-Focus-Prediction-system",
  },
  {
  name: "NLP-Based Developer Salary Prediction System",
  summary:
    "Built an end-to-end NLP-powered machine learning system that predicts developer salaries using skill-based text data and real-world survey datasets, deployed with an interactive Streamlit app.",
  stack: "Python / XGBoost / NLP / Streamlit",
  highlight: "NLP + real-time salary prediction app",
  projectLink: "https://ajay-hb-stack-overflow-salary-prediction.streamlit.app/",
  link: "https://github.com/Ajay-hb/Stack-Overflow-Salary-Prediction",
  },
  {
    name: "Banking Churn Analysis and Modeling",
    summary:
      "Developed an end-to-end churn prediction system with analytics, retention-focused insights, and an interactive app for identifying high-risk customers.",
    stack: "Python / Random Forest / Streamlit",
    highlight: "Accuracy around 0.84",
    projectLink: "https://ajay-banking-churn-analysis.streamlit.app/",
    link: "https://github.com/Ajay-hb/Banking-Churn-Analysis-Modeling.",
  },
  {
    name: "Santander Transaction Prediction",
    summary:
      "Explored customer transaction prediction with a Kaggle-style workflow focused on classification patterns and model experimentation.",
    stack: "Python / Jupyter Notebook / ML",
    highlight: "Kaggle problem setup",
    projectLink: "",
    link: "https://github.com/Ajay-hb/Kaggle-Santander-Customer-Transaction-Prediction",
  },
  {
    name: "Admission Chance Prediction ML",
    summary:
      "Built a regression project to estimate admission probability from academic profile features using EDA, feature engineering, and multicollinearity handling.",
    stack: "Python / Pandas / Scikit-learn",
    highlight: "500 student profiles",
    projectLink: "",
    link: "https://github.com/Ajay-hb/admission-chance-prediction-ml",
  },
  {
    name: "Power BI Sales Dashboard",
    summary:
      "Created an interactive dashboard covering products, countries, shipment patterns, and profit trends to make performance tracking faster and easier.",
    stack: "Power BI / DAX / Dashboard Design",
    highlight: "141M sales tracked",
    projectLink: "",
    link: "https://github.com/Ajay-hb/PowerBI-Sales-Dashboard",
  },

  {
    name: "T20 Cricketers Info",
    summary:
      "Analyzed cricketer-related data in notebook form to explore player information, patterns, and sports-oriented dataset insights.",
    stack: "Python / Jupyter Notebook / Analysis",
    highlight: "Sports data exploration",
    projectLink: "",
    link: "https://github.com/Ajay-hb/T20-Cricketers-Info",
  },
];

const projectList = document.querySelector("#project-list");
const prevButton = document.querySelector("#projects-prev");
const nextButton = document.querySelector("#projects-next");

const techBadgeMap = [
  { match: "python", label: "Py", title: "Python" },
  { match: "streamlit", label: "St", title: "Streamlit" },
  { match: "power bi", label: "BI", title: "Power BI" },
  { match: "tableau", label: "Tb", title: "Tableau" },
  { match: "tensorflow", label: "TF", title: "TensorFlow" },
  { match: "scikit", label: "SK", title: "Scikit-learn" },
  { match: "xgboost", label: "XG", title: "XGBoost" },
  { match: "nlp", label: "NLP", title: "Natural Language Processing" },
  { match: "cnn", label: "CNN", title: "Convolutional Neural Network" },
  { match: "deep learning", label: "DL", title: "Deep Learning" },
  { match: "machine learning", label: "ML", title: "Machine Learning" },
  { match: "ml", label: "ML", title: "Machine Learning" },
  { match: "plotly", label: "Pl", title: "Plotly" },
  { match: "dax", label: "DAX", title: "DAX" },
  { match: "jupyter", label: "Jp", title: "Jupyter Notebook" },
  { match: "pandas", label: "Pd", title: "Pandas" },
  { match: "transformer", label: "Tr", title: "Transformer" },
  { match: "tensorflow", label: "TF", title: "Tensorflow" },
  { match: "keras", label: "KR", title: "Keras" },
  { match: "LSTM", label: "LSTM", title: "Long Short-Term Memory" },
  { match: "RNN", label: "RNN", title: "Recurrent Neural Network" },  
];

function getTechBadges(project) {
  const source = `${project.stack} ${project.summary}`.toLowerCase();
  const badges = [];
  const seen = new Set();

  techBadgeMap.forEach((tech) => {
    if (source.includes(tech.match) && !seen.has(tech.label)) {
      badges.push(tech);
      seen.add(tech.label);
    }
  });

  return badges.slice(0, 5);
}

function renderProjectCards() {
  featuredProjects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.style.setProperty("--stagger", `${index * 90}ms`);
    const techBadges = getTechBadges(project)
      .map(
        (tech) =>
          `<span class="tech-badge" title="${tech.title}" aria-label="${tech.title}">${tech.label}</span>`
      )
      .join("");
    const demoButton = project.projectLink
      ? `<a class="project-action project-demo" href="${project.projectLink}" target="_blank" rel="noreferrer">Live Demo</a>`
      : `<span class="project-action is-disabled">Demo Soon</span>`;
    const projectIcon = project.projectLink
      ? `<a class="project-icon-link" href="${project.projectLink}" target="_blank" rel="noreferrer" aria-label="Open ${project.name} project link">â†—</a>`
      : `<span class="project-icon-link is-disabled" aria-label="Add project link in script.js">â†—</span>`;

    card.innerHTML = `
      <div class="project-card-top">
        <p class="project-type">Project ${String(index + 1).padStart(2, "0")}</p>      </div>
      <h3>${project.name}</h3>
      <div class="project-tech-icons" aria-label="Project technologies">
        ${techBadges}
      </div>
      <p>${project.summary}</p>
      <div class="project-meta">
        <span>${project.stack}</span>
        <span>${project.highlight}</span>
      </div>
      <div class="project-actions">
        ${demoButton}
        <a class="project-action project-github" href="${project.link}" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    `;
    projectList.appendChild(card);
    card.querySelectorAll(".project-action:not(.is-disabled)").forEach((item) => addGlowTarget(item));
    addGlowTarget(card);
    observeReveal(card);
  });
}

function slideProjects(direction) {
  const card = projectList.querySelector(".project-card");

  if (!card) {
    return;
  }

  const gap = 18;
  const amount = card.getBoundingClientRect().width + gap;
  projectList.scrollBy({
    left: direction * amount,
    behavior: "smooth",
  });
}

prevButton.addEventListener("click", () => slideProjects(-1));
nextButton.addEventListener("click", () => slideProjects(1));

renderProjectCards();

