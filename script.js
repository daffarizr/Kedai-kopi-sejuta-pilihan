// toggle clast active untuk memunculkan navbar ketika klik tombol menu
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').
onclick = () => {
  navbarNav.classList.toggle('active');
};

// toggle clast active untuk memunculkan navbar ketika klik tombol searh

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}


// ketika pencet selain tombol menu bisa keluar

const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});
