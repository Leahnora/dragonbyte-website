# Images Folder

This folder is designated for asset images and other media files.

## Structure

```
images/
├── assets/          # Asset product images
├── placeholders/    # Placeholder images
└── icons/           # App icons and logos
```

## Usage

For the demo site, you can:
1. Add actual images here following the structure above
2. Use placeholder image services like:
   - `https://via.placeholder.com/300x200`
   - `https://placehold.co/300x200`
   - `https://picsum.photos/300/200`

## Image Guidelines

- **Format:** JPG, PNG, or WebP
- **Size:** Keep images under 500KB for optimal performance
- **Dimensions:** 
  - Thumbnails: 150x150px
  - Cards: 300x200px
  - Full view: 800x600px

## GitHub Pages

When deploying to GitHub Pages, ensure all images are committed to the repository and referenced using relative paths.

Example:
```html
<img src="images/assets/laptop1.jpg" alt="Laptop">
```

## Placeholder Services (No Download Required)

You can use online placeholder services directly in your HTML:

```html
<!-- Using placeholder.com -->
<img src="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Asset+Image" alt="Asset">

<!-- Using placehold.co -->
<img src="https://placehold.co/300x200/blue/white?text=Asset+Photo" alt="Asset">

<!-- Using picsum.photos (random images) -->
<img src="https://picsum.photos/300/200" alt="Asset">
```

These services are perfect for demos and don't require downloading or storing images locally.
