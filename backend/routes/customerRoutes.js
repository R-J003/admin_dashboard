import express from "express";
import {
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  getAllCustomers,
} from "../controllers/customerController.js";

const router = express.Router();

router.post("/", createCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
