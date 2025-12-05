/* ... imports ... */
import { RESUME_DATA, NAV_LINKS, PROFILE_IMAGE, TESTIMONIALS } from './constants.js';

const root = document.getElementById('root');

// --- Components ---

function Navbar() {
// ... existing Navbar code ...
  return `
    <nav class="fixed top-0 left-0 right-0 z-50 glass-panel transition-colors duration-300">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" class="font-bold text-xl tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
          <span class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-lg font-mono">A</span>
          Adam.C
        </a>
<!-- ... rest of Navbar ... -->
          ${linksHTML}
          <div class="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
          <button id="theme-toggle" class="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <i data-lucide="moon" class="hidden dark:block" width="20"></i>
            <i data-lucide="sun" class="block dark:hidden" width="20"></i>
          </button>
        </div>
<!-- ... mobile menu buttons ... -->
        <div class="flex items-center gap-4 md:hidden">
          <button id="theme-toggle-mobile" class="p-2 text-slate-600 dark:text-slate-300">
             <i data-lucide="moon" class="hidden dark:block" width="20"></i>
             <i data-lucide="sun" class="block dark:hidden" width="20"></i>
          </button>
          <button id="mobile-menu-btn" class="text-slate-900 dark:text-white">
            <i data-lucide="menu" width="24"></i>
          </button>
        </div>
      </div>
<!-- ... mobile menu content ... -->
      <div id="mobile-menu" class="hidden md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 absolute w-full left-0 shadow-lg">
        <div class="flex flex-col p-4 gap-4">
          ${NAV_LINKS.map(link => `
             <a href="${link.href}" class="block text-slate-600 dark:text-slate-300 py-2 hover:text-blue-600 dark:hover:text-blue-400 font-medium">${link.label}</a>
          `).join('')}
        </div>
      </div>
    </nav>
  `;
}

