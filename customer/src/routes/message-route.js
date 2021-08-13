import { messageController } from "../controller/message-controller.js";
import { Router as expressRouter } from "express";

const router = expressRouter();

router.route("/verify/:messageId").get(messageController.verify);
router.route("/").get(messageController.getAll);

export default router;
