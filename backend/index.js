import express from "express";
import cartRoutes from "./routes/cart.routes.js";
import utilsRoutes from "./routes/utils.routes.js";
import { configDotenv } from "dotenv";
import connectToMongoDB from "./db/connectToMongDB.js";
import authRoute from "./routes/auth.routes.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import path from "path";
import bodyParser from "body-parser";
import twilio from "twilio";
import ollama from "ollama";

const app = express();

configDotenv();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

app.use(
  session({
    name: "AuthCookie",
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
      collectionName: "sessions",
    }),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "PRODUCTION" ? true : false, // Set to true if using HTTPS
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 day
    },
  })
);

app.use("/api/auth", authRoute);

app.use("/api/order", cartRoutes);

app.use("/api/utils", utilsRoutes);

app.use("/api/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/api/pdfs", express.static(path.join(__dirname, "/assets/pdfs")));

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//
app.post("/webhook", async (req, res) => {
  const incomingMessage = req.body.Body;
  const senderNumber = req.body.From;

  const response = await ollama.chat({
    model: "gemma2:2b",
    messages: [{ role: "user", content: incomingMessage }],
  });

  // Create Twilio MessagingResponse
  const twiml = new twilio.twiml.MessagingResponse();
  twiml.message(response.message.content);

  // Send the auto-reply
  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});
//

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server has started at http://localhost:${PORT}`);
});
