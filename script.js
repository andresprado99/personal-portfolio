// script.js - Functionality for Andrés Prado Portfolio

// ── Project data ────────────────────────────────────────────────
const projectData = {
    chatbot: {
        icon: '🤖',
        tag: 'Chatbot · AI',
        title: 'Physiotherapy Assistant Chatbot',
        why: `Fran, a physio specialising in sports pubalgia, was spending 2–3 hours a day answering the same WhatsApp messages from potential patients — "Will I recover?", "How long will it take?", "Is my case treatable?". The conversations required empathy but were largely repetitive. I built an AI assistant that handles the initial contact for him, qualifying leads emotionally before they ever reach Fran.`,
        results: [
            'Responds 24/7 — no missed leads at midnight',
            'Processes both text and WhatsApp voice messages',
            'Qualifies and nurtures leads before they reach the physio',
            'Saves ~4 hours/week of manual WhatsApp responses',
        ],
        stack: ['Claude API', 'n8n', 'WhatsApp Business API', 'Supabase'],
        images: ['_assets/chatbot/workflow_screenshot.png'],
        links: [{ label: 'Visit website ↗', url: 'https://manejatupubalgia.es/' }],
        demo: 'chat',
    },
    physioWeb: {
        icon: '🌐',
        tag: 'Web · Fullstack',
        title: 'Physiotherapy Clinic Website',
        why: `Before the website, Fran's only online presence was Instagram. Potential patients couldn't find him on Google, and there was nowhere to showcase his recovery methodology or patient testimonials. The goal was a site that converts organic search traffic into booked consultations — not just a digital business card.`,
        results: [
            'Ranking on first page for "pubalgia deportiva tratamiento"',
            'Testimonials section with real recovery stories',
            'Online consultation booking integrated into the flow',
            'Central hub that captures traffic from Instagram and ads',
        ],
        stack: ['Next.js', 'Supabase', 'Tailwind CSS'],
        images: [
            '_assets/website/landing_page_manejatupubalgia.png',
            '_assets/website/about_me_manejatupubalgia.png',
        ],
        links: [{ label: 'Visit site (inactive) ↗', url: 'https://manejatupubalgia.es/' }],
        demo: null,
    },
    sportsDir: {
        icon: '🗺️',
        tag: 'Directory · Web App',
        title: 'Valencia Sports Directory',
        why: `Moving around Valencia I kept running into the same problem: finding local sports activities meant digging through Facebook groups, Instagram accounts and WhatsApp chats for each sport separately. No central resource existed. So I built one — a searchable directory for anyone looking to get active in the city.`,
        results: [
            'Covers 15+ sports across all Valencia neighbourhoods',
            'Filterable by sport, schedule, and level',
            'Helps small clubs gain visibility they couldn\'t afford otherwise',
            'Growing organically through SEO and local community sharing',
        ],
        stack: ['Next.js', 'Supabase', 'Claude', 'Tailwind CSS'],
        links: [],
        demo: null,
    },
    runnerApp: {
        icon: '🏃',
        tag: 'Mobile App · Gamification',
        title: 'City Runner — Territory Game',
        why: `The idea came from a simple frustration: running is boring unless there's something to compete for. I built a multiplayer running game where players capture real city blocks by running through them — think Ingress meets Strava. You go out, run your route, and your territory grows on a live map. Other players can steal your zones. Leaderboards run by city and province. I tested it in Valencia with a group of friends and the pick-up-and-play loop was immediately addictive.`,
        results: [
            'Live GPS tracking that paints captured city blocks in real time',
            'Multiplayer — up to 20 players competing over shared map zones',
            'Leaderboards by city and province with live rankings',
            'Avatar editor and player profile with stats',
            'Anti-cheat: speed warning at 54 km/h, session cancelled on 3rd flag',
        ],
        stack: ['React Native', 'Expo', 'TypeScript', 'React Navigation'],
        images: [
            '_assets/runners_app/WhatsApp Image 2026-05-14 at 19.36.08 (1).jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-14 at 20.51.01.jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-19 at 21.15.52.jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-19 at 21.27.15.jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-19 at 21.27.17.jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-19 at 21.27.17 (2).jpeg',
        ],
        links: [],
        demo: null,
    },
    highlights: {
        icon: '🎬',
        tag: 'AI · Video · Automation',
        title: 'AI Highlights Generator',
        why: `A friend who runs a football YouTube channel was spending 4–5 hours every weekend manually cutting highlights from 90-minute match recordings. I built an automated pipeline: the AI watches the video, identifies the best moments, and exports ready-to-post clips — vertical for Reels/TikTok, horizontal for YouTube.`,
        results: [
            '90%+ reduction in manual editing time per video',
            'Detects key moments: goals, near-misses, skill plays',
            'Auto-generates captions and subtitles for each clip',
            'Outputs in multiple formats (Reels, YouTube Shorts, standard)',
        ],
        stack: ['Python', 'OpenAI Whisper', 'FFmpeg', 'n8n', 'Claude API'],
        links: [],
        demo: null,
    },
    tfg: {
        icon: '🦷',
        tag: 'Deep Learning · Computer Vision',
        title: 'Dental Neural Network (Thesis)',
        why: `My Physics degree had a strong computational component, and by my final year I was fascinated by neural networks applied to medical imaging. I worked with a hyperspectral dental dataset from the University of Finland to train a segmentation model that identifies dental tissue — the first step toward automating colour-matching for dental restorations.`,
        results: [
            '87% mean IoU accuracy on upper incisor segmentation',
            'Compared 3 U-Net variants: fresh, pre-trained, and with data augmentation',
            'Generated a dental colour palette via K-Means + CIELAB colour space',
            'Full code and dataset pipeline published on GitHub',
        ],
        stack: ['TensorFlow', 'Python', 'U-Net', 'K-Means', 'CIELAB', 'Google Colab', 'Jupyter'],
        links: [
            { label: 'View PDF ↗', url: '_assets/TFG/TFG.pdf' },
            { label: 'GitHub ↗', url: 'https://github.com/andresprado99/Teeth-Characterization' },
        ],
        demo: null,
    },
};

