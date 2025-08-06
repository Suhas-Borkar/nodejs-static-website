# AirCon - AC Repair Service Website

A modern, responsive website for an air conditioning repair service company built with Node.js, HTML, CSS, and JavaScript.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design that works on all devices
- Modern UI with animations and interactive elements
- Complete website with multiple pages:
  - Home page with carousel and service highlights
  - About page with company information
  - Services page showcasing different AC services
  - Features page highlighting company advantages
  - Quote page for service requests
  - Team page introducing staff members
  - Testimonials from satisfied customers
  - Contact page with inquiry form
  - 404 error page for invalid URLs
- Fast loading with optimized assets
- SEO-friendly structure

## Technologies Used

- **Backend**: Node.js with built-in HTTP module
- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **CSS Framework**: Bootstrap 5
- **JavaScript Libraries**:
  - jQuery 3.6.0
  - Owl Carousel for testimonials
  - Wow.js for animations
  - Waypoints for scroll effects
  - CounterUp for statistics
  - Parallax for background effects
- **Fonts**: Google Fonts (Roboto & Roboto Slab)
- **Icons**: Font Awesome 5

## Project Structure

```
.
├── index.js                 # Main server file
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── .gitignore               # Git ignored files
├── statics/                 # Static assets
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   ├── img/                 # Images
│   └── lib/                 # Third-party libraries
└── template/                # HTML templates for pages
    ├── index.html           # Home page
    ├── about.html           # About page
    ├── service.html         # Services page
    ├── feature.html         # Features page
    ├── quote.html           # Quote request page
    ├── team.html            # Team page
    ├── testimonial.html     # Testimonials page
    ├── contact.html         # Contact page
    ├── 404.html             # Error page
    ├── navbar.html          # Navigation bar
    └── footer.html          # Footer
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd node-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Mode

To run the server in development mode with auto-restart on file changes:

```bash
npm run dev
```

### Production Mode

To run the server in production mode:

```bash
npm start
```

After starting the server, open your browser and navigate to `http://localhost:3000` to view the website.

## Development

### Adding New Pages

1. Create a new HTML file in the `template/` directory
2. Add a new route in `index.js` to serve the page
3. Update the navigation in `template/navbar.html` to include a link to the new page

### Customizing Content

- Update text content directly in the HTML files in the `template/` directory
- Replace images in the `statics/img/` directory
- Modify styles in `statics/css/style.css`
- Update JavaScript functionality in `statics/js/main.js`

### Adding New Assets

Place new assets in the appropriate directories:
- Images: `statics/img/`
- Stylesheets: `statics/css/`
- JavaScript files: `statics/js/`
- Libraries: `statics/lib/`

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

The website template was created by [HTML Codex](Suhas Borkar).