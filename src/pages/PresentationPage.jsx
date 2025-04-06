import React from "react";
import "./PresentationPage.css"; // Import du fichier CSS

const PresentationPage = () => {
  return (
    <div className="presentation-container">
      <h1>Présentation du Projet</h1>
      <p>
        Nous sommes <strong>deux étudiants ingénieurs à l'École des Mines de Saint-Étienne</strong>, et ce projet s'inscrit dans notre <strong>cursus d’ingénieur</strong>.
        Notre objectif est de proposer une bière artisanale personnalisable en collaboration avec <strong>L'Orbital</strong>.
        Ce projet nous permet d'explorer l'entrepreneuriat et la gestion d'un produit innovant.
      </p>

      <div className="presentation-content">
        {/* Section Texte */}
        <div className="text-section">
          <h2>Pourquoi ce projet ?</h2>
          <p>
            L'idée est née d'une volonté de créer un produit unique qui représente l’identité de chaque communauté.
            Une bière locale et artisanale, avec un design sur-mesure, pour marquer les esprits !
          </p>

          <h2>Notre Collaboration</h2>
          <p>
            Nous travaillons en partenariat avec la brasserie <strong>L'Orbital</strong> pour garantir des bières de qualité,
            avec des recettes variées et adaptées aux préférences de chacun.
          </p>
        </div>

        {/* Section Images */}
        <div className="image-section">
          <img src="/affiche.png" alt="Présentation du projet" />
        </div>
      </div>

      <p className="contact-info">
        <strong>Contactez-nous :</strong><br />
        romain.garcia@etu.emse.fr | tom.varlet@etu.emse.fr
      </p>
    </div>
  );
};

export default PresentationPage;


