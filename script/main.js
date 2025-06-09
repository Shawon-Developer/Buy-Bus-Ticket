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
  const seatSelected = document.querySelector("#seatSelected");
  let seatSelectedInt = parseInt(seatSelected.textContent);
  const selectedSeatInfoContainer = document.querySelector("#selectedSeatInfo");
  const seatCost = parseInt(document.querySelector("#seatCost").textContent);
  const totalTicketPrice = document.querySelector("#totalTicketPrice");

  seatBtnS.forEach(function (seatBtn) {
    seatBtn.addEventListener("click", function (event) {
      if (availableSeats > 48) {
        // Decrease Seats Count
        availableSeats--;
        availableSeatsElement.textContent = availableSeats;

        // Change Seats Buttons
        event.target.classList.replace("btn-secondary", "btn-primary");
        event.target.setAttribute("disabled", "true");

        // Update Selected Seat Info Container & Selected Seat Count
        seatSelectedInt++;
        seatSelected.textContent = seatSelectedInt;

        const newDiv = document.createElement("div");
        const seatInfoHTML = `
        <p>${seatBtn.textContent}</p>
        <p>Business</p>
        <p>${seatCost}</p>
        `;
        newDiv.innerHTML = seatInfoHTML;
        newDiv.classList.add("seat-info");

        selectedSeatInfoContainer.append(newDiv);

        totalTicketPrice.textContent = seatSelectedInt * seatCost;
      } else {
        Toastify({
          text: "Max Ticket Booked",
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "#ff4757",
            fontSize: "1.3vw",
          },
        }).showToast();
      }

      if (availableSeats <= 48) {
        seatBtnS.forEach(function (seatBtn) {
          if (seatBtn.classList.contains("btn-secondary")) {
            seatBtn.classList.replace("btn-secondary", "btn-error");
          }
        });
      }
    });
  });

  // Coupon Discount
  const applyDiscount = document.querySelector("#applyCoupon");

  applyDiscount.addEventListener("click", function () {
    const couponCode = document.querySelector("#couponCodeInput").value;
    const discountTicketPrice = document.querySelector("#discountTicketPrice");
    const totalTicketPriceInt = parseInt(totalTicketPrice.textContent);
    let discountAmount = 0;
    let finalPrice = 0;

    if (totalTicketPriceInt >= 150 && couponCode === "disc20") {
      discountAmount = totalTicketPriceInt * (20 / 100);
      finalPrice = totalTicketPriceInt - discountAmount;
      discountTicketPrice.textContent = finalPrice;
    } else if (totalTicketPriceInt >= 150 && couponCode === "disc30") {
      discountAmount = totalTicketPriceInt * (30 / 100);
      finalPrice = totalTicketPriceInt - discountAmount;
      discountTicketPrice.textContent = finalPrice;
    } else if (!totalTicketPriceInt) {
      Toastify({
        text: "Book A Ticket First",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ff4757",
          fontSize: "1.3vw",
        },
      }).showToast();
    } else {
      Toastify({
        text: "Please Give A Valid Input",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#ff4757",
          fontSize: "1.3vw",
        },
      }).showToast();
    }
  });
});
