const express = require('express');
const router = express.Router();
const todoController = require('../controller/Ctodo');

// todo list 조회
// /api/todo/list
router.get('/list', todoController.getTodoList);

// todo 추가
// /api/todo/content
router.post('/content', todoController.postTodo);

// todo 수정
// /api/todo/content/:todoId
router.patch('/content/:todoId', todoController.patchTodo);

// todo 삭제
// /api/todo/content/:todoId
router.delete('/content/:todoId', todoController.deleteTodo);

module.exports = router;