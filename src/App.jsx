import SayHello2 from "./components/sayHello2/SayHello2";
import CalculateSquareArea from "./components/calculateSquareArea/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculateTriangleArea/CalculateTriangleArea";
import CalculateCircleArea from "./components/calculateCircleArea/CalculateCircleArea";

const App = () => {
return (<>
<SayHello2 name="Daniel"/>
<CalculateSquareArea num={5} />
<CalculateTriangleArea base={10} altura={8} />
<CalculateCircleArea rad={7}/>
</>)
};

export default App;
