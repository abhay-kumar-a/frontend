# Tailwind CSS Projects - Architecture

## Project Overview
- **Purpose**: Landing page showcasing team members/profiles with Tailwind CSS styling
- **Type**: Presentation website

## Tech Stack
- React 19
- Vite 8
- Tailwind CSS 4
- Remix Icon

## Folder Structure
```
tailwind-css-projects/
├── src/
│   ├── components/
│   │   └── presentation/
│   │       ├── section1/
│   │       │   ├── Section1.jsx
│   │       │   ├── Page1.jsx
│   │       │   ├── Navbar.jsx
│   │       │   ├── LeftContent.jsx
│   │       │   ├── RightContent.jsx
│   │       │   ├── Hero.jsx
│   │       │   ├── Arrow.jsx
│   │       │   └── Rightcard.jsx
│   │       └── section2/
│   │           └── Section2.jsx
│   ├── data/
│   │   └── Profile.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Component Hierarchy
```
App (Root)
└── Section1
    ├── Navbar
    └── Page1
        ├── LeftContent
        │   ├── Hero
        │   └── Arrow
        └── RightContent
            └── Rightcard (×N - mapped from profiles)
```

## Data Flow
1. `Profile.jsx` contains static array of profile objects (id, img, intro, tag)
2. `App.jsx` imports profiles and passes to `Section1` via props
3. `Section1` receives props and passes to `Page1`
4. `Page1` passes profile data to `RightContent`
5. `RightContent` maps over profiles array and renders `Rightcard` for each

## Props Flow
```
App → Section1 (profile) → Page1 (profile) → RightContent (profile) → Rightcard (id, img, tag, intro)
```

## Key Concepts Used

### Props
- **What**: Properties passed from parent to child component
- **Why**: Enable component reusability and data sharing
- **How**: `<Section1 profile={profiles} />` then access via `props.profile`

### Array Mapping
- **What**: Transforming array data into React elements
- **Why**: Render lists dynamically from data
- **How**: `{props.profile.map((profile) => <Rightcard />)}`

### Tailwind CSS
- **What**: Utility-first CSS framework
- **Why**: Rapid UI development with pre-built classes
- **How**: `className="flex py-3 h-[90vh] px-10 gap-20"`

### Component Composition
- **What**: Building complex UI from simpler components
- **Why**: Reusability, separation of concerns

---

## File Reference

| File | Purpose |
|------|---------|
| main.jsx | Entry point, renders App |
| App.jsx | Root component, passes profile data |
| Profile.jsx | Static data source |
| Section1.jsx | Wrapper for section1 components |
| Page1.jsx | Main page layout |
| Navbar.jsx | Navigation/header |
| LeftContent.jsx | Left side content container |
| RightContent.jsx | Right side, maps profiles |
| Rightcard.jsx | Individual profile card |
| Hero.jsx | Hero content |
| Arrow.jsx | Arrow component |
| Section2.jsx | Placeholder for section2 |
