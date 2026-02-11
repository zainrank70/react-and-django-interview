# myapp

A small React app built with Vite. Includes a Counter component for practicing React (useState, JSX, components).

## Tech stack

- **React** 19
- **Vite** 7

## Setup

```bash
npm install
```

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start dev server         |
| `npm run build`| Build for production     |
| `npm run preview` | Preview production build |

## Project structure

```
myapp/
├── index.html
├── package.json
├── src/
│   ├── main.jsx          # Entry point, mounts React
│   ├── App.jsx            # Root component
│   ├── style.css          # Global styles
│   └── components/
│       └── Counter.jsx    # Counter with useState
└── README.md
```

## Run locally

```bash
npm run dev
```

Then open the URL shown in the terminal (e.g. http://localhost:5173).
