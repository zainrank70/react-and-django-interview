import React, { useState, useCallback } from "react";

function Callback() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Same function reference until "name" changes. Without useCallback, a new function is created every render.
  const handleSayHi = useCallback(() => {
    alert(`Hi, ${name}!`);
  }, [name]);

  return (
    <div>
      <p>Count: {count}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={handleSayHi}>Say Hi</button>
    </div>
  );
}

export default Callback;
