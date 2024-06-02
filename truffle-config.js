
const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    // development: {
    //  host: "127.0.0.1",
    //  port: 7545,
    //  network_id: "*",
    //  gas: 20000000000,
    // },
    sepolia: {
      provider: () => 
        new HDWalletProvider(
          keys.DEPLOYER_KEY,
          keys.INFURA_SEPOLIA_URL
        ),
      network_id: "11155111",
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200
    }
  },
  compilers: {
    solc: {
      version: "0.8.13",
    }
  },
};
