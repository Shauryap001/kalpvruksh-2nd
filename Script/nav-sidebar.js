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
    
    // Remove duplicate sidebar branding if it exists
    const existingSidebarLogo = navLinks?.querySelector('.sidebar-logo');
    if (existingSidebarLogo) {
        existingSidebarLogo.remove();
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
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            closeSidebar();
        }
    });
    
    function toggleSidebar() {
        if (!navLinks) return;
        const isOpen = navLinks.classList.contains('active');
        
        if (isOpen) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
    
    function openSidebar() {
        if (!navLinks) return;
        navLinks.classList.add('active');
        overlay.classList.add('active');
        mobileNavToggle.textContent = '✕';
        mobileNavToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind sidebar
    }
    
    function closeSidebar() {
        if (!navLinks) return;
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        mobileNavToggle.textContent = '☰';
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Restore scrolling
    }
});
    function closeSidebar() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        mobileNavToggle.textContent = '☰';
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Restore scrolling
    }

