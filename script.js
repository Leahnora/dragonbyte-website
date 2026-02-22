const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

let particlesArray = [];
const numberOfParticles = 60;
let animationFrameId;
let isPageVisible = true;
let frameCount = 0;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.8;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.originalOpacity = this.opacity;
        this.mouseX = null;
        this.mouseY = null;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        
        // Optimize opacity pulse with frame counter instead of Date.now()
        this.opacity = this.originalOpacity + Math.sin(frameCount * 0.01 + this.x * 0.001) * 0.1;
        
        // Mouse interaction - particles attracted to cursor
        if (this.mouseX !== null && this.mouseY !== null) {
            const dx = this.mouseX - this.x;
            const dy = this.mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                const angle = Math.atan2(dy, dx);
                const force = (150 - distance) / 150 * 0.3;
                this.speedX += Math.cos(angle) * force * 0.05;
                this.speedY += Math.sin(angle) * force * 0.05;
            }
        }
    }

    draw() {
        ctx.fillStyle = `rgba(33, 0, 238, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Reduce glow effect for performance
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(0, 217, 102, ${this.opacity * 0.3})`;
    }
}

function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function connect() {
    // Only check nearby particles instead of all particles (spatial optimization)
    const maxDistance = 120;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distSquared = dx * dx + dy * dy;
            let maxDistSquared = maxDistance * maxDistance;

            if (distSquared < maxDistSquared) {
                let distance = Math.sqrt(distSquared);
                let opacity = (1 - distance / maxDistance) * 0.25;
                ctx.strokeStyle = `rgba(30, 58, 138, ${opacity})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    if (!isPageVisible) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frameCount++;

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    connect();
    animationFrameId = requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", () => {
    resizeCanvas();
    init();
});

// Mouse tracking for particle interaction
canvas.addEventListener("mousemove", (e) => {
    particlesArray.forEach(particle => {
        particle.mouseX = e.clientX;
        particle.mouseY = e.clientY;
    });
});

canvas.addEventListener("mouseleave", () => {
    particlesArray.forEach(particle => {
        particle.mouseX = null;
        particle.mouseY = null;
    });
});

// Pause animation when page is hidden, resume when visible
document.addEventListener("visibilitychange", () => {
    isPageVisible = !document.hidden;
    if (isPageVisible) animate();
});

// Modal functions
function closeServices() {
    window.location.hash = '';
}

function closeAbout() {
    window.location.hash = '';
}

function closeBusinessProfile() {
    window.location.hash = '';
}

function closeCapabilityStatement() {
    window.location.hash = '';
}

function closeTechnicalCapabilities() {
    window.location.hash = '';
}

function closePortfolio() {
    window.location.hash = '';
}

function closeLegalRegulatory() {
    window.location.hash = '';
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.story-card, .card');
    animatedElements.forEach(el => observer.observe(el));
});

/* ========= TRANSFORMATION MODAL ========= */

// Get modal elements
const transformationModal = document.getElementById('transformationModal');
const transformBtn = document.getElementById('transformBtn');
const transformationForm = document.getElementById('transformationForm');
const successMessage = document.getElementById('successMessage');

// Open modal
function openTransformModal() {
    transformationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeTransformModal() {
    transformationModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Reset form and success message
    transformationForm.style.display = 'block';
    successMessage.style.display = 'none';
    transformationForm.reset();
}

// Close modal when clicking outside (on the overlay)
transformationModal.addEventListener('click', (e) => {
    if (e.target === transformationModal) {
        closeTransformModal();
    }
});

// Handle form submission
transformationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show loading state
    const submitBtn = transformationForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;

    // Submit form to Formspree
    fetch(transformationForm.action, {
        method: 'POST',
        body: new FormData(transformationForm),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Show success message
            transformationForm.style.display = 'none';
            successMessage.style.display = 'block';
        } else {
            alert('There was a problem submitting your form. Please try again.');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});