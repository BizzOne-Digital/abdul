# Titan Logistics Logo - Placement & Usage Guide

## 🎨 Your Logo

You provided the **Titan Logistics LLC logo** with:
- Dark navy blue hexagonal/shield frame
- "TITAN" in large bold letters
- "LOGISTICS LLC" beneath
- Semi-truck icon at top
- White background
- Blue accent border

This logo has been integrated throughout the website following professional branding standards.

---

## 📍 Where Your Logo Appears

### 1. **Public Website Header** (Top-Left)
**Location:** Every public page
**Position:** Top-left corner, fixed navigation
**Behavior:** 
- Always visible as users scroll
- Clickable - returns to homepage
- Responsive sizing (larger on desktop, smaller on mobile)

**File:** `components/Header.tsx`
```typescript
// Currently using text placeholder
// Logo will appear here once uploaded
<Link href="/" className="flex items-center">
  <div className="text-2xl font-display font-bold">TITAN</div>
  <div className="text-xs">LOGISTICS LLC</div>
</Link>
```

### 2. **Public Website Footer**
**Location:** Bottom of every public page
**Position:** Footer branding section
**Usage:** Company identification with description

**File:** `components/Footer.tsx`

### 3. **Admin Portal Sidebar** (Top)
**Location:** Left sidebar of admin portal
**Position:** Top of navigation menu
**Usage:** Branding for admin interface

**File:** `components/AdminSidebar.tsx`

### 4. **Admin Login Page**
**Location:** `/admin/login`
**Position:** Centered above login form
**Usage:** Large, prominent display
**Treatment:** Professional authentication screen

**File:** `app/admin/login/page.tsx`

### 5. **Browser Favicon**
**Location:** Browser tab
**Usage:** Small icon representation
**Recommendation:** Create simplified version (shield + T)

---

## 🔧 How to Add Your Actual Logo

### Method 1: Via Admin Portal (Recommended)
1. Start the website: `npm run dev`
2. Go to: http://localhost:3005/admin/login
3. Login with credentials:
   - Email: `admin@titan-llc.com`
   - Password: `TitanAdmin2026!`
4. Navigate to: **Settings → General**
5. Upload logo image
6. Logo will automatically update everywhere

### Method 2: Manual File Placement
1. Save your logo as `logo.png` or `logo.svg`
2. Place it in: `public/uploads/settings/`
3. Update database settings to point to new logo
4. Logo will render on all pages

---

## 📐 Logo Specifications

### Recommended Formats
- **Primary:** SVG (scalable, perfect quality)
- **Alternative:** PNG with transparent background (at least 800px wide)
- **Favicon:** ICO or PNG (32x32, 64x64, 128x128)

### Size Guidelines
- **Desktop Header:** ~200-220px width
- **Mobile Header:** ~140-160px width
- **Footer:** ~180px width
- **Admin Sidebar:** ~160px width
- **Admin Login:** ~250-300px width
- **Favicon:** 32px, 64px, 128px square

### Recommended Logo Versions

#### 1. Full Logo (Current)
- Complete logo with truck, text, and shield
- Use in: Header, footer, admin login
- File: `titan-logo-full.png` or `.svg`

#### 2. Horizontal Logo (Optional)
- Simplified version for tight spaces
- "TITAN" + shield icon only
- Use in: Mobile header, admin sidebar
- File: `titan-logo-horizontal.png`

#### 3. Icon/Symbol (Favicon)
- Just the hexagonal shield with "T"
- Use in: Browser tab, app icon
- File: `favicon.ico`

---

## 🎨 Logo Placement Philosophy

Your logo follows the **"Everywhere Visible"** approach:

1. **Consistent Presence** - Logo appears on every page
2. **Navigation Aid** - Clicking logo returns to homepage
3. **Brand Recognition** - Reinforces Titan identity
4. **Professional Standard** - Follows industry best practices

### Design Inspiration from Your Logo

