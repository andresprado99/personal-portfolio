// script.js - Functionality for Andrés Prado Portfolio

// ── Project data ────────────────────────────────────────────────
const projectData = {
    chatbot: {
        icon: '🤖',
        tag: 'Chatbot · Automation · AI',
        title: 'Physiotherapy Assistant Chatbot',
        why: `Manu, a sports physio specialising in groin injuries, was losing 2–3 hours a day replying to the same WhatsApp messages from potential patients — "Will I recover?", "How long does it take?", "How does your programme work?". The conversations required empathy but followed predictable patterns. I built an AI assistant that handles first contact: it qualifies leads, answers questions in Manu's voice, and books a call when the patient is ready. He now closes clients without touching his phone.`,
        results: [
            'Responds 24/7 — no leads lost outside business hours',
            'Handles both text and WhatsApp voice messages',
            'Qualifies and nurtures leads before they reach the physio',
            'Saves ~6 hours/week of manual WhatsApp responses',
        ],
        stack: ['n8n', 'Claude API', 'WhatsApp Business API', 'Supabase'],
        images: ['_assets/chatbot/workflow_screenshot.png'],
        links: [{ label: 'Visit website ↗', url: 'https://manejatupubalgia.es/' }],
        demo: 'chat',
    },
    physioWeb: {
        icon: '🌐',
        tag: 'Web · Fullstack',
        title: 'Physiotherapy Clinic Website',
        why: `Before the website, Manu's only online presence was Instagram. Patients couldn't find him on Google, and there was no central place to showcase his recovery methodology or patient testimonials. The goal was a site that turns organic search traffic into booked consultations — not just a digital business card.`,
        results: [
            'Ranking on page one for "pubalgia deportiva tratamiento"',
            'Testimonials section with real recovery stories',
            'Integrated consultation booking flow',
            'Central hub capturing traffic from Instagram, Google and ads',
        ],
        stack: ['HTML', 'Next.js', 'Tailwind CSS'],
        images: [
            '_assets/website/landing_page_manejatupubalgia.png',
            '_assets/website/about_me_manejatupubalgia.png',
        ],
        links: [{ label: 'Visit site ↗', url: 'https://manejatupubalgia.es/' }],
        demo: null,
    },
    sportsDir: {
        icon: '🗺️',
        tag: 'Directory · Web App',
        title: 'Valencia Sports Directory',
        why: `Moving around Valencia I kept hitting the same wall: finding local sports activities meant trawling Facebook groups, Instagram accounts and WhatsApp chats — one per sport. No central resource existed. So I built one: a searchable, filterable directory for anyone wanting to get active in the city, with real club data and SEO-optimised pages for each sport and neighbourhood.`,
        results: [
            '15+ sports covered across all Valencia neighbourhoods',
            'Filterable by sport, schedule, and experience level',
            'Gives small clubs organic visibility they couldn\'t afford otherwise',
            'Growing through SEO and local community sharing',
        ],
        stack: ['Next.js', 'Supabase', 'Claude API', 'Tailwind CSS'],
        links: [],
        demo: null,
    },
    runnerApp: {
        icon: '🏃',
        tag: 'Mobile App · Gamification',
        title: 'City Runner — Territory Game',
        why: `Running is more fun when there's something to fight for. I built a multiplayer mobile game where players capture real city blocks by running through them — think Ingress meets Strava. Your territory grows on a live map; other players can steal your zones. Leaderboards run by city and province. I beta-tested it in Valencia with a group of friends: the competitive loop was immediately addictive and retention was strong from day one.`,
        results: [
            'Live GPS tracking that paints captured city blocks in real time',
            'Multiplayer — players compete over shared map zones',
            'Leaderboards by city and province with live rankings',
            'Avatar editor and player profile with stats',
            'Anti-cheat system: speed flag at >25 km/h, session cancelled on 3rd violation',
        ],
        stack: ['React Native', 'Expo', 'TypeScript', 'React Navigation'],
        images: [
            '_assets/runners_app/WhatsApp Image 2026-05-20 at 20.21.16.jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-19 at 21.27.17 (2).jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-19 at 21.27.15.jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-19 at 21.27.17.jpeg',
            '_assets/runners_app/WhatsApp Image 2026-05-14 at 20.51.01.jpeg',
        ],
        links: [],
        demo: null,
    },
    highlights: {
        icon: '🎬',
        tag: 'AI · Video · Automation',
        title: 'AI Highlights Generator',
        why: `A friend who runs a football YouTube channel was spending 4–5 hours every weekend manually cutting clips from 90-minute match recordings. I built an automated pipeline: the system analyses the video, identifies key moments, and exports ready-to-post clips — vertical format for Reels and TikTok, horizontal for YouTube. What used to take a Sunday afternoon now runs overnight.`,
        results: [
            '90 %+ reduction in manual editing time per match',
            'Detects goals, near-misses, and skill plays automatically',
            'Auto-generates captions and subtitles for each clip',
            'Exports in multiple formats: Reels, YouTube Shorts, standard horizontal',
        ],
        stack: ['Python', 'OpenAI Whisper', 'FFmpeg', 'n8n', 'Claude API'],
        links: [],
        demo: null,
    },
    tfg: {
        icon: '🦷',
        tag: 'Deep Learning · Computer Vision',
        title: 'Dental Neural Network (Thesis)',
        why: `My Physics degree had a strong computational focus, and by my final year I was deep into neural networks applied to medical imaging. I collaborated with a hyperspectral dental dataset from the University of Finland to train a segmentation model that identifies dental tissue — a foundational step toward automating colour-matching for dental restorations. This was my first end-to-end deep learning project: dataset pipeline, model training, evaluation, and publication.`,
        results: [
            '87 % mean IoU accuracy on upper incisor segmentation',
            'Benchmarked 3 U-Net variants: scratch, pre-trained, and with augmentation',
            'Generated a dental colour palette using K-Means clustering in CIELAB space',
            'Full code and dataset pipeline published on GitHub',
        ],
        stack: ['TensorFlow', 'Python', 'U-Net', 'K-Means', 'CIELAB', 'Google Colab', 'Jupyter'],
        links: [
            { label: 'View PDF (Spanish) ↗', url: '_assets/TFG/TFG.pdf' },
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
    const linksHtml = (p.links || []).map(l =>
        `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="modal-link">${l.label}</a>`
    ).join('');

    const isHighlight = p.tag.includes('Deep Learning');

    const galleryHtml = p.images && p.images.length
        ? `<div class="modal-section">
               <h4>${p.demo === 'chat' ? 'Automation workflow' : 'Screenshots'}</h4>
               <div class="modal-gallery">${p.images.map(src => `<img src="${src}" alt="" loading="lazy" data-lightbox="${src}">`).join('')}</div>
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

        ${p.demo === 'chat' ? '<div class="modal-section" id="chatDemoSlot"><h4>Real conversations (in Spanish)</h4></div>' : ''}

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

// ── Lightbox ─────────────────────────────────────────
let _lbImages = [];
let _lbIndex  = 0;

function openLightbox(images, index) {
    _lbImages = Array.isArray(images) ? images : [images];
    _lbIndex  = index ?? 0;
    _updateLightbox();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function _updateLightbox() {
    document.getElementById('lightboxImg').src = _lbImages[_lbIndex];
    const prev = document.getElementById('lightboxPrev');
    const next = document.getElementById('lightboxNext');
    const counter = document.getElementById('lightboxCounter');
    if (_lbImages.length <= 1) {
        prev.hidden = true;
        next.hidden = true;
        counter.textContent = '';
    } else {
        prev.hidden = _lbIndex === 0;
        next.hidden = _lbIndex === _lbImages.length - 1;
        counter.textContent = `${_lbIndex + 1} / ${_lbImages.length}`;
    }
}

function navigateLightbox(delta) {
    const next = _lbIndex + delta;
    if (next < 0 || next >= _lbImages.length) return;
    _lbIndex = next;
    _updateLightbox();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
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

    // ── Enhanced WhatsApp-style audio ────────────────
    function formatTime(s) {
        if (isNaN(s)) return '0:00';
        const m = Math.floor(s / 60);
        const sec = Math.floor(s % 60);
        return `${m}:${sec.toString().padStart(2, '0')}`;
    }

    container.querySelectorAll('.audio-msg').forEach(msg => {
        const btn       = msg.querySelector('.play-btn');
        const audio     = msg.querySelector('audio');
        const waveform  = msg.querySelector('.waveform');
        const durEl     = msg.querySelector('.audio-duration');
        if (!btn || !audio) return;

        const spans     = waveform ? Array.from(waveform.querySelectorAll('span')) : [];
        const totalText = durEl ? (durEl.dataset.total || '') : '';

        // Play / pause toggle
        btn.addEventListener('click', () => {
            const isPlaying = !audio.paused;

            // Pause all other audios
            container.querySelectorAll('audio').forEach(a => {
                if (a !== audio) { a.pause(); a.currentTime = 0; }
            });
            container.querySelectorAll('.play-btn').forEach(b => {
                if (b !== btn) b.textContent = '▶';
            });
            container.querySelectorAll('.waveform span').forEach(s => {
                if (!msg.contains(s)) s.classList.remove('played');
            });
            container.querySelectorAll('.audio-duration').forEach(d => {
                if (d !== durEl && d.dataset.total) d.textContent = `0:00 / ${d.dataset.total}`;
            });

            if (isPlaying) {
                audio.pause();
                btn.textContent = '▶';
            } else {
                audio.play().catch(() => {});
                btn.textContent = '⏸';
            }
        });

        // Progress: update waveform + time display
        audio.addEventListener('timeupdate', () => {
            if (!audio.duration) return;
            const ratio = audio.currentTime / audio.duration;
            const filled = Math.round(ratio * spans.length);
            spans.forEach((s, i) => s.classList.toggle('played', i < filled));
            if (durEl) durEl.textContent = `${formatTime(audio.currentTime)} / ${totalText}`;
        });

        // Seek by clicking a waveform bar
        if (waveform && spans.length) {
            waveform.addEventListener('click', e => {
                const rect = waveform.getBoundingClientRect();
                const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                if (audio.duration) audio.currentTime = ratio * audio.duration;
            });
        }

        // Reset on end
        audio.addEventListener('ended', () => {
            btn.textContent = '▶';
            spans.forEach(s => s.classList.remove('played'));
            if (durEl) durEl.textContent = `0:00 / ${totalText}`;
        });
    });
}

// ── Theme toggle ─────────────────────────────────────────────────
const SUN_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>`;
const MOON_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;

(function initTheme() {
    const saved = localStorage.getItem('portfolio-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.innerHTML = saved === 'dark' ? SUN_ICON : MOON_ICON;
})();

// ── DOM ready ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

    // Theme toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('portfolio-theme', next);
            themeBtn.innerHTML = next === 'dark' ? SUN_ICON : MOON_ICON;
        });
    }

    // Navbar scroll effect — use CSS class so light/dark theme works correctly
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
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
    const navLinks   = document.querySelectorAll('.nav a[href^="#"]');
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

    // Close modal + gallery image → lightbox (event delegation, CSP-safe)
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.getElementById('projectModal').addEventListener('click', e => {
        const img = e.target.closest('img[data-lightbox]');
        if (img) {
            const gallery = img.closest('.modal-gallery');
            const all = gallery
                ? Array.from(gallery.querySelectorAll('img[data-lightbox]')).map(i => i.dataset.lightbox)
                : [img.dataset.lightbox];
            const idx = gallery
                ? Array.from(gallery.querySelectorAll('img[data-lightbox]')).indexOf(img)
                : 0;
            openLightbox(all, idx);
            return;
        }
        if (e.target === e.currentTarget) closeModal();
    });

    // Lightbox: close, arrows, backdrop
    document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
    document.getElementById('lightboxPrev').addEventListener('click', e => { e.stopPropagation(); navigateLightbox(-1); });
    document.getElementById('lightboxNext').addEventListener('click', e => { e.stopPropagation(); navigateLightbox(1); });
    document.getElementById('lightbox').addEventListener('click', e => {
        if (e.target === e.currentTarget) closeLightbox();
    });

    // Keyboard: arrows navigate, Escape closes lightbox first then modal
    document.addEventListener('keydown', e => {
        const lbActive = document.getElementById('lightbox').classList.contains('active');
        if (lbActive) {
            if (e.key === 'ArrowLeft')  navigateLightbox(-1);
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'Escape')     closeLightbox();
            return;
        }
        if (e.key === 'Escape') closeModal();
    });
});
