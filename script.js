// Function to show pages when a menu item is clicked
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
      page.classList.remove('active');
  });

  // Show the selected page
  const page = document.getElementById(pageId);
  page.classList.add('active');
}

// Initially display the home page
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});