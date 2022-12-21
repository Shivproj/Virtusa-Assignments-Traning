document.getElementById("btn1").addEventListener("click", fun1);
document.getElementById("btn2").addEventListener("click", fun2);
document.getElementById("btn3").addEventListener("click", fun3);
document.getElementById("btn4").addEventListener("click", fun4);
document.getElementById("btn5").addEventListener("click", fun5);
document.getElementById("btn6").addEventListener("click", fun6);
let obj1 = { Name: "Teddy", Price: 100, Quantity: 0 };
let obj2 = { Name: "Panda", Price: 200, Quantity: 0 };
let obj3 = { Name: "Gun", Price: 300, Quantity: 0 };
let obj4 = { Name: "Dart Board", Price: 400, Quantity: 0 };
let obj5 = { Name: "RC truck", Price: 500, Quantity: 0 };
let obj6 = { Name: "Bubble Gun", Price: 600, Quantity: 0 };

let table = [obj1, obj2, obj3, obj4, obj5, obj6];
function fun1() {
  obj1.Quantity = obj1.Quantity + 1;
}
function fun2() {
  obj2.Quantity = obj2.Quantity + 1;
}
function fun3() {
  obj3.Quantity = obj3.Quantity + 1;
}
function fun4() {
  obj4.Quantity = obj4.Quantity + 1;
}
function fun5() {
  obj5.Quantity = obj5.Quantity + 1;
}
function fun6() {
  obj6.Quantity = obj6.Quantity + 1;
}
function checkout() {
  let value = 0;
  document.getElementById("pay").hidden = false;

  table.forEach((item) => {
    value += item.Quantity * item.Price;
  });

  document.getElementById("table-list").hidden = false;
  document.getElementById("table-list").innerHTML = `
     <table>
    <thead>
    <tr>
        <td>Name</td>
        <td>Price</td>
      </tr>
    </thead>
    <tbody id="table-list-row">

    <tr>  
    <td>Teddy</td>
     <td>100</td>
     <td>
  ${obj1.Quantity}</td>
     </tr>
     <td>Panda</td>
    <td>200</td>   
    <td>${obj2.Quantity}</td></td>
    </tr>
    <td>Gun</td>
    <td>300</td>
    <td>${obj3.Quantity}</td></td>   
     </tr>
    <td>Dart Board</td>
     <td>400</td>
     <td>${obj4.Quantity}</td></td>    
     </tr>
    <td>RC Truck</td>
    <td>500</td>
    <td>${obj5.Quantity}</td></td>
   
     </tr>
    <td>Bubble Gun</td>
    <td>600</td>
    <td>${obj6.Quantity}</td></td>   
         </tr>
   

    

    </tbody>
   </table>`;

  document.getElementById("table-list").innerHTML += "Your total is " + value;
}

function pay() {
  document.getElementById("card-validation").hidden = false;
  // Initialize form validation on the payment form.
  var form = document.getElementById("payment-form");
  form.addEventListener(
    "submit",
    function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");

      alert("Thanks for the pruchase");
    },
    false
  );

  // Add custom validation for the expiration date field.
  var expiryField = document.getElementById("card-expiry");
  expiryField.addEventListener("input", function () {
    var currentDate = new Date();
    var enteredDate = new Date(expiryField.value);
    if (enteredDate <= currentDate) {
      expiryField.setCustomValidity("Expiration date must be in the future");
    } else {
      expiryField.setCustomValidity("");
    }
  });
}
