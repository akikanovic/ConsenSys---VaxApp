import { messageRepository } from "../repository/message-repository.js";
import v4 from "uuid";
import { queueService } from "../service/queue-service.js";
import { shipmentService } from "../service/shipment-service.js";

async function getAll() {
  try {
    return await messageRepository.getAll();
  } catch (error) {
    throw error;
  }
}

async function getOne(id) {
  try {
    const messages = await messageRepository.getAll();
    if (messages.length) {
      const found = messages.find((item) => item.id == id);
      return found;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

async function remove(id) {
  try {
    await messageRepository.remove(id);
  } catch (error) {
    throw error;
  }
}

async function createMessage(info) {
  try {
    const found = await shipmentService.getOne(info.id);
    if (found) throw Error("Shipment already exists");

    const received = JSON.parse(info.value);
    const message = {
      id: v4(),
      timestamp: new Date(),
      shipment: received.shipment,
    };

    await messageRepository.createMessage(message);
  } catch (error) {
    throw error;
  }
}

async function verifyMessage(id) {
  try {
    const found = await this.getOne(id);
    if (!found) throw Error("Message doesn't exist");

    await shipmentService.addShipment(found);
    queueService.sendMessage("shipment-verified", `message id: ${found.id}`);
    await this.remove(found.id);
  } catch (error) {
    throw error;
  }
}

export const messageService = {
  getAll,
  createMessage,
  verifyMessage,
  remove,
  getOne,
};
