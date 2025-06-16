import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import Features from './components/Features.jsx';
import Colage from './components/Colage.jsx';
import TrueHero from './components/TrueHero.jsx';
import Shop from './components/Shop.jsx';
import Catalogue from './components/Catalogue.jsx';  // Create the Catalogue component
import FrontPage from './components/FrontPage.jsx';

function App() {
  return (
    <main className='min-h-screen min-w-screen overflow-hidden bg-black'>
      <Navbar />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/catalogue" element={<Catalogue />} />  {/* Route for Catalogue */}
      </Routes>
    </main>
  );
}

export default App;
