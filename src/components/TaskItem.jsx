import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../redux/todoSlice";
import { ListGroup, Button, Form, InputGroup, Modal, Container, Row, Col } from "react-bootstrap";
import { FiStar } from "react-icons/fi";

const TaskItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (!newText.trim()) return;
    dispatch(editTodo({ id: todo.id, newText }));
    setShowModal(false);
  };

  return (
    <>
      
      <ListGroup.Item className={`d-flex align-items-center justify-content-between ${todo.completed ? "list-group-item-success" : ""}`} style={{ backgroundColor: "var(--bs-body-bg)", color: "var(--bs-body-color)", padding: "15px", borderRadius: "8px" }}>
        <Form.Check
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
          label={
            <span style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer", fontSize: "16px" }}>
              {todo.text}
            </span>
          }
          style={{ borderColor: "#000" }}
        />
        <div>
          <FiStar className={todo.important ? "text-warning" : "text-muted"} style={{ cursor: "pointer", marginRight: "10px" }} />
          <Button variant="warning" size="sm" onClick={() => setShowModal(true)} className="me-2">
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={() => dispatch(deleteTodo(todo.id))}>
            Delete
          </Button>
        </div>
      </ListGroup.Item>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <Form.Control
              type="text"
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              placeholder="Edit todo"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default TaskItem;