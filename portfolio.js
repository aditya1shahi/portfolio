// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced form submission handling with backend integration
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form values
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const textareaInput = this.querySelector('textarea');
        const button = this.querySelector('.submit-btn');
        const messageDiv = this.querySelector('.form-message');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = textareaInput.value.trim();

        // Validation
        if (!name || !email || !message) {
            messageDiv.textContent = '❌ Please fill in all fields';
            messageDiv.style.color = '#f97316';
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            messageDiv.textContent = '❌ Please enter a valid email';
            messageDiv.style.color = '#f97316';
            return;
        }

        // Disable button and show loading state
        button.disabled = true;
        const originalText = button.textContent;
        button.textContent = 'Sending...';

        // Show success message
        messageDiv.textContent = '✓ Message received! I\'ll get back to you soon.';
        messageDiv.style.color = '#10b981';
        button.textContent = 'Message Sent! ✓';

        // Reset form
        contactForm.reset();
        nameInput.value = '';
        emailInput.value = '';
        textareaInput.value = '';

        // Restore button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            messageDiv.textContent = '';
        }, 3000);
    });
}

// Enhanced scroll animation with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with fade-in-up class
document.querySelectorAll('.skill-card, .project-card, .about-content p').forEach(element => {
    observer.observe(element);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPos = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
    }
});

// Add stagger animation to multiple elements
document.querySelectorAll('.skill-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

if (document.readyState === 'loading') {
    document.body.style.opacity = '0';
} else {
    document.body.style.opacity = '1';
}
