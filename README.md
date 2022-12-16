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

## Characters

Characters created with [Dreamstudio](https://beta.dreamstudio.ai/dream).

Prompts:
- [A **Swordsman** character in an RPG, by Studio Ghibli, matte painting trending on artstation HQ](https://i.imgur.com/Bix5oBT.png)
- [An **Archer** character with a Bow in an RPG, by Studio Ghibli, matte painting trending on artstation HQ](https://i.imgur.com/LZRkouX.png)
- [Full-body portrait of a **Wizard** character with a Wand in an RPG, by Studio Ghibli, matte painting trending on artstation HQ](https://i.imgur.com/L7IA4pp.png)

## dotenv

https://www.npmjs.com/package/dotenv

.env file format:
```
QUICKNODE_API="YOUR_API_KEY_HERE"
PRIVATE_KEY="YOUR_PRIVATE_KEY_HERE"
```

**IMPORTANT**: Add `.env` to your `.gitignore` file!!

To be safe, use a fresh metamask account with no real-world assets.

For Ethereum network node, use [Quicknode](https://www.quicknode.com/endpoints), Infura, or Alchemy etc.

## Deploying on Goerli testnet

```
npx hardhat run scripts/deploy.js --network goerli
```

## Deploying on Hardhat testnet - will show `console.log`
```
npx hardhat run scripts/run.js
```

## Web App

```
npm install
```

```
npm run start
```

## If new smart contract deployed, do this!

So, what you'll need to do is:

1. Deploy again using `npx hardhat run scripts/deploy.js --network goerli`

2. Change `contractAddress` in `constants.js` to be the new contract address we got from the step above in the terminal (just like we did before the first time we deployed).

3. Get the updated abi file from `artifacts` and copy-paste it into your web app just like we did above.