const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('VanillaRaiders');
  const gameContract = await gameContractFactory.deploy(
    ["Swordsman", "Archer", "Wizard"],       // Names
    ["QmRQLXwSLKqkE2p9ATum14jEVearEvku1QnB1qpdnD15rN/swordsman.png", // Images
    "QmRQLXwSLKqkE2p9ATum14jEVearEvku1QnB1qpdnD15rN/archer.png", 
    "QmRQLXwSLKqkE2p9ATum14jEVearEvku1QnB1qpdnD15rN/wizard.png"],
    [300, 200, 100], // HP values
    [30, 50, 100], // Attack damage values
    "Bearwhale", // Boss name
    "QmVMvYLnhvx7dj5BidKUNovWfvoTkoCJgc4hV8w3zTEQtK", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
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