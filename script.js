const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const featuredProjects = [
  {
    name: "Medical Insurance Cost Prediction",
    summary:
      "Built a production-ready regression app that estimates insurance costs, classifies risk, and provides practical recommendations with downloadable reporting.",
    stack: "Python / Scikit-learn / Streamlit",
    highlight: "R score 0.85+",
    link: "https://github.com/Ajay-hb/Medical-Insurance-Cost-Prediction",
  },
  {
    name: "Smart Adaptive Focus Prediction System",
    summary:
      "Created an ML-based focus prediction system using lifestyle factors and paired it with a Streamlit interface for real-time predictions.",
    stack: "Python / XGBoost / Streamlit",
    highlight: "Real-time prediction app",
    link: "https://github.com/Ajay-hb/Smart-Adaptive-Focus-Prediction-system",
  },
  {
  name: "NLP-Based Developer Salary Prediction System",
  summary:
    "Built an end-to-end NLP-powered machine learning system that predicts developer salaries using skill-based text data and real-world survey datasets, deployed with an interactive Streamlit app.",
  stack: "Python / XGBoost / NLP / Streamlit",
  highlight: "NLP + real-time salary prediction app",
  link: "https://github.com/Ajay-hb//Stack-Overflow-Salary-Prediction",
  },
  {
    name: "Banking Churn Analysis and Modeling",
    summary:
      "Developed an end-to-end churn prediction system with analytics, retention-focused insights, and an interactive app for identifying high-risk customers.",
    stack: "Python / Random Forest / Streamlit",
    highlight: "Accuracy around 0.84",
    link: "https://github.com/Ajay-hb/Banking-Churn-Analysis-Modeling.",
  },
  {
    name: "Santander Transaction Prediction",
    summary:
      "Explored customer transaction prediction with a Kaggle-style workflow focused on classification patterns and model experimentation.",
    stack: "Python / Jupyter Notebook / ML",
    highlight: "Kaggle problem setup",
    link: "https://github.com/Ajay-hb/Kaggle-Santander-Customer-Transaction-Prediction",
  },
  {
    name: "Power BI Sales Dashboard",
    summary:
      "Created an interactive dashboard covering products, countries, shipment patterns, and profit trends to make performance tracking faster and easier.",
    stack: "Power BI / DAX / Dashboard Design",
    highlight: "141M sales tracked",
    link: "https://github.com/Ajay-hb/PowerBI-Sales-Dashboard",
  },
  {
    name: "Admission Chance Prediction ML",
    summary:
      "Built a regression project to estimate admission probability from academic profile features using EDA, feature engineering, and multicollinearity handling.",
    stack: "Python / Pandas / Scikit-learn",
    highlight: "500 student profiles",
    link: "https://github.com/Ajay-hb/admission-chance-prediction-ml",
  },
  {
    name: "T20 Cricketers Info",
    summary:
      "Analyzed cricketer-related data in notebook form to explore player information, patterns, and sports-oriented dataset insights.",
    stack: "Python / Jupyter Notebook / Analysis",
    highlight: "Sports data exploration",
    link: "https://github.com/Ajay-hb/T20-Cricketers-Info",
  },
  {
    name: "Command Line Slot Machine Game",
    summary:
      "Built a Python command-line game focused on logic flow, user interaction, and simple randomized gameplay mechanics.",
    stack: "Python / CLI / Game Logic",
    highlight: "Interactive terminal project",
    link: "https://github.com/Ajay-hb/Command-Line-Slot-Machine-Game",
  },
];

const projectList = document.querySelector("#project-list");
const prevButton = document.querySelector("#projects-prev");
const nextButton = document.querySelector("#projects-next");

function renderProjectCards() {
  featuredProjects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card reveal visible";
    card.innerHTML = `
      <p class="project-type">Project ${String(index + 1).padStart(2, "0")}</p>
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <div class="project-meta">
        <span>${project.stack}</span>
        <span>${project.highlight}</span>
      </div>
      <a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">
        View this project on GitHub
      </a>
    `;
    projectList.appendChild(card);
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
