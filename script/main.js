document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector("#SeatSnapNavBar");
  let currentScrolledNumber = 0;

  document.addEventListener("scroll", function (event) {
    if (event.target.defaultView.pageYOffset > 50) {
      navBar.classList.add("sticky-nav");
      currentScrolledNumber = event.target.defaultView.pageYOffset;
    } else if (event.target.defaultView.pageYOffset < 50) {
      navBar.classList.remove("sticky-nav");
      currentScrolledNumber = event.target.defaultView.pageYOffset;
    }
  });
});
