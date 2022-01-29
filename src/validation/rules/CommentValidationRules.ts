import { body, param } from "express-validator";

const CommentValidationRules = () => {
  return [
    body("text").isLength({ min: 1 }),
    param("id").isLength({ max: 10, min: 10 }),
  ];
};

export default CommentValidationRules;
