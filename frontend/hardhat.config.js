require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.22",
  networks: {
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io",
      accounts: [""],
    },
  },
  etherscan: {
    apiKey: {
      scrollSepolia: '',
    },
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://api-sepolia.scrollscan.com/api',
          browserURL: 'https://sepolia.scrollscan.com/',
        },
      },
    ],
  }
};
