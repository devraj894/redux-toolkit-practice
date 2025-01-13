import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../features/todoSlice/todoSlice';
import AddTodo from './AddTodo';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [updateTodo, setUpdateTodo] = useState(null);

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            <AddTodo updatetodo={updateTodo} />
            <ul className="space-y-4">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-slate-100 p-3 rounded-lg shadow-md"
                    >
                        <span className="text-lg text-gray-800">{todo.text}</span>
                        <div className="flex space-x-2">
                            <button
                                className="px-3 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                                onClick={() => setUpdateTodo(todo)}
                            >
                                Update
                            </button>
                            <button
                                className="px-3 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                                onClick={() => dispatch(deleteTodo(todo.id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
