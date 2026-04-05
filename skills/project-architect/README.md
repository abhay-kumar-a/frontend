# Project Architect Skill

## Purpose
Analyzes any project and generates comprehensive architecture documentation with theory explanations. Also supports updating documentation when new features are added.

## How to Use

### Step 1: Load the Skill
```bash
/skill project-architect
```

### Step 2: Run Initial Analysis
```bash
/architect [project-path]
```

Example:
```bash
/architect C:\Users\Abhay Kumar\OneDrive\Desktop\frontend\reactjs\learning-react\props
```

### Step 3: Update Documentation (When Adding New Features)
```bash
/update-doc [project-path]
```

This will:
1. Scan for new components added since last documentation
2. Analyze new hooks, props, or patterns introduced
3. Update ARCHITECTURE.md with new structure
4. Add new keywords to KEYWORDS.md with theory

## What It Generates

The skill creates two files:

### ARCHITECTURE.md
1. **Project Overview** - Tech stack, purpose
2. **Folder Structure** - Tree visualization
3. **Component Hierarchy** - Parent-child relationships
4. **Data Flow** - How data moves through components
5. **Component Details** - Individual component descriptions
6. **File Reference** - Quick reference table

### KEYWORDS.md
Theory explanations for all keywords used:
- React hooks (useState, useEffect, useRef, etc.)
- JavaScript concepts
- CSS patterns
- Component patterns
- Data flow concepts

## Updating Documentation

When you add new features to a project:

1. **New Components**: Add new component to hierarchy
2. **New Hooks**: Add new hook theory to KEYWORDS.md
3. **New Props**: Update props flow in ARCHITECTURE.md
4. **New Patterns**: Add new pattern explanation

The update command will detect these automatically and append to existing documentation.

## Keywords & Theory Reference

| Keyword | Theory Summary |
|---------|----------------|
| `useState` | Local state management, triggers re-render on change |
| `useEffect` | Side effects execution, lifecycle management |
| `props` | Parent-to-child data passing |
| `props drilling` | Passing props through multiple levels |
| `useCallback` | Memoize functions to prevent unnecessary re-renders |
| `useMemo` | Memoize expensive calculations |
| `useRef` | Mutable refs, DOM access, persists across renders |
| `Context API` | Global state without prop drilling |
| `useContext` | Consume Context values |
| `Vite` | Build tool, fast HMR |
| `JSX` | JavaScript XML, syntax extension for React |

## Example Output

```markdown
# Props Project - Architecture

## Tech Stack
- React 18
- Vite
- CSS

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
App (Parent)
└── Card (Child)
    └── receives props: title, description, buttonText
```

## Data Flow
1. App.jsx holds data (title, description, buttonText)
2. Passes data to Card component via props
3. Card component renders received data

## Key Concepts & Theory

### Props
- **What**: Properties passed from parent to child component
- **Why**: Enable component reusability and data sharing
- **How**: `<Card title="Hello" />` - then access via `props.title`
```
