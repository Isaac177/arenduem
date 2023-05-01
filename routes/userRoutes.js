const express = require("express");
const router = express.Router();
const { getUserById, updateUserById, updateIsOwner, getHousingStatus, getUserInfoById} = require("../controllers/userController");

router.get("/:userId", getUserById);

router.put("/:userId", updateUserById);

router.put("/role/:userId", updateIsOwner);

router.get("/housing-status/:userId", getHousingStatus);

router.get("users/:userId/", getUserInfoById);

module.exports = router;
