# SPL Website - Netlify Deployment Guide

## Prerequisites
1. GitHub account
2. Netlify account (sign up at https://netlify.com)
3. MongoDB Atlas account (for production database)

## Deployment Steps

### 1. Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Connect to Netlify
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your SPL repository

### 3. Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18

### 4. Set Environment Variables
Go to Site settings → Environment variables and add:

```
DATABASE_URL=mongodb+srv://webdevvikas:586947@spl.xtmv79d.mongodb.net/spl?retryWrites=true&w=majority&ssl=true

NEXTAUTH_URL=https://your-site-name.netlify.app
NEXTAUTH_SECRET=your-secret-key-here

EASEBUZZ_KEY=UUFS72X2L4
EASEBUZZ_SALT=SJNP1ZOEC

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=hulk.bulk.mail@gmail.com
SMTP_PASS=lxri kqau okkc knjh
```

### 5. Install Netlify Next.js Plugin
The plugin is configured in `netlify.toml` and will be automatically installed.

### 6. Deploy
Click "Deploy site" - Netlify will build and deploy your site automatically.

### 7. Update Easebuzz Settings
After deployment, update your Easebuzz account with:
- Success URL: `https://your-site-name.netlify.app/payment/success`
- Failure URL: `https://your-site-name.netlify.app/payment/failed`

## Important Notes

1. **Database**: Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0) or add Netlify IPs
2. **Environment Variables**: Never commit `.env` file to GitHub
3. **Custom Domain**: You can add a custom domain in Netlify settings
4. **HTTPS**: Netlify provides free SSL certificates automatically

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### Database Connection Issues
- Check MongoDB Atlas network access settings
- Verify DATABASE_URL is correct
- Ensure database user has proper permissions

### Payment Gateway Issues
- Update Easebuzz URLs after deployment
- Test with Easebuzz test credentials first
- Check browser console for errors

## Post-Deployment Checklist
- [ ] Test registration flow
- [ ] Test payment integration
- [ ] Verify email notifications
- [ ] Check admin login
- [ ] Test on mobile devices
- [ ] Update Easebuzz callback URLs
- [ ] Set up custom domain (optional)

## Support
For issues, check Netlify deployment logs and browser console errors.
