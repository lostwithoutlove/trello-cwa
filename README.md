## All Terminal Commands

1. npx create-next-app@latest trello-cwa
2. npx shadcn-ui@latest init
3. npx shadcn-ui@latest add button
4. npm install @clerk/nextjs
5. npm install usehooks-ts
6. npx shadcn-ui@latest add skeleton
7. npx shadcn-ui@latest add accordion
8. npx shadcn-ui@latest add separator
9. npm i zustand
10. npx shadcn-ui@latest add sheet
11. npm i -D prisma
12. npx prisma init
13. (maybe trying with Xata) npm install @prisma/adapter-pg pg - failed
14. (maybe trying supabase) npm install dotenv postgres tsx - failed
15. (failed) npm install @supabase/auth-helpers-nextjs @supabase/supabase-js - failed
16. succeeded with MySql DB via Aiven
17. npx prisma db push
18. npx prisma studio
19. npm install @prisma/client
20. npm i zod

## 5. Clerk Setup

1. Install Clerk
2. Setup the Env Keys
3. Add ClerkProvider
4. Create a Middleware
5. Create Sign-up and Sign-in Pages

## 9 Zustand Setup

1. Install
2. Setup the hooks - use-x.ts

## 16 DB setup

1. DB Provider - https://aiven.io/ #Steps
2. Make an account with Aiven for MySQL and create a DB
3. Add the Service URI at the DB_URL at .env file
4. npx prisma generate
5. Check deployment status and wait for it to turn from Rebuilding status to Running
6. Wait for one successful event log with Aiven
7. npx prisma db push
8. npx prisma studio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
