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

function chat() {
  let input = document.getElementById("chatInput").value;

  let response = "Based on your symptoms, you may need rest and hydration. Please consult a doctor for accurate diagnosis.";

  document.getElementById("chatResult").innerHTML = response;
}

function chat() {
  let input = document.getElementById("chatInput").value;

  let response = "";

  if (input.toLowerCase().includes("fever")) {
    response = "You may have a mild infection. Stay hydrated and consider paracetamol.";
  } else if (input.toLowerCase().includes("cold")) {
    response = "Common cold detected. Take rest and warm fluids.";
  } else if (input.toLowerCase().includes("headache")) {
    response = "Headache may be due to stress or dehydration. Drink water and rest.";
  } else {
    response = "Please consult a doctor for accurate diagnosis.";
  }

  document.getElementById("chatResult").innerHTML = response;
}
