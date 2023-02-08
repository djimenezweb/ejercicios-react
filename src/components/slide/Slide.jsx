import { useState } from 'react';
import Title from '../Title/Title';
import Description from '../Description/Description';

const cards = [
	{
		title: 'Title 1',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit 1.'
	},
	{
		title: 'Title 2',
		description: 'Lorem ipsum dolor sit amet adipisicing elit 2.'
	},
	{
		title: 'Title 3',
		description: 'Lorem ipsum amet consectetur adipisicing elit 3.'
	},
	{
		title: 'Title 4',
		description: 'Lorem ipsum dolor sit amet consectetur elit 4.'
	},
	{
		title: 'Title 5',
		description: 'Lorem ipsum adipisicing elit 5.'
	},
	{
		title: 'Title 6',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing 6.'
	}
];

const Slide = () => {
	const [counter, setCounter] = useState(0);

	return (
		<>
			<Title content={cards[counter].title} />
			<Description content={cards[counter].description} />
			<button onClick={() => prevCard(counter, setCounter)}>Previous</button>
			<button onClick={() => nextCard(counter, setCounter)}>Next</button>
		</>
	);
};

const nextCard = (counter, setCounter) => {
	if (counter >= cards.length - 1) {
		setCounter(0);
	} else {
		setCounter(counter + 1);
	}
};

const prevCard = (counter, setCounter) => {
	counter === 0 ? setCounter(cards.length - 1) : setCounter(counter - 1);
};

export default Slide;
