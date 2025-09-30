/**
 * Fixed Mobile Navigation Script
 * Ensures proper sidebar and overlay behavior
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log("Mobile nav script loaded");
    
    // Get required elements
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Remove any existing click handlers to avoid conflicts
    const newMobileNavToggle = mobileNavToggle ? mobileNavToggle.cloneNode(true) : null;
    if (mobileNavToggle && newMobileNavToggle) {
        mobileNavToggle.parentNode.replaceChild(newMobileNavToggle, mobileNavToggle);
    }
    
    if (!newMobileNavToggle || !navLinks) {
        console.error("Required navigation elements not found");
        return;
    }
    
    // Get or create overlay
    let navOverlay = document.querySelector('.nav-overlay');
    if (!navOverlay) {
        console.log("Creating navigation overlay");
        navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
    }
    
    // Set ARIA attributes
    newMobileNavToggle.setAttribute('aria-expanded', 'false');
    newMobileNavToggle.setAttribute('aria-controls', 'nav-links');
    navLinks.id = 'nav-links';
    
    // Function to open navigation
    function openNavigation() {
        console.log("Opening navigation");
        navLinks.classList.add('active');
        
        // Use both class and inline style for maximum compatibility
        navOverlay.classList.add('active');
        navOverlay.style.display = 'block';
        
        newMobileNavToggle.textContent = '✕';
        newMobileNavToggle.setAttribute('aria-expanded', 'true');
    }
    
    // Function to close navigation
    function closeNavigation() {
        console.log("Closing navigation");
        navLinks.classList.remove('active');
        
        // Ensure overlay is properly hidden
        navOverlay.classList.remove('active');
        
        // Use setTimeout to allow for transition effects
        setTimeout(function() {
            if (!navLinks.classList.contains('active')) {
                navOverlay.style.display = 'none';
            }
        }, 300);
        
        newMobileNavToggle.textContent = '☰';
        newMobileNavToggle.setAttribute('aria-expanded', 'false');
    }
    
    // Toggle navigation when button is clicked
    newMobileNavToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Mobile nav toggle clicked");
        
        if (navLinks.classList.contains('active')) {
            closeNavigation();
        } else {
            openNavigation();
        }
    });
    
    // Close when clicking overlay
    navOverlay.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Overlay clicked");
        closeNavigation();
    });
    
    // Close navigation when clicking nav links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeNavigation);
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeNavigation();
        }
    });
    
    // Fix display on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            closeNavigation();
        }
    });
    
    console.log("Mobile navigation initialized successfully");
});
