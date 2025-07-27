# 👐 Hath Bantao

> **“Extend your hand to those in need.”**  
> *Hath Bantao* is a community-driven crowdfunding platform that connects people who need help with those who want to help.

---

## 📌 Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [How to Run Locally](#how-to-run-locally)
- [Environment Variables](#environment-variables)
- [Project Screens](#project-screens)
- [License](#license)
- [Contribute](#contribute)

---

## 📖 About the Project

**Hath Bantao** is a full-stack crowdfunding platform built with the goal of enabling support, collaboration, and financial assistance. Whether it’s for a cause, a dream, or an emergency, this platform makes it simple for backers to extend a helping hand.

The platform is inspired by the values of unity, compassion, and action. Users can:
- Create campaigns
- Donate or support causes



---

## 🌟 Features

- 🙋‍♂️ **User Profiles** – Manage basic user info like `username`, `email`, `profilePic`, and `coverPic`.
- 📢 **Campaign Showcase** – Highlight stories and missions with engaging visuals and text.
- 💰 **Crowdfunding Support** – Backers can support campaigns through donations or partnerships.
- 💬 **Community Messaging** – Descriptive sections like "Fans want to help", "Fans want to collaborate".
- 📱 **Responsive Design** – Tailwind CSS ensures the UI looks good on all screen sizes.
- 🔐 **Authentication** – GitHub login integrated via NextAuth.js.
- 💳 **Payments (In Progress)** – Integration with Square Web Payments SDK.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Next.js API routes (serverless)
- **Auth**: NextAuth.js with GitHub provider
- **Database**: MongoDB (via Mongoose)
- **Payments**: Square Web Payments SDK (WIP)
- **Hosting**: Vercel (recommended)

---

## 📁 Folder Structure

```
/components      → Reusable UI components  
/pages           → Next.js page routing  
/public          → Static files (icons, gifs, images)  
/styles          → Tailwind configuration and custom styles  
```

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/hathbantao.git
cd hathbantao

# 2. Install dependencies
npm install

# 3. Create environment variables
cp .env.example .env.local

# 4. Run the development server
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
