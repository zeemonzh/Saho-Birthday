# Birthday Greeting React App 🎂

A beautiful, animated birthday greeting website built with React and Vite. This project features stunning CSS animations, 3D card effects, and a personalized birthday message.

## 🎨 Features

- **Animated Typography**: Staggered letter animations for "Happy Birthday" text
- **Interactive Elements**: 
  - Animated party hat that drops onto the text
  - Rotating balloons with subtle floating animations
  - Decorative stars and flowers that appear with timing
  - Rotating circular text badge
- **3D Birthday Card**: Interactive flip card with hover effects containing a personalized message
- **Responsive Design**: Mobile-friendly with breakpoints for smaller screens
- **Smooth Animations**: CSS keyframe animations throughout the experience

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd birthday-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` folder.

## 📁 Project Structure

```
birthday-react/
├── public/
│   └── images/          # All image assets (balloons, decorations, profile photo, etc.)
├── src/
│   ├── components/
│   │   └── BirthdayCard.jsx  # 3D flip card modal component
│   ├── App.jsx          # Main application component
│   ├── App.css          # All styles and animations
│   ├── index.css        # Global reset styles
│   └── main.jsx         # React entry point
├── index.html           # HTML template with Font Awesome and Google Fonts
└── package.json
```

## 🎯 Key Components

### App Component
The main component that renders:
- Animated "Happy Birthday" header
- Date display with typing animation
- Profile image section with decorative elements
- Interactive button to open the birthday card
- Decorative stars and flowers

### BirthdayCard Component
A modal component featuring:
- 3D flip card effect on hover
- Profile image and greeting
- Personalized birthday message
- Smooth open/close animations

## 🎨 Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Animations and styling
- **Font Awesome 6** - Icons
- **Google Fonts** - Dancing Script, Poppins, Titan One, and more

## 📝 Customization

To personalize this for someone else:

1. Replace images in `public/images/` folder:
   - `unnamed.png` - Profile photo
   - Other decorative images as desired

2. Update the text in `App.jsx`:
   - Change "Saho" to the person's name
   - Update the date in the `datetxt` variable

3. Update the birthday message in `BirthdayCard.jsx`

## 🎭 Animation Timeline

- **0-4s**: Page setup and initial render
- **4-6.4s**: "Happy Birthday" text appears letter by letter
- **7-14s**: Hat animation, image section slides up, date appears
- **15-16s**: Decorative elements (stars, flowers, smiley) scale in
- **16s+**: Button appears, user can interact

## ⚠️ Notes

- Some image references (`cute1.png`, `cute2.png`) are commented out in the BirthdayCard component as they weren't included in the original assets
- The animations are optimized for desktop viewing but include responsive breakpoints for mobile devices
- Font Awesome and Google Fonts are loaded via CDN

## 📜 License

This project is open source and available for personal use.

---

Made with ❤️ using React and Vite
