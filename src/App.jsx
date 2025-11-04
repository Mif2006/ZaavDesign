import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Catalogue from './components/Catalogue.jsx';
import FrontPage from './components/FrontPage.jsx';
import Collaboration from './components/Collaboration.jsx';

function App() {
  return (
    <main className='min-h-screen min-w-screen overflow-hidden bg-black'>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/collaboration" element={<Collaboration />} />
      </Routes>
    </main>
  );
}

export default App;
