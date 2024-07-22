import express from "express";
import cartRoutes from "./routes/cart.routes.js";
import { configDotenv } from "dotenv";
import connectToMongoDB from "./db/connectToMongDB.js";
import authRoute from "./routes/auth.routes.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

configDotenv();
const PORT = process.env.PORT;
const CLIENT_URL = "https://align-6p1x.onrender.com";

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

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
      sameSite: "None",
      secure: true,
      maxAge: 15 * 24 * 60 * 60 * 1000, // 15 day
    },
  })
);

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/order", cartRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server has started at http://localhost:${PORT}`);
});
