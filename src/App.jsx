import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ countries, setCountries ] = useState(null)
  const [ searchString, setSearchString ] = useState("")
  //console.log(countries)
  //console.log(searchString)//ez mindig öres. settert kell használnom, hogy a searchString megváltozzon

//ha valamit szeretnénk figyelni, hogyan viselkedik. Ne console.log-ba tegyük, hanem useEffectbe. Mert így mindig azt mutatja, hogy megváltozott valami. De csak akkor:

  useEffect(() => console.log(countries), [countries])

  useEffect(() => {
    console.log("running fetch")//ez  csak egyszer fut le. 
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data => setCountries(data)) //az5. sorban kimentettük a statet, ezért lejjebb is lesz majd data. Elérhető lesz. 
  }, [])

  return (
    <div className="App">
      <input type="text" onChange={event => setSearchString(event.target.value)}/>

      {countries !== null && countries
        .filter(country => country.name.common.includes(searchString))
        .map((country, index) => 
          <div key={index}>{country.name.common}</div>
      )}
    </div>
  );
}

export default App;