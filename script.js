const customers = [
  {
    phone: "8495038473",
    name: "Mahantappa S/o Guranna",
    tractor: "Mahindra 575 DI",
    location: "Bangalore",
    status: "PDI Verification"
  },
  {
    phone: "9353884417",
    name: "Shivalingayya S/o Dundayya",
    tractor: "Mahindra 575 DI",
    location: "Bangalore",
    status: "PDI Verification"
  } ,
{
  phone: "9741358538",
  name: "Mahendra",
  tractor: "Mahindra 575 DI BP",
  location: "Bangalore",
  status: "Documents Verification"
}
];

function searchCustomer() {
  const phone = document.getElementById("phoneSearch").value.trim();

  const customer = customers.find(c => c.phone === phone);

  if (!customer) {
    alert("Customer Not Found");
    return;
  }

  document.getElementById("customerDetails").style.display = "block";

  document.getElementById("customerName").innerHTML = customer.name;
  document.getElementById("tractorModel").innerHTML = customer.tractor;
  document.getElementById("tractorLocation").innerHTML = customer.location;
  document.getElementById("tractorStatus").innerHTML = customer.status;

  updateTimeline(customer.status);
}

function updateTimeline(status) {
  const steps = document.querySelectorAll(".timeline .step");

  steps.forEach(step => {
    step.classList.remove("active");
  });

  if (status === "Documents Verification") {
    if (steps[0]) steps[0].classList.add("active");
  }

  if (status === "PDI Verification") {
    if (steps[1]) steps[1].classList.add("active");
  }

  if (status === "Dispatch from Bangalore") {
    if (steps[2]) steps[2].classList.add("active");
  }

  if (status === "In Transit") {
    if (steps[3]) steps[3].classList.add("active");
  }

  if (status === "Hubballi Yard") {
    if (steps[4]) steps[4].classList.add("active");
  }

  if (status === "Ready for Delivery") {
    if (steps[5]) steps[5].classList.add("active");
  }
}
