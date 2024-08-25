// api/bfhl.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const { data } = req.body;
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item));
    const lowercaseAlphabets = data.filter(
      (item) => item === item.toLowerCase()
    );
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || [];

    res.status(200).json({
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet,
    });
  } else if (req.method === "GET") {
    res.status(200).json({ operation_code: 1 });
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
