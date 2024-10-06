// Dark Mode Toggle Functionality
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Menu Toggle untuk tampilan mobile
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scroll handling dan mengatur active link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Mencegah perilaku default (guliran tidak smooth)

        // Menghapus semua active class dari link
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Menambahkan active class ke link yang diklik
        link.classList.add('active');

        const targetSection = document.querySelector(link.getAttribute('href')); // Mendapatkan target section berdasarkan href
        
        if (targetSection) {
            // Scroll ke section yang dituju
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', function () {
    // Ambil semua link di dalam navbar
    const navLinks = document.querySelectorAll('nav a');
    
    // Ambil posisi scroll
    let currentScrollPos = window.pageYOffset;

    // Loop melalui setiap section
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100; // Ambil posisi section di halaman
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        // Cek apakah posisi scroll berada di dalam section tersebut
        if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Hapus class active dari semua link
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active'); // Tambahkan class active pada link yang sesuai dengan section
                }
            });
        }
    });
});

// Function to open modal with specific ID
function openModal(modalId) {
    var modal = document.getElementById("projectModal" + modalId);
    modal.style.display = "flex"; // Show modal and center content using flexbox
}

// Function to close modal with specific ID
function closeModal(modalId) {
    var modal = document.getElementById("projectModal" + modalId);
    modal.style.display = "none";
}

// Close modal when clicking outside modal content
window.onclick = function(event) {
    // Check if click is outside of the modal content
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}



