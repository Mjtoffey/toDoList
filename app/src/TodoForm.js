import React, {useState} from 'react'

export default function () {
    const [input, setInput] = useState('')
     return (
        <form className='todo-form'>
            <input onChange={(e) => setInput(e.target.value)} className='todo-input' placeholder='Add new task'/>
            <button className='todo-btn'> Add Task</button>
        </form>
  )
}

