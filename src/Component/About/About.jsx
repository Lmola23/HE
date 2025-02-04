import { FaPhone, FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';
import './../../styles/fonts.css';

function About() {
  const contacts = [
    { icon: <FaPhone />, label: "Teléfono", value: "54178835" },
    { icon: <FaFacebook />, label: "Facebook", value: "Café Bar HogwartsExpress", link: "https://www.facebook.com/profile.php?id=61571297393885" },
    { icon: <FaInstagram />, label: "Instagram", value: "Café -bar Hogwarts ", link: "https://www.instagram.com/cafe_bar_hogwarts?igsh=YzljYTk1ODg3Zg==" },
    { icon: <FaMapMarkerAlt />, label: "Dirección", value: "Avenida Máximo Gómez #133" },
  ];

  return (
    <div className="contact-section">
      <h2 style={{ fontFamily: "harryPotterFont", fontSize: 40 }}>CONTÁCTENOS</h2>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            {contact.icon}
            <span className="contact-label">{contact.label}:</span>
            <a href={contact.link} style={{ textDecoration: "none" }} className="contact-value" target="_blank" rel="noopener noreferrer">
              {contact.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;

