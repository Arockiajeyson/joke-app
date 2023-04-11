
import './App.css';
import React, { useState } from 'react'
function App() {
  const [state, setState] = useState([])
  const [first, setfirst] = useState(true)
  const [second, setsecond] = useState([])
  useState(() => {
    fetch('https://official-joke-api.appspot.com/random_joke').then((e) => e.json()).then((e) => { setState([e]) })
  }, [])
  const newJoke = () => {
    console.log('d')
    fetch('https://official-joke-api.appspot.com/random_joke').then((e) => e.json()).then((e) => setState([e]))
  }
  const bookMark = (id, joke) => {
    setsecond([...second, joke])
  }
  const remove =(joke)=>{
    console.log(second)
    const newD =second.filter((e)=>e != joke)
    setsecond(newD)
  }
  return (
    <div className="App" style={{ color: 'white' }}>
      <div style={{ backgroundColor: 'darkgreen', width: '50%', marginLeft: '25%', height: '200px', marginTop: '100px', padding: '20px', borderRadius: '1em' }}>
        <h2>Joke Application</h2>
        {state.map((e) => {
          return (
            <div>{e.setup}
              <div style={{ marginTop: '1em' }}>
                <button onClick={newJoke}>New joke</button>
                <button onClick={() => bookMark(e.id, e.setup)} style={{ marginLeft: '5em' }}>Bookmark</button>
              </div>
            </div>
          )
        })}
      </div>
      <div style={{display:'flex',marginTop:'20px'}}>
        {second.map((e) => {
          return (
            <div style={{width:'120px',marginLeft:'50px',backgroundColor:'whitesmoke',borderRadius:'1em',padding:'20px',color:'black'}}>{e}
            <button onClick={()=>remove(e)} style={{marginTop:'1em'}}>Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
