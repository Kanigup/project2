const HDWalletProvider = require("@truffle/hdwallet-provider");
/**
 * Use this file to configure your truffle project. 
 */

// const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   
   * $ truffle test --network <network-name>
   */

  networks: {
    
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    
  },

  // Set default mocha options here.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.12", 
    },
  },

};
