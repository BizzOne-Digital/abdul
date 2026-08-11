# Titan Logistics LLC - Full-Stack Website & CMS

A complete, production-ready website and custom CMS/admin portal for Titan Logistics LLC, featuring dynamic content management, cinematic animations, and comprehensive freight management systems.

## 🚀 Features

### Public Website
- **Cinematic Homepage** with animated hero section
- **Dynamic Service Pages** with automatic routing (`/services/[slug]`)
- **Quote Request System** with multi-step form
- **Driver Application Portal** with secure file uploads
- **Gallery System** with categories and lightbox
- **Testimonials & FAQs** with dynamic filtering
- **Blog System** with categories and featured posts
- **Contact Form** with spam protection
- **Responsive Design** (tested at 360px - 1440px+)
- **Accessibility** (WCAG 2.2 AA compliant)
- **SEO Optimized** with dynamic metadata and structured data

### Admin Portal (`/admin`)
- **Dashboard** with real-time metrics
- **Pages Management** - Edit all page content section by section
- **Services Management** - Add/edit/delete services with auto-routing
- **Quote Requests** - View, manage, and track freight quotes
- **Driver Applications** - Review and manage CDL A applications
- **Gallery** - Manage categories and images
- **Testimonials & FAQs** - Full CRUD operations
- **Blog Management** - Create and publish blog posts
- **Contact Messages** - View and respond to inquiries
- **Settings** - Global site configuration with live sync

### Technical Stack
- **Next.js 15** with App Router
- **TypeScript** (strict mode)
- **Tailwind CSS** with custom Titan brand palette
- **MongoDB** with Mongoose ODM
- **NextAuth.js** for authentication
- **GSAP & Framer Motion** for animations
- **React Hook Form & Zod** for form validation
- **Lucide React** for icons
- **Local File Uploads** (no third-party services)

## 📋 Prerequisites

- **Node.js** 18.17 or later
- **MongoDB** installed and running locally OR MongoDB Atlas connection string
- **MongoDB Compass** (recommended for database management)
- **Git** for version control

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd titan-logistics
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# MongoDB - Local or Atlas
MONGODB_URI=mongodb://localhost:27017/titan-logistics
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/titan-logistics

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-generate-with-openssl-rand-base64-32

# Initial Admin Credentials (for seeding only)
INITIAL_ADMIN_EMAIL=admin@titan-llc.com
INITIAL_ADMIN_PASSWORD=TitanAdmin2026!

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Titan Logistics LLC
```

### 4. Install and start MongoDB

#### Option A: Local MongoDB
**Windows:**
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer
3. Start MongoDB service:
   ```bash
   net start MongoDB
   ```

**Mac (with Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

#### Option B: MongoDB Atlas (Cloud)
1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string and add to `.env.local`

### 5. Install MongoDB Compass (GUI)
Download from https://www.mongodb.com/try/download/compass

Connect to: `mongodb://localhost:27017` (or your Atlas connection string)

### 6. Seed the database
Visit: http://localhost:3000/api/seed

This creates:
- Initial admin user
- Site settings
- Three services (Dry Van, Refrigerated, Flatbed)
- FAQ categories
- Gallery categories
- Homepage sections

**Default Admin Credentials:**
- Email: `admin@titan-llc.com`
- Password: `TitanAdmin2026!`

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

Visit: http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

### Type Check
```bash
npm run typecheck
# or
npx tsc --noEmit
```

### Lint
```bash
npm run lint
```

## 📁 Project Structure

```
titan-logistics/
├── app/                      # Next.js App Router
│   ├── (public)/            # Public-facing pages
│   │   ├── about/
│   │   ├── services/
│   │   ├── coverage/
│   │   ├── quote/
│   │   ├── drivers/
│   │   ├── contact/
│   │   └── ...
│   ├── admin/               # Admin portal
│   │   ├── login/
│   │   ├── dashboard/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── quotes/
│   │   └── ...
│   ├── api/                 # API routes
│   │   ├── auth/
│   │   ├── upload/
│   │   └── seed/
│   └── layout.tsx           # Root layout
├── components/              # Reusable React components
├── lib/                     # Utilities
│   ├── mongodb.ts          # Database connection
│   ├── auth.ts             # NextAuth configuration
│   ├── seed.ts             # Database seeding
│   └── utils.ts            # Helper functions
├── models/                  # Mongoose models
│   ├── AdminUser.ts
│   ├── Service.ts
│   ├── QuoteRequest.ts
│   ├── DriverApplication.ts
│   └── ...
├── public/
│   └── uploads/            # Local file uploads
│       ├── services/
│       ├── gallery/
│       ├── blog/
│       └── ...
├── types/                  # TypeScript definitions
└── .env.local             # Environment variables
```

## 🔐 Admin Portal

### Access
1. Visit: http://localhost:3000/admin/login
2. Use seeded credentials or create new admin user

### Features

#### Dashboard
- Total services, quotes, applications
- New vs. requiring follow-up
- Recent submissions
- Quick actions

#### Pages Management
- Edit homepage sections
- Configure About, Services, Coverage pages
- Update CTAs, images, and content
- SEO metadata per page

#### Services Management
- Add new service types
- Edit listing information (shown on `/services`)
- Edit detail page content (shown on `/services/[slug]`)
- Automatic route generation for new services
- Reorder, publish/unpublish, delete

