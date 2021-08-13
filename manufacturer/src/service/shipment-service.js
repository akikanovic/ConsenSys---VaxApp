import { shipmentRepository } from "../repository/shipment-repository.js";
import { messageService } from "../service/message-service.js";
import { queueService } from "../service/queue-service.js";
import { ShipmentSent } from "../utils/event-type.js";
import v4 from "uuid";

async function getAll() {
  try {
    return await shipmentRepository.getAll();
  } catch (error) {
    throw error;
  }
}

async function addShipment(shipment) {
  try {
    shipment.id = v4();
    const createdShipment = await shipmentRepository.addShipment(shipment);
    const message = await messageService.createMessage(createdShipment);
    queueService.sendMessage(ShipmentSent, message);
    return createdShipment;
  } catch (error) {
    throw error;
  }
}
export const shipmentService = {
  getAll,
  addShipment,
};
