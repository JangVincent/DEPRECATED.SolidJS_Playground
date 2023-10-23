import { createSignal } from 'solid-js';
import { MemoPrac } from './MemoPrac';

export function MemoPracWrapper() {
  const [test, setTest] = createSignal('test');

  return (
    <>
      <MemoPrac test={test()} />
      <form>
        <input type="text" value={test()} onInput={(e) => setTest(e.currentTarget.value)} />
      </form>
    </>
  );
}
