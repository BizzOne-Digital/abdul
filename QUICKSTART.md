# Titan Logistics - Quick Start Guide

## 🚀 Get Up and Running in 5 Minutes

### Step 1: Verify Prerequisites
```bash
node --version  # Should be 18.17 or higher
```

### Step 2: Install Dependencies
```bash
cd titan-logistics
npm install
```

### Step 3: Set Up MongoDB

**Option A: Local MongoDB (Recommended for Development)**
- Install MongoDB Community Server
- Start MongoDB service
- MongoDB will run at: `mongodb://localhost:27017`

**Option B: MongoDB Atlas (Cloud)**
- Create free account at https://www.mongodb.com/cloud/atlas
- Create cluster
- Get connection string
- Update `.env.local`

### Step 4: Environment Variables
The `.env.local` file is already created with working defaults:
```env
MONGODB_URI=mongodb://localhost:27017/titan-logistics
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=titan-logistics-secret-key-change-in-production
```

### Step 5: Seed the Database
Open your browser and visit:
```
http://localhost:3000/api/seed
```

Or use the dev server once it's running (Step 6).

**Default Admin Credentials:**
- Email: `admin@titan-llc.com`
- Password: `TitanAdmin2026!`

### Step 6: Start Development Server
```bash
npm run dev
```

The server will start at: **http://localhost:3000** (or 3005 if 3000 is in use)

### Step 7: Test the Website

**Public Website:**
- Homepage: http://localhost:3000
- Services: http://localhost:3000/services
- Quote: http://localhost:3000/quote
- About: http://localhost:3000/about
- Drivers: http://localhost:3000/drivers
- Contact: http://localhost:3000/contact

**Admin Portal:**
1. Go to: http://localhost:3000/admin/login
2. Login with default credentials (see Step 5)
3. Explore the dashboard

### Step 8: Populate Content

**In the Admin Portal:**
1. **Settings** → Update contact info, social links
2. **Services** → Edit existing services or add new ones
3. **Gallery** → Upload images (coming soon)
4. **Testimonials** → Add customer testimonials
5. **FAQs** → Add frequently asked questions
6. **Blog** → Create blog posts

## ✅ Verification Checklist

After following the steps above, verify:
- [ ] Homepage loads with hero section
- [ ] Three services appear on Services page
- [ ] Each service has a detail page (e.g., /services/dry-van)
- [ ] Quote form submits successfully
- [ ] Admin login works
- [ ] Dashboard shows statistics
- [ ] Services management page works

## 🎨 Logo Placement

Your logo is used in:
1. **Public Header** - Top left on all pages
2. **Public Footer** - Footer branding area
3. **Admin Sidebar** - Top of admin portal
4. **Admin Login** - Center of login page
5. **Favicon** - Browser tab icon (replaceable via admin)

To replace the logo:
1. Go to Admin → Settings → General
2. Upload new logo file
3. System updates automatically everywhere

## 📁 Key Directories

```
titan-logistics/
├── app/                      # Next.js pages and routes
│   ├── (public)/            # Public website pages
│   └── admin/               # Admin portal pages
├── components/              # Reusable UI components
├── lib/                     # Utilities and helpers
├── models/                  # MongoDB/Mongoose models
└── public/uploads/          # User-uploaded files
```

## 🔧 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run start           # Start production server
npm run typecheck       # Check TypeScript
npm run lint            # Run linter

# Database
# Visit /api/seed       # Seed database via browser
```

## 🆘 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED ::1:27017
```
**Solution:** Start MongoDB service
- Windows: `net start MongoDB`
- Mac: `brew services start mongodb-community`
- Linux: `sudo systemctl start mongod`

### Port Already in Use
```
Port 3000 is already in use
```
**Solution:** The dev server will automatically use the next available port (3005, 3006, etc.)

### Admin Login Fails
**Solution:** 
1. Make sure you visited `/api/seed` to create the admin user
2. Check credentials: `admin@titan-llc.com` / `TitanAdmin2026!`
3. Verify MongoDB is running and connected

### Build Errors
```bash
npm run typecheck  # Find TypeScript errors
rm -rf .next       # Clear Next.js cache
npm run build      # Try building again
```

## 📞 Need Help?

- **README.md** - Complete documentation
- **DEPLOYMENT.md** - Production deployment guide
- **FEATURES.md** - Full feature list

## 🎯 Next Steps

1. **Customize Content**
   - Edit homepage sections (Admin → Pages → Home)
   - Update services with real information
   - Add your logo and brand colors

2. **Add Real Content**
   - Upload gallery images
   - Add customer testimonials
   - Create FAQ entries
   - Write blog posts

3. **Test Everything**
   - Submit test quote requests
   - Test driver application flow
   - Test contact form
   - Verify responsive design on mobile

4. **Prepare for Production**
   - Read DEPLOYMENT.md
   - Set up MongoDB Atlas
   - Generate secure NEXTAUTH_SECRET
   - Configure domain and SSL

---

**You're ready to go!** 🎉

The complete Titan Logistics website and CMS are now running locally.
