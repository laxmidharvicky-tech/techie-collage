import { useState } from 'react';

function App() {
  const [name, setName] = useState("")
  const[output,setOutput] = useState("")

  function onHandel() {
  setOutput(name)
}
  
  return (
    <>
      <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
      
      <button onClick={onHandel}>Click me</button>
            <h1>{output}</h1>
    </>
  )
}
export default App;