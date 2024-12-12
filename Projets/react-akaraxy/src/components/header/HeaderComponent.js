import React, { useState, useEffect } from "react";
// import { Collapse } from "react-bootstrap";
import brandLogo from "../../assets/images/ICONS/AKARAXY.png";
import burgerIcon from "../../assets/images/ICONS/800px-Hamburger_icon.png"; // Image burger Icon
import closeIconWhite from "../../assets/images/ICONS/ICONS_WHITE/X.png"; // Image croix mobile
import instagramIconWhite from "../../assets/images/ICONS/ICONS_WHITE/sns (1).png"; // Instagram blanc (mobile)
import twitterIconWhite from "../../assets/images/ICONS/ICONS_WHITE/sns (2).png"; // Twitter blanc (mobile)
import youtubeIconWhite from "../../assets/images/ICONS/ICONS_WHITE/sns (3).png"; // YouTube blanc (mobile)
import spotifyIconWhite from "../../assets/images/ICONS/ICONS_WHITE/sns (4).png"; // Spotify blanc (mobile)
import vgenIconWhite from "../../assets/images/ICONS/ICONS_WHITE/sns (5).png"; // VGen blanc (mobile)
import instagramIconBlack from "../../assets/images/ICONS/sns (1).png"; // Instagram gris/noir (desktop)
import twitterIconBlack from "../../assets/images/ICONS/sns (2).png"; // Twitter gris/noir (desktop)
import youtubeIconBlack from "../../assets/images/ICONS/sns (3).png"; // YouTube gris/noir (desktop)
import spotifyIconBlack from "../../assets/images/ICONS/sns (4).png"; // Spotify gris/noir (desktop)
import vgenIconBlack from "../../assets/images/ICONS/sns (5).png"; // VGen gris/noir (desktop)
import './header.css';

const HeaderComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024);  // Changer la rupture ici

  // Fonction pour ouvrir/fermer la modale
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Vérifie la taille de l'écran et met à jour `isMobileView`
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);  // Changer la rupture ici
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar Desktop */}
      {!isMobileView && (
        <nav className="p-4 pt-2 pb-2 d-flex justify-content-between align-items-center navbar-desktop">
          <div className="d-flex flex-row menu-desktop">
            <div className="p-3 pt-0 pb-0 d-flex align-items-center logo">
              <img src={brandLogo} alt="Brand Logo" />
            </div>
            <ul className="d-flex m-0 p-3 pt-0 pb-0 gap-3 list-unstyled">
              <li><a href="index.html">ABOUT</a></li>
              <li><a href="discography.html">DISCOGRAPHY</a></li>
              <li><a href="works.html">WORKS</a></li>
              <li><a href="gallery.html">GALLERY</a></li>
              <li><a id="contactBtn2" href="#contact">CONTACT</a></li>
            </ul>
          </div>
          <div className="social-icons-desktop d-flex gap-2">
            <a href="https://www.instagram.com/aka.raxy/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIconBlack} alt="Instagram" />
            </a>
            <a href="https://x.com/AKAraxy" target="_blank" rel="noopener noreferrer">
              <img src={twitterIconBlack} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/c/AKAraxy" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIconBlack} alt="YouTube" />
            </a>
            <a href="https://open.spotify.com/artist/7llwfY1nrxyDXRw9fXH5aW" target="_blank" rel="noopener noreferrer">
              <img src={spotifyIconBlack} alt="Spotify" />
            </a>
            <a href="https://vgen.co/AKAraxy" target="_blank" rel="noopener noreferrer" className="vgen-black">
              <img src={vgenIconBlack} alt="V Gen" />
            </a>
          </div>
        </nav>
      )}

      {/* Navbar Mobile/Tablette */}
      {isMobileView && !isModalOpen && (
        <nav className="p-3 pt-2 pb-2 d-flex justify-content-between align-items-center navbar-mobile">
          <div className="d-flex align-items-center logo">
            <img src={brandLogo} alt="Brand Logo" />
          </div>
          <div className="menu-burger" onClick={toggleModal}>
            <img src={burgerIcon} alt="Burger icon" />
          </div>
        </nav>
      )}

      {/* Modale */}
      {isModalOpen && (
        <div
          className="p-3 pt-2 pb-3 modal-content"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Conteneur de la croix */}
          <div className="d-flex justify-content-end close-container">
            <img
              className="bg-white rounded-circle croix-icon"
              src={closeIconWhite}
              alt="Close modal"
              onClick={toggleModal}
              style={{
                cursor: "pointer",
              }}
            />
          </div>

          {/* Menu Mobile/Tablette */}
          <div className="d-flex justify-content-center menu-items">
            <ul className="m-0 p-0">
              <li><a href="index.html">ABOUT</a></li>
              <li><a href="discography.html">DISCOGRAPHY</a></li>
              <li><a href="works.html">WORKS</a></li>
              <li><a href="gallery.html">GALLERY</a></li>
              <li><a id="contactBtn2" href="#contact">CONTACT</a></li>
            </ul>
          </div>

          {/* Section Icônes Sociaux (blancs) */}
          <div className="d-flex justify-content-center gap-3 social-icons-mobile">
            <a href="https://www.instagram.com/aka.raxy/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIconWhite} alt="Instagram" />
            </a>
            <a href="https://x.com/AKAraxy" target="_blank" rel="noopener noreferrer">
              <img src={twitterIconWhite} alt="Twitter" />
            </a>
            <a href="https://www.youtube.com/c/AKAraxy" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIconWhite} alt="YouTube" />
            </a>
            <a href="https://open.spotify.com/artist/7llwfY1nrxyDXRw9fXH5aW" target="_blank" rel="noopener noreferrer">
              <img src={spotifyIconWhite} alt="Spotify" />
            </a>
            <a href="https://vgen.co/AKAraxy" target="_blank" rel="noopener noreferrer">
              <img src={vgenIconWhite} alt="V Gen" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
