import ShippingDetails from "../models/ShippingDetailsModel.js";

// Create a new shipping detail
const createShippingDetail = async (req, res) => {
  try {
    const { address, city, pincode, purchaseOrderId, customerId } = req.body;

    // Create a new shipping detail
    const newShippingDetail = await ShippingDetails.create({
      address,
      city,
      pincode,
      purchaseOrderId,
      customerId,
    });

    res.status(201).json(newShippingDetail);
  } catch (error) {
    res.status(400).json({ error: "Error creating shipping detail" });
  }
};

// Get all shipping details
const getAllShippingDetails = async (req, res) => {
  try {
    const shippingDetails = await ShippingDetails.find();
    res.json(shippingDetails);
  } catch (error) {
    res.status(400).json({ error: "Error getting shipping details" });
  }
};

// Get all shipping details by Customer ID
const getAllShippingDetailsByCustomerId = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const shippingDetails = await ShippingDetails.find({ customerId });
    if (!shippingDetails || shippingDetails.length === 0) {
      return res.status(404).json({ message: "No shipping details found for the customer" });
    }
    res.json(shippingDetails);
  } catch (error) {
    res.status(400).json({ error: "Error getting shipping details by customer ID" });
  }
};

// Update shipping detail by ID
const updateShippingDetail = async (req, res) => {
  try {
    const updatedShippingDetail = await ShippingDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedShippingDetail) {
      return res.status(404).json({ message: "Shipping detail not found" });
    }
    res.json(updatedShippingDetail);
  } catch (error) {
    res.status(400).json({ error: "Error updating shipping detail" });
  }
};

// Delete shipping detail by ID
const deleteShippingDetail = async (req, res) => {
  try {
    const deletedShippingDetail = await ShippingDetails.findByIdAndDelete(
      req.params.id
    );
    if (!deletedShippingDetail) {
      return res.status(404).json({ message: "Shipping detail not found" });
    }
    res.json({ message: "Shipping detail deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error deleting shipping detail" });
  }
};

export {
  createShippingDetail,
  getAllShippingDetails,
  getAllShippingDetailsByCustomerId,
  updateShippingDetail,
  deleteShippingDetail,
};
