const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let prescriptions = [];

app.get("/", (req, res) => {
  res.send("Rural Health API Running");
});

// Simulate doctor consultation
app.post("/consult", (req, res) => {
  const { name, symptoms } = req.body;

  const prescription = {
    id: Date.now(),
    name,
    symptoms,
    doctorAdvice: "Take rest, drink fluids, Paracetamol 500mg",
    pharmacy: "Nearest Partner Pharmacy"
  };

  prescriptions.push(prescription);
  res.json(prescription);
});

// Get all prescriptions
app.get("/prescriptions", (req, res) => {
  res.json(prescriptions);
});

app.listen(5000, () => console.log("Server running on port 5000"));