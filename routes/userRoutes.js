const express = require("express");
const router = express.Router();
const { getUserById, updateUserById, updateIsOwner} = require("../controllers/userController");

router.get("/:userId", getUserById);

router.put("/:userId", updateUserById);

router.put("/:userId", updateIsOwner);

module.exports = router;
