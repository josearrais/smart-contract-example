async function main() {
    const solido = await ethers.getContractFactory("Solido");

    const deploy = await solido.deploy("LO");
    console.log("Contract deployed to address: ", deploy.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
