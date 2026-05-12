import './App.css'

function App() {
  
  function handleClick(){
    alert('Button clicked');

  }
  return (
    <>
      <h3>Handle event</h3>
      {/* way - 1 */}
      <button onClick={handleClick}>Click me</button>

      {/* way - 2 */}
      <button onClick={() => {alert('The button is clicked')}}>Click button</button>
    </>
  )
}

export default App
