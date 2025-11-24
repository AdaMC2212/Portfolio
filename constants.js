
export const RESUME_DATA = {
  name: "Chia Yong Xiang",
  title: "Data Analytics & Machine Learning Enthusiast",
  summary: "Data Analytics undergraduate with hands-on experience in machine learning, SQL databases, and data visualization. Passionate about leveraging data to solve real-world business challenges.",
  contact: {
    location: "Kuala Lumpur, Malaysia",
    phone: "+6010 288 0720",
    email: "adamchia2212@gmail.com",
    linkedin: "https://linkedin.com/in/yong-xiang-chia",
    github: "https://github.com/AdaMC2212"
  },
  education: [
    {
      school: "Asia Pacific University (APU)",
      degree: "Bachelor of Science (Hons) in Computer Science with a specialism in Data Analytics",
      duration: "June 2022 – June 2025",
      details: [
        "CGPA: 3.47",
        "Core Courses: Data Structure, Data Management, Programming for Data Analysis, Database Security, Object Orientated Development with Java, Deep Learning, Text and Sentiment Analytics, Business Intelligence System"
      ]
    }
  ],
  experience: [
    {
      company: "TPLINK Distribution Malaysia Sdn. Bhd.",
      role: "Marketing & Business Analyst Intern",
      duration: "March 2024 – August 2024",
      description: [
        "Assisted the marketing team in market research, competitive analysis, social media management and online advertising.",
        "Created and maintained data reports, summarizing the performance of online sales and marketing activities, and providing key insights to management.",
        "Aided in maintaining and updating the online flagship store, including product listing, price updates, inventory management, and order processing."
      ]
    }
  ],
  projects: [
    {
      title: "Detecting Phishing URL using ML and NLP",
      tech: "Jupyter Notebook, Flask, LightGBM, SHAP",
      date: "May 2025",
      description: [
        "Developed a real-time phishing URL detection system using ML and NLP, combining handcrafted URL features with TF-IDF text representation.",
        "Evaluated multiple models and identified LightGBM as the most accurate and robust, including on external datasets.",
        "Deployed the solution via a Flask web app with SHAP-based explainability and reporting features."
      ],
      link: "https://github.com/AdaMC2212"
    },
    {
      title: "Spam Email Classification",
      tech: "Jupyter Notebook, Python, NLP",
      date: "December 2024",
      description: [
        "Built an effective Supervised Text Classification model using Jupyter Notebook to detect spam emails.",
        "Applied advanced tokenization, lemmatization, and text normalization techniques to extract meaningful linguistic patterns from spam emails."
      ],
      link: "https://github.com/AdaMC2212"
    },
    {
      title: "E-Book Database System",
      tech: "MSSQL Server",
      date: "May 2023",
      description: [
        "Developed relational database for E-bookstore using MSSQL Server.",
        "Implemented business rules, normalization, DDL, and DML operations.",
        "Designed ERD and established entity relationships."
      ],
      link: "https://github.com/AdaMC2212"
    }
  ],
  activities: [
    "Google Workspace Hackathon 2024: Dove into AppScript for streamlined automation and AppSheet for building apps without extensive coding.",
    "SAS Curiosity Cup 2023: Collaborated in global team competition to apply real-world analytics skills."
  ],
  skills: [
    { name: "Python", skills: ["Pandas", "NumPy", "Scikit-learn"], level: 90 },
    { name: "SQL", skills: ["MSSQL", "Query Optimization"], level: 85 },
    { name: "Data Viz", skills: ["Power BI", "Tableau", "Matplotlib"], level: 80 },
    { name: "Languages", skills: ["Java", "C++", "R", "SAS"], level: 75 },
    { name: "Tools", skills: ["Excel", "Jupyter", "Git"], level: 85 }
  ]
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" }
];

export const PROFILE_IMAGE = "./profile.jpeg";

export const TESTIMONIALS = [
  {
    name: "Chong Weng Thim",
    role: "Hackathon Teammate",
    text: "Working with Adam is always a breeze. He handles the backend data logic effortlessly while keeping the team spirit high."
  },
  {
    name: "Hendra",
    role: "Chatbot Team Lead at Shopee",
    text: "Adam you wonder-kid! May be new to the team, but he is quickly proven himself to be a fast learner who needs very little guidance. He picks up complex tasks with ease and delivers quality work consistently, showing strong initiative and curiosity. It’s rare to see someone adapt so quickly and grasp both the technical and contextual aspects of our work in such a short time. His ability to connect the dots, ask the right questions, and find smart solutions makes him a real wonder to watch. I am excited to see how far he will go as he continues to grow in this role."
  },
  {
    name: "Wong Ming Hang",
    role: "Classmate",
    text: "Adam’s the kind of classmate who  asks sharp questions, understands the material deeply, and always delivers solid work. You can literally see his growth week by week."
  }
];

export const SYSTEM_INSTRUCTION = `
You are an interactive AI persona for Chia Yong Xiang's portfolio website. 
Your goal is to represent Chia professionally and accurately based on his resume.

RESUME CONTEXT:
${JSON.stringify(RESUME_DATA)}

GUIDELINES:
1. Answer questions in the first person (as if you are Chia).
2. Highlight your strengths in Data Analytics, Machine Learning, and SQL.
3. Be friendly, professional, and concise.
4. If asked about contact info, provide the email or LinkedIn link.
5. If asked about projects, elaborate on the Phishing URL detection or Spam Classification as key highlights.
6. Keep responses under 100 words unless detailed explanation is requested.
`;
