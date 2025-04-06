import { Link } from "react-router-dom";

const HomePage = () => {
  // Ajoute la base path de GitHub Pages
  const basePath = import.meta.env.BASE_URL || "";

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenue sur notre boutique de bières</h1>
      <p>
        Découvrez notre sélection de bières artisanales, spécialement conçues pour les amateurs de goût et de qualité.
      </p>

      {/* Images corrigées avec le bon chemin */}
      <img
        src={`${basePath}logo_orbital.png`}
        alt="Logo Orbital"
        style={{ width: "20%", borderRadius: "10px", marginTop: "20px" }}
      />
      <img
        src={`${basePath}logo_cercle.png`}
        alt="Logo Le Cercle"
        style={{ width: "20%", borderRadius: "10px", marginTop: "20px" }}
      />

      <p style={{ marginTop: "20px" }}>
        Nos bières sont brassées localement avec des ingrédients de première qualité. Commandez dès maintenant pour savourer nos nouvelles créations !
      </p>
    </div>
  );
};

export default HomePage;
