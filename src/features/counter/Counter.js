import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  /** @TODO move count to reducer and get value to selector */
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  /** @TODO Disable all the buttons while counter is being incremented asynchronously */
  // const isAsyncActionInProcess = false;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          // disabled={isAsyncActionInProcess}
          aria-label="Increment value"
          /** @TODO create required action to increment redux state value */
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          // disabled={isAsyncActionInProcess}
          aria-label="Decrement value"
          /** @TODO create required action to decrement redux state value */
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          // disabled={isAsyncActionInProcess}
          /** @TODO create required action to increment by given amount redux state value */
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          // disabled={isAsyncActionInProcess}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          // disabled={isAsyncActionInProcess}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}





