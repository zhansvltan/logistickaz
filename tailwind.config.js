/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      mobile: '250px',
      // mobile
      tablet: '640px',
      // => @media (min-width: 640px) { ... }
      bigtablet: '800px',
      laptop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  content: [
    './index.html',
    './main.jsx',
    './src/HomePage/HomePage.jsx',
    './src/components/About.jsx',
    './src/components/NewsCard.jsx',
    './src/components/EventsCard.jsx',
    './src/components/Contact.jsx',
    './src/HomePage/Events.jsx',
    './src/components/Image.jsx',
    './src/components/Membership.jsx',
    './src/components/Navbar.jsx',
    './src/components/News.jsx',
    './src/components/ParkCard.jsx',
    './src/components/Parks.jsx',
  ],
  plugins: [],
}
