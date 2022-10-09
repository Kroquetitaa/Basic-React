import Timer from "./Timer";
import { useState } from "react";

const TimerFather = () => {
  const [miliSeconds, setMiliSeconds] = useState<number>(1000);

  return (
    <>
      <span>Milisegundos {1000}</span>
      <br />
      <button
        className="btn btn-outline-success"
        onClick={() => setMiliSeconds(1000)}
      >
        1000
      </button>
      <button
        className="btn btn-outline-success"
        onClick={() => setMiliSeconds(2000)}
      >
        2000
      </button>
      <Timer miliSeconds={miliSeconds} />
    </>
  );
};

export default TimerFather;
