# Coffee R Us Admin Portal

This is a React-based SPA for managing coffee products in a simulated e-commerce store. Built as a summative project to demonstrate:

- State management with React Hooks (standard and custom)
- Client-side routing with `react-router-dom`
- Full CRUD functionality using `json-server` as a RESTful mock API
- Component-based architecture with reusable forms and cards
- Unit testing with Vitest and React Testing Library

## Features

- View coffee inventory with editable product cards
- Add new coffee products via an admin form
- Edit product prices inline (patch request)
- Real-time UI updates without refresh
- Responsive, accessible layout
- Unit test coverage for critical components

## Component Tree

```css
App
├── Header
├── Routes
│ ├── Home
│ ├── Shop
│ │ └── ProductCard (× N)
│ └── AdminPortal
│ └── ProductForm
└── ProductProvider (Context)
```

### Additional folders:
- `context/` – holds the global state provider
- `components/` – reusable UI parts
- `pages/` – route-level views
- `__tests__/` – unit tests

## Installation & Setup

1. **Clone the repo**:
```bash
git clone https://github.com/nrathbone-turing/coffee-admin-spa.git
cd coffee-admin-spa
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the mock backend (json-server)**:
```bash
npx json-server --watch db.json --port 3001
```

4. **Run the app locally**:
```bash
npm run dev
```

## Running Tests

```bash
npx vitest
```

Tests are written with:

- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)
- [vitest](https://vitest.dev/) for fast unit testing

## About This Repo

### Author
Nick Rathbone
[GitHub Profile](https://github.com/nrathbone-turing)

*Note: This project is part of the Flatiron React Module labs/assessments*

### License
MIT — feel free to use or remix!