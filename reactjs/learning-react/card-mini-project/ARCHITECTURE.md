# Card Mini Project - Architecture

## Project Overview
- **Purpose**: Job listing display with company cards showing job details
- **Type**: Web application displaying job opportunities

## Tech Stack
- React 19
- Vite 8
- Lucide React (icons)

## Folder Structure
```
card-mini-project/
├── src/
│   ├── components/
│   │   ├── JobCard.jsx
│   │   └── User.jsx
│   ├── assets/
│   │   └── companies-logo/
│   │       ├── google.png, meta.png, amazon.png
│   │       ├── microsoft.png, netflix.png, apple.png
│   │       ├── twitter.png, uber.png, airbnb.png, slack.png
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Component Hierarchy
```
App (Root)
└── JobCard (×10 - mapped from jobsData)
```

## Data Flow
1. `App.jsx` contains static `jobsData` array with 10 job objects
2. App maps over `jobsData` array
3. Each job object passed to `JobCard` as individual props
4. `JobCard` renders individual job card with all job details

## Props Flow
```
App → JobCard (companyLogo, companyName, postedDays, jobTitle, category1, category2, price, location)
```

## Data Structure

### jobsData Array
```javascript
{
  id: number,
  companyLogo: string (path),
  companyName: string,
  postedDays: string,
  jobTitle: string,
  category1: string (Full Time/Part Time),
  category2: string (Senior/Mid/Entry Level),
  price: string,
  location: string
}
```

---

## Component Details

### App.jsx
- Root component containing all data
- Defines arrays: `arr`, `obj`, `user` (all commented out)
- Main data: `jobsData` - array of 10 job objects
- Maps `jobsData` to render 10 `JobCard` components
- Passes each job property as individual props

### JobCard.jsx
- Reusable card component for displaying job information
- Receives 8 props from parent
- Uses Lucide React `Bookmark` icon
- Renders: company logo, name, posted date, job title, categories, price, location, apply button

### User.jsx
- Simple component (currently unused/commented)
- Demonstrates basic props usage with inline styles

---

## File Reference

| File | Purpose |
|------|---------|
| main.jsx | Entry point, renders App |
| App.jsx | Root component, holds jobsData, maps to JobCards |
| JobCard.jsx | Individual job card display |
| User.jsx | User component (unused) |
| index.css | Global styles |
| companies-logo/ | Company logo images |
