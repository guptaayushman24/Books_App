const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://guptaayushman24:12345@cartcluster.uph5tvp.mongodb.net/?retryWrites=true&w=majority&appName=CartCluster', { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose model
const BookModel = mongoose.model('books', new mongoose.Schema({



  title: String,
  authorname: String,
  quantity: Number,
  totalprice: Number
  // Add baseprice : Number
}));

// API endpoint to add a book to the cart
app.post('/api/add-to-cart', async (req, res) => {
  try {
    const { title, authorname, quantity, basePrice, totalprice } = req.body;
    const data = new BookModel({
      title,
      authorname,
      quantity,
      // basePrice
      totalprice: basePrice * quantity,
    });
    console.log(totalprice);
    const result = await data.save();
    // const insertedId = result._id;  Fetching the unique id
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Fetching the data from the database
app.get('/api/add-to-cart/', async (req, res) => {
  try {
    const books = await BookModel.find();
    res.status(200).json(books);
  } catch (err) {
    console.error(err); // Fix: use err instead of error
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Deleting the items from the database
app.delete('/api/add-to-cart/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    console.log(itemId);

    // Validate if itemId is a valid ObjectId
    if (!itemId) {
      return res.status(404).json({ error: "Customer not found" });
    }

    console.log("deleted");

    const result = await BookModel.findByIdAndDelete(itemId);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
