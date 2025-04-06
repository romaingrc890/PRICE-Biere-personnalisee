import React from "react";
import "./MentionsLegales.css"; // Utilise toujours ce style global

const Cgv = () => {
  return (
    <div className="page-container">
      <h2>Conditions Générales de Vente</h2>

      <p>Les présentes conditions générales de vente s’appliquent à toutes les ventes conclues par le biais de notre site web.</p>

      <h3>1. Commande</h3>
      <p>Les commandes doivent être passées via le formulaire prévu à cet effet. Toute commande implique l’acceptation des présentes CGV.</p>

      <h3>2. Tarifs</h3>
      <p>Les prix affichés s'entendent en euros, toutes taxes comprises. Des remises peuvent être appliquées selon les périodes promotionnelles.</p>

      <h3>3. Paiement</h3>
      <p>Le paiement s’effectue à la validation du bon de commande, par virement bancaire. Aucun paiement en espèces ne sera accepté.</p>

      <h3>4. Livraison</h3>
      <p>Les livraisons s’effectuent uniquement après validation du bon à tirer. Le délai dépend du nombre de commandes et des capacités de production.</p>

      <h3>5. Personnalisation</h3>
      <p>Le visuel de l’étiquette fera l’objet d’une validation par l’équipe avant toute production. Aucune réclamation ne sera acceptée après validation.</p>

      <h3>6. Responsabilité</h3>
      <p>Nous ne pourrons être tenus responsables des retards ou dommages causés par un tiers (livreur, transporteur, etc.).</p>

      <h3>7. Droit applicable</h3>
      <p>Les présentes CGV sont soumises au droit français. En cas de litige, le tribunal compétent sera celui de Saint-Étienne.</p>
    </div>
  );
};

export default Cgv;


