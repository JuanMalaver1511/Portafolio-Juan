/* =============================================
   TRANSLATIONS (ES / EN)
   ============================================= */
const i18n = {
    es: {
        page: { title: 'Juan Malaver | Ingeniero de Sistemas' },
        nav: { inicio: 'Inicio', sobremi: 'Sobre Mí', skills: 'Skills', curriculum: 'Curriculum', portafolio: 'Portafolio', contacto: 'Contacto' },
        hero: { terminal: './greet --name="Juan Malaver"', description: 'Full Stack Developer • Ingeniero de Sistemas • Innovador', scroll: 'Desplázate' },
        about: {
            title: 'Sobre Mí', hello: 'Hola, soy Juan Malaver',
            desc: 'un apasionado desarrollador full stack con un sólido dominio de una variedad de tecnologías, incluyendo C#, Python, TypeScript, Angular, MongoDB, Java, JavaScript, HTML, CSS y más. Mi enfoque principal es crear soluciones web innovadoras y funcionales que ofrezcan una experiencia excepcional a los usuarios. Estoy comprometido con el aprendizaje continuo y la mejora constante, lo que me motiva a mantenerme actualizado en las últimas tendencias tecnológicas y las mejores prácticas de desarrollo.',
            download: 'Descargar CV', personal: 'Datos Personales', phone: 'Teléfono', email: 'Email', address: 'Dirección',
            address_val: 'Tunja - Boyacá', role: 'Cargo', role_val: 'Ing. Sistemas', interests_title: 'Intereses',
            int_dev: 'Desarrollo', int_edu: 'Educación', int_ent: 'Emprender', int_games: 'Juegos', int_sports: 'Deportes', int_music: 'Musica'
        },
        skills: {
            title: 'Skills', tech: 'Tecnología', prof: 'Profesional',
            react: 'React', angular: 'Angular', typescript: 'TypeScript', javascript: 'JavaScript', python: 'Python',
            com: 'Comunicación', team: 'Trabajo en equipo', creativity: 'Creatividad', dedication: 'Dedicación',
            ai: 'Manejo de IA', problems: 'Resolución de problemas', leadership: 'Liderazgo'
        },
        curriculum: {
            title: 'Curriculum', edu: 'Educación', exp: 'Experiencia',
            edu1_title: 'Técnico en Sistemas, mantenimiento y redes',
            edu2_title: 'Ingeniero de sistemas', edu2_inst: 'Universidad Juan de Castellanos',
            edu3_title: 'Curso React JS', edu4_title: 'Curso SQL',
            exp1_title: 'Desarrollador de Software', exp1_inst: 'Wheels GoGo',
            exp1_desc: 'Desarrollador en Wheels GoGo, una startup innovadora. Experiencia en Flutter, CSS, React, HTML y JavaScript para crear soluciones móviles y web.',
            exp2_title: 'Desarrollador FullStack Junior',
            exp2_desc: 'Realicé mi práctica profesional en Monolegal, aplicando mis habilidades en C#, MongoDB, JavaScript, HTML y Angular para contribuir al desarrollo de soluciones tecnológicas.',
            exp3_title: 'Founder - Desarrollador',
            exp3_desc: 'Soy fundador de Nexustech, una startup que crea soluciones tecnológicas a la medida. Integramos inteligencia artificial, sistemas POS y tiendas en línea.',
            exp4_title: 'Profesional Soporte - Desarrollador', exp4_inst: 'Universidad Santo Tomas Tunja',
            exp4_desc: 'Ingeniero de Sistemas con rol de Profesional Soporte Tecnológico. Desarrollo web, administración de Moodle y gestión de plataformas virtuales.'
        },
        portfolio: {
            title: 'Portafolio', view: 'Ver proyecto',
            tag1: 'AI', proj1: 'Asistente IA', proj1_desc: 'Plataforma de inteligencia artificial',
            tag2: 'Web', proj2: 'Noticias', proj2_desc: 'Plataforma de noticias con Angular y Node.js',
            proj3: 'App Móvil', proj3_desc: 'Aplicación de finanzas personales con Flutter',
            proj4: 'Panel de análisis', proj4_desc: 'Panel de análisis con Python y React'
        },
        contact: {
            title: 'Contacto', email_head: 'Email', phone_head: 'Teléfono', location_head: 'Ubicación',
            location_val: 'Tunja - Boyacá', form_title: 'Envíame un mensaje',
            name_ph: 'Tu Nombre', phone_ph: 'Número telefónico', email_ph: 'Email', subject_ph: 'Tema', msg_ph: 'Mensaje',
            send: 'Enviar Mensaje'
        },
        footer: { text: 'const © 2024 = <Juan Malaver />' },
        typing: ['Ingeniero de Sistemas', 'Full Stack Developer', 'Founder en NexusTech']
    },
    en: {
        page: { title: 'Juan Malaver | Systems Engineer' },
        nav: { inicio: 'Home', sobremi: 'About Me', skills: 'Skills', curriculum: 'Resume', portafolio: 'Portfolio', contacto: 'Contact' },
        hero: { terminal: './greet --name="Juan Malaver"', description: 'Full Stack Developer • Systems Engineer • Innovator', scroll: 'Scroll down' },
        about: {
            title: 'About Me', hello: 'Hi, I\'m Juan Malaver',
            desc: 'a passionate full stack developer with strong proficiency in a variety of technologies including C#, Python, TypeScript, Angular, MongoDB, Java, JavaScript, HTML, CSS and more. My main focus is creating innovative and functional web solutions that deliver an exceptional user experience. I am committed to continuous learning and constant improvement, which motivates me to stay updated with the latest technology trends and best development practices.',
            download: 'Download CV', personal: 'Personal Data', phone: 'Phone', email: 'Email', address: 'Address',
            address_val: 'Tunja - Boyacá', role: 'Role', role_val: 'Systems Eng.', interests_title: 'Interests',
            int_dev: 'Development', int_edu: 'Education', int_ent: 'Entrepreneurship', int_games: 'Gaming', int_sports: 'Sports', int_music: 'Music'
        },
        skills: {
            title: 'Skills', tech: 'Technology', prof: 'Professional',
            react: 'React', angular: 'Angular', typescript: 'TypeScript', javascript: 'JavaScript', python: 'Python',
            com: 'Communication', team: 'Teamwork', creativity: 'Creativity', dedication: 'Dedication',
            ai: 'AI Management', problems: 'Problem Solving', leadership: 'Leadership'
        },
        curriculum: {
            title: 'Resume', edu: 'Education', exp: 'Experience',
            edu1_title: 'Systems Technician, maintenance and networks',
            edu2_title: 'Systems Engineer', edu2_inst: 'Juan de Castellanos University',
            edu3_title: 'React JS Course', edu4_title: 'SQL Course',
            exp1_title: 'Software Developer', exp1_inst: 'Wheels GoGo',
            exp1_desc: 'Developer at Wheels GoGo, an innovative startup. Experience with Flutter, CSS, React, HTML and JavaScript for mobile and web solutions.',
            exp2_title: 'FullStack Junior Developer',
            exp2_desc: 'Professional internship at Monolegal, applying skills in C#, MongoDB, JavaScript, HTML and Angular to contribute to technological solutions development.',
            exp3_title: 'Founder - Developer',
            exp3_desc: 'Founder of Nexustech, a startup creating custom technological solutions. We integrate artificial intelligence, POS systems and online stores.',
            exp4_title: 'Support Professional - Developer', exp4_inst: 'Santo Tomas University Tunja',
            exp4_desc: 'Systems Engineer with Technology Support role. Web development, Moodle administration, and virtual platform management.'
        },
        portfolio: {
            title: 'Portfolio', view: 'View project',
            tag1: 'AI', proj1: 'AI System', proj1_desc: 'Artificial intelligence platform',
            tag2: 'Web', proj2: 'E-commerce', proj2_desc: 'Online store with Angular and Node.js',
            proj3: 'Mobile App', proj3_desc: 'Cross-platform app with Flutter',
            proj4: 'Dashboard Analytics', proj4_desc: 'Analytics dashboard with Python and React'
        },
        contact: {
            title: 'Contact', email_head: 'Email', phone_head: 'Phone', location_head: 'Location',
            location_val: 'Tunja - Boyacá', form_title: 'Send me a message',
            name_ph: 'Your Name', phone_ph: 'Phone number', email_ph: 'Email', subject_ph: 'Subject', msg_ph: 'Message',
            send: 'Send Message'
        },
        footer: { text: 'const © 2024 = <Juan Malaver />' },
        typing: ['Systems Engineer', 'Full Stack Developer', 'Founder at NexusTech']
    }
};

