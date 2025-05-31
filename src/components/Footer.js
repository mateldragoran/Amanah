import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#004D40', // Dark emerald background
    color: 'white', // White text
    padding: '12px 20px', // Padding
    textAlign: 'center', // Text centered
    fontSize: '0.85em', // Slightly smaller font size for footer
    borderTop: '1px solid rgba(0, 105, 92, 0.3)' // Subtle top border, similar to glass border
  };

  const pStyle = {
    margin: 0 // Remove default margin from p
  };

  return (
    <footer style={footerStyle}>
      <p style={pStyle}>© 2024 Amanah Wallet</p>
    </footer>
  );
};

export default Footer;
