"use client";

import { proxy, useSnapshot } from "valtio";

const countState = proxy({
  count: 0,
});

const Counter = () => {
  const count = useSnapshot(countState).count;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => countState.count++}>Increment</button>
    </div>
  );
};

export default Counter;
