import { subscribe as subscribeToProducer } from "../kafka/consumer.js";
import { publish as publishMessage } from "../kafka/provider.js";

function sendMessage(topic, message) {
  publishMessage(topic, message);
}

function receiveMessages(topic) {
  subscribeToProducer(topic);
}
export const queueService = {
  sendMessage,
  receiveMessages,
};
