import './App.css'

function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }
 

  return (
    <>
  <p onClick={() => console.log('Paragraph clicked!')}>
  Click me
</p>
    </>
  )
}

export default App
