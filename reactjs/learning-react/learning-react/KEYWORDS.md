# Learning React - Keywords & Theory

## React Hooks

### useState
- **What**: Hook for managing local component state
- **Why**: Make components interactive with changing data
- **How**: `const [count, setCount] = useState(0)`
- **In this project**: Counter with increment on button click
- **Theory**: Returns current state value and a function to update it. Calling the setter triggers re-render with new state.

### React Hooks
- **What**: Functions that add state/lifecycle to functional components
- **Why**: Previously only class components had these features
- **How**: Import from 'react', call in component body
- **In this project**: useState is the hook used

---

## React Keywords

### StrictMode
- **What**: Development tool that double-invokes functions
- **Why**: Detect side effects, missing cleanups
- **How**: Wrap app with `<StrictMode><App /></StrictMode>`
- **In this project**: main.jsx wraps App

### Component
- **What**: Reusable UI piece
- **Why**: Build modular UIs
- **How**: `function App() { return JSX }`
- **In this project**: App component

### Fragment
- **What**: `<>...</>` wrapper
- **Why**: Return multiple elements without wrapper div
- **How**: `<> <A /> <B /> </>`
- **In this project**: App uses Fragment

---

## JavaScript Keywords

### Import
- **What**: Bring code from other files
- **Why**: Use code across files
- **How**: `import { useState } from 'react'`
- **In this project**: Imports useState, images, CSS

### Destructuring
- **What**: Extract values from arrays/objects
- **Why**: Cleaner syntax
- **How**: `const [a, b] = useState(0)`
- **In this project**: Array destructuring from useState

### Arrow Functions
- **What**: Concise function syntax `() => {}`
- **Why**: Shorter, lexical this
- **How**: `() => setCount(count + 1)`
- **In this project**: Inline in onClick

### Event Handlers
- **What**: Functions that respond to events
- **Why**: Make UI interactive
- **How**: `onClick={() => action()}`
- **In this project**: Counter button onClick

---

## JSX Keywords

### JSX
- **What**: JavaScript XML syntax
- **Why**: Write React elements in HTML-like form
- **How**: `<div>Content</div>`
- **In this project**: All returns

### Expressions
- **What**: JavaScript in curly braces
- **Why**: Render dynamic values
- **How**: `{count}`, `{count + 1}`
- **In this project**: Count display

### Attributes
- **What**: Element properties
- **Why**: Configure elements
- **How**: `className`, `src`, `alt`, `width`
- **In this project**: Multiple attributes

### className
- **What**: CSS class in JSX
- **Why**: Apply styles
- **How**: `<div className="name">`
- **In this project**: hero, framework, vite classes

---

## State Management

### State
- **What**: Data that changes over time
- **Why**: Make UI reactive
- **How**: useState hook
- **In this project**: count state

### Setter Function
- **What**: Function to update state
- **Why**: Change state, trigger re-render
- **How**: `setCount(newValue)`
- **In this project**: `setCount(count + 1)`

### Re-rendering
- **What**: React re-runs component with new state
- **Why**: Update UI
- **How**: When setState is called
- **In this project**: Counter updates on click

---

## Asset Management

### Importing Images
- **What**: Import images for use in JSX
- **Why**: Use images in components
- **How**: `import img from './img.png'`
- **In this project**: reactLogo, viteLogo, heroImg

### img Tag
- **What**: Display images
- **Why**: Show visual content
- **How**: `<img src={logo} alt="text" />`
- **In this project**: React and Vite logos

### alt Attribute
- **What**: Alternative text
- **Why**: Accessibility, fallback
- **How**: `<img alt="description" />`
- **In this project**: Used on all images

---

## Link Components

### a Tag
- **What**: HTML anchor for links
- **Why**: Navigate to other pages
- **How**: `<a href="url">Link</a>`
- **In this project**: Documentation links

### target _blank
- **What**: Open link in new tab
- **Why**: Don't navigate away
- **How**: `<a target="_blank" href="url">`
- **In this project**: External links

---

## Best Practices

### Functional Components with Hooks
- **Good**: Using useState in functional component
- **In this project**: Counter demonstrates this

### Clean Code
- **Good**: Clear structure, well-organized
- **In this project**: Template is well-organized

### Accessibility
- **Good**: Using alt text, aria labels
- **In this project**: Uses aria-hidden, alt text
