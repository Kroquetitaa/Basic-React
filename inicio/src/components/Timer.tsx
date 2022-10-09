import { useState, useEffect, useRef } from "react";

type TimerArgs = {
  miliSeconds: number;
};

const Timer = ({ miliSeconds }: TimerArgs) => {
  const [seconds, setSeconds] = useState<number>(0);
  const ref = useRef<NodeJS.Timer>();

  useEffect(() => {
    ref.current && clearInterval(ref.current);
    ref.current = setInterval(() => {
      setSeconds((s) => s + 1);
    }, miliSeconds);
  }, [miliSeconds]);

  return (
    <>
      <h4>
        Timer: <small>{seconds}</small>
      </h4>
    </>
  );
};

export default Timer;
