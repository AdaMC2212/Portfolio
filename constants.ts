
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Chia Yong Xiang",
  title: "Data Analytics & Machine Learning Enthusiast",
  summary: "Analyzing operational frictions and automating manual workflows with terminal-grade precision. Specialized in transforming raw complexity into streamlined automation.",
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
      degree: "Bachelor of Science (Hons) in Computer Science (Data Analytics)",
      duration: "2022.06 – 2025.06",
      details: [
        "CGPA: 3.47",
        "Dean's List Recipient",
        "Core Courses: Deep Learning, Text and Sentiment Analytics, Business Intelligence"
      ]
    }
  ],
  experience: [
    {
      company: "TPLINK Distribution Malaysia Sdn. Bhd.",
      role: "Business Analyst Intern",
      duration: "2024.03 – 2024.08",
      description: [
        "Lead automation initiatives for supply chain tracking, focusing on reducing operational bottlenecks through script-based monitoring.",
        "Created data reports summarizing online sales performance and marketing activities."
      ]
    }
  ],
  projects: [
    {
      title: "Phishing Detector",
      tech: "Python, LightGBM",
      date: "May 2025",
      description: [
        "Analyzes 10k+ daily URL patterns for real-time fraud mitigation using ML and NLP.",
        "Deployed via Flask with SHAP-based explainability."
      ]
    },
    {
      title: "Mahjong Calc",
      tech: "Algorithm, React",
      date: "Dec 2024",
      description: [
        "Automated rule engine for complex winning states and state verification.",
        "Optimized for zero-latency mobile interactions."
      ]
    },
    {
      title: "Automation Bridge",
      tech: "T-SQL, Node.js",
      date: "May 2023",
      description: [
        "Middleware syncing legacy SQL with cloud-native datapipelines.",
        "Implemented business rules and query optimization."
      ]
    }
  ],
  activities: [
    "Google Workspace Hackathon 2024: Dove into AppScript for streamlined automation.",
    "SAS Curiosity Cup 2023: Applied real-world analytics skills in global competition."
  ],
  skills: [
    { name: "Python Core", skills: ["Pandas", "NumPy", "Scikit-learn", "Flask"], level: 90 },
    { name: "Data Architecture", skills: ["MSSQL", "DB Design", "Normalization"], level: 85 },
    { name: "Intelligence", skills: ["Tableau", "Power BI", "Matplotlib"], level: 80 },
    { name: "Development", skills: ["Java", "C++", "R", "Deep Learning"], level: 75 }
  ]
};

export const TESTIMONIALS = [
  {
    name: "Hendra",
    role: "Chatbot Team Lead at Shopee",
    text: "Adam you wonder-kid! May be new to the team, but he is quickly proven himself to be a fast learner who needs very little guidance. He picks up complex tasks with ease and delivers quality work consistently."
  },
  {
    name: "Chong Weng Thim",
    role: "Hackathon Teammate",
    text: "Working with Adam is always a breeze. He handles the backend data logic effortlessly while keeping the team spirit high."
  },
  {
    name: "Wong Ming Hang",
    role: "Classmate",
    text: "Adam’s the kind of classmate who asks sharp questions, understands the material deeply, and always delivers solid work."
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
`;
