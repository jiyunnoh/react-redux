import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: { counter: number }) => state.counter);
  const toggleCounterHandler = () => { };

  const incrementHandler = () => {
    dispatch({
      type: "increment"
    })
  };

  const increaseHandler = () => {
    dispatch({
      type: "increase",
      amount: 5
    })
  };

  const decrementHandler = () => {
    dispatch({
      type: "decrement"
    })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
