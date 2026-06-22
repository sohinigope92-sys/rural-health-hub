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
    <strong>Patient:</strong> ${name} <br>
    <strong>Symptoms:</strong> ${symptoms} <br><br>

    <strong>Doctor Advice:</strong> Take rest, stay hydrated.<br>
    <strong>Prescription:</strong> Paracetamol (after meals)<br>
    <strong>Pharmacy:</strong> Nearby Rural Medical Store
  `;

  document.getElementById("result").innerHTML = result;
}
