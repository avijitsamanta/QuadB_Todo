import { createSlice } from "@reduxjs/toolkit";

// load the todos from localStorage
const loadTodos = () => {
  const serializedTodos = localStorage.getItem("todos");
  if (serializedTodos === null) return [];
  return JSON.parse(serializedTodos);
};

// save the todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState = {
  todos: loadTodos(),
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload, completed: false });
      saveTodos(state.todos);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      saveTodos(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      saveTodos(state.todos);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) todo.text = newText;
      saveTodos(state.todos);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
