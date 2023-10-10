const express = require('express');
const router = express.Router();
const todoRouter = require('./todo.js')

// todo
router.use('/api/todo', todoRouter);

module.exports = router;