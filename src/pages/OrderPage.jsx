import { useState } from "react";
import axios from "axios";
import React from "react";
import "./OrderPage.css";

const OrderPage = () => {
  const [order, setOrder] = useState({
    name: "",
    product: "",
    quantity: 12,
    labelColor: "",
    labelDetails: "",
    beerNickname: "", // 🆕
  });

  const [file, setFile] = useState(null);

  const isPromoActive = new Date() < new Date("2025-05-31");

  const prixHT = order.quantity >= 3000 ? 2.85 : 3.0;
  const prixTTC = prixHT * 1.2;

  const totalHT = (order.quantity * prixHT).toFixed(2);
  const totalTTC = (order.quantity * prixTTC).toFixed(2);
  const totalAvecRemise = (order.quantity * prixTTC * 0.9).toFixed(2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", order.name);
    formData.append("product", order.product);
    formData.append("quantity", order.quantity);
    formData.append("labelColor", order.labelColor);
    formData.append("labelDetails", order.labelDetails);
    formData.append("beerNickname", order.beerNickname); // 🆕
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await axios.post("http://localhost:5000/orders", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Commande envoyée avec succès !");
      console.log("Réponse du serveur :", response.data);
      setOrder({
        name: "",
        product: "",
        quantity: 12,
        labelColor: "",
        labelDetails: "",
        beerNickname: "",
      });
      setFile(null);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la commande :", error);
      alert("Erreur lors de l'envoi de la commande.");
    }
  };

  const handleQuantityChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) {
      value = 1; // ou 0, ou ce que tu veux par défaut
    }
    setOrder({ ...order, quantity: value });
  };
  

  return (
    <div className="order-container">
      <h2>Passer une commande</h2>

      {isPromoActive && (
        <p className="promo-message">
          🎉 Offre spéciale : <strong>-10% sur toutes les commandes passées avant le 31 mai 2025 !</strong>
        </p>
      )}

      <form className="order-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={order.name}
          onChange={(e) => setOrder({ ...order, name: e.target.value })}
          required
        />

        <div className="beer-selection">
          {["Titan Triple", "Nova NEIPA", "Vega NEIPA"].map((beer) => (
            <button
              key={beer}
              type="button"
              className={order.product === beer ? "selected" : ""}
              onClick={() => setOrder({ ...order, product: beer })}
            >
              {beer}
            </button>
          ))}
        </div>

        <input
          type="number"
          min="12"
          step="12"
          value={order.quantity}
          onChange={handleQuantityChange}
          required
        />

        <div className="price-breakdown">
          <p>💼 Prix HT : <strong>{totalHT} €</strong></p>
          <p>💶 Prix TTC : <strong>{totalTTC} €</strong></p>
          {isPromoActive && (
            <p className="price-display">🎉 Prix après réduction : <strong>{totalAvecRemise} €</strong></p>
          )}
        </div>

        <h3>Personnalisation de l'étiquette (si vous souhaitez personnaliser l'étiquette)</h3>

        <textarea
          placeholder="Couleur de l'étiquette (ex: rouge, bleu, or...)"
          value={order.labelColor}
          onChange={(e) => setOrder({ ...order, labelColor: e.target.value })}
        ></textarea>

        <textarea
          placeholder="Éléments à inclure sur l'étiquette (logo, texte, image spécifique...)"
          value={order.labelDetails}
          onChange={(e) => setOrder({ ...order, labelDetails: e.target.value })}
        ></textarea>

        {/* 🆕 Surnom de la bière */}
        <textarea
          placeholder="Surnom de la bière (nom qui sera inscrit sur la canette)"
          value={order.beerNickname}
          onChange={(e) => setOrder({ ...order, beerNickname: e.target.value })}
        ></textarea>

        {/* 🆕 Upload fichier */}
        <input
          type="file"
          accept=".pdf, image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <p className="info-message">
          📩 Nous reviendrons vers vous sous peu avec un visuel de l'étiquette pour validation avant production.
        </p>

        <button type="submit">Commander</button>
      </form>
    </div>
  );
};

export default OrderPage;





      




