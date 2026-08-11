# Hero Sections Updated - All Pages

## Summary
Updated all hero sections across the website with attractive background images, gradient overlays, animated gradient orbs, and better visual effects.

## Changes Applied to All Pages

### Visual Enhancements:
1. **Background Images**: High-quality Unsplash images relevant to each page
2. **Gradient Overlays**: Multi-layer gradients (from-titan-midnight → via-titan-navy → to-titan-blue)
3. **Animated Orbs**: Floating gradient circles with blur effects and pulse animations
4. **Overflow Hidden**: Prevents orb effects from extending outside sections
5. **Fade-up Animations**: Content animates in with smooth fade-up effect
6. **Z-index Layering**: Proper stacking of background → overlay → orbs → content

### Pages Updated:

#### **Home Page** (`/`)
- **Image**: Truck on highway (photo-1601584115197)
- **Effect**: 3 animated orbs + hexagonal pattern overlay
- **Gradient**: from-midnight/90 → via-navy/85 → to-blue/70

#### **About Page** (`/about`)
- **Image**: Truck on road (photo-1519003722824)
- **Effect**: 2 animated gradient orbs
- **Gradient**: from-navy/95 → via-midnight/90 → to-navy/95

#### **Services Page** (`/services`)
- **Image**: Semi-truck close-up (photo-1586528116311)
- **Effect**: 2 gradient orbs with pulse animation
- **Gradient**: from-midnight/95 → via-navy/85 → to-transparent

#### **Contact Page** (`/contact`)
- **Image**: Office workspace (photo-1556740738)
- **Effect**: 2 animated orbs (blue + orange)
- **Gradient**: from-midnight/95 → via-navy/90 → to-blue/80

#### **Drivers Page** (`/drivers`)
- **Image**: Highway perspective (photo-1519003722824)
- **Effect**: 2 gradient orbs (blue + orange)
- **Gradient**: from-navy/95 → via-midnight/90 → to-blue/70

#### **Quote Page** (`/quote`)
- **Image**: Logistics clipboard (photo-1566307893618)
- **Effect**: 2 centered gradient orbs with pulse
- **Gradient**: from-midnight/98 → via-navy/90 → to-midnight/95

#### **Coverage Page** (`/coverage`)
- **Image**: Map/geography (photo-1524661135)
- **Effect**: 2 corner orbs (blue + orange)
- **Gradient**: from-midnight/95 → via-navy/90 → to-blue/75

#### **FAQs Page** (`/faqs`)
- **Image**: Business documents (photo-1454165804606)
- **Effect**: 2 gradient orbs with animation
- **Gradient**: from-midnight/95 → via-navy/90 → to-blue/80

#### **Gallery Page** (`/gallery`)
- **Image**: Truck fleet (photo-1464219789935)
- **Effect**: 2 positioned orbs (blue + orange)
- **Gradient**: from-midnight/95 → via-navy/90 → to-blue/75

#### **Testimonials Page** (`/testimonials`)
- **Image**: Team collaboration (photo-1522071820081)
- **Effect**: 2 quadrant-positioned orbs
- **Gradient**: from-navy/95 → via-midnight/90 → to-blue/80

#### **Blog Page** (`/blog`)
- **Image**: Laptop workspace (photo-1486312338219)
- **Effect**: 2 positioned gradient orbs
- **Gradient**: from-midnight/95 → via-navy/90 → to-blue/70

## Technical Details

### Gradient Orb Pattern:
```tsx
<div className="absolute inset-0">
  <div className="absolute top-20 left-20 w-72 h-72 bg-titan-blue/15 rounded-full blur-3xl animate-pulse-slow"></div>
  <div className="absolute bottom-20 right-20 w-80 h-80 bg-titan-orange/10 rounded-full blur-3xl"></div>
</div>
```

### Background Image Pattern:
```tsx
<div className="absolute inset-0 bg-[url('...')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-titan-midnight/95 via-titan-navy/90 to-titan-blue/80"></div>
```

## CSS Animations Used:
- `animate-fade-up`: Content fades in from bottom
- `animate-pulse-slow`: Slow pulsing effect (3s duration)
- `blur-3xl`: Heavy blur for dreamy orb effect

## Color Scheme:
- **Primary**: titan-navy (#151C3B), titan-midnight (#080D1F)
- **Accent**: titan-blue (#3157FF)
- **Highlight**: titan-orange (#FF6B35) - used sparingly
- **Text**: titan-off-white (#F4F7FA)

## Result:
All hero sections now have:
✅ Professional background imagery
✅ Layered gradient overlays
✅ Animated visual effects
✅ Consistent brand identity
✅ Enhanced visual hierarchy
✅ Smooth animations
✅ Modern, premium feel

The website now has a consistent, attractive, and professional appearance across all pages with cinematic hero sections that reinforce the Titan Logistics brand identity.
