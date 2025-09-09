# My Server - Bookmark Manager

This is a [Next.js](https://nextjs.org) project that allows users to manage their bookmarks. It is a full-stack application with a React-based frontend, a Node.js backend, and a SQLite database.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Project Structure

- **`src/app`**: Contains the core application code, including pages and API routes.
- **`src/components`**: Reusable React components.
- **`src/hooks`**: Custom React hooks.
- **`src/lib`**: Utility functions and libraries.
- **`src/types`**: TypeScript type definitions.
- **`public`**: Static assets like images and fonts.
- **`prisma`**: Prisma schema and database files.

## Application Flowchart

Here is a flowchart that illustrates the application's workflow for bookmarking a website:

```mermaid
graph TD
    A[User clicks "Add Bookmark"] --> B{Show BookmarkForm};
    B --> C[User fills out and submits form];
    C --> D[Call `addBookmark` function in `useBookmarks` hook];
    D --> E[POST request to `/api/bookmarks`];
    E --> F[API route calls `createUserBookmark`];
    F --> G[Create new bookmark in database];
    G --> H[Return new bookmark to client];
    H --> I[Update bookmarks state in `useBookmarks` hook];
    I --> J[Re-render `BookmarkList` with new bookmark];
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
