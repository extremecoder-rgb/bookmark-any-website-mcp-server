# 📑 Bookmark Manager MCP Server

A full-stack **Next.js** application that allows users to organize and manage their bookmarks efficiently.  
The project features a **React-based frontend**, a **Node.js backend**, and a **SQLite database** powered by Prisma.

---

## 🚀 Getting Started

Install dependencies and run the development server:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

The app will be available at [http://localhost:3000](http://localhost:3000).
You can start editing the UI by modifying `src/app/page.tsx`. The page will automatically reload as you make changes.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load [Geist](https://vercel.com/font), Vercel’s modern font family.

---

## 📂 Project Structure

```
src/
  app/         # Application entry points, pages, and API routes
  components/  # Reusable React components
  hooks/       # Custom React hooks
  lib/         # Utility functions and helpers
  types/       # TypeScript type definitions
public/        # Static assets (images, icons, fonts)
prisma/        # Prisma schema and SQLite database files
```

---

## 🔄 Application Workflow

The flow for adding a new bookmark:

```mermaid
graph TD
    A[User clicks "Add Bookmark"] --> B{Show BookmarkForm}
    B --> C[User fills and submits form]
    C --> D[Trigger addBookmark in useBookmarks hook]
    D --> E[POST request to /api/bookmarks]
    E --> F[API route calls createUserBookmark]
    F --> G[Save bookmark in database]
    G --> H[Return new bookmark to client]
    H --> I[Update state in useBookmarks hook]
    I --> J[Re-render BookmarkList with new entry]
```

---
