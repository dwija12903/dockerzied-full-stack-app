const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);

app.use(bodyParser.json());
app.use(cors());

app.post("/submit-form", async (req, res) => {
  const formData = req.body;

  try {
    const newForm = new Form(formData);
    await newForm.save();
    res.json({ message: "Form data saved successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Error saving form data." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
