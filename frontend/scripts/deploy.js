// scripts/deploy.js
require("@nomiclabs/hardhat-etherscan");
async function main() {
  const YourContract = await ethers.getContractFactory("BookSwap");
  const yourContract = await YourContract.deploy();
  console.log("YourContract deployed to:", yourContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
