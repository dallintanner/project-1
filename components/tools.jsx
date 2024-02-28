import { useState } from 'react';
import DeleteTool from './deleteTool';

export default function Tools({ tools, setTools }) {
    console.log(setTools);
    const handleEdit = (tool) => {
        event.preventDefault();
        tool.edit = true;
        console.log(`editing ${tool.name}`)
    }

    const toolsDisplay = tools.map((tool) =>
    
        <div key={tools.indexOf(tool)} id="tool">
            <span id="toolName">{tool.name}</span>
            <DeleteTool setTools = {setTools} tools = {tools} tool = {tool.name} index = {tools.indexOf(tool)}/>
        </div>);

    return (
        <>
            {toolsDisplay}
        </>
    );
}