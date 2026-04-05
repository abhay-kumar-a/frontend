# Folder 1 - Architecture

## Project Overview
- **Purpose**: Basic React app template for learning folder structure
- **Type**: Simple template project

## Tech Stack
- React 19
- Vite 8

## Folder Structure
```
folder-1/
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
└── (two div elements)
```

## Data Flow
- Static content only, no data flow

---

## Component Details

### App.jsx
- Root component using arrow function
- Uses React Fragment `<>`
- Renders two divs with static content

### main.jsx
- Entry point using ReactDOM.createRoot
- Renders App component

---

## File Reference

| File | Purpose |
|------|---------|
| main.jsx | Entry point, renders App |
| App.jsx | Root component |
| index.css | Global styles |
| App.css | App-specific styles (empty) |
| assets/ | Static assets (unused) |
