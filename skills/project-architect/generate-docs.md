# How to Generate Architecture Documentation

This guide provides templates and process for creating `ARCHITECTURE.md` files.

---

## Architecture.md Template

```markdown
# [Project Name] - Architecture

## Project Overview
- **Purpose**: Brief description of what the project does
- **Type**: Web application / Library / Landing page

## Tech Stack
- React 18
- Vite
- CSS Modules

## Folder Structure
```
project/
├── src/
│   ├── components/
│   │   ├── Component1.jsx
│   │   └── Component2.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Component Hierarchy
```
App (Root Component)
├── Header
│   └── NavBar
├── MainContent
│   ├── CardList
│   │   └── Card (×N)
│   └── Filter
└── Footer
```

## Data Flow
1. User interacts with UI
2. Event handler updates state in App (or parent)
3. State change triggers re-render
4. Updated props passed to child components
5. Child components re-render with new data

## Key Concepts & Theory

### useState
- **What**: Hook for managing local component state
- **Why**: React components need to re-render when data changes
- **How**: `const [state, setState] = useState(initialValue)`
- **When to use**: Any time you need to track data that changes over time

### useEffect
- **What**: Hook for performing side effects
- **Why**: React components need to interact with external systems (API, DOM, timers)
- **How**: `useEffect(() => { ... }, [dependencies])`
- **When to use**: Fetching data, subscriptions, DOM manipulation

### Props
- **What**: Properties passed from parent to child component
- **Why**: Enable component reusability and data sharing
- **How**: `<Card title="Hello" />` then access via `props.title`
- **When to use**: Any time parent needs to share data with child

### Props Drilling
- **What**: Passing props through multiple intermediate components
- **Why**: Sometimes necessary to share data between distant components
- **Problem**: Can become messy with many levels
- **Solution**: Use Context API for global state

### Context API
- **What**: React's built-in state management for global data
- **Why**: Avoid prop drilling for data needed by many components
- **How**: `createContext() → Provider → useContext()`
- **When to use**: Theme, authentication, user preferences

---

## File Reference

| File | Purpose |
|------|---------|
| main.jsx | Entry point, renders App |
| App.jsx | Root component, holds main state |
| index.css | Global styles |

---

## Dependencies Flow

```
package.json
    ↓
main.jsx (imports)
    ↓
App.jsx (renders)
    ↓
Components (receive props)
    ↓
UI (user sees)
```

---

## State Management Summary

| Component | State | Purpose |
|-----------|-------|---------|
| App | userData, isLoading | Global user state |
| Card | local display state | Individual card UI |
| Button | none | Pure presentational |

---

## Notes
- Add any specific architectural decisions or patterns used in this project
- Document any custom hooks
- Note performance optimizations if any
```

---

## Process to Generate Documentation

### 1. Analyze First
Use `analyze-project.md` guide to understand the project structure.

### 2. Gather Information
- Tech stack from package.json
- Folder structure from ls commands
- Component relationships from reading source files
- Hooks and patterns from code analysis

### 3. Fill Template
Copy the template above and fill in:
- Project name and overview
- Actual folder structure
- Actual component hierarchy
- Actual data flow
- Relevant key concepts

### 4. Save as ARCHITECTURE.md
Save in project root folder.

---

## Example: hooks-practice Project

```markdown
# Hooks Practice - Architecture

## Project Overview
- **Purpose**: Learning React hooks through examples
- **Type**: Educational web application

## Tech Stack
- React 18
- Vite
- CSS

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
App (Root)
├── UseStateHook (counter example)
├── MethodUsage (event handlers)
└── Scrolling (scroll detection)
```

## Key Concepts & Theory

### useState
- **What**: Local state management
- **Why**: Track changing values (counter, form inputs)
- **How**: `const [count, setCount] = useState(0)`

### Event Handlers
- **What**: Functions that respond to user actions
- **Why**: Make UI interactive
- **How**: `<button onClick={handleClick}>`
```

---

## Tips for Good Documentation

1. **Keep it updated** - Update when project changes
2. **Be specific** - Use actual file names and component names
3. **Include theory** - Explain WHY each concept is used
4. **Show relationships** - How components connect
5. **Document decisions** - Why you chose certain patterns

---

## Updating Existing Documentation

When you add new features to an existing documented project:

### Step 1: Identify Changes
- New components added?
- New hooks introduced?
- New props flow?
- New patterns used?

### Step 2: Update ARCHITECTURE.md

#### Add New Folder Structure Entry
```markdown
## Folder Structure
```
project/
├── src/
│   ├── components/
│   │   ├── OldComponent.jsx
│   │   └── NEWComponent.jsx    // ← Add new
│   ├── App.jsx
│   └── main.jsx
```
```

#### Update Component Hierarchy
```markdown
## Component Hierarchy
```
App (Root)
├── OldComponent
└── NEWComponent              // ← Add new
    └── ChildComponent
```
```

#### Add Component Details
```markdown
### NEWComponent.jsx
- **Purpose**: Description of what it does
- **Props**: Lists props it receives
- **Hooks**: Any hooks used
```

#### Update File Reference
```markdown
| File | Purpose |
|------|---------|
| App.jsx | Root component |
| NEWComponent.jsx | NEW COMPONENT DESCRIPTION |  // ← Add new
```

### Step 3: Update KEYWORDS.md

#### Add New Hook Theory
```markdown
### useNewHook
- **What**: Description
- **Why**: When to use
- **How**: `useNewHook()`
- **In this project**: Used in NEWComponent for [purpose]
```

#### Add New Pattern
```markdown
### NEWPattern
- **What**: Description
- **Why**: Benefits
- **How**: Implementation
```

### Step 4: Verify Updates
- Read through ARCHITECTURE.md
- Ensure hierarchy makes sense
- Check KEYWORDS.md for completeness
- Verify all new files are documented

---

## Update Template Snippets

### New Component Entry (ARCHITECTURE.md)
```markdown
### ComponentName.jsx
- **Purpose**: What this component does
- **Props**: What props it receives
- **State**: Any local state (if using useState)
- **Effects**: Any side effects (if using useEffect)
```

### New Keyword Entry (KEYWORDS.md)
```markdown
### keywordName
- **What**: Brief description
- **Why**: When/why to use
- **How**: Code example
- **In this project**: Where it's used
```

### Updated Props Flow
```markdown
## Data Flow
1. Existing flow...
2. NEW: NEWComponent receives data from Parent
3. ...
```
