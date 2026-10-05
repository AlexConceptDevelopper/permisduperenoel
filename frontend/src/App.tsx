import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Success } from './pages/Success';
import Cancel from './pages/Cancel';

// Import des pages légales
import MentionsLegales from './pages/legal/MentionsLegales';
import Cgv from './pages/legal/Cgv';
import Confidentialite from './pages/legal/Confidentialite';
import Contact from './pages/legal/Contact';
import { FAQ } from './pages/FAQ';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route principale : La page d'accueil avec le formulaire */}
        <Route path="/" element={<Home />} />
        
        {/* Route de succès après paiement Stripe */}
        <Route path="/success" element={<Success />} />
        
        {/* Route d'annulation après paiement Stripe */}
        <Route path="/cancel" element={<Cancel />} />

        {/* Route pour la FAQ */}
        <Route path="/faq" element={<FAQ />} />
        
        {/* Routes légales du footer */}
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}