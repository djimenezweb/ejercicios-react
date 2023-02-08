import { useState } from 'react';

const Typewriter = () => {
	const [text, setText] = useState('');

	return (
		<>
			<input
				type='text'
				value={text}
				onChange={e => setLetter(e.target.value, setText)}
			/>
			<h2>{text}</h2>
		</>
	);
};

const setLetter = (value, setText) => {
	if (value === 'reset') {
		setText('');
	} else {
		setText(value);
	}

	// La función setText (setState, etc) siempre recibe un parámetro: aquello que queramos cambiar
};

export default Typewriter;
