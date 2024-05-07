import express from "express";
import {
  createShippingDetail,
  getAllShippingDetails,
  getAllShippingDetailsByCustomerId,
  updateShippingDetail,
  deleteShippingDetail,
} from "../controllers/shippingController.js";

const router = express.Router();

router.post("/", createShippingDetail);
router.get("/", getAllShippingDetails);
router.get("/customer/:customerId", getAllShippingDetailsByCustomerId);
router.put("/customer/:customerId", updateShippingDetail);
router.delete("/customer/:customerId", deleteShippingDetail);

export default router;
