import { useEffect, useState } from "react";
import { CounterType } from "types/counter";

const Timer = ({ time: initialTime, timeIsFinished }: CounterType) => {
  const [time, setTime] = useState(initialTime);

  /**
   * Count down given time
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime: number) => {
        if (prevTime === 0) {          
          clearInterval(interval);
          return initialTime;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  /**
   * Emit event after finishing time to parent    
   */
  useEffect(() => {
    if(time === 0) {
      timeIsFinished()
    }
  }, [time])

  return (
    <div className="counter-wrapper">
      List will be updated after
      <time>
        {time}
      </time>
      second
    </div>
  )
};

export default Timer;