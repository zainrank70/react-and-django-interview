import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(10);

  // Without useMemo: num*2 would run on every re-render (even when only count changes).
  // With useMemo: runs only when num changes; otherwise returns cached value.
  //there is a function() inside useMemo and useMemo calls that function for you when num changes so doubleNum is the result of that function
  const doubleNum = useMemo(() => {
    console.log("Calculating...");
    return num * 2;
  }, [num]);

  return (
    <div>
        <p>Count:{count}</p>
      <p>Double: {doubleNum}</p>
      {/* Re-renders but does not recalculate doubleNum */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      {/* Changes num → useMemo runs again */}
      <button onClick={() => setNum(num + 1)}>Increase Num</button>
    </div>
  );
}

export default Memo;
