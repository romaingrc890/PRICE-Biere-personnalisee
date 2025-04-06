import React from "react";

const Etiquettes = () => {
  const basePath = import.meta.env.BASE_URL;

  return (
    <div className="etiquette-container" style={{ textAlign: "center", padding: "20px" }}>
      
      <div className="etiquette-text">
        <h1 className="text-3xl font-bold mb-4">Exemples d'étiquettes personnalisées</h1>
        <p className="text-lg mb-6">Voici des exemples de visuels pour les étiquettes.</p>
      </div>

      <div className="etiquette-images" style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        <div>
          <img
            src={`${basePath}Etiquette_V1.png`}
            alt="WildMines"
            style={{ width: "1000px", maxWidth: "80%", borderRadius: "10px" }}
          />
          <h2 className="mt-2 font-semibold text-xl">WildMines</h2>
        </div>

        <div>
          <img
            src={`${basePath}Etiquette_V2.png`}
            alt="DarkMines"
            style={{ width: "1000px", maxWidth: "80%", borderRadius: "10px" }}
          />
          <h2 className="mt-2 font-semibold text-xl">DarkMines</h2>
        </div>
      </div>
    </div>
  );
};

export default Etiquettes;









