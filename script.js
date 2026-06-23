function register() {
  let user = document.getElementById("regUser").value;
  alert("Registered successfully: " + user);
}

function login() {
  let user = document.getElementById("logUser").value;
  alert("Welcome back, " + user);
}

 function consult() {
  const symptoms = document.getElementById("symptoms").value;
  let result = "";

  if (symptoms.toLowerCase().includes("fever")) {
    result = "You may have a viral infection. Please consult a doctor and stay hydrated.";
  } 
  else if (symptoms.toLowerCase().includes("cough")) {
    result = "Possible cold or respiratory issue. Wear a mask and consult a doctor.";
  } 
  else {
    result = "Please consult a certified doctor for accurate diagnosis.";
  }

  document.getElementById("chatResult").innerText = result;
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

function showPharmacy() {
  document.getElementById("pharmacyResult").innerText =
    "Nearest pharmacy: ABC Medical Store (2 km away)";
}
