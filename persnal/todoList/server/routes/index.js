const express = require('express');
const router = express.Router();
const todoRouter = require('./todo.js')
const cors = require('cors')
// cors({ origin: 'http://localhost:3000'})

// todo
router.use('/api/todo', cors({origin: ['http://localhost:3000', 'https://localhost:3000']}), todoRouter);

module.exports = router;