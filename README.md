# Star Wars: A Visual Guide

![Star Wars App Website](https://saiminhtet.github.io/assets/images/starwarshome.png)

A Progressive Web Application (PWA) built with Angular that provides a visual guide to the Star Wars universe using the SWAPI (Star Wars API). Browse characters, films, planets, species, vehicles, and starships with an immersive Star Wars themed interface.

**Originally developed for [NUS ISS](https://www.iss.nus.edu.sg/) GDipSA46 Angular Course Assignment.**

[View Demo](https://saiminhtet.github.io)

--------------------------------------------------

## 🚀 Features

- **Comprehensive Star Wars Data**: Browse people, films, planets, species, vehicles, and starships
- **Progressive Web App**: Installable on mobile devices with offline support
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Angular Material UI**: Modern, Material Design interface
- **Themed Interface**: Custom Star Wars themed styling with signature fonts
- **Service Worker**: Caching and offline capabilities
- **Pagination**: Navigate through large datasets efficiently

--------------------------------------------------

## 🛠️ Technology Stack

- **Angular**: 19.2.x (Latest)
- **Angular Material**: 19.2.x
- **TypeScript**: 5.6.x
- **RxJS**: 7.8.x
- **SWAPI**: Star Wars API integration
- **PWA**: Service Worker enabled
- **CSS3**: Custom Star Wars themed styles

--------------------------------------------------

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)
- Angular CLI (optional, included in dev dependencies)

--------------------------------------------------

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saiminhtet/sa46-starwars-angularCA.git
   cd sa46-starwars-angularCA
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/`

--------------------------------------------------

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Build the project for production |
| `npm run watch` | Build in watch mode with development configuration |
| `npm test` | Execute unit tests via Karma |

--------------------------------------------------

## 🏗️ Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

--------------------------------------------------

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Feature components
│   │   ├── films/           # Films listing and details
│   │   ├── peoples/         # Characters listing and details
│   │   ├── planets/         # Planets listing and details
│   │   ├── species/         # Species listing and details
│   │   ├── vehicles/        # Vehicles listing and details
│   │   └── starships/       # Starships listing and details
│   ├── model/               # Data models
│   ├── material/            # Angular Material configuration
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── starwars.service.ts  # API service
├── assets/
│   ├── fonts/               # Star Wars themed fonts
│   └── images/              # Character, film, and background images
├── environments/            # Environment configurations
├── index.html
├── main.ts
├── styles.css               # Global styles
└── manifest.json            # PWA manifest
```

--------------------------------------------------

## 🔄 Recent Updates (February 2026)

### Angular 19.2 Migration
- ✅ Updated from Angular 19.0.0 to 19.2.x
- ✅ Fixed critical XSS security vulnerabilities
- ✅ Reduced total vulnerabilities from 162 to 31 (dev dependencies only)
- ✅ Migrated Angular Material to individual module imports
- ✅ Replaced deprecated `@angular/flex-layout` with CSS utilities
- ✅ Updated Service Worker API for Angular 19 compatibility
- ✅ Added TypeScript strict mode compliance
- ✅ Improved type safety with generics and proper typing

### Security Improvements
- Fixed XSRF token leakage vulnerability (GHSA-58c5-g7wp-6w37)
- Fixed SVG XSS vulnerabilities (GHSA-v4hv-rgfq-gp49, GHSA-jrmj-c5cx-3cw6)
- Updated all dependencies to latest secure versions

--------------------------------------------------

## 🎨 Features in Detail

### Browse Star Wars Universe
- **Films**: View all Star Wars films with details, characters, and planets
- **Characters**: Explore all characters with their homeworlds and appearances
- **Planets**: Discover planets with climate, terrain, and population data
- **Species**: Learn about different species and their characteristics
- **Vehicles**: Browse ground and atmospheric vehicles
- **Starships**: View starship specifications and capabilities

### Progressive Web App
- Installable on mobile devices
- Offline-first architecture with service worker
- Fast loading with optimized caching strategies
- Responsive design for all screen sizes

--------------------------------------------------

## 🤝 Contributing

This project was originally created as a course assignment. If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

--------------------------------------------------

## 📜 License

This project was created for educational purposes as part of the NUS ISS GDipSA program.

--------------------------------------------------

## 👥 Original Development Team

### Prepared For
**Mr. LEE Chuk Munn**
  > Chief, StackUp Programme
  > NUS ISS
  > <isslcm@nus.edu.sg>

### Developed By

**Mr. Han Myint Tun**
  > Student, Graduate Diploma in Systems Analysis (GDipSA), NUS ISS
  > A0180555A
  > <hanmyinttun@u.nus.edu>

**Ms. Noel Noel Han**
  > Student, Graduate Diploma in Systems Analysis (GDipSA), NUS ISS
  > A0180529B
  > <noelnoelhan@u.nus.edu>

**Mr. Sai Min Htet**
  > Student, Graduate Diploma in Systems Analysis (GDipSA), NUS ISS
  > A0180545E
  > <saiminhtet@u.nus.edu>

--------------------------------------------------

## 🙏 Acknowledgments

- **SWAPI**: [The Star Wars API](https://swapi.dev/) for providing comprehensive Star Wars data
- **NUS ISS**: For the comprehensive Angular training program
- **Angular Team**: For the amazing framework and continuous improvements
- **Material Design**: For the beautiful UI components

--------------------------------------------------

## 📞 Contact & Support

For questions or support, please reach out to the development team or open an issue on GitHub.

**May the Force be with you!** ⭐
