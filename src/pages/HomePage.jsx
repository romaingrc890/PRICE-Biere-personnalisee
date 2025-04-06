import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenue sur notre boutique de bières</h1>
      <p>
        Découvrez notre sélection de bières artisanales, spécialement conçues pour les amateurs de goût et de qualité.
      </p>

      {/* Image de présentation */}
      <img src="/logo_orbital.png" alt="Bière artisanale"
     style={{ width: "20%", borderRadius: "10px", marginTop: "20px" }} />

      <img src="/logo_cercle.png" alt="Bière artisanale"
     style={{ width: "20%", borderRadius: "10px", marginTop: "20px" }} />


      <p style={{ marginTop: "20px" }}>
        Nos bières sont brassées localement avec des ingrédients de première qualité. Commandez dès maintenant pour savourer nos nouvelles créations !
      </p>

      {/* Boutons de navigation */}
      <div style={{ marginTop: "20px" }}>
      </div>
    </div>
  );
};

export default HomePage;
