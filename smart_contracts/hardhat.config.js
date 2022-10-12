//

require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rtFO6dWw7lRmFnTY3CTdp8cst_tH6Eif",
      accounts: [
        "74caadc98401bcf8945e54f9171282fb2b18c09e3fc92a689cd6e2510f9564d6",
      ],
    },
  },
};
