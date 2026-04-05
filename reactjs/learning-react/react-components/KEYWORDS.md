# React Components - Keywords & Theory

## React Keywords

### Component
- **What**: Reusable piece of UI
- **Why**: Break UI into independent, reusable pieces
- **How**: `function Component() { return JSX }`
- **In this project**: Card and Navbar components

### Component Reusability
- **What**: Same component used multiple times
- **Why**: Don't repeat UI code
- **How**: `<Component />` multiple times
- **In this project**: Card ×4, Navbar ×3

### Import/Export
- **What**: ES6 module system
- **Why**: Share components between files
- **How**: `import Card from './components/card'`, `export default card`
- **In this project**: All components imported

### StrictMode
- **What**: Development tool for bug detection
- **Why**: Find potential issues early
- **How**: `<StrictMode><App /></StrictMode>`
- **In this project**: main.jsx uses StrictMode

---

## JavaScript Keywords

### Arrow Functions
- **What**: Concise function syntax `() => {}`
- **Why**: Shorter than function keyword
- **How**: `const fn = () => { return ... }`
- **In this project**: card component uses arrow function

### Const Declaration
- **What**: Declare constant variables
- **Why**: Variables that won't be reassigned
- **How**: `const name = 'value'`
- **In this project**: Navbar uses const

### Variables
- **What**: Storage for data
- **Why**: Hold values for use in JSX
- **How**: `let name = 'abhay'`
- **In this project**: name, age defined but unused

---

## JSX Keywords

### JSX
- **What**: JavaScript XML syntax
- **Why**: Write React elements in HTML-like form
- **How**: `<div>Content</div>`
- **In this project**: All component returns

### Fragment
- **What**: `<>...</>` wrapper
- **Why**: Return multiple elements without wrapper div
- **How**: `<> <A /> <B /> </>`
- **In this project**: card.jsx uses Fragment

### Self-Closing Tags
- **What**: Tags without closing tag
- **Why**: For empty elements
- **How**: `<Component />`, `<img />`
- **In this project**: Component usage

### className
- **What**: CSS class attribute in JSX
- **Why**: Apply styles to elements
- **How**: `<div className="class">`
- **In this project**: card, navbar elements

---

## Component Patterns

### Functional Components
- **What**: Components as functions
- **Why**: Modern React, simpler than classes
- **How**: `function Name() { return JSX }`
- **In this project**: Both Card and Navbar

### Arrow Function Components
- **What**: Components as arrow functions
- **Why**: Concise syntax
- **How**: `const Component = () => JSX`
- **In this project**: card.jsx uses this

### Named Exports
- **What**: Export with specific name
- **Why**: Multiple exports per file
- **How**: `export const A = () => {}`
- **In this project**: Uses default exports

### Default Exports
- **What**: Single export per file
- **Why**: Simpler imports
- **How**: `export default Component`
- **In this project**: Both components

---

## Component Composition

### Parent-Child Relationship
- **What**: App renders children components
- **Why**: Build UI hierarchy
- **How**: Parent component renders child components
- **In this project**: App → Card, Navbar

### Multiple Component Rendering
- **What**: Rendering same component multiple times
- **Why**: Reuse UI patterns
- **How**: `<Card /><Card /><Card />`
- **In this project**: 4 Cards, 3 Navbars

### Static Content
- **What**: Hardcoded content in components
- **Why**: Simple demos, placeholder content
- **How**: Return JSX with fixed text
- **In this project**: Both components have static content

---

## File Structure

### Components Folder
- **What**: Folder for reusable components
- **Why**: Organize code, separate from pages
- **How**: `src/components/*.jsx`
- **In this project**: components/card.jsx, components/Navbar.jsx

### Naming Conventions
- **What**: How to name files and components
- **Why**: Consistency, readability
- **How**: PascalCase for components (Navbar), could be camelCase (card)
- **In this project**: Mixed (card.jsx lowercase, Navbar.jsx PascalCase)

---

## Best Practices

### PascalCase Naming
- **Recommendation**: Use PascalCase for component files and names
- **Why**: React convention, distinguishes from HTML elements
- **Example**: Card.jsx, Navbar.jsx (not card.jsx)

### Extract Variables
- **Recommendation**: Use the variables defined in component
- **Why**: Demonstrate dynamic content
- **Example**: Use `{name}` and `{age}` in JSX

### Add Props
- **Recommendation**: Make components accept props
- **Why**: Make reusable with different data
- **Example**: `<Card title="Hello" />`
