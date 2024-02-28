import { Form } from "./Form";

import { Time } from "./Time";
import "./index.css";

function App() {
  //   const [resultPLN, setResultPLN] = useState();
  // }
  // const calculateResultPLN = (currency, amountPLN) => {
  //   const rate = ratesData.find(({ short }) => short === currency).rate;

  //   setResultPLN({
  //     sourceAmountPLN: +amountPLN,
  //     targetAmountPLN: amountPLN * rate,
  //     currency,
  //   });
  // };
  return (
    <div className="app">
      <Time />
      <Form />
    </div>
  );
}

export default App;
