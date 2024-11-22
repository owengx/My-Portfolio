import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'; // Imported GitHub, Linkedin, FaX icon from npm icons

//inline stlying for footer
const footer = {
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const link = {
  color: 'white',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
};

const icons = {
    display: 'flex',
    justifyContent:'center',
    gap: '20px'
}

export default function Footer() {
  return (
    <footer style={footer}>
        <div style ={icons}>
      <a
        href="https://github.com/owengx" 
        target="_blank"
        style={link}
      >
        <FaGithub size={24} /> {/* GitHub icon */}
        GitHub
      </a>
      <a
        href="/" 
        target="_blank"
        style={link}
      >
        <FaLinkedin size={24} /> {/* Linkedin icon */}
        Linkedin
      </a>
      <a
        href="/" 
        target="_blank"
        style={link}
      >
        <FaTwitter size={24} /> {/* Twitter icon */}
        Twitter
      </a>
      </div>
    </footer>
  );
}
