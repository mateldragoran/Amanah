import React from 'react';
// Functionality for buttons will be added in Prompt 3.1
// For now, they are just visual placeholders.

const WalletSetupView = () => {
  const handleCreateWallet = () => {
    console.log("Create New Wallet clicked - functionality to be added in Prompt 3.1");
    // Later: chrome.runtime.sendMessage({ type: 'CREATE_NEW_WALLET' }, ...);
  };

  const handleImportWallet = () => {
    console.log("Import Existing Wallet clicked - functionality to be added in Prompt 3.1");
    // Later: Show UI for mnemonic input, then sendMessage for import
  };

  return (
    <div className="wallet-setup-view glass-card content-center">
      <h2 style={{ marginBottom: '25px', fontSize: '1.6em' }}>Set Up Your Amanah Wallet</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '80%' }}>
        <button
          className="button-primary"
          style={{ padding: '12px', fontSize: '1.1em' }}
          onClick={handleCreateWallet}
        >
          Create New Wallet
        </button>
        <button
          className="button-primary"
          style={{ padding: '12px', fontSize: '1.1em', background: 'rgba(0, 192, 83, 0.7)' /* Slightly different shade or secondary style */ }}
          onClick={handleImportWallet}
        >
          Import Existing Wallet
        </button>
      </div>
      <p style={{ marginTop: '30px', fontSize: '0.9em', opacity: 0.8 }}>
        Your key to the Shariah-compliant Web3 world.
      </p>
    </div>
  );
};

export default WalletSetupView;
