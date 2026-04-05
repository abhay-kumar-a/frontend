# Props Project - Architecture

## Project Overview
- **Purpose**: Learning React props by displaying user cards
- **Type**: Educational demo showing props passing

## Tech Stack
- React 19
- Vite 8

## Folder Structure
```
props/
├── src/
│   ├── components/
│   │   └── Card.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Component Hierarchy
```
App (Root)
└── Card (×6 - rendered individually)
```

## Data Flow
1. `App.jsx` defines user data inline (user, age, image)
2. Each `Card` component receives data via props
3. `Card` component renders received data
4. Same component reused with different data

## Props Flow
```
App → Card (user, age, image) → rendered 6 times
```

## Data Structure
| Prop | Type | Description |
|------|------|-------------|
| user | string | User name |
| age | number | User age |
| image | string | Image URL |

---

## Component Details

### App.jsx
- Root component
- Renders 6 Card components with different props
- Demonstrates reusing same component with different data

### Card.jsx
- Reusable card component
- Receives user, age, image as props
- Renders user profile card

### main.jsx
- Entry point with StrictMode enabled
- Uses createRoot API

---

## File Reference

| File | Purpose |
|------|---------|
| main.jsx | Entry point, renders App |
| App.jsx | Root, renders 6 Card components |
| Card.jsx | Reusable card component |
| index.css | Global styles |
