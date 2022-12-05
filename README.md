# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Setup instructions

```
mkdir epic-game
cd epic-game
npm init -y
npm install --save-dev hardhat@latest
```

```
npx hardhat
```
Choose the option Create a JavaScript project. Say yes to everything.

Go ahead and install these other dependencies just in case it didn't do it automatically.
```
npm install --save-dev chai @nomiclabs/hardhat-ethers ethers @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-chai-matchers
```

You'll also want to install something called OpenZeppelin which is another library that's used a lot to develop secure smart contracts. We'll learn more about it later. For now, just install it :).
```
npm install @openzeppelin/contracts
```

Then run:
```
npx hardhat run scripts/deploy.js
```