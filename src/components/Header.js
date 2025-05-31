import React from 'react';
// We can create a separate CSS module or use inline styles for simplicity as per initial setup.
// For this step, I'll use inline styles as requested by the prompt structure,
// but for larger components, CSS Modules or styled-components would be better.

const Header = () => {
  const headerStyle = {
    background: 'linear-gradient(to right, #004D40, #00695C)', // Dark emerald to lighter emerald gradient
    color: 'white', // White text
    padding: '15px 20px', // Padding
    textAlign: 'center', // Centered text
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // Subtle shadow for a bit of depth
  };

  const h1Style = {
    margin: 0, // Remove default margin from h1
    fontSize: '1.4em', // Slightly larger font size for the title
    fontWeight: '600' // Semi-bold
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>Amanah Wallet</h1>
    </header>
  );
};

export default Header;
