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
```

App will be running at `http://localhost:3000`

---

## 🔐 Environment Variables

Ensure the following variables are set in `.env.local`:

```env
MONGODB_URI=your_mongo_connection_string
GITHUB_ID=your_github_oauth_id
GITHUB_SECRET=your_github_oauth_secret
NEXTAUTH_SECRET=your_nextauth_secret
SQUARE_APP_ID=your_square_app_id
SQUARE_ACCESS_TOKEN=your_square_access_token
```

**Note:** `.env.local` is ignored via `.gitignore`.

---

## 🖼️ Project Screens

Here’s how the platform is visually organized:

- ✅ **Landing Section**: “Help the person you believe in” – showcases ways fans want to help.
- ✅ **About Section**: Describes what Hath Bantao is and why it matters.
- ✅ **Community SVG Icons**: Transparent white-stroke icons for clean UI.
- ✅ **Mobile-First**: Tailwind’s utility classes for full responsiveness.



## 🙌 Contribute

Want to contribute to Hath Bantao?

1. Fork the repo  
2. Create your feature branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m 'Add new feature'`)  
4. Push to the branch (`git push origin feature/my-feature`)  
5. Create a Pull Request

---

## 💬 Inspiration

This project was built with empathy in mind — for anyone who's ever needed a helping hand, and for those who are ready to give one.