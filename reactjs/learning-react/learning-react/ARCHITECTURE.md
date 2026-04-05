# Learning React - Architecture

## Project Overview
- **Purpose**: Default Vite React template for learning React basics
- **Type**: Starter template with interactive counter

## Tech Stack
- React 19
- Vite 8

## Folder Structure
```
learning-react/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── App.css
│   └── assets/
│       ├── vite.svg
│       ├── react.svg
│       └── hero.png
├── package.json
└── vite.config.js
```

## Component Hierarchy
```
App (Root)
├── section#center
│   ├── div.hero (images)
│   ├── div (text content)
│   └── button.counter
├── div.ticks
├── section#next-steps
│   ├── div#docs
│   └── div#social
├── div.ticks
└── section#spacer
```

## Data Flow
1. App uses `useState` for counter
2. Button onClick updates count via `setCount`
3. Re-renders with updated count displayed

---

## Component Details

### App.jsx
- Root component using function declaration
- Uses `useState` hook for counter
- Imports SVG logos and images
- Contains interactive counter button
- Has documentation and social links sections

### main.jsx
- Entry point with StrictMode
- Uses createRoot API

---

## File Reference

| File | Purpose |
|------|---------|
| main.jsx | Entry point, renders App |
| App.jsx | Root component with counter demo |
| index.css | Global styles |
| App.css | App-specific styles |
| assets/ | Static SVG/PNG files |
