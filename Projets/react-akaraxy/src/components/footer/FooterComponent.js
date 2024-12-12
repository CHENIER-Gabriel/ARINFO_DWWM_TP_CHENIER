import React from "react";
import brandLogo from "../../assets/images/ICONS/AKARAXY.png";
import kofiButton from "../../assets/images/ICONS/KO-FI-Button.png";
import "./footer.css"; // Assurez-vous d'importer le CSS

const FooterComponent = () => {
    return (
        <footer id="contactSection">
            <div className="footerContainer">
                <div className="footerContainer1 ">
                        <a href="index.html">
                            <img src={brandLogo} alt="logoFooter" />
                        </a>
                        <a href="https://ko-fi.com/akaraxy">
                            <img src={kofiButton} alt="KOFI" />
                        </a>
                </div>
                <div className="footerContainer2">
                    <ul>
                        <li><a href="index.html">ABOUT</a></li>
                        <li><a href="DISCOGRAPHY.html">DISCOGRAPHY</a></li>
                        <li><a href="WORKS.html">WORKS</a></li>
                        <li><a href="GALLERY.html">GALLERY</a></li>
                    </ul>
                </div>
                <div className="footerContainer3">
                    <ul>
                        <li><a href="https://x.com/AKAraxy">TWITTER</a></li>
                        <li><a href="https://www.instagram.com/aka.raxy/">INSTAGRAM</a></li>
                        <li><a href="https://www.youtube.com/c/AKAraxy">YOUTUBE</a></li>
                        <li><a href="https://open.spotify.com/intl-fr/artist/7llwfY1nrxyDXRw9fXH5aW?si=K1jTPV8kSImJHieH-DlW9A">SPOTIFY</a></li>
                        <li><a href="https://vgen.co/AKAraxy">VGEN</a></li>
                    </ul>
                </div>
                <div className="footerContainer4">
                    <ul>
                        <li><a href="index.html">BANDCAMP</a></li>
                        <li><a href="https://akaraxy.booth.pm/">BOOTH</a></li>
                        <li><a href="https://space.bilibili.com/1020842982">BILIBILI</a></li>
                        <li><a href="https://www.deviantart.com/akaraxy">DEVIANTART</a></li>
                        <li><a href="https://ko-fi.com/akaraxy">KO-FI</a></li>
                    </ul>
                </div>
                <div className="footerContainer5">
                    <h3>CONTACT</h3>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akaraxy.contact@gmail.com" target="_blank" rel="noopener noreferrer">HIRE ME</a>
                </div>
            </div>
            {/* Bloc des Mentions Légales */}
            <div className="footerContainerLegal">
                <a href="/mentions-legales.html">Mentions Légales</a>
            </div>
        </footer>
    );
};

export default FooterComponent;
