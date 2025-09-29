 // Load book data from local data (in a real app, this would come from an API or server)
        const books = [
            {
                id: 1,
                title: "The Prompt Engineer's Handbook",
                author: "Kalpvruksh",
                price: "₹199",
                priceAmount: 199,
                desc: "A comprehensive guide to prompt engineering for AI. This book covers all aspects of creating effective prompts for AI models, with practical examples and case studies that help you master the art of communication with artificial intelligence. Learn techniques to improve your results, overcome limitations, and build exceptional AI-powered applications.",
                pages: "120",
                size: "2.4 MB",
                sample: "Navaratri-Limited-Edition-prompt-book_compressed .pdf", // Correct PDF path with space before .pdf
                category: "prompt",
                image: ""
            },
            {
                id: 2,
                title: "AI for Indian Businesses",
                author: "Kalpvruksh",
                price: "₹299",
                priceAmount: 299,
                desc: "Strategies and case studies for AI adoption in Indian businesses. This comprehensive guide addresses the unique challenges and opportunities in the Indian market, providing practical frameworks for successful AI implementation tailored to local business contexts.",
                pages: "98",
                size: "1.8 MB",
                sample: "Navaratri-Limited-Edition-prompt-book_compressed .pdf", // Correct PDF path
                category: "strategy",
                image: ""
            },
            {
                id: 3,
                title: "Sales Automation Playbook",
                author: "Kalpvruksh",
                price: "₹249",
                priceAmount: 249,
                desc: "Automate your sales process with proven AI strategies. This playbook offers step-by-step guidance on identifying automation opportunities, selecting the right tools, and implementing AI-powered solutions that increase efficiency and drive revenue growth.",
                pages: "110",
                size: "2.1 MB",
                sample: "Navaratri-Limited-Edition-prompt-book_compressed .pdf", // Correct PDF path
                category: "sales",
                image: ""
            }
        ];
        
        // Get the book ID from URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const bookId = parseInt(urlParams.get('id'));
        let cartCount = 0;
        
        // Display book details when page loads
        document.addEventListener('DOMContentLoaded', function() {
            loadBookDetails();
            setupMobileNavigation();
        });
        
        function loadBookDetails() {
            // Find the book with matching ID
            const book = books.find(b => b.id === bookId);
            
            // If book not found, redirect to store
            if (!book) {
                window.location.href = 'ebook-store.html';
                return;
            }
            
            // Set page title
            document.title = `${book.title} | Kalpvruksh AI`;
            
            // Populate book details
            document.getElementById('book-title').textContent = book.title;
            document.getElementById('book-author').textContent = `By ${book.author}`;
            document.getElementById('book-price').textContent = book.price;
            document.getElementById('book-pages').textContent = book.pages;
            document.getElementById('book-size').textContent = book.size;
            
            // Populate detailed description based on book ID
            const detailedDescription = document.getElementById('detailed-description');
            
            // For book ID 1 (The Prompt Engineer's Handbook), add full content
            if (book.id === 1) {
                detailedDescription.innerHTML = `
                    <h3>Navaratri Limited Edition Prompt Book</h3>
                    <p>Discover the Ultimate AI-Driven Visual and Cultural Guide for Navaratri Festival Imagery</p>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Product Description</h3>
                        <p>This <strong>Navaratri Limited Edition Prompt Book</strong> is a meticulously crafted collection of AI prompts designed to help you create stunning, photorealistic images capturing the vibrant spirit of Navaratri, Garba, and Durga Puja celebrations. Whether you are an artist, photographer, or AI enthusiast, this book offers professional-grade prompts to generate culturally authentic visual content with absolute facial replication and biometric precision.</p>
                        <ul>
                            <li>Over 15 unique AI image generation prompts covering traditional attire, dance poses, devotional moments, and festival scenes.</li>
                            <li>Detailed lighting, camera, and cultural setting instructions for unmatched realism.</li>
                            <li>Designed for advanced AI image generation tools like Gemini.</li>
                            <li>Comes with a comprehensive starting guide explaining prompt customization and image generation steps.</li>
                        </ul>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Why This Prompt Book is Unique and Valuable</h3>
                        <ul>
                            <li><strong>Authentic Cultural Detailing:</strong> Every prompt is rooted in deep ethnographic and festival research ensuring true-to-life imagery reflecting Navaratri's traditions and spirit.</li>
                            <li><strong>Precision Facial & Biometric Replication:</strong> Create images that personalize the festival experience with precise facial and hand biometric matching, preserving identity and individuality.</li>
                            <li><strong>Professional Photography Specs:</strong> The book includes technical camera settings, lighting instructions, and styling guides to produce gallery-quality AI images.</li>
                            <li><strong>Versatility:</strong> Perfect for festival photographers, AI creators, cultural marketers, and content creators seeking authentic and expressive visuals.</li>
                            <li><strong>Time-Saving:</strong> Ready-to-use prompts allow even beginners to quickly generate high-quality AI images without extensive trial and error.</li>
                            <li><strong>Creative Inspiration:</strong> Explore unique themes—solo portraits, action shots, intimate couple moments, and dynamic dance scenes—to enrich your creative projects.</li>
                        </ul>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Sample Prompt Excerpts</h3>
                        <div class="prompt-example">
                            <strong>Prompt 1:</strong> A cinematic portrait of a young man playing the dhol drum during Garba. Dramatic side lighting highlights his intense expression, with traditional attire and vibrant festival background. Technical Specs: Sony A9 III, 24-70mm f2.8 lens, 8K UHD.
                        </div>
                        <div class="prompt-example">
                            <strong>Prompt 7:</strong> Capture a young woman joyfully spinning in the center of a Garba circle, her colorful layered ghaghra fanned out amidst a dynamic vortex of motion-blurred dancers and warm festival lights.
                        </div>
                        <div class="prompt-example">
                            <strong>Prompt 14:</strong> An intimate macro portrait of a woman tying a Mauli thread on her partner's wrist in front of a softly lit Durga temple backdrop, emphasizing warmth, devotion, and cultural detail.
                        </div>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Benefits You'll Gain</h3>
                        <ul>
                            <li>Generate culturally rich and photorealistic images that tell a compelling Navaratri story.</li>
                            <li>Save hours with expert-built AI prompts tuned for success with Gemini image generation.</li>
                            <li>Elevate your content with precise face and hand biometric identity replication for personalized visuals.</li>
                            <li>Access a starting guide to get you up and running quickly with step-by-step prompt customizations.</li>
                            <li>Impress clients, followers, and audiences with authentic festival imagery that resonates personally and spiritually.</li>
                        </ul>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>How to Use the Prompt Book</h3>
                        <ol>
                            <li>Choose your desired scene category (e.g., Solo Portrait, Dance Action, Couple Moments).</li>
                            <li>Customize the provided prompts by replacing placeholder images and adjusting attire or background details.</li>
                            <li>Input the prompt into your Gemini AI image generator for high-quality Navaratri visuals.</li>
                            <li>Follow troubleshooting tips for lighting and cultural authenticity to perfect your images.</li>
                            <li>Use the images for creative projects, marketing, or personal celebration documentation.</li>
                        </ol>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Testimonials</h3>
                        <div class="testimonial">
                            "The Navaratri Prompt Book is a masterpiece for AI image creators. The level of cultural detail and technical specificity made my Garba photos come to life like never before!"
                            <span class="testimonial-author">— Shaurya P., Professional Photographer</span>
                        </div>
                        <div class="testimonial">
                            "Merely by following the prompts, I saved days of struggle trying to recreate authentic Navaratri visuals. Highly recommended for anyone serious about cultural AI imagery."
                            <span class="testimonial-author">— Kavya S., Visual Artist</span>
                        </div>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Visual Preview</h3>
                        <p>Our gallery showcases the stunning quality and cultural richness of images created using these prompts.</p>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Guarantee</h3>
                        <p>This prompt book is backed by Kalpvruksh's commitment to quality. If you find it doesn't meet your expectations in crafting beautiful Navaratri visuals, a satisfaction guarantee is offered to ensure a risk-free experience.</p>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Start Creating Today</h3>
                        <p>Begin your journey to creating breathtaking, authentic Navaratri festival images today with our Limited Edition Prompt Book. Experience the magic of cultural AI art at its finest!</p>
                    </div>
                `;
            } 
            // For other books, just add headings
            else if (book.id === 2) {
                detailedDescription.innerHTML = `
                    <h3>About This Book</h3>
                    <p class="book-description">${book.desc}</p>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Product Description</h3>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Why This Book is Unique and Valuable</h3>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Sample Excerpts</h3>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Benefits You'll Gain</h3>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>How to Use This Book</h3>
                    </div>
                `;
            }
            else if (book.id === 3) {
                detailedDescription.innerHTML = `
                    <h3>About This Book</h3>
                    <p class="book-description">${book.desc}</p>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Product Description</h3>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Why This Book is Unique</h3>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Key Features</h3>
                    </div>
                    
                    <div class="divider"></div>
                    
                    <div class="product-section">
                        <h3>Business Applications</h3>
                    </div>
                `;
            }
            
            // Set up buttons
            document.getElementById('buy-now-btn').addEventListener('click', function() {
                initiatePayment(book.id);
            });
            
            // Initialize slideshow with custom images if available
            if (book.images && book.images.length > 0) {
                const slides = document.querySelectorAll('.slide');
                for (let i = 0; i < Math.min(slides.length, book.images.length); i++) {
                    slides[i].querySelector('img').src = book.images[i];
                }
            }
            
            // Set up PDF sample viewer with improved error handling
            const viewSampleBtn = document.getElementById('view-sample-btn');
            if (viewSampleBtn) {
                viewSampleBtn.addEventListener('click', function() {
                    try {
                        const pdfPreviewFrame = document.getElementById('pdf-preview-frame');
                        const pdfPreviewModal = document.getElementById('pdf-preview-modal');
                        
                        // Debug info
                        console.log("Opening sample PDF:", book.sample);
                        
                        // Make sure we have a valid sample URL
                        if (!book.sample || book.sample === '#') {
                            alert("Sample preview is not available for this book.");
                            return;
                        }
                        
                        // Set the iframe source to the PDF
                        pdfPreviewFrame.src = book.sample;
                        
                        // Show the modal
                        pdfPreviewModal.style.display = 'flex';
                        
                    } catch (error) {
                        console.error("Error showing PDF preview:", error);
                        alert("Could not show the sample preview. Please try again later.");
                    }
                });
            }
            
            // Close PDF preview modal
            const closePdfPreviewBtn = document.getElementById('close-pdf-preview');
            if (closePdfPreviewBtn) {
                closePdfPreviewBtn.addEventListener('click', function() {
                    const pdfPreviewModal = document.getElementById('pdf-preview-modal');
                    if (pdfPreviewModal) {
                        pdfPreviewModal.style.display = 'none';
                        document.getElementById('pdf-preview-frame').src = '';
                    }
                });
            }
            
            // Close PDF preview modal on outside click
            const pdfPreviewModal = document.getElementById('pdf-preview-modal');
            if (pdfPreviewModal) {
                pdfPreviewModal.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.style.display = 'none';
                        document.getElementById('pdf-preview-frame').src = '';
                    }
                });
            }
            
            // Load related books (all except current book)
            loadRelatedBooks(book.id);
        }
        
        function loadRelatedBooks(currentBookId) {
            const relatedBooks = books.filter(book => book.id !== currentBookId);
            const relatedBooksGrid = document.getElementById('related-books-grid');
            
            relatedBooksGrid.innerHTML = '';
            
            relatedBooks.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.classList.add('book-card');
                bookCard.innerHTML = `
                    <div class="book-image-placeholder"></div>
                    <h3>${book.title}</h3>
                    <p class="book-author">By ${book.author}</p>
                    <p class="book-price">${book.price}</p>
                    <div class="book-buttons">
                        <a href="book-detail.html?id=${book.id}" class="cta-button primary">View Details</a>
                    </div>
                `;
                relatedBooksGrid.appendChild(bookCard);
            });
        }
        
        function setupMobileNavigation() {
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
        }
        
        // Razorpay Payment Integration
        function initiatePayment(bookId) {
            try {
                console.log("Initiating payment for book ID:", bookId);
                const book = books.find(b => b.id == bookId);
                if (!book) {
                    console.error("Book not found with ID:", bookId);
                    return;
                }
                
                // Convert price string to number and ensure it's a valid amount
                let priceAmount = book.priceAmount || 199;
                
                const options = {
                    key: 'rzp_live_RMvL1ArRi2m0Z9',
                    amount: priceAmount * 100,
                    currency: 'INR',
                    name: 'Kalpvruksh AI',
                    description: `Purchase: ${book.title}`,
                    image: 'WhatsApp Image 2025-08-20 at 18.09.23_47dfe0a0.jpg',
                    handler: function (response) {
                        console.log("Payment successful:", response);
                        alert("Payment successful! Redirecting to thank you page...");
                        window.location.href = `thankyou.html?order_id=${response.razorpay_payment_id}&book_id=${bookId}`;
                    },
                    prefill: {
                        name: '',
                        email: '',
                        contact: ''
                    },
                    notes: {
                        address: 'Kalpvruksh AI Office',
                        book_id: bookId
                    },
                    theme: {
                        color: '#2471c9'
                    }
                };
                
                // Create a new instance for each payment attempt
                const rzp = new Razorpay(options);
                
                // Add event listeners for payment issues
                rzp.on('payment.failed', function (response){
                    console.error("Payment failed:", response.error);
                    alert(`Payment failed: ${response.error.description}`);
                });
                
                // Open the payment dialog
                rzp.open();
            } catch (error) {
                console.error("Error initiating payment:", error);
                alert("Could not initialize payment. Please try again later.");
            }
        }
        
        // Slideshow functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = slides.length;
        
        function showSlide(n) {
            // Reset current slide
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active-dot');
            
            // Calculate the new slide index
            currentSlide = (n + totalSlides) % totalSlides;
            
            // Show new slide
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active-dot');
        }
        
        function nextSlide() {
            showSlide(currentSlide + 1);
        }
        
        function prevSlide() {
            showSlide(currentSlide - 1);
        }
        
        // Add event listeners for navigation
        document.querySelector('.next').addEventListener('click', nextSlide);
        document.querySelector('.prev').addEventListener('click', prevSlide);
        
        // Add event listeners for dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-index'));
                showSlide(slideIndex);
            });
        });
        
        // Auto advance slides every 5 seconds
        let slideshowInterval = setInterval(nextSlide, 5000);
        
        // Pause slideshow when hovering over it
        const slideshowContainer = document.querySelector('.slideshow-container');
        slideshowContainer.addEventListener('mouseenter', () => {
            clearInterval(slideshowInterval);
        });
        
        slideshowContainer.addEventListener('mouseleave', () => {
            slideshowInterval = setInterval(nextSlide, 5000);
        });
        
        // Update book data to include real images
        books.forEach(book => {
            // Add real images for each book
            book.images = [
                "book-image/SAle.png",
                "book-image/SAle.jpg",
                "book-image/Gemini_Generated_Image_v134cqv134cqv134.png",
                "book-image/Gemini_Generated_Image_klt4bqklt4bqklt4.png",
                "book-image/SAle.png"
            ];
        });