// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
});

// Page navigation and setting active link
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active-page');
    }

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    // Set the active link
    const activeLink = Array.from(document.querySelectorAll('.nav-link')).find(link =>
        link.textContent.trim().toLowerCase() === pageId
    );
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Update URL hash (to keep the page state after refresh)
    window.location.hash = pageId;

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize the active nav link and page on load
document.addEventListener("DOMContentLoaded", function() {
    // Check if there's a page hash in the URL (if not, default to 'home')
    const pageId = window.location.hash.slice(1) || 'home';
    showPage(pageId); // Show the page from the hash

    // Add event listeners to navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            const pageId = link.textContent.trim().toLowerCase();
            window.location.hash = pageId; // Update the URL hash
            showPage(pageId);
        });
    });

    // Modal elements
    const imageModal = document.getElementById("imageModal");
    const expandedImage = document.getElementById("expandedImage");
    const closeModal = document.getElementById("closeModal");

    // Ensure modal elements exist before proceeding
    if (imageModal && expandedImage && closeModal) {
        // Event listener for all expandable images
        document.querySelectorAll('.expandable').forEach(image => {
            image.addEventListener("click", () => {
                expandedImage.src = image.src;
                imageModal.style.display = "flex";
            });
        });

        // Close modal on clicking the close button
        closeModal.addEventListener("click", () => {
            imageModal.style.display = "none";
        });

        // Close modal on clicking outside the image
        imageModal.addEventListener("click", (e) => {
            if (e.target === imageModal) {
                imageModal.style.display = "none";
            }
        });
    }
});

// Hide the intro screen after the page fully loads
window.addEventListener('load', function() {
    console.log("Page fully loaded");

    setTimeout(function() {
        const introScreen = document.getElementById('intro-screen');
        if (introScreen) {
            console.log("Hiding intro screen...");
            introScreen.style.opacity = '0';
            introScreen.style.transition = 'opacity 1s ease';

            // Remove from the DOM after fade-out
            setTimeout(() => {
                introScreen.style.display = 'none';
                console.log("Intro screen hidden");
            }, 1000); // Matches the transition duration
        } else {
            console.error("Intro screen element not found!");
        }
    }, 3000); // Hide after 3 seconds
});
