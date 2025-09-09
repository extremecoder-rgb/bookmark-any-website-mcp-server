
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

### Mermaid Diagram (GitHub Rendered)

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

### Plain Text Fallback (for environments without Mermaid)

1. User clicks **Add Bookmark**
2. **BookmarkForm** is shown
3. User fills and submits the form
4. `addBookmark` function in `useBookmarks` hook is triggered
5. `POST /api/bookmarks` is called
6. API route calls `createUserBookmark`
7. Bookmark is saved in the database
8. Server returns the new bookmark
9. State in `useBookmarks` hook is updated
10. `BookmarkList` re-renders with the new bookmark

---

## 📘 Resources

* [Next.js Documentation](https://nextjs.org/docs) – Explore features and APIs.
* [Interactive Tutorial](https://nextjs.org/learn) – Learn Next.js hands-on.
* [Next.js GitHub](https://github.com/vercel/next.js) – Contribute and give feedback.

---
