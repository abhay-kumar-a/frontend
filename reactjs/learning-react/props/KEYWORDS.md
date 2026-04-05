# Props Project - Keywords & Theory

## React Keywords

### Props
- **What**: Properties passed from parent to child component
- **Why**: Enable component reusability and data sharing
- **How**: Pass with `<Card user="Abhay" age={29} />`, access via `props.user` or `props.age`
- **In this project**: Card receives user, age, image props from App
- **Theory**: Props are read-only (immutable). Child cannot modify parent's state. Props flow one direction: parent to child.

### Props Passing
- **What**: Sending data from parent to child
- **Why**: Share data between components
- **How**: `<Card prop={value} />`
- **In this project**: `<Card user='Abhay Kumar' age={29} image='url' />`

### Component Reusability
- **What**: Same component used multiple times with different data
- **Why**: Don't write same UI multiple times
- **How**: Create component with props, reuse with different props
- **In this project**: Card component used 6 times

### StrictMode
- **What**: Development tool that highlights potential problems
- **Why**: Detect bugs early, like missing cleanup in useEffect
- **How**: Wrap app with `<StrictMode><App /></StrictMode>`
- **In this project**: main.jsx wraps App in StrictMode

---

## JavaScript Keywords

### Arrow Functions
- **What**: Concise function syntax
- **Why**: Shorter syntax
- **How**: `const fn = () => {}`
- **In this project**: Component defined as arrow function

### String vs Number Props
- **What**: Different data types for props
- **Why**: Correct data types for correct rendering
- **How**: String: `prop="value"`, Number: `prop={42}`
- **In this project**: user uses string, age uses number `{29}`

### Template Literals
- **What**: Strings with interpolation
- **Why**: Embed variables
- **How**: `` `string ${variable}` ``
- **In this project**: In JSX expressions

---

## JSX Keywords

### JSX
- **What**: JavaScript XML syntax
- **Why**: Write React elements in HTML-like syntax
- **How**: `<div><h1>Title</h1></div>`
- **In this project**: All component returns

### Self-Closing Tags
- **What**: Tags without closing tag
- **Why**: Cleaner syntax for empty elements
- **How**: `<img src="..." />`, `<Component />`
- **In this project**: img tag, Card component

### Fragment
- **What**: `<>...</>` wrapper without extra DOM node
- **Why**: Return multiple elements without wrapper div
- **How**: `<> <div>A</div> <div>B</div> </>`
- **In this project**: Card component uses `<>`

### Expressions in JSX
- **What**: JavaScript inside curly braces
- **Why**: Render dynamic values
- **How**: `{props.user}`, `{props.age + 1}`
- **In this project**: Rendering prop values

---

## Component Patterns

### Functional Components
- **What**: Components as JavaScript functions
- **Why**: Simpler than class components
- **How**: `function Component(props) { return JSX }`
- **In this project**: Card component

### Props Destructuring
- **What**: Extract props using destructuring
- **Why**: Cleaner code
- **How**: `function Card({ user, age, image })`
- **In this project**: Currently uses props.user (could use destructuring)

### Component Composition
- **What**: Combining components together
- **Why**: Build complex UI from simple pieces
- **How**: Parent renders children
- **In this project**: App renders multiple Cards

---

## Image Rendering

### img Tag
- **What**: HTML image element
- **Why**: Display images
- **How**: `<img src="url" alt="text" />`
- **In this project**: User profile images

### src Attribute
- **What**: Image source URL
- **Why**: Tell browser where image is
- **How**: `<img src="https://..." />`
- **In this project**: Unsplash image URLs

### alt Attribute
- **What**: Alternative text for images
- **Why**: Accessibility, fallback text
- **How**: `<img alt="description" />`
- **In this project**: Not currently used (should add)

---

## Data Flow

### Top-Down Data Flow
- **What**: Data flows from parent to children
- **Why**: React's unidirectional data flow
- **How**: Parent has data, passes to children via props
- **In this project**: App passes data to Card

### One-Way Data Flow
- **What**: Data only goes one direction
- **Why**: Predictable state, easier debugging
- **How**: Parent → Child (props), Child → Parent (callbacks)
- **In this project**: Only props (one-way)

### Props are Read-Only
- **What**: Child cannot modify props
- **Why**: Maintain data integrity
- **How**: Props should be treated as immutable
- **In this project**: Card only reads props, doesn't modify

---

## Best Practices

### Destructuring Props
- **Recommendation**: Use `{ user, age, image }` instead of `props.user`
- **Why**: Cleaner, more readable code

### Add alt to Images
- **Recommendation**: Add alt attribute to img tags
- **Why**: Accessibility requirement

### Extract Data
- **Recommendation**: Move user data to separate array/file
- **Why**: Cleaner component, easier to maintain
