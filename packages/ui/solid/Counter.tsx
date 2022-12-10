import { createSignal } from "solid-js";

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <h1 className="text-xl"> {count()} </h1>
      <button className="btn" onClick={() => setCount(count() + 1)}>
        +
      </button>
      <button className="btn" onClick={() => setCount(count() - 1)}>
        --
      </button>
    </>
  );
}
