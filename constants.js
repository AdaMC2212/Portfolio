
import { ResumeData } from './types';

export const RESUME_DATA = {
  name: "Chia Yong Xiang",
  title: "Data Analytics Undergraduate",
  summary: "Data Analytics undergraduate with hands-on experience in machine learning, SQL databases, and data visualization. Adept at developing automation scripts to streamline manual workflows and increase operational efficiency. Passionate about leveraging data to solve real-world business challenges.",
  profileImage: "/image.png", 
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
      title: "Phishing URL Detection System",
      tech: "Python, LightGBM, NLP, Jupyter",
      date: "May 2025",
      description: [
        "Developed a real-time phishing URL detection system combining handcrafted features with TF-IDF text representation.",
        "Evaluated multiple models and identified LightGBM as the most accurate and robust on external datasets."
      ],
      link: "https://github.com/AdaMC2212/Phishing_URL_Detection_System---Jupyter-Notebook",
      image: "https://images.unsplash.com/photo-1719253481072-5579e62d0a3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN5YmVyJTIwYXR0YWNrfGVufDB8fDB8fHww"
    },
    {
      title: "3 Player Mahjong Calculator",
      tech: "TypeScript, React, Vite",
      date: "October 2025",
      description: [
        "Instantly computes net payouts/losses based on hand value and win type, eliminating manual calculation errors.",
        "Built with a dedicated ruleset engine accounting for unique 3-player mechanics and specific scoring adaptations."
      ],
      link: "https://github.com/AdaMC2212/3P-Mahjong-Calculator",
      image: "https://images.unsplash.com/photo-1698270931936-3b8ece9d981d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFoam9uZ3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      title: "Medical Info System (MSSQL)",
      tech: "SQL, Database Design, Relational",
      date: "December 2024",
      description: [
        "Designed and implemented a comprehensive medical management database with complex relational structures.",
        "Optimized queries for patient record management and automated report generation for clinical operations."
      ],
      link: "https://github.com/AdaMC2212/Medical-Info-System---MSSQL",
      image: "https://images.unsplash.com/photo-1758691462493-120a069304e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lZGljYWwlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D"
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
