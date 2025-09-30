/**
 * Direct sidebar fix script - simplifies the mobile navigation
 */
(function() {
    console.log("Sidebar fix script loaded");
    
    // Run after a slight delay to ensure DOM is fully loaded and other scripts have run
    setTimeout(function() {
        // Get the mobile navigation elements
        const mobileToggle = document.querySelector('.mobile-nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        // Remove any existing click handlers from the toggle button
        if (mobileToggle) {
            const newMobileToggle = mobileToggle.cloneNode(true);
            mobileToggle.parentNode.replaceChild(newMobileToggle, mobileToggle);
            
            // Get or create the overlay
            let navOverlay = document.querySelector('.nav-overlay');
            if (!navOverlay) {
                navOverlay = document.createElement('div');
                navOverlay.className = 'nav-overlay';
                document.body.appendChild(navOverlay);
                console.log("Created nav overlay");
            }
            
            // Make sure overlay is initially hidden
            navOverlay.style.display = 'none';
            
            // Set up a brand new toggle function
            newMobileToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log("Mobile toggle clicked");
                
                const isActive = navLinks.classList.contains('active');
                
                if (isActive) {
                    // Close navigation
                    console.log("Closing navigation");
                    navLinks.classList.remove('active');
                    navOverlay.style.display = 'none';
                    this.textContent = '☰';
                } else {
                    // Open navigation
                    console.log("Opening navigation");
                    navLinks.classList.add('active');
                    navOverlay.style.display = 'block';
                    this.textContent = '✕';
                }
            });
            
            // Close when clicking the overlay
            navOverlay.addEventListener('click', function() {
                console.log("Overlay clicked");
                navLinks.classList.remove('active');
                this.style.display = 'none';
                newMobileToggle.textContent = '☰';
            });
            
            console.log("Navigation handlers initialized successfully");
        } else {
            console.error("Mobile toggle not found");
        }
    }, 500); // 500ms delay
})();