/* =============================================
   THEME
   ============================================= */
(function initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();

function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

/* =============================================
   LANGUAGE
   ============================================= */
let currentLang = localStorage.getItem('lang') || 'es';
let typingRestart = null;

(function initLang() {
    document.documentElement.setAttribute('data-lang', currentLang);
    applyTranslations();
})();

function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.documentElement.setAttribute('data-lang', currentLang);
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    if (typingRestart) typingRestart();
}

function applyTranslations() {
    const t = i18n[currentLang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = key.split('.').reduce((obj, k) => obj && obj[k], t);
        if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        const val = key.split('.').reduce((obj, k) => obj && obj[k], t);
        if (val !== undefined) el.placeholder = val;
    });

    document.title = t.page.title;
}

/* =============================================
   PARTICLE NETWORK
   ============================================= */
(function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    document.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = (Math.random() - 0.5) * 0.4;
            this.opacity = Math.random() * 0.4 + 0.1;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const force = (120 - dist) / 120;
                this.speedX += (dx / dist) * force * 0.02;
                this.speedY += (dy / dist) * force * 0.02;
            }
            const maxSpeed = 0.8;
            if (Math.abs(this.speedX) > maxSpeed) this.speedX = Math.sign(this.speedX) * maxSpeed;
            if (Math.abs(this.speedY) > maxSpeed) this.speedY = Math.sign(this.speedY) * maxSpeed;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 166, 212, ${this.opacity})`;
            ctx.fill();
        }
    }

    function init(count) {
        particles = [];
        for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    init(Math.min(Math.floor((canvas.width * canvas.height) / 14000), 80));

    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 166, 212, ${(1 - dist / 150) * 0.12})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const p of particles) { p.update(); p.draw(); }
        drawConnections();
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        resize();
        init(Math.min(Math.floor((canvas.width * canvas.height) / 14000), 80));
    });
})();

/* =============================================
   TYPING EFFECT (i18n-aware)
   ============================================= */
(function initTyping() {
    const el = document.getElementById('typing-text');
    if (!el) return;
    let timeoutId;

    function startTyping() {
        clearTimeout(timeoutId);
        const words = i18n[currentLang].typing;
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const current = words[wordIndex];
            el.textContent = isDeleting
                ? current.substring(0, charIndex - 1)
                : current.substring(0, charIndex + 1);
            isDeleting ? charIndex-- : charIndex++;

            let speed = isDeleting ? 40 : 80;
            if (!isDeleting && charIndex === current.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 500;
            }
            timeoutId = setTimeout(type, speed);
        }
        type();
    }

    startTyping();
    typingRestart = startTyping;
})();

/* =============================================
   REVEAL ON SCROLL
   ============================================= */
(function scrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

/* =============================================
   SKILL BARS
   ============================================= */
(function animateSkills() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const bar = entry.target;
            const width = bar.dataset.width;
            bar.style.width = width + '%';

            const label = bar.closest('.skill-item').querySelector('.skill-percent');
            if (label) {
                let current = 0;
                const target = parseInt(width);
                const step = Math.max(1, Math.floor(target / 40));
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(interval); }
                    label.textContent = current + '%';
                }, 30);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.skill-progress').forEach(bar => observer.observe(bar));
})();

/* =============================================
   HEADER SCROLL
   ============================================= */
(function headerScroll() {
    const header = document.querySelector('.header');
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                header.classList.toggle('scrolled', window.scrollY > 50);
                ticking = false;
            });
            ticking = true;
        }
    });
})();

/* =============================================
   CARD TILT (desktop only)
   ============================================= */
(function cardTilt() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    document.querySelectorAll('.glass-card, .portfolio-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / (rect.height / 2) * -6;
            const rotateY = (x - rect.width / 2) / (rect.width / 2) * 6;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
})();

/* =============================================
   MOBILE MENU
   ============================================= */
function toggleMenu() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
}

function seleccionar() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

/* =============================================
   FORM ALERT
   ============================================= */
function Alert() {
    alert(currentLang === 'es' ? 'Gracias por tu mensaje <3' : 'Thanks for your message <3');
}
