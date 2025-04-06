import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react"; // Importation pour modifier le titre dynamiquement
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import BieresPage from "./pages/BieresPage";
import PresentationPage from "./pages/PresentationPage";
import MentionsLegales from "./pages/MentionsLegales";
import Etiquettes from "./pages/Etiquettes";
import Cgv from "./pages/Cgv";

function App() {
  useEffect(() => {
    document.title = "PRICE - Bière de Promotion"; // Change ici le titre de l'onglet
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow page-container"> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/bieres" element={<BieresPage />} />
            <Route path="/presentation" element={<PresentationPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/conditions-generales" element={<Cgv />} />
            <Route path="/etiquettes" element={<Etiquettes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;








