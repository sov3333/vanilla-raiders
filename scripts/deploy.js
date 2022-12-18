const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('VanillaRaiders');
  const gameContract = await gameContractFactory.deploy(
    ["Swordsman", "Archer", "Wizard"],       // Names
    ["Qmbb5q5Qv9cryxqvmvTzuKi2pMMFgyFSn4is95Lvkp7Cje/swordsman.png", // Images
    "Qmbb5q5Qv9cryxqvmvTzuKi2pMMFgyFSn4is95Lvkp7Cje/archer.png", 
    "Qmbb5q5Qv9cryxqvmvTzuKi2pMMFgyFSn4is95Lvkp7Cje/wizard.png"],
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