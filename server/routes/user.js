const { signup, login, getAllUsers,  } = require("../controller/user");
const express = require("express");
const checkValidationSchmea = require("../middleware/checkValidationSchema");
const Joi = require("joi");

const router = express.Router();

const signupValidationSchema = Joi.object({
    Username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
      // .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
     
    
  });
  
router.post("/signup",checkValidationSchmea(signupValidationSchema),signup);
router.post("/login", login);
router.get("/getAllUsers", getAllUsers);

module.exports = router;   