import './style.css'

// Sidebar Toggle Logic for Mobile
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

if (sidebarToggle) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 992 &&
    !sidebar.contains(e.target) &&
    !sidebarToggle.contains(e.target) &&
    sidebar.classList.contains('active')) {
    sidebar.classList.remove('active');
  }
});

// Future logic for animations and data tracking
console.log('Ziemyks CV Webpage Initialized');
