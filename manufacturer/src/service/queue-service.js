import { publish as publishMessage } from "../kafka/provider.js";

async function sendMessage(topic, message) {
  publishMessage(topic, message);
}
export const queueService = {
  sendMessage,
};
