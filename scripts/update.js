const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/Solido.sol/Solido.json");

const { RPC_URL, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

async function main() {
    try {
        const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
        const signer = new ethers.Wallet(PRIVATE_KEY, provider);
        const contract_instance = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

        const message = await contract_instance.message();
        console.log("Initial message: ", message);

        const tx = await contract_instance.update("FI");
        await tx.wait();
        console.log("Transaction hash: ", tx.hash);

        const newMessage = await contract_instance.message();
        console.log("Updated message: ", newMessage);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
