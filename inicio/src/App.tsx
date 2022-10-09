import Counter from "./components/Counter";
import User from "./components/User";

import TimerFather from "./components/TimerFather";

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
    </>
  );
};

export default App;
