const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  // patchCar
} = require("../controllers/userController");
 
// GET /cars
router.get("/", getAllUsers);

// POST /cars
router.post("/", createUser);

// GET /cars/:carId
router.get("/:userId", getUserById);

// PUT /cars/:carId
router.put("/:userId", updateUser);

// DELETE /cars/:carId
router.delete("/:userId", deleteUser);

// Update car using PATCH 
// router.patch('/:carId', patchCar)

module.exports = router;