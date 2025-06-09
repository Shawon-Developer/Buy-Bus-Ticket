document.addEventListener("DOMContentLoaded", function () {
  // Sticky Navigation ---------->
  const navBar = document.querySelector("#SeatSnapNavBar");

  document.addEventListener("scroll", function (event) {
    if (event.target.defaultView.pageYOffset > 50) {
      navBar.classList.add("sticky-nav");
      currentScrolledNumber = event.target.defaultView.pageYOffset;
    } else if (event.target.defaultView.pageYOffset < 50) {
      navBar.classList.remove("sticky-nav");
      currentScrolledNumber = event.target.defaultView.pageYOffset;
    }
  });

  //Booking Seat Functionality ---------->
  const seatBtnS = document.querySelectorAll(".seat-btn");
  const availableSeatsElement = document.querySelector("#availableSeats");
  let availableSeats = parseInt(availableSeatsElement.textContent);

  seatBtnS.forEach(function (seatBtn) {
    seatBtn.addEventListener("click", function (event) {
      if (availableSeats > 48) {
        // Decrease Seats Count
        availableSeats--;
        availableSeatsElement.textContent = availableSeats;

        // Change Seats Buttons
        event.target.classList.replace("btn-secondary", "btn-primary");
        event.target.setAttribute("disabled", "true");
      }

      if (availableSeats <= 48) {
        seatBtnS.forEach(function (seatBtn) {
          if (seatBtn.classList.contains("btn-secondary")) {
            seatBtn.classList.replace("btn-secondary", "btn-error");
            seatBtn.setAttribute("disabled", "true");
          }
        });
      }
    });
  });
});
