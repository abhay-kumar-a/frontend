# Hooks Practice - Keywords & Theory

## React Hooks Keywords

### useState
- **What**: Hook for managing local component state
- **Why**: React components need to re-render when data changes. useState allows functional components to have their own state.
- **How**: `const [state, setState] = useState(initialValue)`
- **In this project**: Counter state in UseStateHook - `const [num, setNum] = useState(1)`
- **Theory**: State is immutable. Calling setState (e.g., `setNum(num + 1)`) triggers React to re-render the component with the new state value. The component re-renders with updated UI.

### React Hooks
- **What**: Functions that let you "hook into" React state and lifecycle features
- **Why**: Add state and side effects to functional components (previously only class components had these features)
- **How**: Import from 'react' and call in component body
- **In this project**: useState is the primary hook being practiced

### State Management
- **What**: Managing data that changes over time in a component
- **Why**: Make UI interactive and responsive to user actions
- **How**: useState returns current state and function to update it
- **In this project**: num state tracks counter value

---

## React Router Keywords

### BrowserRouter
- **What**: Router component that uses HTML5 history API
- **Why**: Enable client-side routing without page reloads
- **How**: Wrap your app with `<BrowserRouter><App /></BrowserRouter>`
- **In this project**: `BrowserRouter` wraps Routes in App.jsx

### Routes
- **What**: Container for Route components
- **Why**: Define which component renders for each URL path
- **How**: `<Routes><Route path="/" element={<Component />} /></Routes>`
- **In this project**: Defines all application routes

### Route
- **What**: Component that defines URL path to component mapping
- **Why**: Map specific URLs to specific components
- **How**: `<Route path="/path" element={<Component />} />`
- **In this project**: Three routes: /, /scrolling, /useState

### Link
- **What**: Component for client-side navigation
- **Why**: Create links that don't trigger page reload
- **How**: `<Link to="/path">Label</Link>`
- **In this project**: Used in Scrolling.jsx to navigate to home

---

## Event Handling Keywords

### onClick
- **What**: Event handler for click events
- **Why**: Make UI interactive when user clicks
- **How**: `<button onClick={handleClick}>Click</button>`
- **In this project**: Buttons for increment, decrement, reset, jump

### onDoubleClick
- **What**: Event handler for double-click events
- **Why**: Respond to double-click actions
- **How**: `<button onDoubleClick={handler}>Label</button>`
- **In this project**: Demonstrated in MethodUsage.jsx

### onMouseEnter
- **What**: Event handler for mouse entering element
- **Why**: Respond when mouse hovers over element
- **How**: `<div onMouseEnter={handler}>...</div>`
- **In this project**: Demonstrated in MethodUsage.jsx

### onChange
- **What**: Event handler for input value changes
- **Why**: Capture user input in form elements
- **How**: `<input onChange={(e) => handleChange(e.target.value)} />`
- **In this project**: Text input for name entry

### onWheel
- **What**: Event handler for mouse wheel scrolling
- **Why**: Detect scroll direction on the page
- **How**: `<div onWheel={(e) => handleScroll(e.deltaY)}>...</div>`
- **In this project**: Detects scroll up/down in Scrolling.jsx

### Event Object
- **What**: Object containing event details (e.target, type, etc.)
- **Why**: Access event data, prevent default behavior
- **How**: `function handler(e) { e.target.value }`
- **In this project**: Used to get input values and scroll delta

---

## JavaScript Keywords

### Arrow Functions
- **What**: Concise syntax for functions: `() => {}`
- **Why**: Shorter syntax, lexical `this` binding
- **How**: `const fn = (x) => x * 2` or `() => { statements }`
- **In this project**: Used extensively in event handlers

### Destructuring
- **What**: Extract values from arrays/objects
- **Why**: Cleaner syntax to unpack values
- **How**: `const [value, setValue] = useState(0)` - array destructuring
- **In this project**: Array destructuring from useState

### console.log
- **What**: Output to browser console
- **Why**: Debug and inspect values during development
- **How**: `console.log(value)`
- **In this project**: Logging events, input values, scroll direction

### Conditional Rendering
- **What**: Rendering different UI based on conditions
- **Why**: Show different content in different states
- **How**: `{condition ? <A /> : <B />}`
- **In this project**: Buttons always shown (no conditional)

---

## Component Patterns

### Functional Components
- **What**: Components defined as JavaScript functions
- **Why**: Simpler, more concise than class components
- **How**: `function Component() { return <div>...</div> }`
- **In this project**: All components are functional

### Event Handler Functions
- **What**: Functions that respond to user interactions
- **Why**: Make UI interactive
- **How**: Defined inside component, passed to onClick etc.
- **In this project**: inse(), desc(), onClick(), pageScrolling()

### Inline Arrow Functions
- **What**: Arrow functions defined directly in JSX
- **Why**: Quick one-off handlers without separate function
- **How**: `onClick={() => setNum(0)}`
- **In this project**: Used for reset button and inline handlers

---

## State Update Patterns

### State with Setter
- **What**: useState returns current state + setter function
- **Why**: Update state and trigger re-render
- **How**: `[state, setState] = useState(initial)`
- **In this project**: `[num, setNum] = useState(1)`

### Direct State Update
- **What**: Setting state to a new value directly
- **How**: `setNum(0)` sets to 0
- **In this project**: Reset button

### State with Function
- **What**: Passing function to setter for complex updates
- **How**: `setNum(prev => prev + 1)`
- **In this project**: `setNum(num + 1)` works because num is current state

### Increment/Decrement
- **What**: Common pattern for counters
- **How**: `setNum(num + 1)` or `setNum(num - 1)`
- **In this project**: Increase and Decrease buttons

---

## React Concepts

### Re-rendering
- **What**: React re-renders component when state changes
- **Why**: Update UI to reflect new state
- **How**: When setNum is called, component function runs again with new num value
- **In this project**: Counter updates on screen when buttons clicked

### JSX
- **What**: JavaScript XML - syntax for writing React elements
- **Why**: Combine JavaScript logic with HTML-like markup
- **How**: `<div><h1>{num}</h1></div>`
- **In this project**: All component return statements

### Component Export
- **What**: Making component available for import
- **Why**: Use component in other files
- **How**: `export default ComponentName`
- **In this project**: All components exported

### Component Import
- **What**: Bringing component from another file
- **Why**: Build app from reusable components
- **How**: `import Component from './Component'`
- **In this project**: App imports all three components

---

## Build/Dev Keywords

### Vite
- **What**: Fast build tool with HMR
- **Why**: Quick development server and builds
- **How**: `npm run dev` starts dev server
- **In this project**: Build tool

### React Router DOM
- **What**: Routing library for React
- **Why**: Enable multi-page feel in SPA
- **How**: BrowserRouter, Routes, Route, Link components
- **In this project**: Enables navigation between demos

### ES Modules
- **What**: JavaScript import/export system
- **Why**: Organize code into reusable modules
- **How**: import/export statements
- **In this project**: All code uses ES modules
