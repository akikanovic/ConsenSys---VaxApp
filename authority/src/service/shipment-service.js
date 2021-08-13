import { shipmentRepository } from "../repository/shipment-repository.js";

async function getAll() {
  try {
    return await shipmentRepository.getAll();
  } catch (error) {
    throw error;
  }
}

async function addShipment(message) {
  try {
    const existingShipment = await this.getOne(message.shipment.id);
    if (!existingShipment) {
      return await shipmentRepository.addShipment(message.shipment);
    }
    return null;
  } catch (error) {
    throw error;
  }
}

async function getOne(id) {
  try {
    const shipments = await shipmentRepository.getAll();
    if (shipments.length) {
      const found = shipments.find((item) => item.id == id);
      return found;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export const shipmentService = {
  getAll,
  getOne,
  addShipment,
};
