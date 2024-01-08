import { useState } from "react"

function MyComponent({ number, setNumber }) {

	let [name, setName] = useState("Kismacska")

	return (
		<div className="myComp">
			{name}{number}

			<button onClick={() => {
				setName("Kiskutya")
			}}>change to kutya</button>

			<button onClick={() => setNumber(number => number + 1)} >increase number</button>
		</div>
	)
}

export default MyComponent