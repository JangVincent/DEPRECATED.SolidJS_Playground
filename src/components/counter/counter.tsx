import { createSignal } from 'solid-js';

export function Counter() {
  const [counter, setCounter] = createSignal(0);

  const increment = () => setCounter(counter() + 1);

  return (
    <div>
      Current Count : {counter()}
      <button onClick={increment}>Increment</button>
    </div>
  );
}
