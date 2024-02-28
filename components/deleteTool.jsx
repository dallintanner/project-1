import { useState } from 'react';

export default function DeleteTool({tools, setTools}) {

    const handleDelete = (tool) => {
        //event.preventDefault();
        console.log(tools);
        console.log(`deleting tool at index ${tools.index}`);
        const toolsCopy = tools.slice()
        toolsCopy.splice(tools.index, 1)
        setTools(toolsCopy);
    }

    return (
        <button id='toolButton' onClick={handleDelete}>Delete</button>
    );
};