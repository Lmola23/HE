import { FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';
import './About.css'
import './../../styles/fonts.css';

function About() {
  const contacts = [
    { icon: <FaPhone />, label: "Teléfono", value: "+123 456 789" },
    { icon: <FaFacebook />, label: "Facebook", value: "HogwartsExpress" },
    { icon: <FaInstagram />, label: "Instagram", value: "@Hogwarts" },
  ];

  return (
    <div className="contact-section">
      <h2 style={{ fontFamily: "harryPotterFont", fontSize: 40 }}>CONTÁCTENOS</h2>
      <ul className="contact-list">
        {contacts.map((contact, index) => (
          <li key={index} className="contact-item">
            {contact.icon}
            <span className="contact-label">{contact.label}:</span>
            <span className="contact-value">{contact.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
