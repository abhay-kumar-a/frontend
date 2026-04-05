# Tailwind CSS Projects - Keywords & Theory

## React Keywords

### Props
- **What**: Properties passed from parent to child component
- **Why**: Enable component reusability and data sharing between components
- **How**: Pass data with `<Component data={value} />`, access via `props.data` or destructuring `{ data }`
- **In this project**: Profile data passed from App → Section1 → Page1 → RightContent → Rightcard

### Component
- **What**: Reusable piece of UI, either function or class
- **Why**: Break UI into independent, reusable pieces
- **How**: `function Component() { return <div>...</div> }`
- **In this project**: Navbar, Page1, LeftContent, RightContent, Rightcard, Hero, Arrow

### Import/Export
- **What**: ES6 module system for sharing code between files
- **Why**: Organize code into separate files, import when needed
- **How**: `import Component from './Component'` and `export default Component`
- **In this project**: All components imported where needed

### JSX
- **What**: JavaScript XML - syntax extension for writing React elements
- **Why**: Write HTML-like code in JavaScript, more readable
- **How**: `const element = <h1>Hello</h1>`
- **In this project**: All .jsx files use JSX syntax

### map()
- **What**: JavaScript array method for transforming each element
- **Why**: Render lists dynamically from array data
- **How**: `array.map(item => <Component key={item.id} />)`
- **In this project**: `{props.profile.map((profile) => <Rightcard />)}`

---

## Tailwind CSS Keywords

### Tailwind CSS
- **What**: Utility-first CSS framework
- **Why**: Rapid UI development without writing custom CSS
- **How**: Apply pre-built utility classes via className

### Flexbox Utilities
- **What**: `flex` enables flexbox layout
- **Why**: Create flexible layouts that adapt to content
- **How**: `className="flex"` enables display: flex
- **In this project**: `flex py-3 h-[90vh] px-10 gap-20`

### Justify/Align
- **What**: `justify-between`, `items-center` control alignment
- **Why**: Position elements horizontally and vertically
- **How**: `justify-between` = space-between, `items-center` = center alignment
- **In this project**: `items-center justify-between`

### Padding/Margin
- **What**: `p-` for padding, `m-` for margin with t/r/b/l variants
- **Why**: Add spacing between elements
- **How**: `p-6` = padding 1.5rem, `px-10` = horizontal padding
- **In this project**: `py-3 px-10`, `p-6`

### Width/Height
- **What**: `w-` for width, `h-` for height
- **Why**: Control element dimensions
- **How**: `w-1/4` = 25% width, `h-screen` = 100vh height
- **In this project**: `w-1/4`, `w-2/3`, `h-full`, `h-[90vh]`

### Colors
- **What**: Built-in color palette
- **Why**: Apply colors without defining custom CSS
- **How**: `bg-black`, `bg-gray-400`, `text-white`, `bg-pink-800`
- **In this project**: Multiple color utilities used

### Border Radius
- **What**: `rounded-` classes for border-radius
- **Why**: Create rounded corners
- **How**: `rounded-full`, `rounded-3xl`
- **In this project**: `rounded-full`, `rounded-4xl`

### Text Utilities
- **What**: `text-` for font-size, `font-` for font-weight
- **Why**: Style text without custom CSS
- **How**: `text-sm`, `tracking-wider`
- **In this project**: `text-sm`, `tracking-wider`

### Overflow
- **What**: `overflow-x-auto` handles overflow content
- **Why**: Enable horizontal scrolling for overflow content
- **How**: `overflow-x-auto` enables scrollbar when content overflows
- **In this project**: `overflow-x-auto` in RightContent

### Arbitrary Values
- **What**: Square bracket notation for custom values
- **Why**: Use values not in default Tailwind palette
- **How**: `h-[90vh]` = height: 90vh
- **In this project**: `h-[90vh]`

---

## JavaScript Keywords

### Array
- **What**: Ordered collection of values
- **Why**: Store multiple related values
- **How**: `const arr = [1, 2, 3]`
- **In this project**: Profile array in Profile.jsx

### Object
- **What**: Key-value pairs collection
- **Why**: Store structured data with named properties
- **How**: `const obj = { key: "value" }`
- **In this project**: Each profile object has id, img, intro, tag

### Template Literals
- **What**: Backtick strings with interpolation
- **Why**: Embed variables in strings
- **How**: `` `Hello ${name}` ``
- **In this project**: Used in className attributes

---

## Data Flow Keywords

### Static Data
- **What**: Data defined in file, doesn't change
- **Why**: Simulate API data, store constant values
- **How**: Define array in separate file, export and import
- **In this project**: Profile.jsx contains static profile array

### Props Drilling
- **What**: Passing props through multiple component levels
- **Why**: Share data between parent and distant child
- **Problem**: Can become messy with deep nesting
- **In this project**: Profile passed through 4+ levels

### Data Mapping
- **What**: Converting array data to UI elements
- **Why**: Render dynamic lists
- **How**: `data.map(item => <Component />)`
- **In this project**: Profile array mapped to Rightcard components

---

## Project Structure Keywords

### Component Composition
- **What**: Building UI by combining smaller components
- **Why**: Reusability, maintainability, separation of concerns
- **How**: Parent renders children, children handle specific tasks
- **In this project**: App → Section1 → Page1 → LeftContent/RightContent

### Presentation Components
- **What**: Components focused on UI/rendering, receive data via props
- **Why**: Separate concerns, make components reusable
- **How**: Components that only render JSX
- **In this project**: All components in presentation folder

### Data-Driven Components
- **What**: Components that render based on input data
- **Why**: Dynamic rendering from data
- **How**: Components that receive and map data
- **In this project**: RightContent maps profile array

---

## Vite/Build Keywords

### Vite
- **What**: Next-generation frontend build tool
- **Why**: Extremely fast development with HMR
- **How**: `npm create vite@latest`, `npm run dev`
- **In this project**: Build tool for development

### npm
- **What**: Node package manager
- **Why**: Install and manage dependencies
- **How**: `npm install`, `npm run dev`
- **In this project**: Used to install React, Tailwind, Vite

### ES Modules
- **What**: JavaScript module system using import/export
- **Why**: Organize code, share functionality
- **How**: `import` and `export` syntax
- **In this project**: All file imports/exports
