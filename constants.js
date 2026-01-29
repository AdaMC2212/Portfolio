
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
      title: "Phishing URL Detection System",
      tech: "Python, LightGBM, NLP, Jupyter",
      date: "May 2025",
      description: [
        "Developed a real-time phishing URL detection system combining handcrafted features with TF-IDF text representation.",
        "Evaluated multiple models and identified LightGBM as the most accurate and robust on external datasets."
      ],
      link: "https://github.com/AdaMC2212/Phishing_URL_Detection_System---Jupyter-Notebook",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
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
      image: "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&fit=crop&q=80&w=800"
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
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
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

export const PROFILE_IMAGE = "profile.jpeg";

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
