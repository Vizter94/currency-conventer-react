import { Form } from "./Form";
import { AppDate } from "../src/Form/AppDate/useAppDate";
import { Time } from "./Time";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Time />
      <AppDate />
      <Form />
    </div>
  );
}

export default App;
