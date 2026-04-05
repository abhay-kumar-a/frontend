# How to Analyze Project Architecture

This guide explains how to analyze any project's architecture and generate documentation.

---

## Step 1: Scan Project Structure

### List All Folders and Files
```bash
ls -la [project-path]
```

### Get Recursive Structure
```bash
find [project-path] -type f -name "*.jsx" -o -name "*.js" -o -name "*.css"
```

Or manually map:
```
project/
├── src/
│   ├── components/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## Step 2: Identify Tech Stack

### Check package.json for:
- React version
- Build tools (Vite, Webpack)
- CSS solutions (Tailwind, Styled Components)
- State management (Redux, Zustand)

### File Extensions Indicate:
- `.jsx` / `.tsx` → React
- `.vue` → Vue
- `.svelte` → Svelte
- `.html` → Vanilla HTML/CSS/JS

---

## Step 3: Analyze Components

### Read Each Component File

For each `.jsx` file, identify:

1. **Imports**
   ```javascript
   import React from 'react'
   import Card from './components/Card'
   import { useState, useEffect } from 'react'
   ```

2. **Exports**
   ```javascript
   export default App
   export const Header = () => {}
   ```

3. **Props Received**
   ```javascript
   function Card(props) { ... }
   // or
   function Card({ title, description }) { ... }
   ```

4. **Hooks Used**
   - `useState` - local state
   - `useEffect` - side effects
   - `useRef` - DOM refs
   - `useContext` - context consumption
   - `useCallback` - memoized functions
   - `useMemo` - memoized values

---

## Step 4: Map Component Hierarchy

### Build Tree Structure
```
App (root)
├── Header
│   └── Logo
├── MainContent
│   ├── Card (×3)
│   └── Button
└── Footer
```

### Identify Props Flow
```
App → Card (title, description)
Card → Button (onClick)
```

---

## Step 5: Document Data Flow

### Types of Data Flow:
1. **Top-down (Props)**: Parent passes data to child
2. **Bottom-up (Callbacks)**: Child notifies parent via callback
3. **Global (Context)**: Any component can access

---

## Step 6: Generate Architecture.md

Create file with sections:
1. Project Overview
2. Tech Stack
3. Folder Structure (tree)
4. Component Hierarchy
5. Data Flow
6. Key Concepts & Theory

---

## Quick Analysis Checklist

- [ ] List all source files
- [ ] Identify entry point (App.jsx, main.jsx, index.html)
- [ ] Find all components
- [ ] Map parent-child relationships
- [ ] Identify state management approach
- [ ] Note hooks used
- [ ] Document props passing
- [ ] Identify CSS approach

---

## Step 7: Updating Documentation

When you add new features to an existing project, follow these steps:

### Detect New Components
```bash
# Compare current files with last documented files
# Look for new .jsx files in src/
```

### Identify What's New
For each new component:
1. What props does it receive?
2. What hooks does it use?
3. What other components does it import?
4. How does it fit in the hierarchy?

### Update ARCHITECTURE.md
Add to appropriate sections:
1. **Folder Structure**: Add new file location
2. **Component Hierarchy**: Add new component to tree
3. **Data Flow**: Update props flow
4. **Component Details**: Add new component description
5. **File Reference**: Add new file entry

### Update KEYWORDS.md
Add new keywords with theory:
1. **New Hooks**: Add useState, useEffect, etc. theory
2. **New Patterns**: Add component pattern explanation
3. **New Events**: Add event handler explanation
4. **New CSS**: Add styling approach explanation

---

## Update Checklist

- [ ] List all new files added
- [ ] Identify new components
- [ ] Map new parent-child relationships
- [ ] Note new hooks used
- [ ] Document new props flow
- [ ] Add new keywords to KEYWORDS.md
- [ ] Update component hierarchy in ARCHITECTURE.md
- [ ] Update file reference table
