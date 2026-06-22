function register() {
  let user = document.getElementById("regUser").value;
  alert("Registered successfully: " + user);
}

function login() {
  let user = document.getElementById("logUser").value;
  alert("Welcome back, " + user);
}

function consult() {
  let name = document.getElementById("name").value;
  let symptoms = document.getElementById("symptoms").value;

  let result = `
    Doctor Advice: Stay hydrated and take rest.<br>
    Suggested Medicine: Paracetamol<br>
    Nearby Pharmacy: Village Medical Store
  `;

  document.getElementById("result").innerHTML = result;
}
