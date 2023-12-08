function Balls () {
  alert("yo");
  
}

function login () {
  let emailfill = document.getElementById("email").value;
  let passwordfill = document.getElementById("password").value;

  let password = "Felix1";
  let email = "Felix1";

  if (emailfill === email & password === passwordfill) {
    window.open('index.html')
    window.close('login.html') 
  } else {
    alert("no!")
  }

}
