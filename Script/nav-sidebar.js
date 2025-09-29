/**
 * Mobile Navigation Sidebar Script
 * Handles the mobile sidebar navigation functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay element for sidebar
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    // Get navigation elements
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Add sidebar branding if it doesn't exist
    if (navLinks && !navLinks.querySelector('.sidebar-logo')) {
        const sidebarLogo = document.createElement('div');
        sidebarLogo.className = 'sidebar-logo';
        
        // Get the original logo content
        const originalLogo = document.querySelector('.logo-with-whatsapp');
        if (originalLogo) {
            sidebarLogo.innerHTML = originalLogo.innerHTML;
        } else {
            sidebarLogo.innerHTML = '<span class="logo-text">Kalpvruksh AI</span>';
        }
        
        // Insert at the beginning of navLinks
        navLinks.insertBefore(sidebarLogo, navLinks.firstChild);
    }
    
    // Toggle sidebar when menu button is clicked
    if (mobileNavToggle && navLinks) {
        mobileNavToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleSidebar();
        });
        
        // Set initial ARIA state
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        mobileNavToggle.setAttribute('aria-controls', 'nav-links');
        navLinks.id = 'nav-links';
    }
    
    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', closeSidebar);
    
    // Close sidebar when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeSidebar();
        }
    });
    
    function toggleSidebar() {
        const isOpen = navLinks.classList.contains('active');
        
        if (isOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
    
    function openSidebar() {
        navLinks.classList.add('active');
        overlay.classList.add('active');
        mobileNavToggle.textContent = '✕';
        mobileNavToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind sidebar
    }
    
    function closeSidebar() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        mobileNavToggle.textContent = '☰';
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Restore scrolling
    }
});
