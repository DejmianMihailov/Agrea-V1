// Main JavaScript for Agro Apteka Agrea Website

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed header
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Form submissions
    setupFormHandlers();
    
    // Add active nav link highlighting on scroll
    highlightActiveNavLink();
});

// Setup form handlers
function setupFormHandlers() {
    // Agronomist form
    const agronomistForm = document.getElementById('agronomist-form');
    if (agronomistForm) {
        agronomistForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'agronomist');
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'contact');
        });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this, 'newsletter');
        });
    }
}

// Handle form submission
function handleFormSubmission(form, formType) {
    // Get form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // Log form data (in production, this would be sent to a server)
    console.log(`${formType} form submitted:`, data);
    
    // Show success message
    let successElementId;
    switch(formType) {
        case 'agronomist':
            successElementId = 'form-success';
            break;
        case 'contact':
            successElementId = 'contact-form-success';
            break;
        case 'newsletter':
            successElementId = 'newsletter-success';
            break;
    }
    
    const successElement = document.getElementById(successElementId);
    if (successElement) {
        successElement.classList.remove('hidden');
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successElement.classList.add('hidden');
        }, 5000);
    }
    
    // Reset form
    form.reset();
    
    // In a real implementation, you would send this data to a server:
    /*
    fetch('/api/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            formType: formType,
            data: data,
            timestamp: new Date().toISOString()
        })
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
        showSuccessMessage(successElementId);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Възникна грешка при изпращането. Моля, опитайте отново или се свържете директно на 0885 227 915');
    });
    */
}

// Highlight active navigation link based on scroll position
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-agro-green', 'font-bold');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-agro-green', 'font-bold');
            }
        });
    });
}

// Add loading animation to page
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add parallax effect to hero section (optional)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#home');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to product cards
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }, 500);
});

// Add animation to category cards
document.addEventListener('DOMContentLoaded', function() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-fade-in');
    });
});

// Phone number formatting (optional)
function formatPhoneNumber(input) {
    const cleaned = input.value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{3})(\d{3})$/);
    if (match) {
        input.value = match[1] + ' ' + match[2] + ' ' + match[3];
    }
}

// Add phone number formatting to all phone inputs
document.addEventListener('DOMContentLoaded', function() {
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            formatPhoneNumber(this);
        });
    });
});

// Add WhatsApp click tracking (for analytics)
document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('WhatsApp link clicked');
            // In production, send this to analytics
        });
    });
});

// Add call button click tracking
document.addEventListener('DOMContentLoaded', function() {
    const callLinks = document.querySelectorAll('a[href^="tel:"]');
    callLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Call link clicked:', this.href);
            // In production, send this to analytics
        });
    });
});

// Cookie consent banner (optional - for GDPR compliance)
function showCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        // Show cookie banner
        const banner = document.createElement('div');
        banner.className = 'fixed bottom-0 left-0 right-0 bg-agro-dark text-white p-4 z-50';
        banner.innerHTML = `
            <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <p class="mb-4 md:mb-0">
                    Използваме бисквитки за подобряване на вашето изживяване. 
                    <a href="#" class="underline">Научете повече</a>
                </p>
                <button onclick="acceptCookies()" class="bg-agro-green px-6 py-2 rounded-full hover:bg-agro-green-dark transition">
                    Приемам
                </button>
            </div>
        `;
        document.body.appendChild(banner);
    }
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    const banner = document.querySelector('.fixed.bottom-0');
    if (banner) {
        banner.remove();
    }
}

// Initialize cookie consent on page load
// document.addEventListener('DOMContentLoaded', showCookieConsent);

// SEO: Add structured data for local business
function addStructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Store",
        "name": "Агроаптека Агреа",
        "description": "Професионални агро решения в Дългопол - препарати, торове, семена и консултации",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Дългопол",
            "addressCountry": "BG"
        },
        "telephone": "+359885227915",
        "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
        "priceRange": "$$",
        "image": "https://example.com/logo.png",
        "employee": {
            "@type": "Person",
            "name": "Радка Жекова",
            "jobTitle": "Главен агроном",
            "telephone": "+359885227915"
        }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
}

// Add structured data on page load
document.addEventListener('DOMContentLoaded', addStructuredData);

// Print function for product info
function printProductInfo(productName) {
    window.print();
}

// Share functionality
function shareProduct(productName, productUrl) {
    if (navigator.share) {
        navigator.share({
            title: productName,
            text: `Разгледайте ${productName} в Агроаптека Агреа`,
            url: productUrl || window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: copy to clipboard
        const textarea = document.createElement('textarea');
        textarea.value = `${productName} - ${window.location.href}`;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Линкът е копиран в клипборда!');
    }
}

// Add search functionality
function setupSearch() {
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        // Add search suggestions
        searchInput.addEventListener('input', function() {
            const value = this.value.toLowerCase();
            if (value.length > 2) {
                // Show search suggestions
                console.log('Searching for:', value);
            }
        });
    }
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', function() {
    setupSearch();
    console.log('Агроаптека Агреа - Website loaded successfully');
});