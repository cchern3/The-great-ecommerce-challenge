const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// GET ROUTE
router.get("/", (req, res) => {
  // find all tags

});

// GET ROUTE
router.get("/:id", (req, res) => {
  // find a single tag by its `id`

});

// POST ROUTE
router.post("/", (req, res) => {
  // Create a new tag

});

// PUT ROUTE
router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value

});

// DELETE ROUTE
router.delete("/:id", (req, res) => {
  // delete a tag by its `id` value

});

module.exports = router;