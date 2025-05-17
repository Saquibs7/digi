// server/server.js
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { token, title, body } = req.body;
  try {
    const message = { token, notification: { title, body } };
    const response = await admin.messaging().send(message);
    res.json({ success: true, response });
  } catch (error) {
    console.error("Error sending FCM:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`FCM server running on ${PORT}`));
