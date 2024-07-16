import express from "express";
import cartRoutes from "./routes/cart.routes.js";
import { configDotenv } from "dotenv";
import connectToMongoDB from "./db/connectToMongDB.js";

configDotenv();
const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/order", cartRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server has started at http://localhost:${PORT}`);
});
