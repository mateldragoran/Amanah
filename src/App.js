import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import useWalletStore from './store/walletStore';
import WalletSetupView from './views/WalletSetupView';
import UnlockView from './views/UnlockView'; // New import
import AccountView from './views/AccountView'; // New import


function App() {
  const {
    isInitialized,
    isWalletSetup,
    isUnlocked,
    setInitialized,
    setWalletSetup
    // `setUnlocked` will be used by UnlockView primarily
  } = useWalletStore();

  useEffect(() => {
    // Simulate checking chrome.storage for wallet setup status
    // In Prompt 3.1, this will be replaced with:
    // chrome.runtime.sendMessage({ type: 'CHECK_WALLET_SETUP' }, response => {
    //   if (chrome.runtime.lastError) {
    //     console.error(chrome.runtime.lastError.message);
    //     // Handle error, maybe set initialized true but setup false
    //     setWalletSetup(false, null);
    //   } else if (response) {
    //     setWalletSetup(response.isWalletSetup, response.address);
    //   }
    //   setInitialized(true);
    // });

    console.log("App.js: Simulating check for existing wallet setup...");
    setTimeout(() => {
      // For now, assume no wallet is set up initially for testing WalletSetupView
      setWalletSetup(false, null);
      setInitialized(true);
      console.log("App.js: Initialization complete. isWalletSetup:", useWalletStore.getState().isWalletSetup);
    }, 500);
  }, [setInitialized, setWalletSetup]);

  let content;
  if (!isInitialized) {
    content = <p className="content-center">Loading Amanah Wallet...</p>;
  } else if (!isWalletSetup) {
    content = <WalletSetupView />;
  } else if (!isUnlocked) {
    content = <UnlockView />;
  } else {
    content = <AccountView />;
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {content}
      </main>
      <Footer />
    </div>
  );
}

export default App;
