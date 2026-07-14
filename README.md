# Tavewo Ventures Website - Frontend

The frontend of the **Tavewo Ventures Website** is a modern, responsive web application built with **React.js** and **Vite**. It provides an intuitive user experience for visitors to explore the organization's profile, business divisions, products, investor information, news, and contact services.

The application communicates with the backend via REST APIs and is optimized for performance, responsiveness, and scalability.

---

## Tech Stack

- React.js
- Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lenis
- Lucide React
- JavaScript (ES6+)

---

## Features

- Fully responsive layout
- Multi-page routing
- Animated user interface
- Contact form integration
- Reusable React components
- Environment variable configuration
- Optimized production build

---

## Prerequisites

Install:

- Node.js (v18+ recommended)
- npm
- Git

Verify installation:

```bash
node -v
npm -v
git --version
```

---

## Clone Repository

```bash
git clone https://github.com/Josephayonz/tavewo-client.git
```

Navigate into the project.

```bash
cd tavewo-client
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
VITE_API_URL=http://localhost:5000
```

For production:

```env
VITE_API_URL=https://your-backend-url.onrender.com
```

---

## Running the Application

Start the development server.

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

---

## Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Builds the application for production.

```bash
npm run preview
```

Previews the production build locally.

---

## Deployment

Recommended deployment platform:

- Vercel

Deployment Steps:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure environment variables.
4. Deploy.

---

## Backend Repository

This frontend consumes APIs provided by:

```
tavewo-website-server
```

Ensure the backend is running before testing features such as the contact form.

---

## License

Developed for **Tavewo Ventures**.

All rights reserved.