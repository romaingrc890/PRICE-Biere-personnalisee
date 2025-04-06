import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour fermer le menu lorsqu'on clique sur un lien
  const closeMenu = () => setIsOpen(false);

  return (
    <Menu isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
      <Link to="/" className="menu-item" onClick={closeMenu}>
        Accueil
      </Link>
      <Link to="/presentation" className="menu-item" onClick={closeMenu}>
        Présentation du projet
      </Link>
      <Link to="/bieres" className="menu-item" onClick={closeMenu}>
        Nos bières
      </Link>
      <Link to="/etiquettes" className="menu-item" onClick={closeMenu}>
        Exemples d'étiquettes
      </Link>
      <Link to="/order" className="menu-item" onClick={closeMenu}>
        Passer une commande
      </Link>
      <Link to="/mentions-legales" className="menu-item" onClick={closeMenu}>
        Mentions légales
      </Link>
      <Link to="/conditions-generales" className="menu-item" onClick={closeMenu}>
        Conditions Générales de Vente
      </Link>
    </Menu>
  );
};

export default Navbar;




