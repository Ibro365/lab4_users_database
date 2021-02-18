const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./route/UsersRoute.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://Ibrahim:Letsget2it123@cluster0.zuleo.mongodb.net/gbc-full_stack?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });