const customers = [
  {
    phone: "8495038473",
    name: "Mahantappa S/o Guranna",
    tractor: "Mahindra 575 DI",
    location: "Bangalore",
    status:  "Documents Verification"
  },
{
  phone: "9353884417",
  name: "Shivalingayya S/o Dundayya",
  tractor: "Mahindra 575 DI",
  location: "Bangalore",
  status: "PDI Verification"
}
];

function searchCustomer() {
  let phone = document.getElementById("phoneSearch").value.trim();

  let customer = customers.find(c => c.phone === phone);

  if (!customer) {
    alert("Customer Not Found");
    return;
  }

  document.getElementById("customerDetails").style.display = "block";
  let steps = document.querySelectorAll(".step");
steps.forEach(step => step.classList.remove("active"));

if(customer.status === "Documents Verification"){
    steps[0].classList.add("active");
}
else if(customer.status === "PDI Verification"){
    steps[0].classList.add("active");
    steps[1].classList.add("active");
}

  document.getElementById("customerName").innerHTML = customer.name;
  document.getElementById("tractorModel").innerHTML = customer.tractor;
  document.getElementById("tractorLocation").innerHTML = customer.location;
  document.getElementById("tractorStatus").innerHTML = customer.status;
}
