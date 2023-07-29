require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = "faace87d2fa9853c29a0db0947a6d0ab4a1064da1915012bfb3b7628957cb4ce";

const RPC_URL = "https://rpc.ankr.com/polygon_mumbai";

module.exports = {
  defaultNetwork: "polygon_mumbai",

  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {

    hardhat: {
      chainId: 80001,
    },
    polygon_mumbai: {
      url: RPC_URL,
      accounts:[`0x${PRIVATE_KEY}`]
    },

    zksync_testnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli",
      chainId: 280,
      zksync: true,
    },
    zksync_mainnet: {
      url: "https://zksync2-mainnet.zksync.io/",
      ethNetwork: "mainnet",
      chainId: 324,
      zksync: true,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
