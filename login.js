function login(){

    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;

    if(username==="admin" && password==="mahindra123"){

        window.location.href="admin.html";

    }else{

        document.getElementById("error").innerHTML="❌ Invalid Username or Password";

    }

}
