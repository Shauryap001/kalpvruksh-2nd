/**
 * Mobile Navigation Handler
 * - This script handles the responsive mobile navigation menu
 * - It can be included on any page that needs the mobile menu functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!mobileNavToggle || !navLinks) return;
    
    // Set initial attributes
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    mobileNavToggle.setAttribute('aria-controls', 'nav-links');
    navLinks.id = 'nav-links';
    
    // Toggle menu when button is clicked
    mobileNavToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        const expanded = navLinks.classList.contains('active');
        navLinks.classList.toggle('active');
        mobileNavToggle.setAttribute('aria-expanded', !expanded);
        mobileNavToggle.textContent = !expanded ? '✕' : '☰';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            e.target !== mobileNavToggle) {
            navLinks.classList.remove('active');
            mobileNavToggle.textContent = '☰';
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Close on window resize (if desktop view)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileNavToggle.textContent = '☰';
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // Add swipe to close functionality (optional)
    let touchStartX = 0;
    let touchEndX = 0;
    
    navLinks.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    navLinks.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchStartX - touchEndX > 50) { // Left swipe
            navLinks.classList.remove('active');
            mobileNavToggle.textContent = '☰';
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    }
});

       // Add mobile navigation toggle
        document.addEventListener('DOMContentLoaded', function() {
            const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            if (mobileNavToggle) {
                mobileNavToggle.addEventListener('click', function() {
                    navLinks.classList.toggle('active');
                });
            }
            
            // Close navigation when clicking outside
            document.addEventListener('click', function(e) {
                if (navLinks.classList.contains('active') && 
                    !navLinks.contains(e.target) && 
                    !mobileNavToggle.contains(e.target)) {
                    navLinks.classList.remove('active');
                }
            });
            
            // Close navigation when window is resized
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });