const selectedSeats = document.getElementById("num-seats-selected");
const totalToPay = document.getElementById("num-seats-selected");

const data = [
  { name: "El olvido que seremos", price: 10 },
  { name: "Aliados", price: 12 },
  { name: "Wall-E", price: 8 },
];

let ticketPrice = 0;

function setSeatsEventListeners() {
  const selectableSeatSelectors = [
    ".seats .not-assigned-seat",
    ".seats .selected-seat",
  ];
  function handleNotAssignedSeats(event) {
    event = event || window.event;
    var target = event.target;
    target.classList.remove("not-assigned-seat");
    target.classList.add("selected-seat");
  }
  function handleSelectedSeats(event) {
    event = event || window.event;
    var target = event.target;
    target.classList.remove("selected-seat");
    target.classList.add("not-assigned-seat");
  }

  function handleSeat(event) {
    const targetElement = event.target || event.srcElement;

    if (targetElement.classList.contains("not-assigned-seat")) {
      targetElement.classList.replace("not-assigned-seat", "selected-seat");
    } else if (targetElement.classList.contains("selected-seat")) {
      targetElement.classList.replace("selected-seat", "not-assigned-seat");
    }
    handleValues();
  }

  function handleValues() {
    refreshNumSeatsSelectedElement();
    refreshPriceSeatsSelectedElement();
  }

  function refreshNumSeatsSelectedElement() {
    const element = document.getElementById("num-seats-selected");
    numSelectedSeats = document.querySelectorAll(
      ".seats .selected-seat"
    ).length;

    element.innerText = numSelectedSeats;
  }

  function refreshPriceSeatsSelectedElement() {
    const element = document.getElementById("price-seats-selected");
    console.log(element.innerText);
    numSelectedSeats = document.querySelectorAll(
      ".seats .selected-seat"
    ).length;

    element.innerText = numSelectedSeats * ticketPrice;
  }

  selectableSeatSelectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      element.addEventListener("click", handleSeat);
    });
  });
}

function fillMovieSelectElement() {
  const element = document.getElementById("movie-select");
  console.log(element);
  data.forEach((movieData) => {
    const opt = document.createElement("option");
    opt.value = movieData.price;
    opt.innerText = `${movieData.name} (${movieData.price}€)`;
    element.appendChild(opt);
  });
}

fillMovieSelectElement();
setSeatsEventListeners();
