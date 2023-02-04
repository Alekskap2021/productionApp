import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)} className={classes.btn}>
        Plus
      </button>
      <button onClick={() => setCount((prev) => prev - 1)} className={classes.btn}>
        Minus
      </button>
    </>
  );
};
