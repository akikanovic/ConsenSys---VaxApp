import { shipmentService } from "../service/shipment-service.js";

async function create(req, res, next) {
  try {
    const shipment = await shipmentService.addShipment(req.body);
    res.status(200).json(shipment);
  } catch (error) {
    throw error;
  }
}

async function findAll(req, res, next) {
  try {
    const shipments = await shipmentService.getAll();
    res.status(200).json(shipments);
  } catch (error) {
    throw error;
  }
}

export const shipmentController = {
  findAll,
  create,
};
