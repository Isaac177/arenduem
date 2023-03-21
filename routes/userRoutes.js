const express = require("express");
const router = express.Router();
const { getUserById, updateUserById, updateIsOwner, getHousingStatus} = require("../controllers/userController");

router.get("/:userId", getUserById);

router.put("/:userId", updateUserById);

router.put("/role/:userId", updateIsOwner);

router.get("/housing-status/:userId", getHousingStatus);

module.exports = router;
