const { Todo } = require('../models/index');

// todo list 조회
// GET
// /api/todo/list
exports.getTodoList = async (req, res) => {
    try{
      const todoList = await Todo.findAll();

      res.status(200).send({
        result: true,
        todoList,
      });
    } catch (err) {
      console.log(err)
      res.status(500).send({
        result: false,
      });
    }
};

// POST
// /api/todo/content
exports.postTodo = async (req, res) => {
    try{
      await Todo.create({
        // todoId: req.body.todoId,
        todoContent: req.body.todoContent,
      });

      res.status(200).send({
        result: true,
      });
    } catch (err) {
      console.log(err)
      res.status(500).send({
        result: false,
      });
    }
}

// PATCH
// /api/todo/content/:todoId
exports.patchTodo = async (req, res) => {
    try {
      await Todo.update({ todoContent: req.body.todoContent }, {where: {todoId: req.params.todoId}})
      res.status(200).send({
        result: true,
      })
    } catch (err) {
      console.log(err)
      res.status(500).send({
        result: false,
      });
    }
}

// DELETE
// /api/todo/content/:todoId
exports.deleteTodo = async (req, res) => {
    try{
        await Todo.destroy({
            where: { todoId: req.params.todoId },
        });
        
        res.status(200).send({
          result: true,
        });
      } catch (err) {
        console.log(err)
        res.status(500).send({
            result: false,
        });
      }
}