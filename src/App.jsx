import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  //  variable, setter
  let [data, setData] = useState(0)

  console.log('component loaded')

  return (
    <div className="App">
      data: {data}

      <button onClick={() => {
        setData((data) => data + 1)
        }}>increase!</button>

        <MyComponent number={data} setNumber={setData}/>
    </div>
  );
}

export default App;