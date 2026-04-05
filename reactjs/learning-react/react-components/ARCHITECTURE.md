# React Components - Architecture

## Project Overview
- **Purpose**: Learning React component creation and usage
- **Type**: Educational demo showing component patterns

## Tech Stack
- React 19
- Vite 8

## Folder Structure
```
react-components/
├── src/
│   ├── components/
│   │   ├── card.jsx
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Component Hierarchy
```
App (Root)
├── Navbar (×3)
└── Card (×4)
```

## Data Flow
1. `App.jsx` imports Card and Navbar components
2. Renders Navbar and Card components multiple times
3. Components render static content (hardcoded)

---

## Component Details

### App.jsx
- Root component
- Imports Card and Navbar
- Renders Navbar 3 times and Card 4 times
- Contains variables (name, age) but not used

### card.jsx
- Card component (lowercase filename)
- Uses arrow function declaration
- Returns static card content
- Uses React Fragment `<>`

### Navbar.jsx
- Navbar component
- Uses const declaration
- Returns static navbar content

### main.jsx
- Entry point with StrictMode
- Uses createRoot API

---

## File Reference

| File | Purpose |
|------|---------|
| main.jsx | Entry point, renders App |
| App.jsx | Root, renders multiple components |
| card.jsx | Card component (static content) |
| Navbar.jsx | Navbar component (static content) |
| index.css | Global styles |
