
document.addEventListener('DOMContentLoaded', function() {

var navbar = document.getElementById("navbar");
navbar.classList.add("sticky");

window.addEventListener('scroll', stickyNavBar);
window.onscroll = function() {stickyNavBar()};

var sticky = navbar.offsetTop;

function stickyNavBar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
})