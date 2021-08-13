import { KafkaClient, Producer } from "kafka-node";

const kafkaHost = process.env.KAFKA_ADDRESS || "localhost:9092";

export function publish(topic, message) {
  const client = new KafkaClient({ kafkaHost });
  const producer = new Producer(client);
  const payloads = [
    {
      topic: topic,
      messages: JSON.stringify(message),
      partition: 0,
    },
  ];
  producer.on("ready", function () {
    producer.send(payloads, function (err, data) {
      console.log("sent from authority");
    });
  });
  producer.on("error", function (err) {
    console.log(err);
  });
}
