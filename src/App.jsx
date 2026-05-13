import './App.css'

function App() {
  
  const handleClick = () =>{
    alert('Button clicked');
  }

  
  const addToFive = (num) =>{
    alert(num + 5);
  }
  
  return (
    <>
      <h3>Handle event</h3>
      {/* way - 1 */}
      <button onClick={handleClick}>Click me</button>

      {/* way - 2 */}
      <button onClick={() => {alert('The button is clicked')}}>Click button</button>

      {/* way - 3 (parameter diye)*/}
      <button onClick={() => addToFive(4)}>Add to 5</button>
    </>
  )
}

export default App
