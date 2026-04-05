# Theory Keywords Reference Guide

This guide provides theory explanations for common keywords and concepts used in React and web development projects.

---

## React Hooks

### useState
- **What**: Hook for managing local component state
- **Why**: React components need to re-render when data changes. useState allows you to add state to functional components.
- **How**: `const [state, setState] = useState(initialValue)`
- **When to use**: 
  - Tracking counters, toggles
  - Form input values
  - Any data that changes during component lifetime
- **Theory**: State is immutable. Calling setState triggers React to re-render the component with new state values.

---

### useEffect
- **What**: Hook for performing side effects in functional components
- **Why**: React components need to interact with external systems (APIs, DOM, timers, subscriptions)
- **How**: `useEffect(() => { /* effect */ }, [dependencies])`
- **When to use**:
  - Fetching data from APIs
  - Setting up subscriptions
  - DOM manipulation
  - Setting timers
- **Dependencies Array**:
  - Empty `[]` → runs once on mount
  - With values `[value]` → runs when value changes
  - No array → runs on every render
- **Theory**: Effects run after render. Cleanup function runs before next effect or on unmount.

---

### useRef
- **What**: Hook for creating mutable refs that persist across renders
- **Why**: 
  - Access DOM elements directly
  - Store values that don't trigger re-renders
- **How**: `const ref = useRef(initialValue)`
- **When to use**:
  - Focusing input elements
  - Measuring element dimensions
  - Storing values that change but shouldn't trigger re-render
- **Theory**: `ref.current` can be mutated without causing re-render. Useful for keeping track of values between renders.

---

### useCallback
- **What**: Hook for memoizing functions
- **Why**: Prevent unnecessary re-renders of child components that receive functions as props
- **How**: `const memoizedFn = useCallback(() => { /* code */ }, [dependencies])`
- **When to use**: When passing callbacks to optimized child components (React.memo)
- **Theory**: Returns same function reference unless dependencies change. Reduces re-renders in children.

---

### useMemo
- **What**: Hook for memoizing computed values
- **Why**: Avoid expensive calculations on every render
- **How**: `const value = useMemo(() => computeExpensiveValue(a, b), [a, b])`
- **When to use**:
  - Complex calculations
  - Filtering/sorting large lists
  - Any expensive computation
- **Theory**: Recalculates only when dependencies change. Caches result for subsequent renders.

---

### useContext
- **What**: Hook for consuming Context values
- **Why**: Access global data without prop drilling
- **How**: `const value = useContext(MyContext)`
- **When to use**: When any component needs access to global data (theme, auth, user data)
- **Theory**: Returns current context value. Re-renders when context value changes.

---

### useReducer
- **What**: Hook for managing complex state logic
- **Why**: When state has multiple sub-values or complex transitions
- **How**: `const [state, dispatch] = useReducer(reducer, initialState)`
- **When to use**:
  - Complex state transitions
  - Multiple actions
  - When you'd normally use Redux for local state
- **Theory**: Similar to Redux but local to component. dispatch triggers reducer function.

---

## Props & Data Flow

### Props
- **What**: Properties passed from parent to child component
- **Why**: Enable component reusability and data sharing
- **How**: 
  - Pass: `<Card title="Hello" />`
  - Receive: `function Card(props) { props.title }`
  - Or destructured: `function Card({ title }) { title }`
- **When to use**: Any time parent needs to share data with child
- **Theory**: Props are read-only (immutable). Child cannot modify parent's state directly.

---

