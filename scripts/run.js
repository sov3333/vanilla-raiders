const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Swordsman", "Archer", "Wizard"],       // Names
    ["https://i.imgur.com/Bix5oBT.png", // Images
    "https://i.imgur.com/LZRkouX.png", 
    "https://i.imgur.com/L7IA4pp.png"],
    [300, 200, 100], // HP values
    [30, 50, 100], // Attack damage values
    "Bearwhale", // Boss name
    "https://i.imgur.com/4i20yVT.jpg", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
  
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