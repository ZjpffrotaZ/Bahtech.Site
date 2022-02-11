var toggleBtn = document.querySelector('.sidebar_toggle');
var sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', toggleSidebar)

function toggleSidebar() {
    toggleBtn.classList.toggle('is_open');
    sidebar.classList.toggle('is_open');
  }