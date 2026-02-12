# react-and-django-interview

Repo for React and Django practice.

---

## myapp (React + Vite)

React practice app: Counter (useState, useEffect), controlled input (Controlcomponent), and uncontrolled input (Uncontrolcomponent). Toggle which one runs in `App.jsx`.

**Stack:** React 19, Vite 7

### Quick start

```bash
cd myapp
npm install
npm run dev
```

Open the URL in the terminal (e.g. http://localhost:5173).

### Scripts

| Command           | Description              |
|-------------------|--------------------------|
| `npm run dev`     | Start dev server         |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |

### Structure

```
myapp/
├── index.html
├── package.json
├── .gitignore
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── style.css
│   └── components/
│       ├── Counter.jsx
│       ├── Controlcomponent.jsx
│       └── Uncontrolcomponent.jsx
```

### useEffect — dependency array

| Call | When the effect runs |
|------|----------------------|
| `useEffect(fn)` | After **every** render |
| `useEffect(fn, [])` | Once, after first render (on mount) |
| `useEffect(fn, [a, b])` | After first render and when `a` or `b` change |

- **`[]`** = run the effect only once (e.g. fetch on mount, one-time setup).
- **No second argument** = run after every render (usually avoid; can cause performance issues or loops).

**Concept:** **Re-render** = React runs the component function again (new JSX, possibly new state/props). **Effect run** = React runs the function you passed to `useEffect`. Re-render ≠ effect run: the component can re-render many times; the dependency array controls *when* the effect runs. No array → effect runs after every re-render. `[a, b]` → effect runs only when `a` or `b` changed (plus on mount). Same component, same re-renders; with deps the effect runs fewer times.

### Why keys are needed

React renders lists efficiently using the Virtual DOM. When a list changes (add, remove, reorder), React needs to know which item is which. **Without keys:** React may re-render the entire list (slow, can cause bugs). **With keys:** React can match each element with its previous version and update only what changed.

### Controlled components (form inputs)

A **controlled component** is a form element (`input`, `textarea`, `select`) whose value is controlled by React state. React keeps track of the value and updates it through state.

Example:

```jsx
import { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Hello, {name}</p>
    </div>
  );
}
```

- `value={name}` → React controls the input value.
- `onChange` updates the state.
- The input value and React state are always in sync.

### Uncontrolled components (form inputs)

An **uncontrolled component** is a form element that keeps its own internal state. You don’t use React state for its value; you read the value when needed (e.g. via a ref).

Example:

```jsx
import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = () => {
    alert(`Hello, ${inputRef.current.value}`);
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

- The input manages its own value (DOM holds it).
- React reads it only when needed (via `ref`).
- React does not re-render on every keystroke.
