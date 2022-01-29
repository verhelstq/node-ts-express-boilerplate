import { body, param } from "express-validator";

const UserValidationRules = () => {
  return [
    body("firstname").isLength({ min: 1 }),
    body("lastname").isLength({ min: 1 }),
    body("email").isEmail(),
  ];
};

export default UserValidationRules;
