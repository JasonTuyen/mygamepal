# mygamepal

MyGamePal is a web application to help users keep track of their video game catalog.

## Built With
* Typescript
* PostgreSQL
* Tailwind CSS
* DasiyUI
* NextJS
* Hosted on Vercel

## Demo
Access live website here: [https://mygamepal.vercel.app/](https://mygamepal.vercel.app/)

## Getting Started
1. Head to the website.
2. Login using the 3rd Party Auth Service (Currently only GitHub is available).
3. Head over to the "favorites" page to track your video game catalog.

## Installation Instructions (to build your own version)
1. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
2. The only additional dependencies are: @vercel/postgres, next-auth, and daisyUI.
3. Detailed dependency information is located in the "package.json" file.
4. After copying this repo or creating your own nextjs app, start the dev server with:
   ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
7. Useful Links
   * [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
   * [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
   * [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - easiest way to deploy your Next.js app.

## Future Development Plans
* Implement Credential based Login/Registration options
* Add full data set (currently only a small subset of games are in the database)
* Implement detailed pages with game information
* Implement search functionalities
