import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { ListGroup } from "react-bootstrap";

const TaskList = () => {
    const todos = useSelector((state) => state.todos.todos);
    return (
        <ListGroup>
        {todos.length === 0 && <p className="text-center">No tasks available</p>}
        {todos.map((todo) => (
            <TaskItem key={todo.id} todo={todo} />
        ))}
        </ListGroup>
    );
};

export default TaskList;