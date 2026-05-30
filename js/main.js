// Main JavaScript Functionality for Primify Apparel
document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
            
            // Hamburger Animation
            const bars = mobileMenuBtn.querySelectorAll('.bar');
            if(mobileMenuBtn.classList.contains('open')) {
                bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
    }

    // Navbar scroll interaction
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Portfolio Grid Dynamic Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active status
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const targetFilter = btn.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (targetFilter === 'all' || item.getAttribute('data-category') === targetFilter) {
                    item.style.display = 'block';
                    setTimeout(() => { item.style.opacity = '1'; }, 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => { item.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // Form submission simulation
    const consultationForm = document.getElementById('consultation-form');
    const successMsg = document.getElementById('form-success');

    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            successMsg.style.display = 'block';
            consultationForm.reset();
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        });
    }
});
