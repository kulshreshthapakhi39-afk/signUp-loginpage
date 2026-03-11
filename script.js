function showSignup() {
    document.getElementById("home").style.display = "none";
    document.getElementById("Login").style.display = "none";
    document.getElementById("Signup").style.display = "flex";
}


function showLogin() {
    document.getElementById("home").style.display = "none";
    document.getElementById("Signup").style.display = "none";
    document.getElementById("Login").style.display = "flex"
}

function createAccount(){
    alert("Account Created Successfully");
}

function loginUser(){
    alert("Login Successfully");
}