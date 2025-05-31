import {create} from 'zustand';

const useWalletStore = create((set) => ({
  // Initial state
  isInitialized: false,     // Tracks if we've checked chrome.storage for existing setup
  isUnlocked: false,        // Tracks if the wallet is currently unlocked (password entered)
  isWalletSetup: false,     // Tracks if a wallet has been created or imported
  address: null,            // Current Ethereum address
  mnemonic: null,           // Runtime only: stores the decrypted mnemonic phrase while unlocked
  // passwordHash: null,    // Optional: for quick password check (not implementing for now as per prompt)

  // Actions
  setInitialized: (status) => set({ isInitialized: status }),

  setUnlocked: (status, mnemonicPhrase = null) => set((state) => ({
    isUnlocked: status,
    mnemonic: status ? mnemonicPhrase : null, // Store mnemonic if unlocking, clear if locking
  })),

  setWalletSetup: (status, walletAddress = null) => set((state) => ({
    isWalletSetup: status,
    address: status ? walletAddress : null, // Store address if setup is complete
    isUnlocked: status ? state.isUnlocked : false, // If wallet setup is being revoked, also lock
    mnemonic: status ? state.mnemonic : null, // Retain mnemonic if wallet is being marked as setup and already unlocked
  })),

  lockWallet: () => set({
    isUnlocked: false,
    mnemonic: null, // Clear mnemonic on lock
  }),

  // Example of how to potentially reset or mark wallet as not set up
  resetWalletSetup: () => set({
    isWalletSetup: false,
    isUnlocked: false,
    address: null,
    mnemonic: null,
    // Potentially clear from chrome.storage as well, via a background script message
  }),
}));

export default useWalletStore;
