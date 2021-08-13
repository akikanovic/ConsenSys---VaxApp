import { queueService } from "../service/queue-service.js";
import { shipmentService } from "../service/shipment-service.js";
import { messageService } from "../service/message-service.js";

async function getAll(req, res, next) {
  try {
    const messages = await messageService.getAll();
    res.status(200).send(messages);
  } catch (error) {
    throw error;
  }
}

async function verify(req, res, next) {
  try {
    const found = await messageService.getOne(req.params.messageId);
    if (!found) return res.status(400).send("Shimpment doesn't exist!");

    const msg = {
      id: found.id,
      authorityId: "1", //for now
      authorityVerified: true,
    };
    queueService.sendMessage("shipment-verified", "1", JSON.stringify(msg));

    await shipmentService.addShipment(found);
    await messageService.remove(found.id);

    return res.status(200).send("Shimpment is now verified");
  } catch (error) {
    throw error;
  }
}
export const messageController = {
  getAll,
  verify,
};
