import React from "react";
import "./MentionsLegales.css";

const MentionsLegales = () => {
  return (
    <div className="page-container">
      <h1>Mentions Légales</h1>
      <p><strong>Éditeur du site :</strong><br />
        Le Cercle / Projet PRICE<br />
        Adresse : 20 boulevard Alexandre de Fraissinette<br />
        Email : romain.garcia@etu.emse.fr<br />
        Téléphone : 0649551110
      </p>

      <p><strong>Hébergement :</strong><br />
        Nom de l'hébergeur (si déployé)<br />
        Adresse de l'hébergeur
      </p>

      <p><strong>Propriété intellectuelle :</strong><br />
        Tout le contenu de ce site est protégé par le droit d’auteur.
      </p>

      <p>© 2025 PRICE - Tous droits réservés</p>

      <div>
        <a href="/mentions-legales">Mentions Légales</a> |{" "}
        <a href="/conditions-generales">Conditions Générales de Vente</a>
      </div>
    </div>
  );
};

export default MentionsLegales;

