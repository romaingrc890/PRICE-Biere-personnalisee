
import React from "react";
import "./BieresPage.css"; // Assure-toi que ce fichier existe
console.log("📌 BieresPage est bien affiché !");

const BieresPage = () => {
  return (
    <div className="bieres-container">
      <h1>Nos Bières Personnalisées</h1>
      <p>Découvrez notre sélection de bières artisanales brassées en collaboration avec <strong>L'Orbital</strong>.</p>

      <div className="bieres-grid">
        {/* Titan Triple */}
        <div className="biere-card">
        <img
        src={`${basePath}titan_triple.png`}
        alt="titan"
        style={{ width: "20%", borderRadius: "10px", marginTop: "20px" }}
      />
          <h3>Titan Triple</h3>
          <p>Une triple belge de caractère, riche et aux notes maltées.</p>
        </div>

        {/* Nova NEIPA */}
        <div className="biere-card">
        <img
        src={`${basePath}vega_neipa.png`}
        alt="Vega"
        style={{ width: "20%", borderRadius: "10px", marginTop: "20px" }}
      />
          <h3>Nova NEIPA</h3>
          <p>Une NEIPA exotique et dense avec des notes fruitées.</p>
        </div>

        {/* Vega NEIPA */}
        <div className="biere-card">
        <img
        src={`${basePath}nova_neipa.png`}
        alt="Nova"
        style={{ width: "20%", borderRadius: "10px", marginTop: "20px" }}
      />
          <h3>Vega NEIPA</h3>
          <p>Une bière puissante avec une complexité aromatique unique.</p>
        </div>
      </div>
    </div>
  );
};

export default BieresPage;
