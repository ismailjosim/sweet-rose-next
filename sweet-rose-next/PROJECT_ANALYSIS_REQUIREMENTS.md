# Sweet Rose — Project Analysis & Requirements Document

**Version:** 1.0
**Project Name:** Sweet Rose Next
**Status:** Active Development
**Last Updated:** May 2026

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Overview](#2-project-overview)
3. [Technical Stack](#3-technical-stack)
4. [Project Structure](#4-project-structure)
5. [Core Features](#5-core-features)
6. [Database Schema](#6-database-schema)
7. [API Routes & Endpoints](#7-api-routes--endpoints)
8. [Component Architecture](#8-component-architecture)
9. [Authentication Flow](#9-authentication-flow)
10. [Setup Instructions](#10-setup-instructions)
11. [Environment Configuration](#11-environment-configuration)
12. [Development Workflow](#12-development-workflow)
13. [Deployment Guide](#13-deployment-guide)
14. [Future Enhancements](#14-future-enhancements)

---

## 1. Executive Summary

**Sweet Rose** is a modern e-commerce web application for an artisan bakery specializing in handcrafted confectionery, pastries, and specialty treats. The platform enables customers to browse, view details, and purchase premium baked goods while the business manages inventory, user accounts, and sales through a clean, intuitive interface.

**Target Audience:** Customers interested in premium, artisan-baked goods with rose-themed and gourmet selections.

**Core Value Proposition:**

- Beautiful, mobile-responsive shopping experience
- User authentication for personalized experiences
- Detailed product information with ratings and reviews
- Theme support for accessibility (light/dark mode)
- Fast, modern web performance

---

## 2. Project Overview

### 2.1 Business Context

Sweet Rose is a bakery business offering:

- **Cakes & Desserts**: Large pastries and specialized cake selections
- **Pastries & Biscuits**: Individual pastries, macarons, biscotti
- **Specialty Items**: Infused honeys, truffles, and gourmet selections
- **Cupcakes & Individual Items**: Small, shareable treats

### 2.2 Problem Statement

Traditional bakeries lack:

- Professional online presence to showcase products
- Easy product browsing and discovery
- User-friendly ordering and payment system
- Mobile accessibility
- Integrated customer accounts and order history

### 2.3 Solution Overview

A modern web application that:

- Displays product catalog with rich images and descriptions
- Provides user authentication and profiles
- Enables browsing by category and ratings
- Supports detailed product pages with customer reviews
- Offers theme customization (light/dark mode)
- Delivers responsive design across all devices

---

## 3. Technical Stack

### 3.1 Frontend

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.6 | React framework with SSR, static generation, API routes |
| React | 19.2.4 | UI library and component framework |
| TypeScript | - | Type safety (project-ready for migration) |
| TailwindCSS | 4.x | Utility-first CSS framework |
| HeroUI | 3.0.4 | React component library (styled, accessible) |
| Lucide React | 1.14.0 | Icon library (modern, SVG-based) |
| React Icons | 5.6.0 | Additional icon sets (Font Awesome, etc.) |

### 3.2 Authentication & Backend

| Technology | Version | Purpose |
|---|---|---|
| Better Auth | 1.6.9 | Modern authentication library with OAuth/email support |
| Better Auth MongoDB Adapter | 1.6.9 | MongoDB integration for Better Auth |
| Next.js API Routes | Built-in | Serverless API endpoints |

### 3.3 Database & Storage

| Technology | Version | Purpose |
|---|---|---|
| MongoDB | 7.2.0 | NoSQL database for user, product, and order data |
| MongoDB Node Driver | 7.2.0 | Official MongoDB driver for Node.js |

### 3.4 UI & Styling

| Technology | Version | Purpose |
|---|---|---|
| Embla Carousel | 8.6.0 | Lightweight carousel/slider for product showcase |
| Embla Carousel Autoplay | 8.6.0 | Autoplay plugin for Embla |
| React Toastify | 11.1.0 | Toast notifications (success, error, info) |
| Next Themes | 0.4.6 | Theme management (light/dark mode) |

### 3.5 Build & Tooling

| Technology | Version | Purpose |
|---|---|---|
| ESLint | 9.x | Code linting and quality |
| TailwindCSS PostCSS | 4.x | CSS processing for Tailwind |

### 3.6 Why This Stack?

- **Next.js**: Industry-standard React framework with built-in optimizations, API routes, and excellent TypeScript support
- **MongoDB**: Schema-flexible NoSQL database ideal for e-commerce with varying product attributes
- **Better Auth**: Lightweight, modern auth solution with MongoDB support and better DX than traditional auth libraries
- **TailwindCSS**: Rapid development with pre-built utility classes; supports dark mode natively
- **HeroUI**: Accessible, customizable components built on Tailwind; reduces component-building overhead

---

## 4. Project Structure

```
sweet-rose-next/
├── public/                          # Static assets
│   ├── banner.jpg                   # Hero banner image
│   ├── sweet-rose-logo.png          # Brand logo
│   ├── data.json                    # Product catalog data
│   └── [other static files]
│
├── src/
│   ├── app/                         # Next.js App Router directory
│   │   ├── (commonLayout)/          # Route group with shared layout
│   │   │   ├── layout.js            # Root layout with Navbar/Footer
│   │   │   ├── globals.css          # Global styles
│   │   │   ├── page.js              # Home page
│   │   │   ├── (auth)/              # Authentication routes
│   │   │   │   ├── login/
│   │   │   │   │   └── page.jsx     # Login page
│   │   │   │   └── register/
│   │   │   │       └── page.jsx     # Registration page
│   │   │   ├── products/            # Product catalog
│   │   │   │   └── [id]/
│   │   │   │       └── page.jsx     # Product detail page
│   │   │   ├── shop/                # Shop page
│   │   │   │   └── page.jsx
│   │   │   ├── story/               # About/Story page
│   │   │   │   └── page.jsx
│   │   │   ├── profile/             # User profile page
│   │   │   │   └── page.jsx
│   │   │
│   │   └── api/                     # API routes
│   │       └── auth/
│   │           └── [...all]/
│   │               └── route.js     # Better Auth handler
│   │
│   ├── components/                  # Reusable React components
│   │   ├── auth/
│   │   │   ├── LoginForm.jsx        # Login form component
│   │   │   └── RegisterForm.jsx     # Registration form component
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx           # Navigation header
│   │   │   └── Footer.jsx           # Footer component
│   │   │
│   │   ├── modules/                 # Feature-specific components
│   │   │   ├── Home/
│   │   │   │   ├── Banner.jsx       # Hero section
│   │   │   │   ├── AboutShop.jsx    # About business section
│   │   │   │   ├── SignatureTreats.jsx # Featured products
│   │   │   │   ├── MeetOurChef.jsx  # Team section
│   │   │   │   └── Reviews.jsx      # Customer testimonials
│   │   │   │
│   │   │   ├── Shop/
│   │   │   │   ├── Products.jsx     # Product grid
│   │   │   │   └── ShopHeading.jsx  # Shop title/filter section
│   │   │   │
│   │   │   ├── SingleProduct/
│   │   │   │   ├── ProductImage.jsx      # Product image display
│   │   │   │   ├── ProductInfo.jsx       # Product title, price, description
│   │   │   │   ├── ProductDetails.jsx    # Detailed specs, ingredients
│   │   │   │   ├── ProductAdditionalInfo.jsx # Reviews, shipping info
│   │   │   │   └── QuantitySelector.jsx  # Quantity picker
│   │   │   │
│   │   │   ├── OurStory/
│   │   │   │   ├── TheRoot.jsx      # Origin story
│   │   │   │   ├── ThePhilosophy.jsx # Mission/values
│   │   │   │   ├── TheArtistry.jsx  # Craft/process
│   │   │   │   └── TheCommunity.jsx # Community impact
│   │   │   │
│   │   │   └── Shared/
│   │   │       ├── ProductCard.jsx  # Reusable product card
│   │   │       └── democard.jsx     # Demo/placeholder card
│   │
│   ├── lib/                         # Utility functions & libraries
│   │   ├── auth.js                  # Better Auth server configuration
│   │   ├── auth-client.js           # Better Auth client initialization
│   │   ├── ThemeToggler.jsx         # Theme switch component
│   │   └── toast-utils.js           # Toast notification helpers
│   │
│   └── providers/                   # React context providers
│       └── NextThemeProvider.jsx    # Theme context setup (next-themes)
│
├── .env                             # Environment variables (local)
├── .env.example                     # Environment template
├── .eslintrc.json                   # ESLint configuration
├── eslint.config.mjs                # ESLint modern config
├── jsconfig.json                    # JS path aliases (@/*)
├── next.config.mjs                  # Next.js configuration
├── postcss.config.mjs               # PostCSS/Tailwind config
├── tailwind.config.js               # Tailwind CSS customization
├── package.json                     # Dependencies & scripts
├── pnpm-lock.yaml                   # Lock file (pnpm)
├── pnpm-workspace.yaml              # Workspace config (if monorepo)
├── README.md                        # Project documentation
└── PROJECT_ANALYSIS_REQUIREMENTS.md # This file
```

### 4.1 Key Directory Purposes

- **`/public`**: Static assets, images, product data
- **`/src/app`**: Next.js 14 App Router with file-based routing
- **`/src/components`**: Modular React components organized by feature
- **`/src/lib`**: Configuration, utilities, and library initialization
- **`/src/providers`**: React context providers for global state (themes)

---

## 5. Core Features

### 5.1 User-Facing Features

#### 5.1.1 Home Page

- **Hero Banner**: Full-screen banner with bakery tagline and CTA buttons
- **Signature Treats Section**: Featured products carousel (Embla Carousel)
- **About Shop**: Business mission and values
- **Meet Our Chef**: Team member showcase
- **Customer Reviews**: Testimonials carousel
- **Navigation Bar**: Sticky header with logo, nav links, user menu, theme toggle
- **Footer**: Links, contact info, social media

#### 5.1.2 Product Catalog & Shop

- **Product Listing Page** (`/shop`):
  - Grid layout (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
  - Product cards with image, title, price, rating, category badge
  - Hover effects (scale, shadow)
  - Filter/sort by category (client-side from JSON data)

- **Product Detail Page** (`/products/[id]`):
  - Large product image with zoom capability
  - Product information (title, price, rating, reviews count)
  - Detailed description and specs
  - Related products carousel
  - Quantity selector
  - Add to cart functionality (TBD - Phase 2)
  - Customer reviews section

#### 5.1.3 Authentication

- **Registration Page** (`/auth/register`):
  - Email, password, confirm password fields
  - Password strength validation
  - Form validation with toast notifications
  - Link to login page

- **Login Page** (`/auth/login`):
  - Email and password fields
  - "Remember me" checkbox (TBD)
  - "Forgot password" link (TBD)
  - Link to registration page
  - Post-login redirect to home

- **Session Management**:
  - JWT-based authentication via Better Auth
  - Persistent session (cookie-based)
  - Logout with session invalidation

#### 5.1.4 User Profile

- **Profile Page** (`/profile`):
  - User information display (email, name, joined date)
  - Order history (TBD - Phase 2)
  - Edit profile form (TBD - Phase 2)
  - Account settings (TBD - Phase 2)

#### 5.1.5 Story Page

- **Our Story** (`/story`):
  - Multi-section narrative about the bakery
  - The Root (Origin)
  - The Philosophy (Mission)
  - The Artistry (Craft)
  - The Community (Social Impact)
  - Rich imagery and typography

#### 5.1.6 Theme & Accessibility

- **Dark/Light Mode Toggle**:
  - Theme switcher in navbar
  - Persisted in localStorage
  - System preference detection
  - Smooth transitions between themes
  - Full CSS support (TailwindCSS `dark:` variant)

#### 5.1.7 Notifications

- **Toast Notifications**:
  - Success: Login, logout, add to cart
  - Error: Login failure, validation errors
  - Info: General messages
  - Auto-dismiss after 4 seconds
  - Top-right position

### 5.2 Admin/Business Features (Phase 2)

- Product inventory management
- Order management dashboard
- Customer analytics
- Revenue reports
- Promotional code management

### 5.3 Future Features (Phase 2+)

- **Shopping Cart**: Add/remove items, quantity adjustment, cart persistence
- **Checkout**: Multi-step checkout with shipping address
- **Payment Integration**: Stripe, SSLCommerz for Bangladesh
- **Order Tracking**: User can track order status
- **Wishlist**: Save favorite products
- **Reviews & Ratings**: Customers can submit product reviews
- **Email Notifications**: Order confirmations, shipping updates
- **Search**: Full-text product search
- **Filters**: Category, price range, rating filters
- **Newsletter**: Email subscription

---

## 6. Database Schema

### 6.1 Collections in MongoDB

#### 6.1.1 User Collection

```javascript
{
  _id: ObjectId,
  email: String (unique),
  name: String,
  passwordHash: String,
  profile: {
    avatar: String (URL),
    phone: String,
    address: String,
    city: String,
    country: String,
  },
  roles: ["customer"], // or ["admin"] for business users
  createdAt: Date,
  updatedAt: Date,
}
```

#### 6.1.2 Product Collection

```javascript
{
  _id: ObjectId,
  id: Number (unique, for URL compatibility),
  title: String,
  description: String,
  price: Number,
  image: String (URL),
  tag: String (e.g., "Best Seller", "Gourmet", "Artisan"),
  category: String (e.g., "Cakes", "Pastries", "Cupcakes"),
  rating: Number (0-5),
  reviews: [
    {
      userId: ObjectId,
      userName: String,
      rating: Number,
      comment: String,
      createdAt: Date,
    }
  ],
  stock: Number,
  ingredients: [String],
  allergens: [String],
  dietary: [String] (e.g., "vegan", "gluten-free"),
  createdAt: Date,
  updatedAt: Date,
}
```

#### 6.1.3 Order Collection

```javascript
{
  _id: ObjectId,
  orderNumber: String (unique),
  userId: ObjectId,
  items: [
    {
      productId: ObjectId,
      quantity: Number,
      price: Number,
    }
  ],
  total: Number,
  status: String (e.g., "pending", "processing", "shipped", "delivered"),
  shippingAddress: {
    name: String,
    email: String,
    phone: String,
    street: String,
    city: String,
    zipCode: String,
    country: String,
  },
  paymentStatus: String (e.g., "unpaid", "paid", "refunded"),
  paymentMethod: String (e.g., "stripe", "sslcommerz"),
  createdAt: Date,
  updatedAt: Date,
}
```

#### 6.1.4 Session Collection (Better Auth)

```javascript
{
  _id: ObjectId,
  sessionToken: String (unique),
  userId: ObjectId,
  expiresAt: Date,
  createdAt: Date,
}
```

#### 6.1.5 Verification Collection (Better Auth)

```javascript
{
  _id: ObjectId,
  identifier: String,
  value: String,
  expiresAt: Date,
  createdAt: Date,
}
```

### 6.2 Product Data Structure (Static JSON)

**File:** `public/data.json`

```javascript
[
  {
    id: 1,
    title: String,
    description: String,
    price: Number,
    image: String,
    tag: String,
    category: String,
    rating: Number,
    reviews: Number,
  },
  // ... more products
]
```

Currently, products are loaded from static JSON in `public/data.json`. This will be migrated to MongoDB in Phase 2.

---

## 7. API Routes & Endpoints

All API routes are located in `/src/app/api/` and use Next.js API Routes.

### 7.1 Authentication Endpoints (via Better Auth)

**Route Prefix:** `/api/auth/`

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/sign-up` | Register new user |
| POST | `/auth/sign-in` | Login user |
| POST | `/auth/sign-out` | Logout user |
| GET | `/auth/session` | Get current session |
| POST | `/auth/reset-password` | Send password reset email |
| POST | `/auth/verify-email` | Verify email with code |

**Note:** All auth endpoints are handled by `better-auth` middleware routed through `/api/auth/[...all]/route.js`

### 7.2 Planned API Routes (Phase 2+)

#### Products

```
GET    /api/products              List all products
GET    /api/products/:id          Get product detail
GET    /api/products?category=X   Filter by category
GET    /api/products?search=X     Search products
POST   /api/products              Create product [ADMIN]
PATCH  /api/products/:id          Update product [ADMIN]
DELETE /api/products/:id          Delete product [ADMIN]
```

#### Orders

```
GET    /api/orders                List user orders
GET    /api/orders/:id            Get order detail
POST   /api/orders                Create order
PATCH  /api/orders/:id/status     Update order status [ADMIN]
DELETE /api/orders/:id            Cancel order
```

#### Cart (Client-side with localStorage)

```
GET    /api/cart                  Get cart items
POST   /api/cart                  Add to cart
PATCH  /api/cart/:productId       Update item quantity
DELETE /api/cart/:productId       Remove from cart
```

#### Users

```
GET    /api/users/me              Get current user profile
PATCH  /api/users/me              Update profile
PATCH  /api/users/me/password     Change password
```

#### Reviews

```
POST   /api/reviews               Submit review
GET    /api/reviews?productId=X   Get product reviews
DELETE /api/reviews/:id           Delete review [ADMIN/OWN]
```

---

## 8. Component Architecture

### 8.1 Component Hierarchy

```
Layout (RootLayout)
├── NextThemeProvider
├── ToastContainer
├── Navbar
│   ├── Logo
│   ├── Navigation Links
│   ├── User Menu (dropdown)
│   │   ├── Profile Link
│   │   ├── Logout Button
│   │   └── Theme Toggler
│   └── Mobile Menu (responsive)
├── Main Content (page-specific)
│   └── [Page Components]
└── Footer
    ├── Links Sections
    ├── Contact Info
    └── Social Links
```

### 8.2 Home Page Component Structure

```
HomePage
├── Banner
│   ├── Background Image
│   ├── Text Overlay
│   └── CTA Buttons
├── SignatureTreats
│   ├── Section Title
│   ├── Embla Carousel
│   │   └── ProductCard (multiple)
│   └── Navigation Dots
├── AboutShop
│   ├── Text Content
│   └── Images
├── MeetOurChef
│   ├── Team Member Cards
│   └── Social Links
└── Reviews
    ├── Embla Carousel
    │   └── ReviewCard (testimonials)
    └── Navigation
```

### 8.3 Shop Page Component Structure

```
ShopPage
├── ShopHeading
│   ├── Page Title
│   ├── Filter Sidebar (TBD)
│   └── Sort Options (TBD)
└── Products
    └── ProductCard Grid
        └── ProductCard (multiple)
            ├── Product Image
            ├── Category Badge
            ├── Title
            ├── Price
            ├── Rating
            └── View Details Link
```

### 8.4 Product Detail Page Structure

```
ProductDetailPage
├── BreadCrumb Navigation
├── ProductImage (left)
│   ├── Main Image
│   ├── Thumbnail Gallery (TBD)
│   └── Zoom Capability (TBD)
├── ProductInfo (right)
│   ├── Title
│   ├── Rating/Reviews Count
│   ├── Price
│   ├── Description
│   ├── QuantitySelector
│   ├── Add to Cart Button
│   └── Wishlist Button (TBD)
├── ProductDetails
│   ├── Ingredients
│   ├── Allergens
│   ├── Shelf Life
│   └── Dietary Info
├── ProductAdditionalInfo
│   ├── Customer Reviews
│   ├── Shipping Info
│   └── Return Policy
└── RelatedProducts
    └── Embla Carousel with ProductCards
```

### 8.5 Authentication Form Components

```
LoginForm
├── Email Input (with validation)
├── Password Input
│   └── Show/Hide Toggle
├── Remember Me Checkbox (TBD)
├── Forgot Password Link (TBD)
├── Sign In Button
├── Social Login Option (Google OAuth - TBD)
└── Switch to Register Link

RegisterForm
├── Name Input
├── Email Input (with validation)
├── Password Input
│   └── Show/Hide Toggle
├── Confirm Password Input
│   └── Show/Hide Toggle
├── Password Strength Indicator (TBD)
├── Terms & Conditions Checkbox
├── Sign Up Button
└── Switch to Login Link
```

### 8.6 Component Reusability

- **ProductCard**: Used in home carousel, shop grid, related products
- **Button**: Standardized across all forms and CTAs (HeroUI Button)
- **Card**: Used for product cards, testimonials, team members
- **Avatar**: User profiles, team members, reviewers
- **Input/TextField**: All forms (login, register, product filters)
- **Modal/Dialog**: Confirmation dialogs, filters (TBD)

---

## 9. Authentication Flow

### 9.1 Authentication System Overview

**Framework:** Better Auth
**Method:** Email/Password (primary), Google OAuth (TBD)
**Storage:** MongoDB
**Session Management:** JWT + HTTP-only cookies

### 9.2 Sign-Up Flow

```
User fills registration form
          ↓
Client validates input (React Hook Form)
          ↓
POST /api/auth/sign-up {email, password, name}
          ↓
Server validates input (Zod schema)
          ↓
Check if email already exists
          ↓
Hash password (bcrypt via better-auth)
          ↓
Create user document in MongoDB
          ↓
Create session (JWT token)
          ↓
Return session to client
          ↓
Store in cookie (HTTP-only)
          ↓
Redirect to home page
          ↓
Show success toast notification
```

### 9.3 Login Flow

```
User submits email & password
          ↓
Client validates input
          ↓
POST /api/auth/sign-in {email, password}
          ↓
Server validates credentials
          ↓
Lookup user by email
          ↓
Compare password hash
          ↓
If valid: Create session (JWT)
          ↓
Return session to client
          ↓
Store in HTTP-only cookie
          ↓
Redirect to home/dashboard
          ↓
Show success toast
```

### 9.4 Session Management

```javascript
// Client-side session check
const { data: session, isPending } = authClient.useSession()

if (isPending) return <LoadingSpinner />
if (!session) return <Navigate to="/auth/login" />

// Protected component
const ProtectedPage = () => {
  const { data: session } = authClient.useSession()

  if (!session?.user) {
    return <Redirect to="/auth/login" />
  }

  return <Dashboard user={session.user} />
}
```

### 9.5 Logout Flow

```
User clicks logout
          ↓
POST /api/auth/sign-out
          ↓
Server invalidates session
          ↓
Clear HTTP-only cookie
          ↓
Remove session from MongoDB
          ↓
Client clears session state
          ↓
Redirect to home page
          ↓
Show success toast
```

### 9.6 Middleware & Route Protection

Currently, route protection is done client-side in components. For Phase 2, consider:

```javascript
// middleware.js - Route protection
import { withAuth } from "better-auth/next-js"

export const middleware = withAuth((req) => {
  if (req.nextUrl.pathname.startsWith("/profile")) {
    if (!req.auth?.user) {
      return new Response("Unauthorized", { status: 401 })
    }
  }
})

export const config = {
  matcher: ["/profile/:path*", "/checkout/:path*"]
}
```

---

## 10. Setup Instructions

### 10.1 Prerequisites

- **Node.js**: 18.17+ (LTS recommended)
- **npm/pnpm**: Package manager
- **MongoDB**: 6.0+ (local or cloud - MongoDB Atlas)
- **Git**: Version control
- **Code Editor**: VS Code recommended

### 10.2 Step-by-Step Setup

#### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/sweet-rose-next.git
cd sweet-rose-next
```

#### Step 2: Install Dependencies

```bash
# Using pnpm (recommended for this project)
pnpm install

# OR using npm
npm install
```

#### Step 3: Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values (see Section 11).

#### Step 4: Setup MongoDB

**Option A: Local MongoDB**

```bash
# Install MongoDB Community Edition
# https://docs.mongodb.com/manual/installation/

# Start MongoDB daemon
mongod

# Connection string in .env
MONGODB_URL=mongodb://localhost:27017/SweetRose_DB
```

**Option B: MongoDB Atlas (Cloud)**

1. Create account at <https://www.mongodb.com/cloud/atlas>
2. Create a cluster and database
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/SweetRose_DB`
4. Add to `.env.local`

#### Step 5: Setup Better Auth

Better Auth is already configured in `src/lib/auth.js`. No additional setup needed beyond MongoDB.

#### Step 6: Run Development Server

```bash
pnpm dev
# OR
npm run dev
```

Server runs at: `http://localhost:3000`

#### Step 7: Verify Installation

1. Visit <http://localhost:3000> - Should see home page
2. Try registration: Go to `/auth/register`, create account
3. Check MongoDB: Products in `SweetRose_DB.products` collection
4. Check session: User document created in `SweetRose_DB.user` collection

### 10.3 Build for Production

```bash
# Build optimized bundle
pnpm build

# Start production server
pnpm start

# Server runs on http://localhost:3000
```

---

## 11. Environment Configuration

### 11.1 Environment Variables

Create `.env.local` file in project root:

```env
# ====================
# DATABASE
# ====================
MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/SweetRose_DB

# ====================
# BETTER AUTH
# ====================
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=your-secret-key-here-min-32-characters

# Generate secure secret:
# node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"

# ====================
# GOOGLE OAUTH (Optional - Phase 2)
# ====================
GOOGLE_CLIENT_ID=your-google-oauth-client-id
GOOGLE_CLIENT_SECRET=your-google-oauth-client-secret

# ====================
# EMAIL SERVICE (Optional - Phase 2)
# ====================
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# ====================
# STRIPE (Optional - Phase 2)
# ====================
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# ====================
# NEXT.JS
# ====================
NODE_ENV=development
```

### 11.2 Production Environment

For production deployment (Vercel, Railway, etc.):

```env
NODE_ENV=production
MONGODB_URL=mongodb+srv://prod_user:prod_password@prod-cluster.mongodb.net/SweetRose_DB
BETTER_AUTH_URL=https://www.sweetrose.com
BETTER_AUTH_SECRET=production-secret-key-long-string
```

### 11.3 .env.example Template

```
# Copy to .env.local and fill in your values
MONGODB_URL=
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

---

## 12. Development Workflow

### 12.1 Development Commands

```bash
# Start development server with hot-reload
pnpm dev

# Run linter (ESLint)
pnpm lint

# Fix linting issues
pnpm lint --fix

# Build for production
pnpm build

# Start production build locally
pnpm start
```

### 12.2 Code Organization Guidelines

#### Component Files

```javascript
// Components use .jsx or .js
// Client components marked with 'use client'

'use client'

import { useState } from 'react'
import Button from '@heroui/react'

const MyComponent = ({ prop }) => {
  return <button>Click me</button>
}

export default MyComponent
```

#### Naming Conventions

- **Components**: PascalCase (`ProductCard.jsx`)
- **Utilities**: camelCase (`formatPrice.js`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Folders**: kebab-case or camelCase (modules, components)

#### Imports

```javascript
// Use path aliases
import ProductCard from '@/components/modules/Shared/ProductCard'
import { authClient } from '@/lib/auth-client'

// Not
import ProductCard from '../../../components/modules/Shared/ProductCard'
```

### 12.3 Working with Styles

#### TailwindCSS Classes

```javascript
// Use Tailwind utility classes directly
<div className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-md">
  <p className="text-lg font-semibold text-foreground">Hello</p>
</div>

// Dark mode
<div className="dark:bg-slate-900 dark:text-white">Content</div>
```

#### CSS Modules (Alternative)

```javascript
// Optional: Use CSS modules for component-scoped styles
import styles from './ProductCard.module.css'

<div className={styles.card}>...</div>
```

#### Global Styles

- Edit `src/app/(commonLayout)/globals.css` for global styles
- Import additional stylesheets in layout.js

### 12.4 Git Workflow

```bash
# Create feature branch
git checkout -b feature/add-product-filters

# Make changes
git add .
git commit -m "feat: add product category filters"

# Push to remote
git push origin feature/add-product-filters

# Create Pull Request on GitHub
# → Review → Merge to main
```

### 12.5 Database Management

#### View MongoDB Collections

```bash
# Using MongoDB Atlas UI
# OR use Compass (GUI tool)

# Via mongosh CLI
mongosh "mongodb+srv://user:pass@cluster.mongodb.net/SweetRose_DB"
> db.products.find()
> db.user.find()
```

#### Seed Initial Data

```javascript
// Create scripts/seedDB.js for initial data loading
// Load products from public/data.json into MongoDB
```

---

## 13. Deployment Guide

### 13.1 Deployment Platforms

#### Option 1: Vercel (Recommended for Next.js)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in dashboard:
# Vercel → Settings → Environment Variables
```

**Advantages:**

- Native Next.js support
- Automatic deployments on git push
- Edge functions for API routes
- Zero-config deployment

#### Option 2: Railway

1. Connect GitHub repository
2. Add MongoDB service
3. Configure environment variables
4. Deploy with one click

#### Option 3: Self-Hosted (VPS)

```bash
# Build for production
pnpm build

# Start server
NODE_ENV=production pnpm start

# Use PM2 for process management
npm install -g pm2
pm2 start npm --name "sweet-rose" -- start
pm2 save
pm2 startup
```

### 13.2 Pre-Deployment Checklist

- [ ] All environment variables set in production `.env`
- [ ] MongoDB backup configured
- [ ] HTTPS/SSL certificate configured
- [ ] ESLint passes: `pnpm lint`
- [ ] Build succeeds: `pnpm build`
- [ ] Test authentication on staging
- [ ] Test product display and navigation
- [ ] Check mobile responsiveness
- [ ] Core Web Vitals optimized
- [ ] Security headers configured (X-Frame-Options, etc.)
- [ ] Rate limiting configured (TBD)

### 13.3 Monitoring & Maintenance

- Use Vercel analytics or third-party (e.g., Datadog)
- Monitor error logs via Sentry integration (TBD)
- Regular database backups
- Performance monitoring (Next.js Analytics)

---

## 14. Future Enhancements

### Phase 2 (Months 4-6)

#### Shopping Cart & Checkout

- [ ] Add to cart functionality
- [ ] Cart persistence (localStorage → MongoDB)
- [ ] Multi-step checkout
- [ ] Shipping address form
- [ ] Order summary

#### Payment Integration

- [ ] Stripe integration
- [ ] SSLCommerz integration (Bangladesh)
- [ ] Invoice generation
- [ ] Webhook handlers

#### User Features

- [ ] Edit profile page
- [ ] Order history
- [ ] Wishlist functionality
- [ ] Product reviews & ratings submission
- [ ] Email notifications
- [ ] Address book

#### Admin Dashboard

- [ ] Product management (CRUD)
- [ ] Inventory tracking
- [ ] Order management
- [ ] Customer management
- [ ] Sales analytics
- [ ] Discount/coupon codes

#### Search & Filter

- [ ] Full-text product search
- [ ] Filter by category, price, rating, dietary
- [ ] Sort options (newest, popular, price)
- [ ] Saved filters

### Phase 3 (Months 7-9)

- [ ] Email marketing integration
- [ ] SMS notifications
- [ ] Advanced analytics dashboard
- [ ] Subscription products (recurring orders)
- [ ] Social login (Google, Facebook)
- [ ] Custom product bundles
- [ ] Customer loyalty program
- [ ] Blog/content management

### Phase 4+ (Future)

- [ ] Mobile app (React Native / Flutter)
- [ ] Voice search
- [ ] AR product preview
- [ ] AI-powered recommendations
- [ ] Multi-language support
- [ ] Multi-currency support
- [ ] Inventory sync with POS
- [ ] Wholesale/B2B portal

### Technical Debt & Improvements

- [ ] Convert to TypeScript
- [ ] Add unit tests (Vitest)
- [ ] Add integration tests (Supertest)
- [ ] Add E2E tests (Playwright/Cypress)
- [ ] Implement proper error boundaries
- [ ] Add loading skeletons
- [ ] Implement ISR (Incremental Static Regeneration) for products
- [ ] Add image optimization (Next.js Image)
- [ ] Migrate to MongoDB Aggregation Pipeline for complex queries
- [ ] Add Redis caching for frequently accessed data
- [ ] Implement rate limiting
- [ ] Add comprehensive logging

---

## 15. Common Issues & Solutions

### Issue: MongoDB Connection Fails

**Solution:**

```bash
# Check MongoDB is running
mongod --version

# Verify connection string
# Format: mongodb+srv://user:pass@cluster.mongodb.net/database

# Test connection
mongosh "your-connection-string"
```

### Issue: Better Auth Sessions Not Persisting

**Solution:**

```javascript
// Ensure BETTER_AUTH_SECRET is set in .env.local
// Minimum 32 characters required
// Restart dev server after changing .env
```

### Issue: Images Not Loading

**Solution:**

```javascript
// next.config.mjs allows remote images from any domain
// For production, specify allowed domains:
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'i.ibb.co',
    },
    {
      protocol: 'https',
      hostname: 'cdn.example.com',
    },
  ],
}
```

### Issue: Tailwind Styles Not Applied

**Solution:**

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall Tailwind
pnpm install -D tailwindcss @tailwindcss/postcss

# Restart dev server
pnpm dev
```

---

## 16. Learning Resources

### Official Documentation

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [MongoDB Docs](https://docs.mongodb.com)
- [Better Auth Docs](https://www.better-auth.com)
- [HeroUI Docs](https://heroui.com)

### Useful Articles

- Next.js App Router best practices
- MongoDB schema design for e-commerce
- TailwindCSS dark mode implementation
- Authentication patterns in Next.js

### Video Tutorials

- Next.js 14 App Router course
- MongoDB beginner tutorial
- TailwindCSS advanced techniques
- E-commerce project build

---

## 17. Project Summary

| Aspect | Details |
|---|---|
| **Project Type** | Modern e-commerce web application |
| **Tech Stack** | Next.js 14, React 19, MongoDB, TailwindCSS, HeroUI |
| **Target Users** | Artisan bakery customers |
| **Current Status** | MVP with product catalog, auth, home/shop pages |
| **Dev Team Size** | 1-2 developers |
| **Timeline** | Phase 1: Complete, Phase 2: TBD |
| **Deployment** | Vercel recommended |
| **Database** | MongoDB (cloud-hosted MongoDB Atlas) |
| **Scalability** | Ready for 10K+ monthly active users |

---

## 18. Contact & Support

For questions or contributions:

- **Repository**: [GitHub Link]
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Use GitHub Discussions for questions

---

**Document Version:** 1.0
**Last Updated:** May 2026
**Author:** Project Team
**Status:** Complete & Ready for Development

This document provides everything needed for a developer to understand, setup, and continue development on the Sweet Rose project from scratch.