### Props Drilling
- **What**: Passing props through multiple levels of components
- **Why**: Sometimes necessary to share data between distant components
- **Problem**: Can become messy with many levels
- **When it happens**: Component A → B → C → D (D needs A's data)
- **Solution**: Use Context API or state management library

---

### Children Props
- **What**: Special prop for rendering nested content
- **Why**: Create reusable wrapper components
- **How**: 
  - Pass: `<Wrapper><p>Content</p></Wrapper>`
  - Receive: `function Wrapper({ children }) { return <div>{children}</div> }`
- **When to use**: Layout components, modals, cards with custom content

---

## State Management

### Context API
- **What**: React's built-in mechanism for passing data through the component tree
- **Why**: Avoid prop drilling for data needed by many components
- **How**:
  ```javascript
  const MyContext = createContext(defaultValue)
  
  // Provider
  <MyContext.Provider value={data}>
    <App />
  </MyContext.Provider>
  
  // Consumer
  const data = useContext(MyContext)
  ```
- **When to use**: Theme, authentication, user preferences, global settings
- **Theory**: Creates a provider. All components inside provider can access value. Re-renders when value changes.

---

### State vs Props
| Aspect | State | Props |
|--------|-------|-------|
| Managed by | Component itself | Parent component |
| Mutable | Yes (via setState) | No (read-only) |
| Triggers re-render | Yes | Yes (when changed) |
| Purpose | Internal data | External data |

---

## Component Patterns

### Component Composition
- **What**: Building complex UIs from simpler components
- **Why**: Reusability, separation of concerns
- **How**: 
  ```javascript
  function App() {
    return (
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    )
  }
  ```

---

### Compound Components
- **What**: Components that work together to form a complete UI
- **Why**: Flexible APIs, encapsulated logic
- **How**:
  ```javascript
  <Select>
    <Select.Option>Option 1</Select.Option>
    <Select.Option>Option 2</Select.Option>
  </Select>
  ```

---

### Render Props
- **What**: Sharing code between components using a prop whose value is a function
- **Why**: Reusable behavior
- **How**:
  ```javascript
  <MouseRenderProp render={position => (
    <Cat mouse={position} />
  )} />
  ```

---

### Higher-Order Components (HOC)
- **What**: Function that takes component and returns new component
- **Why**: Reusable logic/cross-cutting concerns
- **How**:
  ```javascript
  const EnhancedComponent = withSubscription(DataComponent, selectData)
  ```

---

## Build Tools & Frameworks

### Vite
- **What**: Next-generation frontend build tool
- **Why**: Extremely fast HMR (Hot Module Replacement), optimized builds
- **How**: `npm create vite@latest`
- **Theory**: Uses native ES modules. Dev server serves modules directly. Builds are optimized with Rollup.

---

### JSX
- **What**: JavaScript XML - syntax extension for React
- **Why**: Write HTML-like code in JavaScript
- **How**: `const element = <h1>Hello</h1>`
- **Theory**: Gets transformed to `React.createElement()`. Must have single root element.

---

### React.memo
- **What**: Higher-order component for memoizing components
- **Why**: Prevent unnecessary re-renders
- **How**: `const MemoizedComponent = memo(Component)`
- **Theory**: Memoizes render output. Re-renders only if props change.

---

### React.lazy & Suspense
- **What**: Code splitting for React components
- **Why**: Load components only when needed (reduce initial bundle)
- **How**:
  ```javascript
  const LazyComponent = lazy(() => import('./Component'))
  
  <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
  ```

---

## CSS & Styling

### CSS Modules
- **What**: Scoped CSS by default
- **Why**: Avoid class name conflicts
- **How**: `import styles from './Component.module.css'` then `styles.className`
- **Theory**: Generates unique class names at build time.

---

### Tailwind CSS
- **What**: Utility-first CSS framework
- **Why**: Rapid UI development, consistent design system
- **How**: Utility classes like `className="p-4 bg-blue-500"`
- **Theory**: Generates minimal CSS with utility classes.

---

### Styled Components
- **What**: CSS-in-JS library
- **Why**: Scoped styles, dynamic styling based on props
- **How**:
  ```javascript
  const Button = styled.button`
    background: ${props => props.primary ? 'blue' : 'gray'};
  `
  ```

---

## Data Fetching

### fetch API
- **What**: Native browser API for making HTTP requests
- **Why**: Standard way to fetch data from APIs
- **How**:
  ```javascript
  fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => setData(data))
  ```

---

### async/await
- **What**: Syntactic sugar for Promises
- **Why**: Cleaner, more readable async code
- **How**:
  ```javascript
  async function fetchData() {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
  ```

---

### useEffect for Data Fetching
- **What**: Common pattern for fetching data on mount
- **Why**: Components need data when they mount
- **How**:
  ```javascript
  useEffect(() => {
    fetchData().then(setData)
  }, [])
  ```

---

## Event Handling

### onClick Handler
- **What**: Event handler for click events
- **Why**: Make UI interactive
- **How**: `<button onClick={handleClick}>Click</button>`
- **Theory**: Pass a function, not call it directly.

---

### Event Object
- **What**: Object containing event details
- **Why**: Access event data (target, prevent default)
- **How**: `function handleClick(e) { e.preventDefault() }`
- **Theory**: Synthetic event - React's cross-browser wrapper.

---

## Lifecycle (Class Components)

### componentDidMount
- **What**: Runs after component mounts
- **Equivalent in hooks**: useEffect with empty dependency array

### componentDidUpdate
- **What**: Runs after component updates
- **Equivalent in hooks**: useEffect with specific dependencies

### componentWillUnmount
- **What**: Runs before component unmounts
- **Equivalent in hooks**: useEffect cleanup function

---

## Performance Optimization

### React.memo
- **What**: Memoize component to prevent re-renders
- **Why**: Optimize performance
- **When**: When component renders often with same props

### useMemo
- **What**: Memoize expensive calculations
- **Why**: Avoid recalculation on every render
- **When**: Complex computations

### useCallback
- **What**: Memoize functions
- **Why**: Prevent child re-renders when passing callbacks
- **When**: Passing callbacks to memoized children

### Virtualization
- **What**: Only render visible items in lists
- **Why**: Performance with large lists
- **How**: Use libraries like react-window

---

## Error Handling

### Error Boundaries
- **What**: Components that catch JavaScript errors in children
- **Why**: Prevent app from crashing
- **How**: Class component with componentDidCatch

### try/catch
- **What**: JavaScript error handling
- **Why**: Handle async errors
- **How**:
  ```javascript
  try {
    const data = await fetchData()
  } catch (error) {
    setError(error.message)
  }
  ```

---

## Testing Concepts

### Unit Testing
- **What**: Testing individual components/functions in isolation
- **Why**: Ensure each piece works correctly

### Integration Testing
- **What**: Testing how components work together
- **Why**: Ensure parts connect properly

### Rendering Tests
- **What**: Testing what gets rendered
- **Why**: Verify UI output
