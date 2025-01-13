import './App.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Todo List
                </h1>
                <TodoList />
            </div>
        </div>
    );
}

export default App;
