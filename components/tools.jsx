import { useState } from 'react';

export default function Tools({ tools, setTools }) {

    const handleEdit = (tool) => {
        event.preventDefault();
        tool.edit = true;
        console.log(`editing ${tool.name}`)
    }

    const toolsDisplay = tools.map((tool) =>
        <div key={tools.indexOf(tool)} id="tool">
            <span id="toolName">{tool.name}</span>
            <button id='toolButton' onClick={handleEdit}>Delete</button>
        </div>);

    return (
        <>
            {toolsDisplay}
        </>
    );
}