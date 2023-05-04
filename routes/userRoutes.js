const express = require("express");
const router = express.Router();
const { getUserById, updateUserById, updateIsOwner, getHousingStatus, getUserInfoById, getAllUsers} = require("../controllers/userController");

router.get("/:userId", getUserById);

router.put("/:userId", updateUserById);

router.put("/role/:userId", updateIsOwner);

router.get("/housing-status/:userId", getHousingStatus);

router.get("/:userId/info", getUserInfoById);

router.get("/users", getAllUsers);

module.exports = router;
