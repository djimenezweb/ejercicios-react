const CelsiusToFahrenheit = ({ celsius }) => {
	return (
		<p>
			{celsius}°C equivalen a {celsius * 1.8 + 32}°F
		</p>
	);
};

export default CelsiusToFahrenheit;
