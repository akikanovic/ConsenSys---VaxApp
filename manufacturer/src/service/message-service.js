import { messageRepository } from "../repository/message-repository.js";
import v4 from "uuid";

async function getAll() {
  try {
    return await messageRepository.getAll();
  } catch (error) {
    throw error;
  }
}

async function createMessage(shipment) {
  const message = {
    id: v4(),
    timestamp: new Date(),
    messageContent: "new shipment",
    shipment: shipment,
  };
  return await messageRepository.createMessage(message);
}
export const messageService = {
  getAll,
  createMessage,
};
