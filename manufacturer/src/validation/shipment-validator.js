// const { check, validationResult } = require("express-validator");
import { check, validationResult } from "express-validator";

const validateShipment = () => [
  check("vaccineName")
    .not()
    .isEmpty()
    .isLength({ min: 2 })
    .withMessage("Vaccine name minimum 2 characters required!"),

  check("quantity").trim().not().isEmpty().withMessage("Enter quantity"),

  check("authorityId").not().isEmpty().withMessage("Authority  is required"),
  check("customerId").not().isEmpty().withMessage("Customer is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      res.status(400).json({
        errors: errors.array(),
      });
    next();
  },
];

module.exports = validateShipment();
