// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Toggle menu icon between bars and times
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            // Reset menu icon to bars
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(138, 43, 226, 0.1)';
        } else {
            navbar.style.backgroundColor = 'var(--light)';
            navbar.style.boxShadow = '0 2px 10px rgba(138, 43, 226, 0.1)';
        }
    });
    
    // CV download functionality
    const downloadBtn = document.querySelector('a[download]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            // In a real implementation, this would trigger the file download
            // For demonstration, we'll just show an alert
            alert('CV download would start now in a real implementation');
            
            // If you want to actually trigger download, you would use:
            // window.location.href = this.href;
            // But this requires the file to exist at the specified path
        });
    }
    
    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.skills-category, .project-card, .about-content, .contact-item');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
    
    // Add scroll progress indicator (optional enhancement)
    const scrollProgress = document.createElement('div');
    scrollProgress.style.position = 'fixed';
    scrollProgress.style.top = '0';
    scrollProgress.style.left = '0';
    scrollProgress.style.height = '3px';
    scrollProgress.style.backgroundColor = 'var(--primary)';
    scrollProgress.style.width = '0%';
    scrollProgress.style.zIndex = '1001';
    scrollProgress.style.transition = 'width 0.2s ease';
    document.body.appendChild(scrollProgress);
    
    window.addEventListener('scroll', function() {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });
});