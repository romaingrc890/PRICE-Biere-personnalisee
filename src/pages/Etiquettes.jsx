import React from "react";

const Etiquettes = () => {
  return (
    <div className="etiquette-container">
      
      {/* Conteneur du texte bien centré */}
      <div className="etiquette-text">
        <h1 className="text-3xl font-bold mb-4">Exemples d'étiquettes personnalisées</h1>
        <p className="text-lg">Voici des exemples de visuels pour les étiquettes.</p>
      </div>

      {/* Conteneur des images bien centré */}
      <div className="etiquette-images">
        <div>
          <img
            src="/MOCKUP_MINES_CAN_33cl_PACKSHOT_V1.png"
            alt="WildMines"
            className="etiquette-img"
          />
          <h2 className="mt-2 font-semibold text-xl">WildMines</h2>
        </div>

        <div>
          <img
            src="/MOCKUP_MINES_CAN_33cl_PACKSHOT_V2.png"
            alt="DarkMines"
            className="etiquette-img"
          />
          <h2 className="mt-2 font-semibold text-xl">DarkMines</h2>
        </div>
      </div>

    </div>
  );
};

export default Etiquettes;







