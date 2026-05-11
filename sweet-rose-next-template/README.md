# Sweet Rose Next Template

A modern Next.js template with authentication, database integration, beautiful UI components, and theme support.

## Technologies Used

### Frontend Framework

- **Next.js** (v16.2.6) - React framework for production
- **React** (v19.2.4) - JavaScript library for building user interfaces
- **React DOM** (v19.2.4) - Entry point to the DOM for React

### UI & Styling

- **Tailwind CSS** (v4) - Utility-first CSS framework
- **Tailwind CSS PostCSS** (v4) - PostCSS plugin for Tailwind
- **HeroUI** (v3.0.4) - Beautiful React UI library
- **HeroUI Styles** (v3.0.4) - Styling utilities for HeroUI
- **Lucide React** (v1.14.0) - Beautiful icon library
- **React Icons** (v5.6.0) - Popular icon library

### Carousel

- **Embla Carousel React** (v8.6.0) - Lightweight carousel component
- **Embla Carousel Autoplay** (v8.6.0) - Autoplay plugin for Embla Carousel

### Authentication & Database

- **Better Auth** (v1.6.9) - Authentication library
- **Better Auth MongoDB Adapter** (v1.6.9) - MongoDB adapter for Better Auth
- **MongoDB** (v7.2.0) - NoSQL database driver

### Theme Management

- **Next Themes** (v0.4.6) - Theme management for Next.js

### Notifications

- **React Toastify** (v11.1.0) - Toast notification library

### Development Tools

- **ESLint** (v9) - JavaScript linter
- **ESLint Config Next** (16.2.6) - ESLint configuration for Next.js
- **PostCSS** - CSS transformation tool

---

## Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **pnpm** (v8 or higher) - [Install pnpm](https://pnpm.io/installation)

### Step-by-Step Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd sweet-rose-next-template
```

#### 2. Install Dependencies with pnpm

```bash
pnpm install
```

This command will:

- Download all dependencies listed in `package.json`
- Create a `pnpm-lock.yaml` file to lock dependency versions
- Create a `node_modules` directory with all packages

#### 3. Setup Environment Variables

Create a `.env.local` file in the project root with the following variables:

```bash
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Better Auth Configuration
AUTH_SECRET=your_secret_key_here
AUTH_URL=http://localhost:3000

# Next.js Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

#### 4. Verify Installation

```bash
pnpm list
```

This displays all installed dependencies and their versions.

#### 5. Run Development Server

```bash
pnpm dev
```

The application will start at `http://localhost:3000`

---

## Available Scripts

- **`pnpm dev`** - Start the development server with hot reload
- **`pnpm build`** - Build the application for production
- **`pnpm start`** - Start the production server
- **`pnpm lint`** - Run ESLint to check code quality

---

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.js     # Root layout
│   ├── page.js       # Homepage
│   └── globals.css   # Global styles
├── components/       # React components
│   ├── auth/         # Authentication components
│   ├── layout/       # Layout components
│   └── modules/      # Feature modules
├── lib/              # Utility functions
│   ├── auth.js       # Authentication utilities
│   ├── auth-client.js # Client-side auth
│   └── ThemeToggler.jsx # Theme management
└── providers/        # Context providers

public/              # Static assets
```

---

## Quick Start Example

After installation, you can start building:

1. **Update Home Page**: Edit `src/app/page.js`
2. **Add Components**: Create new components in `src/components/`
3. **Configure Auth**: Setup authentication in `src/lib/auth.js`
4. **Style Pages**: Use Tailwind CSS classes and HeroUI components
5. **Connect Database**: Configure MongoDB connection for your features

---

## Common pnpm Commands

```bash
# Install all dependencies
pnpm install

# Add a new dependency
pnpm add package-name

# Add a dev dependency
pnpm add -D package-name

# Remove a dependency
pnpm remove package-name

# Update all dependencies
pnpm update

# Clean cache
pnpm store prune
```

---

## Troubleshooting

### Dependencies not installing

```bash
pnpm install --force
```

### Build errors

```bash
pnpm build
```

### Clear node_modules and reinstall

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [HeroUI Documentation](https://heroui.com)
- [Better Auth Documentation](https://www.better-auth.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [pnpm Documentation](https://pnpm.io)

---

## License

This project is licensed under the MIT License.
