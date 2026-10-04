
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Success } from './pages/Success'; // Import de la page de succès

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route principale : La page d'accueil avec le formulaire */}
        <Route path="/" element={<Home />} />
        
        {/* Route de succès après paiement Stripe */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}