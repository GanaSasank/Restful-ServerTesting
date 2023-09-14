const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

const items = [];

function generateUniqueId() {
  return (Math.random() + 1).toString(36).substring(7);
}

// Routes for CRUD operations on items
app.get("/api/items", (req, res) => {
  res.json(items);
});

app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = items.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.post("/api/items", (req, res) => {
  const newItem = req.body;
  newItem.id = generateUniqueId();
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  const index = items.findIndex((item) => item.id === itemId);

  if (index !== -1) {
    items[index] = { ...items[index], ...updatedItem };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.delete("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const index = items.findIndex((item) => item.id === itemId);

  if (index !== -1) {
    items.splice(index, 1);
    res.sendStatus(204); // No Content
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
