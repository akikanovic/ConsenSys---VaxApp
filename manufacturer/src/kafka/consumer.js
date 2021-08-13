import { KafkaClient, Consumer } from "kafka-node";

export function subscribe(topic, callback) {
  const kafkaHost = process.env.KAFKA_ADDRESS || "localhost:9092";

  const client = new KafkaClient({ kafkaHost });
  const topics = [{ topic: topic, partition: 0 }];
  const consumer = new Consumer(client, topics);

  consumer.on("message", function (message) {
    console.log("got the message");
  });

  consumer.on("error", function (err) {
    console.log("error: ", err);
  });
}
