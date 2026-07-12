const express = require("express");

const router = express.Router();

const {
register,
login
} = require("../controllers/authController");

const auth = require("../middleware/authMiddleware");

const role = require("../middleware/roleMiddleware");

router.post("/register",register);

router.post("/login",login);

// Example Protected Route

router.get(

"/dashboard",

auth,

role(
"Fleet Manager",
"Safety Officer",
"Financial Analyst",
"Driver"
),

(req,res)=>{

res.json({

message:"Welcome to Dashboard",

user:req.user

});

}

);

module.exports = router;