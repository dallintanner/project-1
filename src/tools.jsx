import { useState } from 'react';

export function Tools () {
    const [tools, setTools] = useState([
        {
            name: 'Millermatic 212',
            status: 'working',
            edit: false,
        },
        {
            name: 'Multimatic 235',
            status: 'not working',
            edit: false,
        }, 
        {
            name: 'Powermax 45xp',
            status: 'not working',
            edit: false,
        },
        {
            name: 'Powermax 30xp',
            status: 'working',
            edit: false,
        },
        {
            name: 'Dewalt 4.5"',
            status: 'working',
            edit: false,
        }
    ])

    const handleEdit = (tool) => {
        // event.preventDefault();
        // tool.edit = true;
        // console.log(`editing ${tool.name}`)
        

    }

    const toolsDisplay = tools.map((tool) => 
    <div key = {tools.indexOf(tool)} id="tool">
        <span id="toolName">{tool.name}</span>
        <button id='toolButton' onClick={handleEdit}>Edit</button>
    </div>);

    const [toolName, setToolName] = useState('');
    const [toolStatus, setToolStatus] = useState('');
    // const [edit, setEdit] = useState(false);

    const handleNameChange = (event) => {
        setToolName(event.target.value);
    }

    const handleStatusChange = (event) => {
        setToolStatus(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(toolName == ''){
            alert("Please Enter the Tool's Name")
        } else {

            const newTool = {
                name:toolName,
                status: toolStatus,
                edit: false,
            };

            setTools([...tools, newTool]);

            setToolName('');
            setToolStatus('');
        }
    };

    return(
        <>
            {toolsDisplay}
            
            <div key = "Add Tool Button" id='addTool'>
                <input id='toolUserInput' value={toolName} placeholder='Tool Name' onChange={handleNameChange} />
                <input id='toolUserInput' value={toolStatus} placeholder='Tool Status' onChange={handleStatusChange} />
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