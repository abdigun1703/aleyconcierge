// Export sebagai module
export function initRemoveHeader() {
    console.log('🚀 Initializing Header Functions...');
    
    const navLinks = document.querySelectorAll('.nav__link');
    const navMenu = document.getElementById('nav-menu');
    const header = document.getElementById('header');
    
    // Nav link functionality
    if (navLinks.length > 0 && navMenu) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        });
    }
    
    // Scroll functionality
    if (header) {
        const handleScroll = () => {
            header.classList.toggle('bg-header', window.scrollY >= 50);
        };
        
        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll);
    }
}

// Auto-init jika langsung di-load
if (typeof window !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initRemoveHeader();
        });
    } else {
        initRemoveHeader();
    }
}

