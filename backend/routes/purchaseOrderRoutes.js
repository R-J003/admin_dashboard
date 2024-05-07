import express from "express";
import {
  createPurchaseOrder,
  getAllPurchaseOrders,
  getPurchaseOrderById,
  updatePurchaseOrder,
  deletePurchaseOrderByCustomerId,
  getPurchaseOrderByCustomerId,
} from "../controllers/purchaseOrderController.js";

const router = express.Router();

router.post("/", createPurchaseOrder);
router.get("/", getAllPurchaseOrders);
router.get("/:id", getPurchaseOrderById);
router.get("/customer/:customerId", getPurchaseOrderByCustomerId);
router.put("/:id", updatePurchaseOrder);
router.delete("/customer/:customerId", deletePurchaseOrderByCustomerId);

export default router;
