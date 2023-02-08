import SayHello2 from './components/sayHello2/SayHello2';
import CalculateSquareArea from './components/calculateSquareArea/CalculateSquareArea';
import CalculateTriangleArea from './components/calculateTriangleArea/CalculateTriangleArea';
import CalculateCircleArea from './components/calculateCircleArea/CalculateCircleArea';
import CelsiusToFahrenheit from './components/celsiusToFahrenheit/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/fahrenheitToCelsius/FahrenheitToCelsius';
import TotalPrice from './components/totalPrice/TotalPrice';
import Counter from './components/counter/Counter';
import Typewriter from './components/typewriter/Typewriter';
import Slide from './components/slide/Slide';

const App = () => {
	return (
		<>
			<SayHello2 name='Daniel' />
			<CalculateSquareArea num={5} />
			<CalculateTriangleArea base={10} altura={8} />
			<CalculateCircleArea rad={7} />
			<CelsiusToFahrenheit celsius={20} />
			<FahrenheitToCelsius fahrenheit={68} />
			<TotalPrice price={100} />
			<Counter />
			<Typewriter />
			<Slide />
		</>
	);
};

export default App;
