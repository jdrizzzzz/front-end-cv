# Joseph Driz - Dynamic Resume

A single-page dynamic resume built with vanilla JavaScript and Bootstrap 5, featuring data-driven rendering and interactive components.

## 🚀 Live Features

### Lab Feature Integration
**Accordion Component** - Integrated in the **Professional Experience** section
- Uses Bootstrap's Accordion component to display job experiences
- First job is expanded by default, others can be toggled
- Smooth animations and responsive design
- Maintains single-open behavior for better UX

### Key Features
- **100% Dynamic Content**: All resume content is rendered via JavaScript from data structures
- **Responsive Design**: Mobile-first approach using Bootstrap grid system
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Interactive Profile Picture**: Click to flip the profile image horizontally (preserved from original)
- **Modern UI**: Clean, professional design with hover effects and animations
- **Accessibility**: Semantic HTML, ARIA attributes, keyboard navigation support
- **Print-Friendly**: Optimized CSS for printing

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables and animations
- **Vanilla JavaScript**: ES6+ features, DOM manipulation, event handling
- **Bootstrap 5.3.0**: Layout and components via CDN
- **Bootstrap Icons**: Professional iconography

## 📦 Bootstrap Components Used

1. **Navbar** - Fixed navigation with brand and responsive toggle
2. **Cards** - Used throughout for Skills, Education, and Projects sections
3. **Accordion** - Professional Experience section (Lab Feature)
4. **Badges** - For technology tags, job periods, and status indicators
5. **Buttons** - Contact section with hover effects
6. **Grid System** - Responsive layout throughout all sections

## 🏃‍♂️ How to Run Locally

### Option 1: Direct File Opening
1. Clone or download this repository
2. Open `index.html` directly in your web browser
3. That's it! No build process required.

### Option 2: Local Server (Recommended)
1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd cv
   ```
2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -S SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

### Option 3: Live Server Extension
If using VS Code, install the "Live Server" extension and right-click on `index.html` to select "Open with Live Server"

## 📁 Project Structure

```
cv/
├── index.html              # Main HTML file (minimal Bootstrap structure)
├── Joseph.jpg             # Profile picture
├── README.md              # This documentation file
├── js/
│   └── app.js            # Dynamic resume builder with rendering logic
├── css/
│   └── styles.css        # Custom CSS to complement Bootstrap
├── data/
│   └── resume.json       # Resume data structure (JSON format)
```

## 💡 Data Structure

The resume data is stored in `data/resume.json` with the following structure:
- **Header**: Name, title, profile image, contact information
- **Summary**: Professional overview
- **Skills**: Grouped by categories (Technical, System Admin, Hardware)
- **Experience**: Array of job objects with responsibilities
- **Education**: Academic background
- **Projects**: Portfolio projects with technologies

The JavaScript application (`js/app.js`) dynamically loads this JSON data and renders the complete resume.

## 🎨 Customization

### Updating Resume Content
Edit the `data/resume.json` file to update:
- Personal information
- Skills and categories
- Work experience
- Education details
- Projects and technologies

### Styling Changes
Modify `css/styles.css` to customize:
- Color scheme (CSS variables at the top)
- Animations and transitions
- Component-specific styling
- Responsive breakpoints

## 🔧 Features Implemented

✅ **Data-driven rendering** - All content generated via JS  
✅ **Bootstrap grid system** - Responsive layout  
✅ **2+ Bootstrap components** - Navbar, Cards, Accordion, Badges, Buttons  
✅ **Lab feature integration** - Accordion for experience section  
✅ **Smooth scrolling** - Navigation links  
✅ **Accessibility** - Semantic HTML, ARIA attributes  
✅ **Vanilla JS only** - No frameworks or libraries (except Bootstrap)  
✅ **No page reloads** - Single-page application  
✅ **Mobile responsive** - Works on all device sizes  

## 🌐 Deployment Options

### GitHub Pages
1. Push to GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (main/master)
4. Access via `https://[username].github.io/[repository-name]`

### Netlify
1. Drag and drop the entire folder to [netlify.com/drop]
2. Or connect your GitHub repository for automatic deployments

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👨‍💻 Developer Notes

- **No build process required**: This is a static site that runs directly in browsers
- **CDN dependencies**: Bootstrap and Bootstrap Icons loaded via CDN
- **Vanilla JavaScript**: Uses modern ES6+ features (arrow functions, template literals, classes)
- **Progressive enhancement**: Works even if JavaScript is disabled (basic structure remains)

---


**Built with ❤️ using Vanilla JavaScript and Bootstrap 5**
