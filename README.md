# react-and-django-interview

Repo for React and Django practice.

---

## myapp (React + Vite)

Small React app with a Counter component — useState, JSX, components.

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
│       └── Counter.jsx
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
