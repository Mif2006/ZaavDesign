import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Catalogue from './components/Catalogue.jsx';  // Create the Catalogue component
import FrontPage from './components/FrontPage.jsx';

function App() {
  return (
    <main className='min-h-screen min-w-screen overflow-hidden bg-black'>
      <Navbar />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/catalogue" element={<Catalogue />} />  {/* Route for Catalogue */}
      </Routes>
    </main>
  );
}

export default App;
