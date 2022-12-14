import Counter from "./components/Counter";
import User from "./components/User";

import TimerFather from "./components/TimerFather";
import CounterRed from "./components/CounterRed";
import Formulario from "./components/Formulario";

const App = () => {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />
      <h2>useState</h2>
      <Counter />
      <User />
      <h2>useEffect - useRef</h2>
      <hr />
      <TimerFather />
      <h2>useReducer</h2>
      <hr />
      <CounterRed />
      <h2>customHooks</h2>
      <hr />
      <Formulario />
      <br />
    </>
  );
};

export default App;
