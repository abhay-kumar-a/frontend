# Card Mini Project - Keywords & Theory

## React Keywords

### Props
- **What**: Properties passed from parent to child component
- **Why**: Enable component reusability and data sharing
- **How**: Pass with `<Component prop={value} />`, access via `props.prop` or destructuring
- **In this project**: JobCard receives companyLogo, companyName, postedDays, jobTitle, category1, category2, price, location

### Component
- **What**: Reusable piece of UI defined as function
- **Why**: Break UI into independent, reusable pieces
- **How**: `function Component(props) { return <div>...</div> }`
- **In this project**: JobCard and User components

### map()
- **What**: JavaScript array method transforming each element
- **Why**: Render lists dynamically from array data
- **How**: `array.map(item => <Component key={item.id} />)`
- **In this project**: `jobsData.map(item => <JobCard ... />)`

### Key
- **What**: Special prop for React to track list items
- **Why**: Efficient reconciliation, prevent issues with list updates
- **How**: `map(item => <Component key={item.id} />)`
- **In this project**: Not explicitly added (should add for best practice)

---

## JavaScript Keywords

### Array of Objects
- **What**: Array containing multiple object elements
- **Why**: Store related structured data
- **How**: `const arr = [{id: 1, name: 'A'}, {id: 2, name: 'B'}]`
- **In this project**: jobsData array with 10 job objects

### Object Destructuring
- **What**: Extract values from objects
- **Why**: Cleaner syntax for accessing object properties
- **How**: `const { name, age } = person`
- **In this project**: Accessing props properties in JobCard

### Template Literals
- **What**: Backtick strings with interpolation
- **Why**: Embed variables in strings
- **How**: `` `Hello ${name}` ``
- **In this project**: Used in className strings potentially

### Import/Export
- **What**: ES6 module system
- **Why**: Share code between files
- **How**: `import Component from './Component'` and `export default Component`
- **In this project**: All imports/exports for components

---

## CSS Keywords

### CSS Classes
- **What**: Style rules applied via className
- **Why**: Reusable styling across elements
- **How**: `.className { property: value }` and `<div className="className">`
- **In this project**: parent, jobCard, top, center, tag, buttom, price

### Nested CSS
- **What**: CSS with child selectors
- **Why**: Organize related styles
- **How**: `.parent .child { ... }`
- **In this project**: Used in index.css for card structure

### Flexbox
- **What**: CSS layout system
- **Why**: Create flexible layouts
- **How**: `display: flex`, `justify-content`, `align-items`
- **In this project**: Card layout uses flex

### Inline Styles
- **What**: Styles applied directly on element
- **Why**: Quick one-off styling
- **How**: `<div style={{ color: 'pink' }}>`
- **In this project**: User.jsx uses inline styles

---

## Data Flow Keywords

### Static Data
- **What**: Data defined in component/file
- **Why**: Simulate API data for display
- **How**: Define array, export/import
- **In this project**: jobsData array in App.jsx

### Data Mapping
- **What**: Converting array data to UI elements
- **Why**: Render dynamic lists
- **How**: `data.map(item => <Component />)`
- **In this project**: Mapping jobsData to JobCard

### Props Passing
- **What**: Passing data from parent to child
- **Why**: Share data between components
- **How**: `<Child prop={value} />`
- **In this project**: All job properties passed to JobCard

---

## Icons & Assets

### Lucide React
- **What**: Icon library for React
- **Why**: Easy to use SVG icons
- **How**: `import { IconName } from 'lucide-react'`
- **In this project**: Bookmark icon in JobCard

### Static Assets
- **What**: Images, fonts stored in project
- **Why**: Visual content for UI
- **How**: Import or use path
- **In this project**: Company logos in assets/companies-logo/

### Image Rendering
- **What**: Displaying images in React
- **Why**: Show company logos
- **How**: `<img src={path} alt="description" />`
- **In this project**: Company logos in JobCard

---

## Component Patterns

### Reusable Components
- **What**: Components designed for reuse
- **Why**: Write once, use multiple times
- **How**: Make component accept props
- **In this project**: JobCard used 10 times with different data

### Props as Configuration
- **What**: Using props to configure component behavior
- **Why**: Same component, different data
- **How**: Pass data through props
- **In this project**: JobCard configured by job data props

### Data-Driven Rendering
- **What**: UI rendered based on data
- **Why**: Dynamic content from data source
- **How**: Map data array to components
- **In this project**: Jobs rendered from jobsData array

---

## Build Tools

### Vite
- **What**: Build tool with fast HMR
- **Why**: Quick development
- **How**: `npm run dev`
- **In this project**: Build tool

### ES Modules
- **What**: JavaScript module system
- **Why**: Organize code
- **How**: import/export
- **In this project**: All code uses ES modules

---

## Best Practices (Notes)

### Add Key Prop
- **What**: Add unique key when mapping
- **Why**: React reconciliation performance
- **How**: `jobsData.map(item => <JobCard key={item.id} ... />)`
- **Recommendation**: Should add key prop to JobCard mapping

### Extract Static Data
- **What**: Move data to separate file
- **Why**: Cleaner component, separation of concerns
- **How**: Create data/jobs.js, export jobsData
- **Recommendation**: Consider extracting to separate file

### Prop Types
- **What**: Define expected prop types
- **Why**: Type safety, documentation
- **How**: Use PropTypes or TypeScript
- **Recommendation**: Consider adding prop validation
