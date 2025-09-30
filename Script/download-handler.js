/**
 * Download Handler for Kalpvruksh AI E-Book Store
 * This script handles file downloads with multiple fallback methods
 */

(function() {
    // Verify we're on the thank you page
    if (!document.querySelector('.thank-you-container')) {
        return;
    }
    
    console.log("Download handler initialized");
    
    // Global download function that can be called from anywhere
    window.downloadEbook = function(filepath, filename) {
        if (!filepath) {
            console.error("No filepath provided for download");
            alert("Unable to download file. Please contact support.");
            return false;
        }
        
        // Clean up filepath - remove any extra spaces
        filepath = filepath.trim();
        
        // Default to the PDF we always want to download
        if (!filepath || filepath === '') {
            filepath = "Navaratri-Limited-Edition-prompt-book_compressed.pdf";
        }
        
        console.log("Attempting to download:", filepath);
        
        // Set default filename if not provided
        if (!filename) {
            filename = filepath.split('/').pop();
        }
        
        // Try multiple download methods
        return tryDownloadMethods(filepath, filename);
    };
    
    function tryDownloadMethods(filepath, filename) {
        // Method 1: Direct download using 'a' tag with download attribute
        try {
            const link = document.createElement('a');
            link.href = filepath;
            link.download = filename;
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            
            // Remove the link after a short delay
            setTimeout(() => {
                document.body.removeChild(link);
            }, 100);
            
            return true;
        } catch (error) {
            console.error("Method 1 download failed:", error);
            
            // Method 2: Try using fetch API (works better for cross-origin)
            try {
                fetch(filepath)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.blob();
                    })
                    .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.style.display = 'none';
                        a.href = url;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                        return true;
                    })
                    .catch(error => {
                        console.error("Method 2 download failed:", error);
                        // Method 3: Open in new tab
                        window.open(filepath, '_blank');
                        return false;
                    });
            } catch (fetchError) {
                console.error("Method 3 download fallback:", fetchError);
                window.open(filepath, '_blank');
                return false;
            }
        }
        
        return false;
    }
    
    // Add direct click handler to download button if present
    document.addEventListener('DOMContentLoaded', function() {
        const downloadBtn = document.getElementById('download-book-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', function() {
                // Default to the main PDF file we always want to download
                window.downloadEbook("Navaratri-Limited-Edition-prompt-book_compressed.pdf");
                
                // Update button text
                this.textContent = "Download Started!";
                
                // Reset button after delay
                setTimeout(() => {
                    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 8px;"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>Download E-Book`;
                }, 2000);
            });
        }
    });
})();
