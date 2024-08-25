const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// POST route for /bfhl
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      error: "Invalid data format. Expected an array.",
    });
  }

  const user_id = "john_doe_17091999"; // Replace with your logic for generating user_id
  const email = "john@xyz.com";
  const roll_number = "ABCD123";

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => isNaN(item));
  const lowercaseAlphabets = alphabets.filter(
    (item) => item === item.toLowerCase()
  );

  const highest_lowercase_alphabet =
    lowercaseAlphabets.length > 0 ? [lowercaseAlphabets.sort().pop()] : [];

  return res.json({
    is_success: true,
    user_id,
    email,
    roll_number,
    numbers,
    alphabets,
    highest_lowercase_alphabet,
  });
});

// GET route for /bfhl
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
