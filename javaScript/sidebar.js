var toggleBtn = document.querySelector('.sidebarToggle');
var sidebar = document.querySelector('.menu');

toggleBtn.addEventListener('click', toggleSidebar)

function toggleSidebar() {
    toggleBtn.classList.toggle('isOpen');
    sidebar.classList.toggle('isOpen');
  }