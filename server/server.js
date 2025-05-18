// server/server.js
const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const dotenv=require('dotenv')
dotenv.config()
if (!process.env.FIREBASE_KEY_BASE64) {
  throw new Error("FIREBASE_KEY_BASE64 env variable is not defined");
}

const serviceAccount = JSON.parse(Buffer.from(process.env.FIREBASE_KEY_BASE64, 'base64').toString('utf8'));

//console.log(serviceAccount);
const tokens = new Set();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors());
app.use(express.json());

// ----------------------------------------------------------------
// 1. Save‐token endpoint
// ----------------------------------------------------------------
app.post("/save-token", (req, res) => {
  //console.log("[save-token] Request received. Body:", req.body);
  const { token } = req.body;

  if (token) {
    tokens.add(token);
    //console.log("[save-token] Registered tokens so far:", Array.from(tokens));
    res.json({ success: true, message: "Token saved." });
  } else {
    //console.warn("[save-token] No token in request body!");
    res.status(400).json({ success: false, message: "No token provided" });
  }
});

// ----------------------------------------------------------------
// 2. Send‐notification endpoint
// ----------------------------------------------------------------
app.post("/send", async (req, res) => {
  //console.log("[send] Request received. Body:", req.body);
  try {
    const tokensArray = Array.from(tokens);
   // console.log("[send] Tokens to send to:", tokensArray);

    const validTokens = new Set();
    const failedTokens = new Set();

    // Send to all tokens and check validity
    const responses = await Promise.all(
      tokensArray.map(async (token) => {
        //console.log(`[send] Attempting to send to token= ${token}`);
        try {
          const message = {
            token,
            notification: {
              title: req.body.title || "Default Title",
              body: req.body.body || "Default Message",
            },
            webpush: {
              headers: {
                Urgency: "high",
              },
              notification: {
                requireInteraction: true,
                vibrate: [200, 100, 200],
                icon: "/wpa-512x512.png",
                badge: "wpa-192x192.png",
              },
            },
          };
          const resp = await admin.messaging().send(message);
        //  console.log(`[send] Successfully sent to ${token}. Message ID:`, resp);
          validTokens.add(token);
          return { success: true, token, messageId: resp };
        } catch (error) {
         // console.error(`[send] Error sending to token= ${token}`, error);
          if (error.code === "messaging/registration-token-not-registered") {
            failedTokens.add(token);
          }
          return { success: false, token, error: error.message };
        }
      })
    );

    // Prune invalid tokens
    failedTokens.forEach((t) => {
      console.log(`[send] Removing invalid token from set: ${t}`);
      tokens.delete(t);
    });

  //  console.log("[send] Valid tokens after this run:", Array.from(validTokens));
   // console.log("[send] Removed invalid tokens:", Array.from(failedTokens));

    res.json({
      success: true,
      responses,
      validTokens: Array.from(validTokens),
      removedTokens: Array.from(failedTokens),
    });
  } catch (error) {
   // console.error("[send] Error in /send endpoint:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`FCM server running on port ${PORT}`));
