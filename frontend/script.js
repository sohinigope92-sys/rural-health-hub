const API = "http://localhost:5000";

async function register() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  const res = await fetch(API + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
}

async function login() {
  const username = document.getElementById("logUser").value;
  const password = document.getElementById("logPass").value;

  const res = await fetch(API + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  alert(data.message);
}

async function consult() {
  const name = document.getElementById("name").value;
  const symptoms = document.getElementById("symptoms").value;

  const res = await fetch(API + "/consult", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, symptoms })
  });

  const data = await res.json();

  document.getElementById("result").innerHTML =
    `Advice: ${data.doctorAdvice} <br> Pharmacy: ${data.pharmacy}`;
}