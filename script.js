// Speak Up India | IB MYP Design Project 2026 | script.js

// Nav toggle
  function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // Progress bar
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });
  reveals.forEach(r => observer.observe(r));

  // Star rating
  function rate(n) {
    document.querySelectorAll('.star').forEach((s, i) => {
      s.classList.toggle('active', i < n);
    });
  }

  // Form submissions
  function submitExperience() {
    alert('Thank you for sharing your voice. Your story matters.');
  }

  function submitRegistry() {
    alert('Welcome to the movement. Together, we tip the scale.');
  }

  function submitFeedback() {
    alert('Thank you for your feedback. It helps us do better.');
  }