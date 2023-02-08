import { useState } from 'react';

// Counter es un componente

const Counter = () => {
	const [count, setCount] = useState(0);
	// Esto de arriba es el estado

	/* Esto equivale a:
let count = 0;
const setCount = value => {
count = value;
}
*/

	return (
		<>
			<button onClick={() => decrease(count, setCount)}>Decrease</button>
			<h2>{count}</h2>
			<button onClick={() => increase(count, setCount)}>Increase</button>
		</>
	);
};

const decrease = (count, setCount) => {
	if (count === 0) {
		setCount((count = 10));
	} else {
		setCount(count - 1);
	}
};

const increase = (count, setCount) => {
	if (count === 10) {
		setCount((count = 0));
	} else {
		setCount(count + 1);
	}
};

export default Counter;
