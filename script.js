const customers = [
{
phone:"7899902735",
name:"Basamma W/o Manappa",
tractor:"Mahindra 575 DI",
location:"Bangalore",
status:"Running"
},
{
phone:"7204258784",
name:"Ravikumar S/o Hanamantraya Hosur",
tractor:"John Deere 5050 Gear Pro",
location:"Pune",
status:"Running"
},
{
phone:"9148305884",
name:"KanthaReddy S/o MallikarjunReddy",
tractor:"Mahindra 575 DI",
location:"Bangalore",
status:"Running"
},
{
phone:"9901036121",
name:"Jayashree",
tractor:"Swaraj 744 XT",
location:"Bangalore",
status:"Running"
},
{
phone:"8088883730",
name:"Vishwanath S/o Ningappa",
tractor:"Massey Ferguson 7250",
location:"Doddaballapur",
status:"Running"
},
{
phone:"9972905676",
name:"Basanagouda S/o Karabasappa Danareddy",
tractor:"New Holland 3636 TX",
location:"Bangalore",
status:"Running"
},
{
phone:"9900578282",
name:"Sabjavali S/o Muhammad Hussain",
tractor:"Swaraj 744 XT",
location:"Bangalore",
status:"Running"
}
];

function searchCustomer(){

let phone=document.getElementById("phoneSearch").value.trim();

let customer=customers.find(c=>c.phone===phone);

if(!customer){
alert("Customer Not Found");
return;
}

document.getElementById("customerDetails").style.display="block";

document.getElementById("customerName").innerHTML=customer.name;
document.getElementById("customerPhone").innerHTML=customer.phone;
document.getElementById("tractorModel").innerHTML=customer.tractor;
document.getElementById("tractorLocation").innerHTML=customer.location;
document.getElementById("tractorStatus").innerHTML=customer.status;

}

function updateLocation(){

let newLocation=prompt("Enter Current Location");

if(newLocation){

document.getElementById("tractorLocation").innerHTML=newLocation;

alert("Location Updated Successfully");

}

}
