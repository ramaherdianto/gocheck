import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [inputTask, setInputTask] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const onInputTaskChange = (e) => {
        setInputTask(e.target.value);
    };

    const submitTaskHandler = (e) => {
        e.preventDefault();
        // alert when input value is null
        if (inputTask.trim() === '') {
            setShowAlert(true);
            alert('Input field cannot be empty my dear');
            return;
        } else {
            // Create new task
            const newTask = {
                id: new Date().getTime(),
                task: inputTask,
                done: false,
            };
            setTasks([...tasks, newTask]);
        }
        setInputTask('');
    };

    // handle delete task
    const deleteTaskHandler = (id) => {
        const newTask = tasks.filter((item) => item.id !== id);
        setTasks(newTask);
    };

    // handle to check task
    const checkTaskHandler = (id) => {
        const newTask = tasks.map((item) => {
            if (item.id === id) {
                return {
                    id: item.id,
                    task: item.task,
                    done: !item.done,
                };
            } else {
                return item;
            }
        });
        setTasks(newTask);
    };

    const completedTask = tasks.filter((item) => item.done === true).length;
    const onGoingTask = tasks.filter((item) => item.done === false).length;

    return (
        <div className='app'>
            <span className='logo'>📝 Go Check ✅</span>
            <form className='add-form' onSubmit={submitTaskHandler}>
                <input
                    type='text'
                    name='inputTask'
                    value={inputTask}
                    onChange={onInputTaskChange}
                />
                <button>Add</button>
            </form>
            <div className='list'>
                <ul>
                    {tasks.map((item) => {
                        return (
                            <li key={item.id}>
                                <div>
                                    <input
                                        type='checkbox'
                                        style={{ marginRight: '1em' }}
                                        onChange={() => checkTaskHandler(item.id)}
                                    />
                                    <span
                                        style={{ textDecoration: item.done ? 'line-through' : '' }}
                                    >
                                        {item.task}
                                    </span>
                                </div>
                                <div>
                                    <button onClick={() => deleteTaskHandler(item.id)}>🗑️</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <div className='stats'>
                    <span>
                        📝 You have {onGoingTask} notes and{' '}
                        {completedTask === 0 ? 'none of them' : `only ${completedTask}`} are checked
                        off (
                        {tasks.length > 0 ? Math.floor((completedTask / tasks.length) * 100) : 0}%)
                        ✅
                    </span>
                </div>
            </div>
        </div>
    );
}

export default App;
