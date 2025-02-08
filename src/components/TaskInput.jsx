import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { Form, Button,InputGroup } from "react-bootstrap";

const TaskInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
        <InputGroup>
            <Form.Control 
            type="text" 
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a todo" 
            onKeyPress={handleKeyPress}
            /> 
            <Button variant="primary" type="submit">
                Add Todo
            </Button>
        </InputGroup>
    </Form>
  );
};

export default TaskInput;        