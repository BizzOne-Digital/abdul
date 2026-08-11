# Titan Logistics - Deployment Guide

## Pre-Deployment Checklist

### 1. Environment Variables
Ensure all production environment variables are set:

```env
# MongoDB - Use production MongoDB Atlas cluster
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/titan-logistics?retryWrites=true&w=majority

# NextAuth - MUST change in production
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=<generate-with-openssl-rand-base64-32>

# Admin Credentials
INITIAL_ADMIN_EMAIL=admin@titan-llc.com
INITIAL_ADMIN_PASSWORD=<strong-password-here>

# Site
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Titan Logistics LLC
```

### 2. Security Steps
- [ ] Generate new `NEXTAUTH_SECRET` with: `openssl rand -base64 32`
- [ ] Change default admin password
- [ ] Enable MongoDB authentication and set strong password
- [ ] Review and restrict MongoDB network access (IP whitelist)
- [ ] Set up MongoDB backups
- [ ] Enable HTTPS/SSL certificates
- [ ] Review CORS settings if needed

### 3. Performance Optimization
- [ ] Run `npm run build` to verify production build
- [ ] Optimize images in `/public/uploads/`
- [ ] Consider CDN for static assets
- [ ] Enable compression middleware
- [ ] Set up monitoring (Sentry, LogRocket, etc.)

### 4. File Upload Strategy

**For VPS/Dedicated Server:**
- Local uploads work fine with persistent storage
- Ensure proper file permissions on `/public/uploads/`
- Set up regular backups

**For Serverless (Vercel/Netlify):**
- Integrate cloud storage (AWS S3, Cloudflare R2, etc.)
- Update `/app/api/upload/route.ts` to use cloud SDK
- URLs are already stored in MongoDB (no database changes needed)

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

1. **Connect Repository**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Configure Environment Variables**
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add all variables from `.env.local`

3. **MongoDB Setup**
   - Use MongoDB Atlas (cloud)
   - Add Vercel's IP ranges to MongoDB network access

4. **File Uploads**
   - Integrate AWS S3, Cloudflare R2, or similar
   - Update upload API route

5. **Deploy**
   ```bash
   vercel --prod
   ```

6. **Seed Database**
   - Visit `https://your-domain.com/api/seed` (only works in development)
   - Or use MongoDB Compass to manually import seed data

### Option 2: VPS (DigitalOcean, AWS EC2, Linode)

1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js 18+
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install MongoDB
   wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
   echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
   sudo apt update
   sudo apt install -y mongodb-org
   sudo systemctl start mongod
   sudo systemctl enable mongod

   # Install PM2
   sudo npm install -g pm2
   ```

2. **Clone and Build**
   ```bash
   cd /var/www
   git clone <your-repo-url> titan-logistics
   cd titan-logistics
   npm ci
   npm run build
   ```

3. **Configure Environment**
   ```bash
   cp .env.example .env.local
   nano .env.local  # Edit with production values
   ```

4. **Seed Database**
   ```bash
   # Visit http://your-server-ip:3000/api/seed
   # Or manually with MongoDB Compass
   ```

5. **Start with PM2**
   ```bash
   pm2 start npm --name "titan-logistics" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx Reverse Proxy**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
       }
   }
   ```

7. **Enable SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

### Option 3: Docker Deployment

1. **Create Dockerfile** (if needed)
   ```dockerfile
   FROM node:20-alpine AS base

   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV=production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   USER nextjs
   EXPOSE 3000
   ENV PORT=3000
   CMD ["node", "server.js"]
   ```

2. **Build and Run**
   ```bash
   docker build -t titan-logistics .
   docker run -p 3000:3000 --env-file .env.local titan-logistics
   ```

## Post-Deployment

### 1. Test Everything
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Services page displays seeded services
- [ ] Dynamic service detail pages work (`/services/dry-van`)
- [ ] Quote form submits successfully
- [ ] Admin login works
- [ ] Admin dashboard shows real data
- [ ] File uploads work
- [ ] All public pages render

### 2. Admin Setup
1. Log into admin portal: `https://your-domain.com/admin/login`
2. Change admin password immediately
3. Upload actual logo (Settings → General)
4. Update contact information (Settings → Contact)
5. Update footer content (Settings → Footer)
6. Review and edit homepage sections (Pages → Home)

### 3. Content Population
1. Edit existing services or add new ones
2. Upload gallery images
3. Add testimonials (mark as draft initially)
4. Add FAQs
5. Create blog posts
6. Test quote request flow

### 4. Monitoring Setup
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry)
- Enable MongoDB monitoring (MongoDB Atlas alerts)
- Set up backup automation
- Configure log rotation

### 5. Performance Verification
- Test with Google PageSpeed Insights
- Verify mobile responsiveness
- Test Core Web Vitals
- Check accessibility with Lighthouse
- Test all forms and interactions

## Backup Strategy

### Database Backup
```bash
# Automated daily backup
mongodump --uri="mongodb://localhost:27017/titan-logistics" --out=/backups/$(date +%Y%m%d)

# Restore from backup
mongorestore --uri="mongodb://localhost:27017/titan-logistics" /backups/20260811
```

### File Backup
```bash
# Backup uploads directory
tar -czf uploads-backup-$(date +%Y%m%d).tar.gz /var/www/titan-logistics/public/uploads

# Restore
tar -xzf uploads-backup-20260811.tar.gz -C /var/www/titan-logistics/public/
```

## Troubleshooting

### Build Fails
- Run `npm run typecheck` to find TypeScript errors
- Check Node.js version (requires 18.17+)
- Clear `.next` folder and rebuild

### MongoDB Connection Issues
- Verify MongoDB is running: `sudo systemctl status mongod`
- Check connection string in `.env.local`
- Verify network access (MongoDB Atlas IP whitelist)
- Test connection with MongoDB Compass

### Admin Login Fails
- Verify database was seeded
- Check bcrypt is installed correctly
- Verify `NEXTAUTH_SECRET` is set
- Check browser cookies are enabled

### Images Not Uploading
- Check file permissions on `/public/uploads/`
- Verify upload size limits (10MB default)
- Check available disk space
- Review server logs for errors

### Slow Performance
- Enable production mode: `NODE_ENV=production`
- Verify MongoDB indexes are created
- Consider adding Redis caching
- Enable compression middleware
- Use CDN for static assets

## Maintenance

### Regular Tasks
- **Daily**: Check error logs, monitor uptime
- **Weekly**: Review quote requests, test critical paths
- **Monthly**: Update dependencies, backup verification, performance review
- **Quarterly**: Security audit, MongoDB index optimization

### Updates
```bash
# Update dependencies
npm outdated
npm update

# Major version updates (test thoroughly)
npm install package@latest
npm run build
npm run typecheck
```

## Support

For deployment assistance:
- Documentation: See README.md
- MongoDB Atlas: https://docs.atlas.mongodb.com/
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Documentation: https://vercel.com/docs

---

**Remember**: Always test in a staging environment before deploying to production!
