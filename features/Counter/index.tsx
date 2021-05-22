import styles from './Counter.module.css';
import { decrement, increment, selectCount } from './counterSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const Counter = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCount);

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value" onClick={() => dispatch(decrement())} >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} aria-label="Increment value" onClick={() => dispatch(increment())} >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