// ── Modal logic ─────────────────────────────────────────────────
function openModal(projectKey) {
    const p = projectData[projectKey];
    if (!p) return;

    const stackHtml = p.stack.map(s => `<code>${s}</code>`).join(' ');
    const resultsHtml = p.results.map(r => `<li>${r}</li>`).join('');
    const linksHtml = p.links.map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener" class="modal-link">${l.label}</a>`
    ).join('');

    const isHighlight = p.tag.includes('Deep Learning');

    const galleryHtml = p.images && p.images.length
        ? `<div class="modal-section">
               <h4>${p.demo === 'chat' ? 'Automation workflow' : 'Screenshots'}</h4>
               <div class="modal-gallery">${p.images.map(src => `<img src="${src}" alt="" loading="lazy">`).join('')}</div>
           </div>`
        : '';

    document.getElementById('modalBody').innerHTML = `
        <div class="modal-header">
            <span class="modal-icon">${p.icon}</span>
            <div>
                <span class="project-tag${isHighlight ? ' highlight' : ''}">${p.tag}</span>
                <h2 class="modal-title" id="modalTitle">${p.title}</h2>
            </div>
        </div>

        <div class="modal-section">
            <h4>Why I built it</h4>
            <p>${p.why}</p>
        </div>

        ${p.demo === 'chat' ? '<div class="modal-section" id="chatDemoSlot"><h4>Real conversations</h4></div>' : ''}

        ${galleryHtml}

        <div class="modal-section">
            <h4>Tech stack</h4>
            <div class="project-stack">${stackHtml}</div>
        </div>

        <div class="modal-section">
            <h4>Results & impact</h4>
            <ul class="modal-results">${resultsHtml}</ul>
        </div>

        ${linksHtml ? `<div class="modal-links">${linksHtml}</div>` : ''}
    `;

    // Inject chat demo from template
    if (p.demo === 'chat') {
        const template = document.getElementById('chatDemoTemplate');
        const slot = document.getElementById('chatDemoSlot');
        if (template && slot) {
            slot.appendChild(template.content.cloneNode(true));
            initChatDemo(slot);
        }
    }

    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Stop any playing audio before closing
    document.querySelectorAll('#projectModal audio').forEach(a => {
        a.pause();
        a.currentTime = 0;
    });
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ── Chat demo: tabs + audio ──────────────────────────────────────
function initChatDemo(container) {
    // Tab switching
    const tabs = container.querySelectorAll('.chat-tab');
    const convs = container.querySelectorAll('.chat-conv');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Stop audio in current active conv
            container.querySelectorAll('.chat-conv.active audio').forEach(a => {
                a.pause();
                a.currentTime = 0;
            });
            container.querySelectorAll('.chat-conv.active .play-btn').forEach(btn => {
                btn.textContent = '▶';
            });

            // Activate selected tab/conv
            tabs.forEach(t => t.classList.remove('active'));
            convs.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const target = container.querySelector(`#${tab.dataset.tab}`);
            if (target) target.classList.add('active');
        });
    });

    // Audio play/pause
    container.querySelectorAll('.audio-msg').forEach(msg => {
        const btn = msg.querySelector('.play-btn');
        const audio = msg.querySelector('audio');
        if (!btn || !audio) return;

        btn.addEventListener('click', () => {
            const isPlaying = !audio.paused;

            // Pause all other audios in the demo
            container.querySelectorAll('audio').forEach(a => {
                if (a !== audio) {
                    a.pause();
                    a.currentTime = 0;
                }
            });
            container.querySelectorAll('.play-btn').forEach(b => {
                if (b !== btn) b.textContent = '▶';
            });

            if (isPlaying) {
                audio.pause();
                btn.textContent = '▶';
            } else {
                audio.play().catch(() => {});
                btn.textContent = '⏸';
            }
        });

        audio.addEventListener('ended', () => {
            btn.textContent = '▶';
        });
    });
}

