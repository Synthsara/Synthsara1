export default async function handler(req, res) {
  const { message } = req.body;
  // Replace with actual GPT API call
  res.status(200).json({ reply: `Echo from Sarah: ${message}` });
}