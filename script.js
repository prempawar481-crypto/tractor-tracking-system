const customers = [
{
  phone: "8495038473",
  name: "Mahantappa S/o Guranna",
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
  document.getElementById("customerName").innerHTML = customer.name;
  document.getElementById("customerPhone").innerHTML = customer.phone;
  document.getElementById("tractorModel").innerHTML = customer.tractor;
  document.getElementById("currentLocation").innerHTML = customer.location;
  document.getElementById("currentStatus").innerHTML = customer.status;
}