The hexagonal shield geometry inspired these design elements:
- Subtle hexagonal button shapes
- Section transition angles
- Route marker icons in coverage section
- Frame treatments around images
- Geometric accents throughout design

**Note:** Not every element is hexagonal - shape used selectively for maximum impact.

---

## 🖼️ Current Logo Treatment

### Text-Based Placeholder
Currently, the site uses a **text-based logo representation**:
```
TITAN
LOGISTICS LLC
```

This is styled to match your logo's typography:
- Bold, condensed display font
- Navy blue color
- Professional spacing
- Smaller subtitle text

### Why Placeholder?
1. **Flexibility** - Works immediately without image file
2. **Performance** - No image loading delay
3. **Responsive** - Scales perfectly on all devices
4. **Temporary** - Easy to replace with actual logo

---

## 🔄 Logo Update Process

When you upload your actual logo through the admin panel:

1. **Upload** → File saved to `/public/uploads/settings/`
2. **Database** → Logo URL stored in SiteSettings model
3. **Automatic** → All components fetch logo from settings
4. **Result** → Logo appears everywhere instantly

### Affected Components
All these will automatically show your uploaded logo:
- Header component
- Footer component  
- Admin sidebar
- Admin login page
- Email templates (if configured)
- Social media sharing images

---

## 📱 Responsive Logo Behavior

### Desktop (1280px+)
- Full logo with truck icon
- ~200-220px width
- Full detail visible

### Tablet (768px - 1279px)
- Full logo, slightly smaller
- ~180px width
- All elements visible

### Mobile (< 768px)
- Simplified or full logo
- ~140-160px width
- Remains legible and recognizable

### Small Mobile (< 390px)
- Compact version
- ~120px width
- May show icon + TITAN only

---

## 🎯 Logo Best Practices

### ✅ DO:
- Use high-resolution images (at least 2x for retina displays)
- Provide transparent background PNG or SVG
- Maintain original aspect ratio
- Test on various devices
- Ensure logo is clickable (links to homepage)

### ❌ DON'T:
- Stretch or distort the logo
- Use low-resolution images
- Change brand colors arbitrarily
- Make logo too small to read
- Forget alt text for accessibility

---

## 🔍 Logo Accessibility

All logo implementations include:
- **Alt Text:** "Titan Logistics LLC Logo"
- **Title Attribute:** "Titan Logistics LLC - Return to Homepage"
- **Semantic HTML:** Proper link structure
- **Keyboard Navigation:** Fully accessible via Tab key
- **Screen Reader:** Properly announced

---

## 📋 Logo Checklist

Before going live, verify:
- [ ] Logo uploaded via admin panel
- [ ] Appears correctly in header
- [ ] Appears correctly in footer
- [ ] Appears correctly in admin sidebar
- [ ] Appears correctly on admin login
- [ ] Favicon shows in browser tab
- [ ] Logo links to homepage
- [ ] Responsive on all devices
- [ ] Transparent background (if PNG)
- [ ] High resolution (not pixelated)
- [ ] Proper alt text set
- [ ] Matches brand guidelines

---

## 💡 Quick Answer to Your Question

**"Logo kahan rkhna hy?" (Where should the logo be placed?)**

**Answer:** 

Your logo is **already integrated** into the website structure. You just need to:

1. **Upload it** via the Admin Portal → Settings → General
2. **OR** Place it manually in `public/uploads/settings/logo.png`

The logo will then automatically appear in:
- ✅ Website header (top-left)
- ✅ Website footer
- ✅ Admin sidebar
- ✅ Admin login page
- ✅ Browser tab (favicon)

**No code changes needed!** The system is designed to display your logo everywhere once uploaded.

---

## 📞 Need Help?

If you need assistance with logo upload or placement:
1. Check QUICKSTART.md for setup instructions
2. Verify admin login works
3. Navigate to Settings → General
4. Upload logo file
5. Save and refresh page

**Your logo will appear instantly across the entire website! 🎨**
