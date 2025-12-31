# Portfolio Website - Setup Guide

A clean, minimal portfolio website with two-row navigation, masonry gallery layout, blue hover effects, Gumroad shop integration, and easy customization.

## 🚀 Quick Start

### 1. Upload to GitHub

1. Create a new repository on GitHub named `your-username.github.io` (replace with your actual GitHub username)
2. Upload all these files to your repository:
   - index.html
   - about.html
   - page1.html through page7.html
   - shop.html
   - style.css
   - gallery.js
   - page1-gallery.js through page7-gallery.js
   - README.md
   - CUSTOMIZATION-CHECKLIST.md

3. Create an `images` folder in your repository

4. Your site will be live at: `https://your-username.github.io`

### 2. Organize Your Images

Create folders inside the `images` folder for organization:
```
images/
├── example1.jpg (for homepage)
├── example2.jpg
├── category1/
├── category2/
├── category3/
├── category4/
├── category5/
├── category6/
└── category7/
```

## ✏️ How to Edit Your Site

### Changing Your Name & Navigation

Open any HTML file and find the sections marked with:
```html
<!-- ===== EDIT YOUR NAME HERE ===== -->
```

Change "YOUR NAME" to your actual name in ALL HTML files.

### Two-Row Navigation

Your site has a modern two-row navigation:

**Top Row:** Home, Category 1-4, About
**Bottom Row:** Category 5-7, Shop, Social Icons

Find these sections in ALL HTML files:
```html
<!-- ===== EDIT TOP NAVIGATION LINKS HERE ===== -->
<!-- ===== EDIT BOTTOM NAVIGATION LINKS HERE ===== -->
```

Rename the categories to match your work (e.g., "Character Design", "Concept Art", "3D Work", etc.)

### Adding Your Social Media Links

Find this section in ALL HTML files:
```html
<!-- ===== EDIT YOUR SOCIAL MEDIA LINKS HERE ===== -->
<a href="https://instagram.com/your-username" target="_blank">
```

Replace `your-username` with your actual handles.

### Adding Images to Galleries

Each page has its own gallery JavaScript file:
- Homepage: `gallery.js`
- Page 1: `page1-gallery.js`
- Page 2: `page2-gallery.js`
- Page 3: `page3-gallery.js`
- Page 4: `page4-gallery.js`

Open the file and add your images:
```javascript
const galleryImages = [
    'images/my-artwork.jpg',
    'images/category1/piece1.png',
    'images/category1/piece2.jpg',
    // Just add more lines like this!
];
```

### Adding Text to Gallery Pages

Open any page (page1.html, page2.html, etc.) and find:
```html
<!-- ===== OPTION 1: TEXT ONLY ===== -->
<!-- Uncomment this section if you want text on this page -->
```

Remove the `<!--` and `-->` to activate the text section, then edit the content.

### Editing the About Page

Open `about.html` and find:
```html
<!-- ===== EDIT YOUR ABOUT PAGE CONTENT HERE ===== -->
```

Replace all the placeholder text with your bio, contact info, etc.

## 📁 File Structure

- **index.html** - Homepage with gallery
- **about.html** - About/bio page
- **page1-7.html** - Category pages (can show gallery, text, or both)
- **shop.html** - Shop page with Gumroad integration
- **style.css** - All the styling (don't need to edit this usually)
- **gallery.js** - Homepage gallery images
- **page1-7-gallery.js** - Individual category gallery images

## 🛍️ Setting Up Your Gumroad Shop

The **shop.html** page is ready for your Gumroad products!

1. Open **shop.html**
2. Find the Gumroad button section
3. Replace `https://yourname.gumroad.com/l/product-name` with your actual product URL
4. Update the button text and price
5. For multiple products, uncomment the "Multiple Products Grid" section

The Gumroad script is already loaded - just add your product links!

## 🎨 Customization Tips

### Want Different Colors?

Open `style.css` and find:
```css
:root {
    --color-hover: #2563eb; /* Change this for different hover color */
}
```

### Want More/Fewer Columns in Gallery?

In `style.css`, find:
```css
.gallery {
    column-count: 3; /* Change this number */
}
```

### Want to Add More Pages?

1. Copy any page file (e.g., `page1.html`) and rename it (e.g., `page5.html`)
2. Copy the corresponding gallery file (e.g., `page1-gallery.js` to `page5-gallery.js`)
3. Update the references inside the files
4. Add a link in the navigation

## 🔄 Workflow

1. **Upload new artwork** to GitHub in the `images` folder
2. **Open the corresponding gallery JS file** (e.g., `page1-gallery.js`)
3. **Add one line** with your new image filename:
   ```javascript
   'images/category1/my-new-piece.jpg',
   ```
4. **Commit/push** - your site updates automatically!

## 📱 Mobile Responsive

The site automatically adapts to mobile screens - no extra work needed!

## ❓ Need Help?

Each file has clear comments marking where to edit. Look for:
- `<!-- ===== EDIT HERE ===== -->`
- Comments in ALL CAPS with equal signs

## 🎯 Features

✅ Two-row navigation with social icons
✅ Masonry gallery layout (images keep their aspect ratios)
✅ Lightbox - click images to view full size
✅ Mobile responsive
✅ Clean black & white design with blue accents
✅ Smooth hover animations
✅ Super easy to update
✅ Each page can show gallery, text, or both
✅ Integrated Gumroad shop page
✅ Email contact button and copyright footer on all pages
✅ 8 pages total (Home + 6 categories + About + Shop)

---

**Made for artists who want a simple, beautiful portfolio without the headache!**
