# Folder 1 - Keywords & Theory

## React Keywords

### React
- **What**: JavaScript library for building UIs
- **Why**: Create interactive, component-based web apps
- **How**: Import React, create components
- **In this project**: Imported in App.jsx

### Component
- **What**: Reusable piece of UI
- **Why**: Break UI into independent pieces
- **How**: `const Component = () => JSX`
- **In this project**: App component

### Arrow Function Component
- **What**: Component defined as arrow function
- **Why**: Modern, concise syntax
- **How**: `const App = () => { return JSX }`
- **In this project**: App defined as arrow function

### ReactDOM
- **What**: React package for DOM rendering
- **Why**: Mount React app to DOM
- **How**: `ReactDOM.createRoot().render()`
- **In this project**: main.jsx uses createRoot

### createRoot
- **What**: Creates React root for rendering
- **Why**: New React 18+ rendering API
- **How**: `createRoot(domNode).render(<App />)`
- **In this project**: Creates root and renders App

---

## JavaScript Keywords

### Arrow Functions
- **What**: Concise function syntax `() => {}`
- **Why**: Shorter than function keyword
- **How**: `const fn = () => { return value }`
- **In this project**: App component

### Comments
- **What**: Code ignored by interpreter
- **Why**: Document code, disable temporarily
- **How**: `// single line`, `/* multi line */`
- **In this project**: Old function commented out

### Template Literals
- **What**: Strings with interpolation
- **Why**: Embed variables in strings
- **How**: `` `Hello ${name}` ``
- **In this project**: Not used

---

## JSX Keywords

### JSX
- **What**: JavaScript XML syntax
- **Why**: Write React elements in HTML-like form
- **How**: `<div>Content</div>`
- **In this project**: App returns JSX

### Fragment
- **What**: `<>...</>` wrapper
- **Why**: Return multiple elements without wrapper div
- **How**: `<> <A /> <B /> </>`
- **In this project**: App uses Fragment

### Elements
- **What**: Basic React units
- **Why**: Represent DOM elements
- **How**: `<div>`, `<h1>`, `<h3>`
- **In this project**: div, h1, h3 elements

### id Attribute
- **What**: Unique element identifier
- **Why**: Style specific elements, JS access
- **How**: `<div id="name">`
- **In this project**: first, second divs

---

## Rendering

### render()
- **What**: Method to render React element to DOM
- **Why**: Display React app
- **How**: `root.render(<App />)`
- **In this project**: main.jsx renders App

### DOM
- **What**: Document Object Model
- **Why**: Browser's representation of page
- **How**: React updates DOM efficiently
- **In this project**: App renders to root div

---

## Project Structure

### src Folder
- **What**: Source code folder
- **Why**: Keep source files separate
- **How**: All .jsx, .css files here
- **In this project**: All source files

### assets Folder
- **What**: Static files folder
- **Why**: Store images, fonts, icons
- **How**: Import or reference by path
- **In this project**: Empty (files present but unused)

### index.css
- **What**: Global styles
- **Why**: Styles that apply to whole app
- **How**: Import in main.jsx
- **In this project**: Global styles file

---

## Best Practices

### Use Components
- **Recommendation**: Create components in separate files
- **Why**: Organize code, make reusable

### Unused Variables
- **Recommendation**: Remove unused variables
- **Why**: Clean code, no confusion

### Add Content
- **Recommendation**: Add more components or state
- **Why**: Learn React features
