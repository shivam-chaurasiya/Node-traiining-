const express = require("express");
const router = express.Router();

const {userget,
       userpost,
       userput,
       userdelete,} = require("../controllers/usercontroller")


router.get("/", userget)
router.post("/dogs", userpost)

router.put("/dogs/:id", userput)

router.delete("/dogs/:id",userdelete)

module.exports = router;