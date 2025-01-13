import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todoSlice/todoSlice';

const AddTodo = ({ updatetodo }) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (updatetodo) {
            setInput(updatetodo.text);
        }
    }, [updatetodo]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (updatetodo) {
            dispatch(updateTodo({ id: updatetodo.id, text: input }));
        } else {
            dispatch(addTodo(input));
        }

        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your todo..."
            />
            <button
                type="submit"
                className={`px-4 py-2 text-sm font-medium text-white rounded-md shadow-md ${
                    updatetodo
                        ? 'bg-green-500 hover:bg-green-600 focus:ring-green-400'
                        : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400'
                } focus:outline-none focus:ring-2`}
            >
                {updatetodo ? 'Save' : 'Add'}
            </button>
        </form>
    );
};

export default AddTodo;
