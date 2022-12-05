const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Swordsman", "Archer", "Wizard"],       // Names
    ["https://i.imgur.com/Bix5oBT.png", // Images
    "https://i.imgur.com/LZRkouX.png", 
    "https://i.imgur.com/L7IA4pp.png"],
    [300, 200, 100], // HP values
    [30, 50, 100] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();