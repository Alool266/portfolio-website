# Portfolio Website

Modern, responsive portfolio website with animations and accessibility features.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Fully Responsive**: Works on all devices (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards
- **Accessible**: ARIA labels, skip-to-content link, reduced motion support
- **Interactive**: 3D card effects, parallax scrolling, animated timeline
- **Contact Form**: Functional contact form with validation
- **Separated Concerns**: CSS and JavaScript in external files

## 📁 Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # All JavaScript
├── resume.pdf         # Your CV/resume
└── .nojekyll          # GitHub Pages configuration
```

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0 (icons)

## 📱 Sections

1. **Header**: Profile with animated rings and contact info
2. **Navigation**: Sticky nav with smooth scrolling
3. **About**: Brief introduction with 3D card effect
4. **Projects**: 6 featured projects with tech stacks and links
5. **Experience**: Interactive timeline with scroll animations
6. **Education**: Cards with shimmer effects
7. **Skills**: Categorized skill tags with 3D hover effects
8. **Languages**: Animated progress bars
9. **Contact**: Functional contact form
10. **Footer**: Social links and copyright

## 🔧 GitHub Pages Deployment

### Enable GitHub Pages:

1. Go to your repository: https://github.com/Alool266/portfolio-website
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Build and deployment**:
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** and **/ (root)**
5. Click **Save**

Your site will be published at: `https://Alool266.github.io/portfolio-website/`

### Custom Domain (Optional):

If you want to use a custom domain:
1. In Pages settings, under **Custom domain**, enter your domain
2. Add a `CNAME` file to the repository root with your domain name

## 🎨 Customization

### Update Personal Information:

Edit `index.html`:
- Name and title in the header (lines 859-860)
- Contact details (lines 862-881)
- About section (lines 905-909)
- Experience entries (lines 1061-1096)
- Education entries (lines 1104-1120)
- Skills (lines 1127-1197)
- Social links in footer (lines 1239-1244)

### Update Project Links:

The project cards currently link to your repositories. Update the `href` attributes in the project cards (lines 932-1041) to point to your actual project repositories.

### Change Colors:

Edit CSS variables in `css/style.css` (lines 15-24):
```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #06b6d4;
    --accent-color: #f59e0b;
    --bg-dark: #0f172a;
    --bg-card: #1e293b;
}
```

## 📝 Contact Form

The contact form currently simulates submission. To make it functional:

1. **Option A - Formspree** (Free):
   - Sign up at formspree.io
   - Replace the `simulateFormSubmission` function in `js/script.js` with:
   ```javascript
   const response = await fetch('https://formspree.io/f/your-form-id', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
   });
   ```

2. **Option B - EmailJS** (Free tier):
   - Sign up at emailjs.com
   - Add your service and template IDs
   - Update the form handler in `js/script.js`

3. **Option C - Backend API**:
   - Deploy a backend (Node.js, Python, etc.)
   - Update the form action to your endpoint

## 🎯 Performance Tips

- Optimize images before adding them
- Minify CSS and JS for production
- Enable GitHub Actions for automatic minification (optional)
- Use lazy loading for images if you add more

## 📄 License

This portfolio template is free to use and modify. Please give credit if you reuse significant portions.

## 🙋 Support

For issues or questions, contact: designhasan66@gmail.com

---

**Last Updated**: April 6, 2026
**Version**: 2.0
