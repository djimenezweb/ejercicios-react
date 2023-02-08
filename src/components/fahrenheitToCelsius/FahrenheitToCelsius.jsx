const FahrenheitToCelsius = ({ fahrenheit }) => {
	return (
		<p>
			{fahrenheit}°F equivalen a {(fahrenheit - 32) / 1.8}°C
		</p>
	);
};

export default FahrenheitToCelsius;
