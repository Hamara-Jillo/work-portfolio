document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const toggle = document.querySelector('.menu-toggle');
  const menu  = document.querySelector('.nav-menu');

  toggle?.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('menu-open');
  });

  // Close menu when clicking a link
  menu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      toggle.classList.remove('menu-open');
    });
  });

  // Basic Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // UI Feedback
    const submitBtn = contactForm.querySelector('button');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      alert(`Thank you, ${data.name}! Your message has been sent to Dr. Lubaale.`);
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });


  // Add to your script.js
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll('.timeline-entry, .award-card').forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

  // Update copyright year dynamically
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Ensure the year is updated to current
// document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

  const tabs = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs/panes
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      // Add active to current
      tab.classList.add('active');
      const target = tab.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });
});