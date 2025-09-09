# Bookmark Any Website - MCP Server

A full-stack application that allows users to bookmark and categorize any website. This server is built with Next.js and uses Prisma as an ORM for database management.

-----

## Features

  * **User Authentication:** Secure user registration and login.
  * **Bookmark Management:** Create, read, update, and delete bookmarks.
  * **Categorization:** Organize bookmarks into custom categories.
  * **API Endpoints:** A well-defined API for interacting with the bookmarking service.

-----

## Tech Stack

  * **Framework:** [Next.js](https://nextjs.org/)
  * **ORM:** [Prisma](https://www.prisma.io/)
  * **Database:** [SQLite](https://www.sqlite.org/index.html) (or any other database supported by Prisma)
  * **Linting:** [ESLint](https://eslint.org/)
  * **Language:** [TypeScript](https://www.typescriptlang.org/)

-----

## Getting Started

### Prerequisites

  * Node.js (v18.x or later)
  * npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/extremecoder-rgb/bookmark-any-website-mcp-server.git
    cd bookmark-any-website-mcp-server
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up the database:**
      * Initialize Prisma:
        ```bash
        npx prisma init
        ```
      * Run database migrations:
        ```bash
        npx prisma migrate dev
        ```
4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will be available at `http://localhost:3000`.

-----

## Usage

Once the application is running, you can interact with it through the API endpoints. Use a tool like Postman or `curl` to send requests to the server.

-----

## API Endpoints

The API routes are located in the `src/app/api/` directory.

  * **`POST /api/bookmarks`**: Create a new bookmark.
  * **`GET /api/bookmarks`**: Get a list of all bookmarks.
  * **`GET /api/bookmarks/[id]`**: Get a specific bookmark by ID.
  * **`PUT /api/bookmarks/[id]`**: Update a bookmark.
  * **`DELETE /api/bookmarks/[id]`**: Delete a bookmark.

-----

## Project Structure

```
.
├── prisma/               # Prisma schema and database files
│   ├── dev.db
│   └── schema.prisma
├── public/               # Static assets
│   ├── next.svg
│   └── vercel.svg
├── src/
│   ├── app/              # Application pages and API routes
│   │   ├── api/          # API endpoints
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/       # Reusable React components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

-----

## Contributing

Contributions are welcome\! Please feel free to submit a pull request or open an issue.

1.  Fork the repository.
2.  Create a new branch: `git checkout -b feature-name`
3.  Make your changes and commit them: `git commit -m 'Add some feature'`
4.  Push to the branch: `git push origin feature-name`
5.  Submit a pull request.

-----

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

-----

## Contact

Created by [@extremecoder-rgb](https://github.com/extremecoder-rgb) - feel free to contact me\!