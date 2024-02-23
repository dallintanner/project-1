import { useState } from 'react';

export default function AddTool({ tools, setTools }) {

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    //const [edit, setEdit] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (toolName == '') {
            alert("Please Enter the Tool's Name")
        } else {
            const newTool = {
                name: name,
                status: status,
                edit: false,
            };

            setTools([...tools, newTool]);
        }
        //I'd like to reset the input field to blank once a new tool is created
        // newTool.name = '';
        // newTool.status = '';
    };

    return (
        <>
            <div key="Add Tool Button" id='addTool'>

                <input
                    id='toolUserInput'
                    value={name}
                    placeholder='Tool Name'
                    onChange={(event) => setName(event.target.value)}

                />
                <input
                    id='toolUserInput'
                    value={status}
                    placeholder='Tool Status'
                    onChange={(event) => setStatus(event.target.value)}
                />
                <button
                    id='toolButton'
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </div>
        </>
    );
}