// ── DOM ready ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.2)' : 'none';
        navbar.style.background = window.scrollY > 50 ? 'rgba(13,17,23,0.95)' : 'rgba(13,17,23,0.8)';
    });

    // Mobile menu
    const menuToggle = document.getElementById('mobile-menu');
    const mobileNav  = document.getElementById('mobile-nav');
    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };
    menuToggle.addEventListener('click', toggleMenu);
    mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', toggleMenu));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - navbar.offsetHeight,
                    behavior: 'smooth',
                });
            }
        });
    });

    // Scroll reveal
    const sections = document.querySelectorAll('.section');
    sections.forEach(s => {
        s.style.opacity = '0';
        s.style.transform = 'translateY(20px)';
        s.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
    const revealSection = () => {
        sections.forEach(s => {
            if (s.getBoundingClientRect().top < window.innerHeight - 150) {
                s.style.opacity = '1';
                s.style.transform = 'translateY(0)';
            }
        });
    };
    revealSection();
    window.addEventListener('scroll', revealSection);

    // Active nav link
    const navLinks   = document.querySelectorAll('.nav-links a[href^="#"]');
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
    const updateActiveNav = () => {
        const scrollPos = window.scrollY + navbar.offsetHeight + 50;
        let current = 'home';
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollPos) current = id;
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    };
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Project cards → open modal
    document.querySelectorAll('.project-card[data-project]').forEach(card => {
        const open = () => openModal(card.dataset.project);
        card.addEventListener('click', open);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
    });

    // Close modal
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('projectModal').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });
});
