import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Container, Row, Col,Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => { 
    document.body.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  return (
    <Provider store={store}>
      <Container className="mt-4">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="text-center">React To-Do App</h1>
            <Button variant={theme === "light" ? "light" : "dark"} onClick={toggleTheme} className="mb-3">
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </Button>
            <TaskInput />
            <TaskList />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
