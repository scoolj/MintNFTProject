async function run() {
    // const ipfsClient = require('ipfs-http-client');
    // const ipfs = ipfsClient.create('https://ipfs.infura.io:5001');

    const { create } = await import('ipfs-http-client');
    const ipfs = await create();
    
    // we added three attributes, add as many as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "Scoolj First NFT",
            attributes: [
            {
                "trait_type": "Peace",
                "value": "10" 
            },
            {
                "trait_type": "Love",
                "value": "100"
            },
            {
                "trait_type": "Web3",
                "value": "1000"
            }
            ],
            // update the IPFS CID to be your image CID
            image: "https://ipfs.io/ipfs/QmcvFqU5iaayGCpjf9sx9oJkdbCGWiNW2mUq8UcEBT2E93",
            description: "Scoolj pix !"
        })
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();