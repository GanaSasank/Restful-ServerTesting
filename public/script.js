// Sample data (replace with your actual data storage or database)
const items = {};

// GET all items
app.get("items", (req, res) => {
  res.json(items);
});

// GET a specific item by ID
app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = items.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// POST (create) a new item
app.post("/api/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) an item by ID
app.put("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  const index = items.findIndex((item) => item.id === itemId);

  if (index !== -1) {
    items[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE an item by ID
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