#### Quote Requests
- View all freight quote submissions
- Filter by status, service, date
- Add internal notes
- Update status (new → reviewing → contacted → quoted → won/lost)
- Export to CSV
- Download submitted documents

#### Driver Applications
- Review CDL A applications
- Filter by status, state, experience
- Download resumes securely
- Update status (new → reviewing → contacted → interview → hired/rejected)
- Private data handling

#### Gallery
- Manage categories
- Upload images with captions and alt text
- Reorder images
- Mark featured
- Publish/unpublish

#### Settings
- Global site configuration
- Contact information (syncs everywhere)
- Social media links
- Coverage settings
- Quote form configuration
- Tracking settings
- Driver recruitment settings
- Footer content

## 📤 File Uploads

### Local Upload System
Files are stored in `public/uploads/` with organized subdirectories.

**Supported Image Types:**
- JPEG, JPG, PNG, WebP, AVIF

**Supported Document Types:**
- PDF, DOC, DOCX

**Max File Size:** 10MB

### Production Considerations
Local uploads work well for development and VPS/dedicated servers with persistent storage.

**For serverless deployments (Vercel, Netlify):**
- Integrate cloud storage (AWS S3, Cloudflare R2, etc.)
- Update upload API route to use cloud provider SDK
- Store URLs in MongoDB (already structured for this)

### Backup Strategy
**Database Backup:**
```bash
mongodump --db titan-logistics --out ./backups
```

**Restore:**
```bash
mongorestore --db titan-logistics ./backups/titan-logistics
```

**Files Backup:**
Copy `public/uploads/` directory regularly

## 🎨 Customization

### Logo Replacement
1. Log into admin portal
2. Go to Settings → General
3. Upload new logo
4. System automatically updates header, footer, and admin portal

### Brand Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'titan-navy': '#151C3B',
  'titan-blue': '#3157FF',
  // ... customize
}
```

### Typography
Edit `app/layout.tsx` to change fonts:
```typescript
import { Your_Font } from "next/font/google";
```

## 🔒 Security

- **Password Hashing:** bcrypt with 10 rounds
- **Session Management:** JWT with HTTP-only cookies
- **File Upload Validation:** MIME type and extension checks
- **Path Traversal Protection:** Sanitized filenames
- **Rate Limiting:** (Implement in production with middleware)
- **CSRF Protection:** Built into Next.js
- **XSS Protection:** React auto-escaping + input sanitization
- **SQL Injection:** N/A (MongoDB with Mongoose ODM)

### Production Security Checklist
- [ ] Change `NEXTAUTH_SECRET` to cryptographically secure value
- [ ] Change default admin password
- [ ] Set strong MongoDB password
- [ ] Enable MongoDB authentication
- [ ] Use environment variables for all secrets
- [ ] Enable HTTPS in production
- [ ] Implement rate limiting on API routes
- [ ] Set up regular database backups
- [ ] Monitor file upload directory size
- [ ] Implement CAPTCHA on public forms (optional)

## 🌐 Deployment

### VPS or Dedicated Server
1. Install Node.js, MongoDB, and Nginx
2. Clone repository
3. Configure environment variables
4. Build production bundle: `npm run build`
5. Start with PM2: `pm2 start npm --name "titan-logistics" -- start`
6. Configure Nginx reverse proxy

### Vercel (Requires cloud storage)
1. Connect GitHub repository
2. Add environment variables in Vercel dashboard
3. Deploy
4. **Note:** Integrate cloud storage for file uploads

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 MongoDB Compass Usage

1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Select `titan-logistics` database
4. View collections:
   - `adminusers` - Admin accounts
   - `services` - Service offerings
   - `quoterequests` - Freight quotes
   - `driverapplications` - CDL A applications
   - `pages` - Page content
   - `gallerycategories` - Gallery data
   - `testimonials` - Customer testimonials
   - `faqs` - FAQ entries
   - `blogposts` - Blog articles
   - `contactmessages` - Contact form submissions
   - `sitesettings` - Global configuration

## 🐛 Troubleshooting

### MongoDB Connection Error
- Verify MongoDB is running: `mongosh` or check services
- Check connection string in `.env.local`
- Ensure IP whitelist (Atlas) or firewall allows connections

### "Cannot find module" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Images not displaying
- Check file permissions on `public/uploads/`
- Verify correct relative paths in database
- Check browser console for 404 errors

### Admin login fails
- Verify database was seeded: visit `/api/seed`
- Check `adminusers` collection in MongoDB Compass
- Verify credentials match `.env.local`

### Build errors
```bash
npm run typecheck
npm run lint
```

## 📝 Content Management

### Adding a New Service
1. Admin → Services → Add Service
2. Fill listing information (displayed on `/services`)
3. Fill detail page content (displayed on `/services/[slug]`)
4. Service automatically gets its own route
5. No code changes required

### Editing Homepage
1. Admin → Pages → Home
2. Each section is editable independently
3. Change text, images, CTAs, visibility
4. Reorder sections with drag-and-drop
5. Changes reflect immediately on public site

### Managing Quotes
1. Admin → Quote Requests
2. View details, update status
3. Add internal notes
4. Set follow-up dates
5. Export to CSV for external CRM

## 📄 License

© 2026 Titan Logistics LLC. All rights reserved.

## 🆘 Support

For technical support or questions:
- Email: dispatch@titan-llc.com
- Phone: 402-326-8820

---

**Built with Next.js, TypeScript, MongoDB, and Tailwind CSS**
