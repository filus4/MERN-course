const express = require("express");
const { check } = require("express-validator");

const fileUpload = require("../middleware/file-upload");
const placesControllers = require("../controllers/places-controller");
const checkAuthToken = require("../middleware/check-auth");

const router = express.Router();

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlacesByUserId);

router.use(checkAuthToken);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").notEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").notEmpty(),
  ],
  placesControllers.createPlace
);

router.patch(
  "/:pid",
  [check("title").notEmpty(), check("description").isLength({ min: 5 })],
  placesControllers.editPlace
);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
