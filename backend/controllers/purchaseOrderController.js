import PurchaseOrder from "../models/PurchaseOrderModel.js";

const createPurchaseOrder = async (req, res) => {
  try {
    const { productName, quantity, pricing, mrp, customerId } = req.body;

    const newPurchaseOrder = await PurchaseOrder.create({
      productName,
      quantity,
      pricing,
      mrp,
      customerId,
    });

    res.status(201).json(newPurchaseOrder);
  } catch (error) {
    res.status(400).json({ error: "Error creating purchase order" });
  }
};

const getAllPurchaseOrders = async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find();
    res.json(purchaseOrders);
  } catch (error) {
    res.status(400).json({ error: "Error getting purchase orders" });
  }
};

const getPurchaseOrderById = async (req, res) => {
  try {
    const purchaseOrder = await PurchaseOrder.findById(req.params.id);
    if (!purchaseOrder) {
      return res.status(404).json({ message: "Purchase order not found" });
    }
    res.json(purchaseOrder);
  } catch (error) {
    res.status(400).json({ error: "Error getting purchase order by ID" });
  }
};

const updatePurchaseOrder = async (req, res) => {
  try {
    const updatedPurchaseOrder = await PurchaseOrder.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPurchaseOrder) {
      return res.status(404).json({ message: "Purchase order not found" });
    }
    res.json(updatedPurchaseOrder);
  } catch (error) {
    res.status(400).json({ error: "Error updating purchase order" });
  }
};

const deletePurchaseOrderByCustomerId = async (req, res) => {
  const customerId = req.params.customerId;
  PurchaseOrder.deleteMany({ customerId })
    .then(() => {
      res.json({ message: "Purchase orders deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Error deleting purchase orders" });
    });
};


const getPurchaseOrderByCustomerId = async (req, res) => {
  const customerId = req.params.customerId;
  PurchaseOrder.find({ customerId })
    .then((purchaseOrders) => {
      res.json(purchaseOrders);
    })
    .catch((error) => {
      res.status(500).json({ error: "Error finding purchase orders" });
    });
};

export {
  createPurchaseOrder,
  getAllPurchaseOrders,
  getPurchaseOrderById,
  updatePurchaseOrder,
  deletePurchaseOrderByCustomerId,
  getPurchaseOrderByCustomerId,
};
