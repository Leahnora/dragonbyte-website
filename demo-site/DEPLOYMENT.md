# GitHub Pages Deployment Guide

## Option 1: Deploy from Main Repository

1. **Prepare the demo folder:**
   - Ensure all files in `demo-site` folder are complete
   - Test locally by opening `index.html` in your browser

2. **Push to GitHub:**
   ```bash
   # If not already a git repository
   cd demo-site
   git init
   git add .
   git commit -m "Initial commit: Asset Registry demo"
   
   # Create a new repo on GitHub, then:
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## Option 2: Deploy to Existing Company Page

If you already have a company GitHub Pages site:

1. **Copy demo-site contents to a subfolder:**
   ```bash
   # In your company pages repo
   mkdir asset-registry-demo
   cp -r /path/to/demo-site/* asset-registry-demo/
   ```

2. **Commit and push:**
   ```bash
   git add asset-registry-demo
   git commit -m "Add Asset Registry demo"
   git push origin main
   ```

3. **Access the demo:**
   - Your demo will be at: `https://YOUR-USERNAME.github.io/COMPANY-SITE/asset-registry-demo/`

## Option 3: Use GitHub Pages Subdirectory

1. **Create a docs folder in your main project:**
   ```bash
   # In your main Laravel project
   mkdir -p docs
   cp -r demo-site/* docs/
   ```

2. **Push changes:**
   ```bash
   git add docs
   git commit -m "Add static demo in docs folder"
   git push origin main
   ```

3. **Configure GitHub Pages:**
   - Go to Settings → Pages
   - Select **main** branch
   - Select **/docs** folder
   - Click Save

## Testing Before Deployment

### Local Testing
Simply open `index.html` in your browser. All features should work without a server.

### Test Checklist
- ✅ Login page loads and redirects to dashboard
- ✅ Navigation works between all pages
- ✅ Dashboard shows statistics and alerts
- ✅ Assets page shows cards and search works
- ✅ Filters work on assets page
- ✅ Asset detail page loads with correct data
- ✅ Maintenance logs display correctly
- ✅ Borrowings page shows items with status
- ✅ Costs page displays charts and tables
- ✅ Mobile responsive design works

## Custom Domain (Optional)

If you want to use a custom domain:

1. **Create CNAME file:**
   ```bash
   echo "demo.yourcompany.com" > CNAME
   ```

2. **Configure DNS:**
   - Add a CNAME record pointing to: `YOUR-USERNAME.github.io`
   - Or A records pointing to GitHub's IPs

3. **Update GitHub Pages settings:**
   - Enter your custom domain in Settings → Pages
   - Enable "Enforce HTTPS"

## Deployment Alternatives

### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `demo-site` folder
3. Or connect your GitHub repository
4. Instant deployment with custom domain support

### Vercel
```bash
npm i -g vercel
cd demo-site
vercel
```

### Cloudflare Pages
1. Connect your GitHub repository
2. Build command: (none)
3. Build output directory: `/` (root)
4. Deploy!

## Updating the Demo

After making changes:

```bash
git add .
git commit -m "Update demo site"
git push origin main
```

GitHub Pages will automatically rebuild (may take 1-2 minutes).

## Troubleshooting

### Pages not updating?
- Clear browser cache (Ctrl+F5)
- Check GitHub Actions tab for build status
- Wait a few minutes for propagation

### 404 errors?
- Ensure all file paths are relative
- Check that all files are committed
- Verify the branch and folder settings

### Styles not loading?
- Check CDN links are accessible
- Verify `styles.css` path is correct
- Check browser console for errors

### Data not showing?
- Open browser console (F12)
- Check for JavaScript errors
- Verify localStorage is working (try incognito mode)

## Best Practices

1. **Test Locally First:** Always test in your browser before deploying
2. **Optimize Images:** Compress images for faster loading
3. **Check Mobile:** Test on different screen sizes
4. **Monitor Performance:** Use Chrome DevTools Lighthouse
5. **Keep it Simple:** Static sites should be lightweight
6. **Version Control:** Tag releases for easy rollback

## Security Notes

- This is a **demo only** - no authentication required
- No sensitive data should be stored
- All data is client-side (localStorage)
- Perfect for showcasing features publicly

## Adding to Company Website

To link from your company website:

```html
<a href="https://yourcompany.github.io/asset-registry-demo/" 
   target="_blank" 
   class="button">
  View Asset Registry Demo
</a>
```

## Questions?

- Check the [main README](DEMO_README.md) for more details
- Review the code comments in each file
- Test locally to understand the workflow

---

**Ready to deploy? Start with Option 1 above! 🚀**
