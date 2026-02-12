import React,{ useState } from "react";

export default function Controlcomponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}</p>
    </div>
  );
}
