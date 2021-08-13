import { KafkaClient, Consumer } from "kafka-node";
import { messageService } from "../service/message-service.js";

export function subscribe(topic, callback) {
  const kafkaHost = process.env.KAFKA_ADDRESS || "localhost:9092";

  const client = new KafkaClient({ kafkaHost });
  const topics = [{ topic: topic, partition: 0 }];
  const consumer = new Consumer(client, topics);

  consumer.on("message", function (message) {
    console.log("message received");
    messageService.createMessage(message);
  });

  consumer.on("error", function (err) {
    console.log("error: ", err);
  });
}
