import express from "express";
import router from "./src/routes/message-route.js";
import { subscribe as consumerSubscribe } from "./src/kafka/consumer.js";
import { createTopics } from "./src/kafka/create-topic.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).send(err);
  next(err);
});

app.use("/", router);

createTopics();
consumerSubscribe("shipment-sent");

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});

export default app;
