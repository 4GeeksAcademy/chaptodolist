import React, { useState } from "react";
import TodoList from "./app"; 

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    return (
        <div className="container text-center mt-5">
            <div className="card mx-auto" style={{ width: "300px" }}>
                <div className="card-body">
                    <h1 className="card-title">todos</h1>
                    <TodoList todos={todos} />
                
                        </div>
                    </div>
                </div>
      
    );
};

export default Home;