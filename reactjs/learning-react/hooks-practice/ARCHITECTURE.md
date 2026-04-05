# Hooks Practice - Architecture

## Project Overview
- **Purpose**: Learning React hooks through practical examples
- **Type**: Educational web application with multiple demo pages

## Tech Stack
- React 19
- Vite 8
- React Router DOM 7

## Folder Structure
```
hooks-practice/
├── src/
│   ├── components/
│   │   ├── UseStateHook.jsx + UseStateHook.css
│   │   ├── MethodUsage.jsx + MethodUsage.css
│   │   └── Scrolling.jsx + Scrolling.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Component Hierarchy
```
App (Root with Router)
├── MethodUsage (route: /)
├── Scrolling (route: /scrolling)
└── UseStateHook (route: /useState)
```

## Data Flow
1. `App.jsx` sets up React Router with `BrowserRouter`
2. `Routes` defines paths mapping to components
3. User navigates via URL or Links
4. Each component demonstrates different React features

## Routing Structure
| Path | Component | Purpose |
|------|-----------|---------|
| `/` | MethodUsage | Event handlers demo |
| `/scrolling` | Scrolling | Scroll detection |
| `/useState` | UseStateHook | useState hook demo |

---

## Component Details

### App.jsx
- Root component with React Router setup
- Uses `BrowserRouter`, `Routes`, `Route`
- Maps URLs to component elements

### MethodUsage.jsx
- Demonstrates event handlers: `onClick`, `onDoubleClick`, `onMouseEnter`, `onChange`
- Shows inline arrow function handlers
- Console logs for debugging

### Scrolling.jsx
- Uses React Router's `Link` component
- Detects scroll direction via `onWheel` event
- Uses `deltaY` to determine scroll direction

### UseStateHook.jsx
- Demonstrates `useState` hook
- Counter with increment, decrement, reset, jump (+5)
- Button click handlers update state

---

## File Reference

| File | Purpose |
|------|---------|
| main.jsx | Entry point, renders App |
| App.jsx | Router setup, route definitions |
| UseStateHook.jsx | useState demo (counter) |
| MethodUsage.jsx | Event handler demos |
| Scrolling.jsx | Scroll detection demo |
