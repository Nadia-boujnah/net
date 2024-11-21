import "../components/Footer.css";
import facebookIcon from "../assets/facebook.svg";
import twitterIcon from "../assets/twitter.svg";
import instagramIcon from "../assets/instagram-logo-thin.svg";
import youtubeIcon from "../assets/youtube.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__socials">
        <a href="#" aria-label="Facebook">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="#" aria-label="YouTube">
          <img src={youtubeIcon} alt="YouTube" />
        </a>
      </div>

    
      <div className="footer__content">
        <div className="footer__links">
          <ul className="footer__column">
            <li><a href="#">Audiodescription</a></li>
            <li><a href="#">Relations Investisseurs</a></li>
            <li><a href="#">Confidentialité</a></li>
            <li><a href="#">Nous contacter</a></li>
          </ul>
          <ul className="footer__column">
            <li><a href="#">Centre d'aide</a></li>
            <li><a href="#">Recrutement</a></li>
            <li><a href="#">Informations légales</a></li>
            <li><a href="#">Choix liés à la pub</a></li>
          </ul>
          <ul className="footer__column">
            <li><a href="#">Cartes cadeaux</a></li>
            <li><a href="#">Boutique Netflix</a></li>
            <li><a href="#">Préférences de cookies</a></li>
            <li><a href="#">Mentions légales</a></li>
          </ul>
        </div>
      </div>


      <div className="footer__bottom">
        <button className="footer__service-code">Code de service</button>
        <p>© 1997-2024 Netflix, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;

