import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>© 2025 PRICE - Tous droits réservés</p>
            <div className="footer-links">
            <Link to="/mentions-legales">Mentions Légales</Link>
            <span> | </span>
            <Link to="/conditions-generales">Conditions Générales de Vente</Link>
            </div>
</footer>

    );
};

export default Footer;

