const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vallepuvenkatasaiteja:vallepuvenkatasaiteja@cluster0.nrdtd1h.mongodb.net/myapp")
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log(err));