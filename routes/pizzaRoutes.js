// import express
const express = require("express");
const router = express.Router();

// get all pizzas
router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find({});
    res.send(pizzas);
  } catch (err) {
    res.send(err);
  }
});

// get pizza by id
router.get("/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    res.send(pizza);
  } catch (err) {
    res.send(err);
  }
});

// create pizza
router.post("/", async(req, res) => {
  try {
    const pizza = await Pizza.create(req.body);
    res.send(pizza);
  } catch (err) {
    res.send(err);
  }
});

// update pizza
router.put("/:id", async(req, res) => {
  try {
    const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body);
    res.send(pizza);
  } catch (err) {
    res.send(err);
  }
});

// delete pizza
router.delete("/:id", async (req, res) => {
  try {
    const pizza = await Pizza.findByIdAndDelete(req.params.id);
    res.send(pizza);
  } catch (err) {
    res.send(err);
}
});

// export router
module.exports = router;
