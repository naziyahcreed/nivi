/**
 * NIVEDITHA & NATRAJ - WEDDING INVITATION SCRIPTS
 * Completely frontend-driven (No backend required)
 * Audio removed per user instructions
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Ambient Gold Shimmer & Sparkle Canvas Animation
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const count = 30;

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedY = Math.random() * 0.6 + 0.2;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.fade = (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1);
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.alpha += this.fade;

        if (this.alpha <= 0.1 || this.alpha >= 0.7) {
          this.fade = -this.fade;
        }

        if (this.y < -10) {
          this.reset();
          this.y = height + 10;
        }
      }
      draw() {
        ctx.save();
        ctx.fillStyle = `rgba(216, 178, 99, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    function renderParticles() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(renderParticles);
    }
    renderParticles();
  }

  // 2. Real-Time Countdown Timer to Sacred Muhurtham: Oct 25, 2026, 06:30 AM
  function initCountdown() {
    // Wedding Muhurtham Time: 25 October 2026, 06:30 AM IST
    const targetDate = new Date('2026-10-25T06:30:00+05:30').getTime();
    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-mins');
    const secsEl = document.getElementById('cd-secs');

    function update() {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
        if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
      } else {
        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minsEl) minsEl.textContent = '00';
        if (secsEl) secsEl.textContent = '00';
      }
    }

    update();
    setInterval(update, 1000);
  }
  initCountdown();

  // 3. Venue Tab Switcher (Madurai & Chennai)
  const venueTabs = document.querySelectorAll('.venue-tab-button');
  const venuePanels = document.querySelectorAll('.venue-tab-content-panel');

  venueTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      venueTabs.forEach(t => t.classList.remove('active'));
      venuePanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const activePanel = document.getElementById(targetId);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });

  // 4. Send Custom Wishes Directly to WhatsApp (No Backend Needed)
  const wishForm = document.getElementById('whatsapp-wish-form');
  if (wishForm) {
    wishForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const guestName = document.getElementById('guest-name').value.trim();
      const guestWish = document.getElementById('guest-wish').value.trim();

      if (!guestName || !guestWish) return;

      const messageText = `Namaste! 🌸 Warm Wedding Wishes for Niveditha & Natraj:
From: ${guestName}
Message: "${guestWish}"

Wishing you both a joyous married life! 💐`;

      // Family Coordinator WhatsApp Number
      const coordinatorPhone = '919655707726';
      const whatsappURL = `https://api.whatsapp.com/send?phone=${coordinatorPhone}&text=${encodeURIComponent(messageText)}`;
      window.open(whatsappURL, '_blank');
    });
  }

  // 5. Quick Event RSVP Buttons (Direct WhatsApp)
  window.sendQuickRSVP = function (eventName) {
    const text = `Namaste! 🌸 I would love to confirm my attendance for the wedding celebration of Niveditha & Natraj:
Event: ${eventName}

Looking forward to blessing the couple! ✨`;
    const coordinatorPhone = '919655707726';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${coordinatorPhone}&text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, '_blank');
  };

});
