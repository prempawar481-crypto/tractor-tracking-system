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
  status: "Verification"
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

  document.getElementById("customerName").innerHTML = customer.name;
  document.getElementById("tractorModel").innerHTML = customer.tractor;
  document.getElementById("tractorLocation").innerHTML = customer.location;
  document.getElementById("tractorStatus").innerHTML = customer.status;
}
