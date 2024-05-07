import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import customerRoutes from "./routes/customerRoutes.js";
import dotenv from "dotenv";
import purchaseOrderRoutes from "./routes/purchaseOrderRoutes.js";
import shippingRoutes from "./routes/shippingRoutes.js";
import AdminRoutes from "./routes/adminRoutes.js";
import cors from "cors";

dotenv.config();
const MONGO_DB_URL =
  process.env.MONGO_DB_URL ||
  "mongodb+srv://rudra517:rudra@rudra.ybk0spt.mongodb.net/";

const app = express();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_DB_URL, {});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/admin", AdminRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/purchaseorder", purchaseOrderRoutes);
app.use("/api/shipping", shippingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:${PORT}/`);
});
