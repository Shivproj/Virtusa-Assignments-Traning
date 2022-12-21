function myOnloadFunc() {
  let date = new Date();
  document.getElementById("date").innerHTML = date;

  const name = prompt("Please enter your name");

  if (!name) {
    name = "";
  }

  document.getElementById("updateUserName").innerHTML += " " + name;
}

