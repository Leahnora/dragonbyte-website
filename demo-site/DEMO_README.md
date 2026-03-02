# Asset Registry - Static Demo Site

A fully functional static HTML/CSS/JavaScript version of the Asset Registry application, designed for GitHub Pages deployment.

## 🚀 Quick Start

### Local Development
1. Simply open `index.html` in your web browser
2. No server, build process, or dependencies required!

### GitHub Pages Deployment
1. Copy all files from the `demo-site` folder to your GitHub repository
2. Go to Settings → Pages
3. Select your branch and root folder
4. Your site will be live at `https://yourusername.github.io/repository-name/`

## 📁 Project Structure

```
demo-site/
├── index.html              # Login/Landing page
├── dashboard.html          # Main dashboard with stats
├── assets.html             # Asset listing with filters
├── asset-detail.html       # Individual asset details
├── maintenance.html        # Maintenance logs
├── borrowings.html         # Borrowing management
├── costs.html              # Cost analytics
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── app.js              # Demo data & utilities
│   └── navigation.js       # Navigation component
├── images/
│   └── README.md           # Image guidelines
└── README.md               # This file
```

## ✨ Features

### Dashboard
- Real-time statistics cards
- Overdue borrowing alerts
- Maintenance notifications
- Quick action buttons
- Recent assets overview

### Asset Management
- 📦 Browse all assets in card view
- 🔍 Real-time search functionality
- 🎯 Filter by category, division, and status
- 📊 Detailed asset information pages
- 💰 Financial tracking with depreciation

### Maintenance Tracking
- 🔧 Complete maintenance history
- 💵 Cost breakdowns by asset
- 📅 Next maintenance schedule
- 👷 Service provider information

### Borrowing System
- 📤 Active borrowing tracking
- ⚠️ Overdue return alerts
- ✅ Return status management
- 👥 Borrower information

### Cost Analytics
- 💰 Total asset valuation
- 📉 Depreciation tracking
- 🔧 Maintenance cost summaries
- 📊 Cost breakdown by category/division
- 📈 Visual analytics with charts

## 🛠️ Technology Stack

- **Tailwind CSS v3** (CDN) - Utility-first CSS framework
- **Alpine.js v3** (CDN) - Lightweight JavaScript framework
- **Vanilla JavaScript** - No complex dependencies
- **LocalStorage** - Client-side data persistence

## 🎨 Customization

### Adding More Demo Data

Edit `js/app.js` and modify the demo data objects:

```javascript
const DemoData = {
  assets: [...],        // Add more assets
  maintenanceLogs: [...],  // Add maintenance records
  borrowings: [...],    // Add borrowing records
  categories: [...],    // Add categories
  divisions: [...],     // Add divisions
};
```

### Styling Changes

1. **Tailwind Classes:** Modify directly in HTML files
2. **Custom CSS:** Edit `css/styles.css`
3. **Colors:** Update Tailwind color classes (e.g., `bg-blue-600` → `bg-purple-600`)

### Adding New Pages

1. Create a new HTML file (e.g., `reports.html`)
2. Copy the structure from an existing page
3. Add navigation link in `js/navigation.js`
4. Implement your custom functionality with Alpine.js

## 📱 Responsive Design

Fully responsive and mobile-friendly:
- ✅ Mobile phones (320px+)
- ✅ Tablets (768px+)
- ✅ Desktop (1024px+)
- ✅ Large screens (1440px+)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Demo Mode

This is a **demo version** with:
- Pre-populated demo data
- Client-side filtering and search
- No backend required
- All data stored in browser localStorage
- Edit/Delete actions are disabled (display only)

## 📝 Features to Note

- **Automatic Navigation:** Navigation bar updates based on current page
- **Data Persistence:** Demo data is stored in localStorage
- **Real-time Filtering:** All filters work instantly on the client-side
- **Status Badges:** Color-coded status indicators
- **Responsive Tables:** Scroll horizontally on mobile devices
- **Alerts:** Visual alerts for overdue items and damaged assets

## 🚀 Deployment Tips

### GitHub Pages
```bash
# Copy demo-site to your repo
git add .
git commit -m "Add Asset Registry demo"
git push origin main

# Enable in Settings → Pages
```

### Netlify
Simply drag and drop the `demo-site` folder to Netlify

### Vercel
```bash
vercel deploy
```

### Any Static Host
Upload the contents of `demo-site` folder to any static hosting service

## 🔄 Updates and Maintenance

### To Update Demo Data
1. Edit `js/app.js`
2. Modify the `DemoData` object
3. Refresh your browser (may need to clear localStorage)

### To Add Features
1. Update HTML structure
2. Add Alpine.js data/methods
3. Style with Tailwind CSS or custom CSS

## 🤝 Integration with Backend

To connect to a real backend:
1. Replace `DemoData` with API calls
2. Update Alpine.js to use `fetch()` or `axios`
3. Add authentication
4. Enable edit/delete functionality

Example:
```javascript
async function fetchAssets() {
  const response = await fetch('https://api.example.com/assets');
  return await response.json();
}
```

## 📄 License

Part of the Asset Registry project. Feel free to use and modify for your needs.

## 🆘 Support

For issues or questions:
1. Check the inline comments in the code
2. Review the demo data structure in `js/app.js`
3. Inspect browser console for JavaScript errors

## 🎯 Demo Credentials

**Email:** demo@assetregistry.com  
**Action:** Click "View Demo" button

---

**Built with ❤️ using Laravel, Tailwind CSS & Alpine.js**

*This is a static demo version. The full application includes server-side features, database integration, authentication, and more.*
