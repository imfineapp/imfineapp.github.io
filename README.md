# Menhausen - Frontend Prototype

This is a React + Vite + TailwindCSS frontend prototype for the Menhausen stress management application.

## Prerequisites

- Node.js (v18 or newer recommended)
- npm (comes with Node.js)

## Getting Started Locally

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the backend proxy (port 5000) which serves the frontend.
    Open `http://localhost:5000` in your browser.

    *Alternatively, for frontend-only development:*
    ```bash
    npm run dev:client
    ```

## Project Structure

-   `client/src`: Frontend source code
    -   `pages/`: Application routes/pages
    -   `components/`: Reusable UI components
    -   `lib/`: Utilities and helpers
-   `server/`: Simple Express server (proxies frontend in dev)
-   `shared/`: Shared types/schemas (if any)

## Technologies Used

-   **Framework:** React + Vite
-   **Routing:** wouter
-   **Styling:** Tailwind CSS v4 + tailwind-animate
-   **Icons:** Lucide React
-   **Data Fetching:** TanStack Query
-   **UI Components:** Shadcn/UI (Radix Primitives)

## Building for Production

To create a production build:

```bash
npm run build
```

The output will be in `dist/`.