function Hero() {
  const { name, title, summary, contact } = RESUME_DATA;
  return `
    <section id="home" class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      <!-- ReactBits Style: Dot Grid Background -->
      <div class="absolute inset-0 z-0 bg-dot-grid pointer-events-none opacity-60"></div>
      
      <!-- Gradient Glow (Spotlight feel) -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 dark:bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col-reverse md:flex-row items-center gap-12">
          
          <!-- Text Content -->
          <div class="flex-1 text-center md:text-left reveal">
            <div class="inline-block mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold tracking-wide uppercase">
              Available for Hire
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Hi, I'm <span id="hacker-text" class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-mono" data-value="${name}">${name}</span>
            </h1>
            <h2 class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium mb-6">
              ${title}
            </h2>
            <p class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              ${summary}
            </p>

            <div class="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <a href="mailto:${contact.email}" class="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transform duration-200">
                <i data-lucide="mail" width="20"></i>
                <span class="font-medium">Get in Touch</span>
              </a>
              <a href="${contact.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 shadow-sm">
                <i data-lucide="linkedin" width="20"></i>
                <span class="font-medium">LinkedIn</span>
              </a>
              <a href="${contact.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 shadow-sm">
                <i data-lucide="github" width="20"></i>
                <span class="font-medium">GitHub</span>
              </a>
            </div>

            <div class="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 text-slate-500 dark:text-slate-400 text-sm">
              <div class="flex items-center gap-1">
                <i data-lucide="map-pin" width="14"></i>
                <span>${contact.location}</span>
              </div>
              <div class="hidden md:block w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
              <div>${contact.email}</div>
            </div>
          </div>

          <!-- Profile Image -->
          <div class="flex-1 flex justify-center md:justify-end reveal transition-delay-200">
            <div class="relative w-64 h-64 md:w-80 md:h-80">
              <div class="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src="${PROFILE_IMAGE}" 
                alt="${name}" 
                class="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
                onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=Adam+Chia&background=2563eb&color=fff&size=512';"
              >
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

function Skills() {
  const COLORS = ['bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-pink-500', 'bg-teal-500'];
  
  const chartHTML = RESUME_DATA.skills.map((skill, idx) => `
    <div class="mb-5">
      <div class="flex justify-between mb-2">
        <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">${skill.name}</span>
        <span class="text-sm text-slate-500 dark:text-slate-400">${skill.level}%</span>
      </div>
      <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
        <div class="${COLORS[idx % COLORS.length]} h-full rounded-full transition-all duration-1000 ease-out" style="width: 0%" data-width="${skill.level}%"></div>
      </div>
    </div>
  `).join('');

  // Added spotlight-card class
  const listHTML = RESUME_DATA.skills.map((category, idx) => `
    <div class="spotlight-card bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1">
      <h3 class="font-bold text-slate-800 dark:text-white mb-3 flex items-center gap-2 relative z-10">
        <span class="w-2.5 h-2.5 rounded-full ${COLORS[idx % COLORS.length]} shadow-[0_0_8px_currentColor]"></span>
        ${category.name}
      </h3>
      <div class="flex flex-wrap gap-2 relative z-10">
        ${category.skills.map(skill => `
          <span class="px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg">
            ${skill}
          </span>
        `).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section id="skills" class="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 reveal">
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-2">Technical Proficiency</h2>
          <p class="text-slate-500 dark:text-slate-400">A quantitative look at my technical toolkit</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none reveal">
            ${chartHTML}
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 reveal transition-delay-200">
            ${listHTML}
          </div>
        </div>
      </div>
    </section>
  `;
}

function Experience() {
  // ... existing Experience code ...
  const experiencesHTML = RESUME_DATA.experience.map(exp => `
    <div class="relative pl-8 md:pl-10 border-l-2 border-slate-200 dark:border-slate-700 pb-12 last:pb-0">
      <div class="absolute -left-[9px] top-0 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-blue-500 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"></div>
      <div class="mb-2">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">${exp.role}</h3>
        <div class="text-blue-600 dark:text-blue-400 font-semibold">${exp.company}</div>
      </div>
      <div class="flex items-center text-slate-500 dark:text-slate-400 text-sm mb-4 bg-slate-100 dark:bg-slate-800 w-fit px-3 py-1 rounded-full">
        <i data-lucide="calendar" width="14" class="mr-2"></i>
        ${exp.duration}
      </div>
      <ul class="space-y-3">
        ${exp.description.map(desc => `
          <li class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-3">
            <span class="mt-2 w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full shrink-0"></span>
            ${desc}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');

  return `
    <section id="experience" class="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div class="reveal">
            <div class="flex items-center gap-3 mb-10">
              <div class="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                <i data-lucide="briefcase" width="24"></i>
              </div>
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Experience</h2>
            </div>
            <div class="">
              ${experiencesHTML}
            </div>
          </div>

          <div class="space-y-12 reveal transition-delay-200">
            <div>
              <div class="flex items-center gap-3 mb-10">
                <div class="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
                   <i data-lucide="graduation-cap" width="24"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
              </div>
              
              ${RESUME_DATA.education.map(edu => `
                <div class="spotlight-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                  <div class="relative z-10">
                    <div class="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white">${edu.school}</h3>
                        <span class="text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full border border-green-200 dark:border-green-900">
                        CGPA 3.47
                        </span>
                    </div>
                    <div class="text-slate-700 dark:text-slate-300 font-medium mb-1">${edu.degree}</div>
                    <div class="text-slate-400 text-sm mb-6">${edu.duration}</div>
                    <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <span class="font-semibold text-slate-900 dark:text-slate-200 block mb-2">Key Coursework:</span>
                        Data Structure, Deep Learning, NLP, Business Intelligence.
                    </p>
                  </div>
                </div>
              `).join('')}
            </div>

             <div>
              <div class="flex items-center gap-3 mb-8">
                <div class="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl">
                  <i data-lucide="award" width="24"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Activities</h2>
              </div>
              <div class="grid gap-4">
                ${RESUME_DATA.activities.map(act => {
                  const [title, desc] = act.split(': ');
                  return `
                    <div class="spotlight-card bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-700 transition-colors group">
                      <div class="relative z-10">
                        <h4 class="font-bold text-slate-800 dark:text-slate-200 text-sm mb-2 group-hover:text-amber-600 transition-colors">${title}</h4>
                        <p class="text-slate-600 dark:text-slate-400 text-sm">${desc}</p>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function Projects() {
  const gradients = [
    'from-blue-600 to-cyan-500',
    'from-indigo-600 to-purple-500',
    'from-emerald-600 to-teal-500'
  ];

  // Added spotlight-card class and relative z-10 wrappers
  const projectsHTML = RESUME_DATA.projects.map((project, idx) => {
    const gradient = gradients[idx % gradients.length];
    const techHTML = project.tech.split(', ').map(tech => 
      `<span class="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md">${tech}</span>`
    ).join('');

    return `
      <div class="spotlight-card group flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 reveal">
        <!-- Image Area -->
        <div class="h-48 bg-gradient-to-br ${gradient} p-6 flex flex-col justify-end relative overflow-hidden z-10">
          <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div class="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg text-white">
             <i data-lucide="code-2" width="20"></i>
          </div>
          <h3 class="text-xl font-bold text-white relative z-10 drop-shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300">${project.title}</h3>
        </div>
        
        <div class="p-6 flex-1 flex flex-col relative z-10">
          <div class="flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
            <i data-lucide="calendar" width="12"></i>
            ${project.date}
          </div>
          
          <div class="mb-6 flex flex-wrap gap-2">
             ${techHTML}
          </div>

          <ul class="space-y-2 mb-8 flex-1">
            ${project.description.slice(0, 3).map(desc => 
              `<li class="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                 <span class="mt-1.5 w-1 h-1 bg-slate-400 rounded-full shrink-0"></span>
                 ${desc}
              </li>`
            ).join('')}
          </ul>

          <a href="${project.link}" target="_blank" class="w-full mt-auto py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex items-center justify-center gap-2">
            View Details <i data-lucide="arrow-right" width="16"></i>
          </a>
        </div>
      </div>
    `;
  }).join('');

  return `
    <section id="projects" class="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 reveal">
          <div class="max-w-2xl">
             <div class="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-2">Portfolio</div>
             <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
             <p class="text-slate-500 dark:text-slate-400 text-lg">
               Showcasing real-world applications of Data Analytics, Machine Learning, and Software Development.
             </p>
          </div>
          <a href="${RESUME_DATA.contact.github}" target="_blank" class="flex items-center gap-2 font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            View Github <i data-lucide="external-link" width="16"></i>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projectsHTML}
        </div>
      </div>
    </section>
  `;
}

// ... existing Testimonials and Footer code ...
function Testimonials() {
  return `
    <section class="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div class="container mx-auto px-4 reveal">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">What People Say</h2>
        </div>
        
        <div class="max-w-4xl mx-auto relative bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl dark:shadow-none border border-slate-100 dark:border-slate-800">
          <div class="absolute top-8 left-8 text-blue-100 dark:text-slate-800">
            <i data-lucide="quote" width="64" height="64"></i>
          </div>
          
          <div id="testimonial-container" class="relative z-10 min-h-[180px] flex items-center justify-center">
            <!-- Content Injected by JS -->
          </div>

          <div class="flex justify-center gap-4 mt-8">
            <button id="prev-testim" class="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors">
              <i data-lucide="chevron-left" width="20"></i>
            </button>
            <button id="next-testim" class="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors">
              <i data-lucide="chevron-right" width="20"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  return `
    <footer class="bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center gap-8 mb-8">
           <a href="#home" class="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
             <i data-lucide="arrow-up" width="20"></i>
           </a>
           <a href="${RESUME_DATA.contact.linkedin}" target="_blank" class="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
             <i data-lucide="linkedin" width="20"></i>
           </a>
           <a href="${RESUME_DATA.contact.github}" target="_blank" class="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
             <i data-lucide="github" width="20"></i>
           </a>
        </div>
        <p class="mb-2 font-medium text-slate-900 dark:text-slate-200">
          © ${new Date().getFullYear()} Chia Yong Xiang.
        </p>
        <p class="text-sm opacity-70">
          Built with Vanilla JS & Tailwind
        </p>
      </div>
    </footer>
  `;
}

// --- Logic & Interactivity ---

function setupUI() {
  // 1. Dark Mode
  const toggleBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
  const html = document.documentElement;
  
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  }

  const toggleTheme = () => {
    html.classList.toggle('dark');
    localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  };

  toggleBtns.forEach(btn => btn?.addEventListener('click', toggleTheme));

  // 2. Mobile Menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  let isMenuOpen = false;

  menuBtn?.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  });

  // 3. Scroll Animations (Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.querySelector('.bg-blue-500')) { 
             const bars = entry.target.querySelectorAll('[data-width]');
             bars.forEach(bar => {
                 bar.style.width = bar.getAttribute('data-width');
             });
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // 4. Testimonial Slider
  let currentTestimonial = 0;
  const container = document.getElementById('testimonial-container');
  const prevBtn = document.getElementById('prev-testim');
  const nextBtn = document.getElementById('next-testim');

  const renderTestimonial = () => {
    const t = TESTIMONIALS[currentTestimonial];
    container.innerHTML = `
      <div class="text-center animate-fade-in px-4">
        <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium italic mb-6 leading-relaxed">"${t.text}"</p>
        <h4 class="font-bold text-slate-900 dark:text-white">${t.name}</h4>
        <div class="text-sm text-blue-600 dark:text-blue-400 font-medium">${t.role}</div>
      </div>
    `;
  };

  prevBtn?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    renderTestimonial();
  });

  nextBtn?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % TESTIMONIALS.length;
    renderTestimonial();
  });

  if (container) renderTestimonial();

  // 5. Hacker Text Effect (ReactBits Style)
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const hackerText = document.getElementById("hacker-text");

  if (hackerText) {
    let interval = null;
    const originalText = hackerText.dataset.value;
    
    const animateText = () => {
      let iteration = 0;
      clearInterval(interval);
      
      interval = setInterval(() => {
        hackerText.innerText = originalText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        
        if(iteration >= originalText.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    };

    // Run on load
    animateText();
    // Run on hover
    hackerText.onmouseover = animateText;
  }

  // 6. Spotlight Effect for Cards (ReactBits Style)
  const cards = document.querySelectorAll(".spotlight-card");
  
  cards.forEach(card => {
    card.onmousemove = e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  });
}

// ... render function ...
function render() {
  root.innerHTML = `
    ${Navbar()}
    ${Hero()}
    ${Skills()}
    ${Experience()}
    ${Projects()}
    ${Testimonials()}
    ${Footer()}
  `;
  
  lucide.createIcons();
  setupUI();
}

render();