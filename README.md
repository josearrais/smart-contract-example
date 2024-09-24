# Smart Contract Example

This project demonstrates how to simply implement a smart contract on the Ethereum testnet. It uses Hardhat as the development environment, Ethers.js to interact with the Ethereum network and Ankr to make requests to the Ethereum chain.

## Prerequisites

Before you start, make sure you have the following:

- Node.js and npm installed
- Metamask wallet with Ethereum testnet tokens from Faucet

## Setup

Clone this repository so that you can:

- Run `npm install` to set up all the dependencies
- Fill the `.env` file with your own keys
- Run `npx hardhat run scripts/deploy.js` to deploy the contract to the Ethereum testnet
- Run `npx hardhat run scripts/update.js` to read and write a new message to the smart contract
