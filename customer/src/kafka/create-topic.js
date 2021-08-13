import { KafkaClient, Producer } from "kafka-node";

export function createTopics() {
  const kafkaHost = process.env.KAFKA_ADDRESS || "localhost:9092";

  const client = new KafkaClient({ kafkaHost });
  const producer = new Producer(client);
  producer.on("ready", function () {
    producer.createTopics(
      ["shipment-sent", "shipment-verified"],
      false,
      function (err, data) {
        console.log("created topic");
      }
    );
  });
  producer.on("error", function (err) {
    throw err;
  });
}
