
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Chia Yong Xiang",
  title: "Data Analytics Undergraduate",
  summary: "Data Analytics undergraduate with hands-on experience in machine learning, SQL databases, and data visualization. Adept at developing automation scripts to streamline manual workflows and increase operational efficiency. Passionate about leveraging data to solve real-world business challenges.",
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
      degree: "BSc (Hons) in Computer Science (Data Analytics)",
      duration: "June 2022 – June 2025",
      details: [
        "CGPA: 3.47",
        "Core Courses: Data Structure, Data Management, Programming for Data Analysis, Database Security, Object Orientated Development with Java, Deep Learning, Text and Sentiment Analytics, Business Intelligence System"
      ]
    }
  ],
  experience: [
    {
      company: "SHOPEE",
      role: "Chatbot Business Analyst",
      duration: "August 2025 – Present",
      description: [
        "Optimized chatbot script efficiency by conducting data analysis to identify friction points and redesigning conversation flows.",
        "Engineered technical solutions to automate manual operational workflows, reducing processing time.",
        "Collaborated with Product, Operations, WFM, and CS stakeholders to drive higher deflection rates."
      ]
    },
    {
      company: "TPLINK",
      role: "Marketing & Business Analyst Intern",
      duration: "March 2024 – August 2024",
      description: [
        "Assisted marketing team in market research, competitive analysis, social media management and online advertising.",
        "Created and maintained data reports summarizing performance of online sales and marketing activities.",
        "Aided in maintaining the online flagship store, including product listing and inventory management."
      ]
    }
  ],
  projects: [
    {
      title: "Phishing URL Detector",
      tech: "Python, LightGBM, NLP",
      date: "May 2025",
      description: [
        "Developed a real-time phishing URL detection system combining handcrafted features with TF-IDF text representation.",
        "Evaluated multiple models and identified LightGBM as the most accurate and robust on external datasets."
      ]
    },
    {
      title: "3 Player Mahjong Calc",
      tech: "TypeScript, React",
      date: "October 2025",
      description: [
        "Instantly computes net payouts/losses based on hand value and win type, eliminating manual calculation errors.",
        "Built with a dedicated ruleset engine accounting for unique 3-player mechanics and specific scoring adaptations."
      ]
    }
  ],
  activities: [
    "Google Workspace Hackathon 2024: Dove into AppScript for streamlined automation.",
    "SAS Curiosity Cup 2023: Applied real-world analytics skills in global competition."
  ],
  skills: [
    { name: "Programming", skills: ["Python", "SQL", "Java", "C++", "R", "SAS", "App Script"], level: 90 },
    { name: "Data Intel", skills: ["Power BI", "Tableau", "Matplotlib", "Kaggle"], level: 85 },
    { name: "Analysis", skills: ["Data Management", "Deep Learning", "NLP"], level: 80 },
    { name: "Suite", skills: ["Excel", "Jupyter", "Photoshop", "Git"], level: 85 }
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
4. If asked about contact info, provide the email (adamchia2212@gmail.com) or LinkedIn link.
`;
