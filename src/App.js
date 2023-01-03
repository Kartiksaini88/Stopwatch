import "./App.css";
import { useState } from "react";
import Displaycomponents from "./components/Displaycomponents";
import BtnComponents from "./components/BtnComponents";

function App() {
  const [time, setTime] = useState({
    h: 0,
    m: 0,
    s: 0,
    ms: 0,
  });
  const [status, setstatus] = useState(0);
  const [intrv, setintrv] = useState();
  var upms = time.ms,
    upm = time.m,
    ups = time.s,
    uph = time.h;

  const start = () => {
    setstatus(1);
    run();
    setintrv(setInterval(run, 10));
  };

  const run = () => {
    if (upm === 60) {
      uph++;
      upm = 0;
    }
    if (ups === 60) {
      upm++;
      ups = 0;
    }
    if (upms === 100) {
      ups++;
      upms = 0;
    }
    upms++;
    return setTime({
      h: uph,
      m: upm,
      s: ups,
      ms: upms,
    });
  };

  const stop = () => {
    clearInterval(intrv);
    setstatus(2);
  };

  const resume = () => {
    start();
  };

  const reset = () => {
    setstatus(0);
    clearInterval(intrv);
    setTime({
      h: 0,
      m: 0,
      s: 0,
      ms: 0,
    });
  };
  return (
    <div className="main-section">
      <div className="clock-holder">
      <div className="stopwatch">
        <Displaycomponents time={time}></Displaycomponents>
        <BtnComponents
          start={start}
          reset={reset}
          status={status}
          resume={resume}
          stop={stop}
        ></BtnComponents>
        </div>
      </div>
    </div>
  );
}

export default App;
