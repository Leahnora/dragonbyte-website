# Asset Registry - Static Demo

This is a static HTML/CSS/JS demo version of the Asset Registry application for GitHub Pages.

## Features

- 📊 Interactive Dashboard with real-time stats
- 📦 Asset Management (view, search, filter)
- 🔧 Maintenance Tracking
- 📤 Borrowing Management
- 💰 Cost Analytics
- 📱 Fully Responsive Design

## Technology Stack

- **Tailwind CSS** (v3.x via CDN)
- **Alpine.js** (v3.x via CDN)
- Vanilla JavaScript for data management
- No backend or build process required

## Structure

```
demo-site/
├── index.html              # Landing/Login page
├── dashboard.html          # Main dashboard
├── assets.html             # Assets listing
├── asset-detail.html       # Asset detail view
├── maintenance.html        # Maintenance logs
├── borrowings.html         # Borrowing management
├── costs.html              # Cost tracking
├── css/
│   └── styles.css          # Custom styles
├── js/
│   ├── app.js              # Main app logic & demo data
│   └── navigation.js       # Navigation component
└── images/                 # Demo images (placeholder)
```

## Getting Started

### Local Development

Simply open `index.html` in your browser. No server required!

### GitHub Pages Deployment

1. Copy the entire `demo-site` folder contents to your GitHub Pages repository
2. Push to GitHub
3. Enable GitHub Pages in repository settings
4. Access via: `https://yourusername.github.io/repository-name/`

## Demo Credentials

This is a static demo - click "View Demo" on the login page to enter.

## Features Demonstrated

### Dashboard
- Total assets statistics
- Status breakdown (Available, In Use, Under Repair)
- Overdue borrowing alerts
- Maintenance notifications

### Assets Management
- Search functionality
- Filter by category, division, section, status
- Sortable columns
- Asset detail views with images and history

### Maintenance Logs
- Maintenance history tracking
- Cost breakdowns
- Service provider information

### Borrowing System
- Active borrowings
- Return date tracking
- Overdue indicators
- Borrower information

## Customization

### Adding More Demo Data

Edit `js/app.js` and modify the demo data objects:
- `demoAssets` - Asset records
- `demoMaintenanceLogs` - Maintenance entries
- `demoBorrowings` - Borrowing records

### Styling

- Modify `css/styles.css` for custom styles
- Tailwind classes can be changed directly in HTML

## Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This demo is part of the Asset Registry project.
