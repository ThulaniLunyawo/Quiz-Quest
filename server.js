// server.js

// Step 1: Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Step 2: Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Step 3: Middleware (needed for JSON and CORS)
app.use(cors()); // Allow requests from Vue app
app.use(express.json()); // Parse JSON data

// Step 4: Connect to MongoDB Atlas (we'll set this up next)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Step 5: Define a Subject model (what data looks like)
const Subject = mongoose.model('Subject', {
  name: String,
  icon: String,
});

// Step 6: Seed data (only once) – add subjects to DB
async function seedData() {
  const count = await Subject.countDocuments();
  if (count === 0) {
    const subjects = [
      { name: "MATHEMATICS", icon: "PRT Subject icons/calculator.png" },
      { name: "ENGLISH", icon: "PRT Subject icons/abc.png" },
      { name: "GEOGRAPHY", icon: "PRT Subject icons/earth-globe.png" },
      { name: "CHEMISTRY", icon: "PRT Subject icons/chemistry.png" },
      { name: "PHYSICS", icon: "PRT Subject icons/formula.png" },
      { name: "HISTORY", icon: "PRT Subject icons/history.png" },
      { name: "BUSINESS", icon: "PRT Subject icons/marketing.png" },
      { name: "BIOLOGY", icon: "PRT Subject icons/microscope.png" }
    ];
    await Subject.insertMany(subjects);
    console.log("✅ Default subjects added to database");
  }
}

// Step 7: API Route – get all subjects
app.get('/api/subjects', async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch subjects" });
  }
});

// Step 8: Test route
app.get('/api/hello', (req, res) => {
  res.json({ message: "Hello from backend!" });
});

// Step 9: Start server
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
  seedData(); // Run seed function
});