const NftMarket = artifacts.require("NftMarket");
const instance = await NftMarket.deployed();
// You can now use the instance variable as needed
instance.mintToken("https://blush-geographical-marmot-256.mypinata.cloud/ipfs/Qmb4aom5xNRE5CBRHZsxCsYSdcmX8zfHXgM7ovZxLp3CqL","500000000000000000",{ value: "25000000000000000", from: accounts[0] });
instance.mintToken("https://blush-geographical-marmot-256.mypinata.cloud/ipfs/QmcqxBeE2XfagzEBYnaCUfHHTRLMiHi6xap6BDFLoNUfTN","300000000000000000",{ value: "25000000000000000", from: accounts[0] });
