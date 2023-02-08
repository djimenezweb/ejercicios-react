const TotalPrice = ({ price }) => {
	return (
		<p>
			{price}€ + IVA = {price + price * 0.21}€
		</p>
	);
};
export default TotalPrice;
