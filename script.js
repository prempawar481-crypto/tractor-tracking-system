function searchCustomer() {
  const phone = document.getElementById("phoneSearch").value.trim();
  const cards = document.querySelectorAll(".tractor-card");

  let found = false;

  cards.forEach(card => {
    const text = card.innerText;

    if (text.includes(phone)) {
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
  card.querySelector(".location").innerText =
    locations[Math.floor(Math.random() * locations.length)];

  card.querySelector(".status").innerText =
    status[Math.floor(Math.random() * status.length)];
}
