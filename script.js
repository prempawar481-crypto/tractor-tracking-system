function searchTractor() {
  const input = document.getElementById("search").value.toLowerCase();
  const tractors = document.querySelectorAll(".tractor-card");

  tractors.forEach(card => {
    if (card.innerText.toLowerCase().includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function updateLocation(button) {
  const locations = [
    "Yadgir",
    "Kalaburagi",
    "Raichur",
    "Hubballi",
    "Bengaluru",
    "Shivamogga",
    "Ballari"
  ];

  const status = ["Running", "Stopped"];

  const card = button.parentElement;
  const location = card.querySelector(".location");
  const state = card.querySelector(".status");

  location.innerHTML =
    "<b>Location:</b> " +
    locations[Math.floor(Math.random() * locations.length)];

  state.innerHTML =
    "<b>Status:</b> " +
    status[Math.floor(Math.random() * status.length)];
}function searchCustomer() {
  const phone = document.getElementById("phoneSearch").value.trim();
  const cards = document.querySelectorAll(".tractor-card");

  let found = false;

  cards.forEach(card => {
    const number = card.querySelector("p:nth-of-type(2)").innerText.replace("Phone: ", "").trim();

    if (number === phone) {
      card.style.display = "block";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  if (!found) {
    alert("Customer not found");
  }
}
