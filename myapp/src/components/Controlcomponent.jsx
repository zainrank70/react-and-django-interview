import React,{ useState } from "react";

// A controlled component is a form element (like input, textarea, select) whose value is controlled by React state.
export default function Controlcomponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
        {/* value={name} → React controls the input value,The input value and React state are always in sync */}
        {/* React decides the input value at all times. */}
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}</p>
    </div>
  );
}
