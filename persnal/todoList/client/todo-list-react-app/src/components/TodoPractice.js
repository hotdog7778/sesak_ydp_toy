import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function TodoPractice() {
  const [inputTodo, setInputTodo] = useState('')
  const [todoList, setTodoList] = useState([{
    id: '',
    content: '',
    checked: '',
    createdAt: '',
    updatedAt: '',
  }])

  useEffect(() => {
    const fetchData = async () => {
        try {
          const res = await axios.get(`http://localhost:8000/api/todo/list`)
          console.log(res.data)
          const _todoList = await res.data.todoList.map((rowData) => ({
            id: rowData.todoId,
            content: rowData.todoContent,
            checked: rowData.todoDone,
            createdAt: rowData.createdAt,
            updatedAt: rowData.updatedAt,
          }))
          setTodoList(_todoList)
        } catch (err) {
          console.error(err)
        }
    }
    fetchData()
  }, []);

  const saveInputTodo = (e) => {
    setInputTodo(e.target.value)
  }
  
  const saveTodoList = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/api/todo/content`, {todoContent: inputTodo})
      console.log(res.data)
      
      const beforeTodoList = todoList
      setTodoList(beforeTodoList.concat([
        {
          id: res.data.todo.todoId,
          content: res.data.todo.todoContent,
          checked: res.data.todo.todoDone,
        }
      ]))
    } catch(err) {
      console.error(err)
    }
  }
  
  const checked = async (e, id) => {
    await axios.patch(`http://localhost:8000/api/todo/content/${id}`, {todoDone: e.target.checked})
  }

  const deleteTodo = async () => {
    const res = await axios.get(`http://localhost:8000/api/todo/list`)
    const _todoList = await res.data.todoList.map((rowData) => ({
      id: rowData.todoId,
      content: rowData.todoContent,
      checked: rowData.todoDone,
      createdAt: rowData.createdAt,
      updatedAt: rowData.updatedAt,
    }))
    setTodoList(_todoList)
  }

  return (
    <div>
      <h1>TodoPractice</h1>
        <div>
          <input placeholder='할 일 입력..' onChange={saveInputTodo}/><button onClick={saveTodoList}>추가</button>
        </div>        
        <div>
          {
            todoList.map((val) => {
              return <li key={val.id}><input type='checkbox' name='todo' onChange={(e) => checked(e, val.id)}/>{val.content}</li>
            })
          }
        </div>          
        <div>
          <button onClick={() => deleteTodo()}>완료된 할 일 삭제</button>
        </div>
    </div>
  )
}
