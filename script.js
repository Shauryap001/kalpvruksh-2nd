document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for anchor links
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
    
    console.log("Kalpvruksh AI Website Initialized");

    // Login form handling - Enhanced debugging
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        console.log("Login form found, attaching handlers");
        
        // Clear previous messages when focusing inputs
        document.getElementById('email').addEventListener('focus', clearLoginMessages);
        document.getElementById('password').addEventListener('focus', clearLoginMessages);
        
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('login-message');
            
            console.log("Login attempt with:", email);
            
            // Enhanced validation
            if (!email) {
                showLoginError("Please enter your email address");
                return;
            }
            if (!password) {
                showLoginError("Please enter your password");
                return;
            }
            
            if (!isValidEmail(email)) {
                showLoginError("Please enter a valid email address");
                return;
            }
            
            // This is where you would normally make an API call to authenticate
            // For demo purposes, we'll simulate a successful login
            loginMessage.textContent = "Login successful! Redirecting...";
            loginMessage.className = "login-message success";
            loginMessage.style.display = 'block';
            
            // Store login state in localStorage
            localStorage.setItem('kalpvrukshLoggedIn', 'true');
            localStorage.setItem('kalpvrukshUserEmail', email);
            
            // Redirect after a brief delay
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);
        });
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function showLoginError(message) {
        const loginMessage = document.getElementById('login-message');
        loginMessage.textContent = message;
        loginMessage.className = "login-message error";
        loginMessage.style.display = 'block';
    }
    
    function clearLoginMessages() {
        const loginMessage = document.getElementById('login-message');
        if (loginMessage) {
            loginMessage.style.display = 'none';
        }
    }
    
    // Check login status on page load
    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('kalpvrukshLoggedIn') === 'true';
        const userEmail = localStorage.getItem('kalpvrukshUserEmail');
        
        // Update all login buttons across the site
        document.querySelectorAll('.login-btn').forEach(btn => {
            if (isLoggedIn && userEmail) {
                // Change login button to show user is logged in
                btn.textContent = userEmail.split('@')[0]; // Show username
                btn.href = "#"; // Could point to a user profile page
                btn.classList.add('logged-in');
                
                // Add logout option
                btn.addEventListener('click', function(e) {
                    if (isLoggedIn) {
                        e.preventDefault();
                        if (confirm("Do you want to log out?")) {
                            localStorage.removeItem('kalpvrukshLoggedIn');
                            localStorage.removeItem('kalpvrukshUserEmail');
                            location.reload();
                        }
                    }
                });
            } else {
                // Ensure login button points to login page
                btn.href = "login.html";
                btn.classList.remove('logged-in');
            }
        });
    }
    
    // Run login check
    checkLoginStatus();

    // Sample book data for "All Books" section
    const books = [
        {
            id: 1,
            title: "The Prompt Engineer's Handbook",
            author: "Alex Chen",
            price: 199,
            category: "prompt",
            description: "A comprehensive guide to mastering prompt engineering for AI-driven solutions."
        },
        {
            id: 2,
            title: "AI for Indian Businesses",
            author: "Priya Sharma",
            price: 299,
            category: "strategy",
            description: "Strategic approaches for leveraging AI in India's unique business environment."
        },
        {
            id: 3,
            title: "Sales Automation Playbook",
            author: "Rahul Singh",
            price: 249,
            category: "sales",
            description: "Tactics and tools to automate and amplify your sales pipeline with AI."
        },
        {
            id: 4,
            title: "Advanced Prompting Techniques",
            author: "Neha Kapoor",
            price: 349,
            category: "prompt",
            description: "Dive deeper into AI prompting with advanced strategies and case studies."
        },
        {
            id: 5,
            title: "AI Strategy for Startups",
            author: "Arjun Desai",
            price: 279,
            category: "strategy",
            description: "How startups can effectively plan and deploy AI for rapid growth."
        }
    ];

    // Render all books in the All Books grid
    const allBooksGrid = document.getElementById('allBooksGrid');
    if (allBooksGrid) {
        renderBooks(books);
    }

    function renderBooks(displayBooks) {
        if (!allBooksGrid) return;
        
        allBooksGrid.innerHTML = '';

        if(displayBooks.length === 0) {
            allBooksGrid.innerHTML = '<p>No books found matching your criteria.</p>';
            return;
        }

        displayBooks.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.setAttribute('data-id', book.id);
            bookCard.tabIndex = 0;

            bookCard.innerHTML = `
                <div class="book-image-placeholder"></div>
                <h3>${book.title}</h3>
                <p class="book-author">By ${book.author}</p>
                <p class="book-price">₹${book.price}</p>
                <button class="cta-button primary open-modal-btn">View Details</button>
            `;
            allBooksGrid.appendChild(bookCard);
        });

        bindModalOpen();
    }

    // Search and filter functionality
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    if (searchInput) {
        searchInput.addEventListener('input', filterBooks);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterBooks);
    }
    
    function filterBooks() {
        if (!searchInput || !categoryFilter) return;
        
        const searchValue = searchInput.value.toLowerCase();
        const categoryValue = categoryFilter.value;

        const filtered = books.filter(book => {
            const matchCategory = categoryValue === '' || book.category === categoryValue;
            const matchSearch = book.title.toLowerCase().includes(searchValue) || book.author.toLowerCase().includes(searchValue);
            return matchCategory && matchSearch;
        });

        renderBooks(filtered);
    }

    // Modal functionality
    const bookModal = document.getElementById('bookModal');
    if (bookModal) {
        const modalTitle = document.getElementById('modalTitle');
        const modalAuthor = bookModal.querySelector('.modal-author');
        const modalDescription = bookModal.querySelector('.modal-description');
        const modalBuyBtn = document.getElementById('modalBuyBtn');
        const closeModalBtn = document.getElementById('closeModal');

        function openModal(bookId) {
            const book = books.find(b => b.id == bookId);
            if (!book) return;

            modalTitle.textContent = book.title;
            modalAuthor.textContent = `By ${book.author}`;
            modalDescription.textContent = book.description;

            bookModal.style.display = 'flex';
            bookModal.setAttribute('aria-hidden', 'false');

            modalBuyBtn.onclick = () => {
                alert(`Initiate purchase flow for "${book.title}" (₹${book.price})`);
            };
        }

        function closeModal() {
            bookModal.style.display = 'none';
            bookModal.setAttribute('aria-hidden', 'true');
        }

        function bindModalOpen() {
            document.querySelectorAll('.open-modal-btn').forEach(button => {
                button.onclick = (e) => {
                    const bookCard = e.target.closest('.book-card');
                    if (!bookCard) return;
                    openModal(bookCard.getAttribute('data-id'));
                };
            });
        }

        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }

        window.addEventListener('click', (event) => {
            if (event.target === bookModal) {
                closeModal();
            }
        });
        
        // Initially bind modal open on featured books too
        bindModalOpen();
    }

    // FAQ accordion toggle
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const expanded = q.getAttribute('aria-expanded') === 'true';
            q.setAttribute('aria-expanded', !expanded);
            const answer = document.getElementById(q.getAttribute('aria-controls'));
            if(answer) answer.hidden = expanded;
        });
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterMessage = document.getElementById('newsletterMessage');

    if (newsletterForm && newsletterMessage) {
        newsletterForm.addEventListener('submit', e => {
            e.preventDefault();
            const emailInput = document.getElementById('emailInput');
            // Basic email validation
            if(emailInput.value && emailInput.value.includes('@')){
                newsletterMessage.textContent = "Thank you for subscribing!";
                newsletterForm.reset();
            } else {
                newsletterMessage.textContent = "Please enter a valid email address.";
            }
        });
    }
    
    // Mobile Navigation Toggle - Added for better responsiveness
    const setupMobileNavigation = () => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileNavToggle && navLinks) {
            // Toggle navigation when menu button is clicked
            mobileNavToggle.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent document click from immediately closing it
                navLinks.classList.toggle('active');
                
                // Add aria attributes for accessibility
                const expanded = navLinks.classList.contains('active');
                mobileNavToggle.setAttribute('aria-expanded', expanded);
                
                // Change hamburger icon to X when open (optional)
                mobileNavToggle.textContent = expanded ? '✕' : '☰';
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (navLinks.classList.contains('active') && 
                    !navLinks.contains(e.target) && 
                    e.target !== mobileNavToggle) {
                    navLinks.classList.remove('active');
                    mobileNavToggle.textContent = '☰';
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Close menu when pressing Escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileNavToggle.textContent = '☰';
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Set initial ARIA state
            mobileNavToggle.setAttribute('aria-expanded', 'false');
            mobileNavToggle.setAttribute('aria-controls', 'nav-links');
            navLinks.id = 'nav-links';
        }
    };
    
    // Initialize mobile navigation
    setupMobileNavigation();
});
