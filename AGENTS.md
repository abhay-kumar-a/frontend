# AGENTS.md - Developer Guidelines for This Repository

## Overview

This repository contains multiple vanilla HTML, CSS, and JavaScript learning and practice projects. It does **not** use any modern build systems (Node.js, npm, webpack, etc.).

---

## Project Structure

```
frontend/
├── html/                  # JavaScript practice files
├── css/                   # CSS practice files  
├── html-english-tutorial-project/  # Tutorial HTML project
├── dummy_project/        # Practice projects
├── blog-website-video/   # Blog website practice
└── javascripts/          # Additional JS files
```

---

## Build / Run Commands

### Running Projects
- **Live Server**: Use VS Code Live Server extension (default port: 5501)
  - Right-click HTML file → "Open with Live Server"
  - Or use `npx serve` if installed globally

### No Build Commands Available
This repository uses **vanilla HTML/CSS/JS only** - no build, lint, or test commands exist.

### Testing
- No automated tests in this repository
- Manual testing via browser

---

## Code Style Guidelines

### General Principles
- Keep code simple and readable for learning purposes
- Use descriptive variable and function names
- Comment complex logic for educational value

### HTML Guidelines
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`, etc.)
- Always include `lang` attribute on `<html>` tag
- Use lowercase for tags and attributes
- Quote all attribute values
- Indent with 4 spaces or 2 spaces (be consistent within files)
- Put CSS in `<style>` tags in `<head>` or external stylesheets
- Put JS in `<script>` tags before `</body>` or external files

### CSS Guidelines
- Use external stylesheets when possible
- Follow BEM naming convention for classes: `block__element--modifier`
- Use meaningful class names
- Group related properties together
- Use shorthand properties where appropriate
- Use hex colors or named colors

### JavaScript Guidelines
- Use `const` by default, `let` when mutation needed, avoid `var`
- Use camelCase for variable and function names
- Use PascalCase for constructor functions and classes
- Use meaningful variable names
- Use template literals instead of string concatenation
- Prefer `for...of` for array iteration
- Use arrow functions for callbacks
- Declare variables at the top of their scope
- Use strict equality (`===` and `!==`) instead of loose equality

### Error Handling
- Use `try...catch` for code that may throw errors
- Log meaningful error messages to console
- Handle potential `null`/`undefined` values before accessing properties

### Formatting
- Use 4-space indentation
- Maximum line length: 100 characters (soft limit)
- Add newlines between logical sections
- One blank line at end of file

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Variables | camelCase | `userName`, `totalCount` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRY`, `API_URL` |
| Functions | camelCase (verb prefix) | `getUserData()`, `calculateTotal()` |
| Classes | PascalCase | `UserService`, `PaymentHandler` |
| CSS Classes | kebab-case | `.main-header`, `.nav-links` |
| HTML IDs | kebab-case | `<div id="main-content">` |
| Files | kebab-case | `user-profile.js`, `contact-form.html` |

---

## VS Code Settings

The repository includes VS Code settings:
- Live Server port: 5501
- Editor fast scroll sensitivity: 2
- Horizontal scrollbar size: 4

Recommended extensions:
- Live Server (for preview)
- Prettier (for formatting)
- ESLint (for JS linting)

---

## Notes for AI Agents

1. **No Package Management**: This repo does not use npm/yarn/pnpm - do not add package.json or node_modules
2. **Browser-Based**: All code runs in browsers - no server-side code
3. **Learning Projects**: Code may contain educational comments and varied coding styles from different learning stages
4. **No TypeScript**: Plain JavaScript only - do not add TypeScript configuration
5. **Manual Testing**: Test changes in browser using Live Server or by opening HTML files directly
