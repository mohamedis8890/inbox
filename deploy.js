const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");

const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "belt humor slim cousin guide force erase black ball loud group gasp",
  "https://rinkeby.infura.io/v3/dac7b63936994bd588b29959de1bba26"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account: ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to: ", result.options.address);
};
deploy();
