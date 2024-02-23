import { useState } from 'react';
import Tools from '../components/tools.jsx';
import AddTool from '../components/addTool.jsx';

export default function App() {

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
  return (
    <>
      <Tools tools = {tools} setTools = {setTools}/>
      <AddTool tools = {tools} setTools = {setTools}/>
    </>
  );
};