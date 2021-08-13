import { shipmentController } from "../controller/shipment-controller.js";
import { Router as expressRouter } from "express";

const router = expressRouter();

router
  .route("/")
  .get(shipmentController.findAll)
  .post(shipmentController.create);

export default router;
