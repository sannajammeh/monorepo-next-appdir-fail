import React, { useState } from "react";

const NoLib = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count} {count === 1 ? "like" : "likes"}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default NoLib;
