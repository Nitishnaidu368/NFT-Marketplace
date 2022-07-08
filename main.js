//Import createPandoraExpressSDK from SDK
const { createPandoraExpressSDK } = require("pandora-express");
const pandoraSDK = createPandoraExpressSDK();

//Connecting with Metamask wallet.
const init = async () => {
//check if metamask is present
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    console.log("Connected");
  } else {
    alert("Metamask not found");
  }
};

const mintNft = async () => {
    //get current account address
      const accounts = await web3.eth.getAccounts();
    //Get ChainID of current account
      const chainId = await web3.eth.net.getId();
    //Mint NFT using SDK erc721 nft mint
     await pandoraSDK.erc721.nft.mint(web3, chainId, accounts[0], itemURI.value, [
      [accounts[0], 100],
    ]);
    };

    const sellNft = async () => {
        const accounts = await web3.eth.getAccounts();
        const chainId = await web3.eth.net.getId();
        console.log(chainId);
        await pandoraSDK.erc721.order.sellNFT(
          web3,
          chainId,
          sellItemTokenId.value,
          sellItemPrice.value,
          accounts[0]
         );
        };

        const buyNft = async () => {
            const accounts = await web3.eth.getAccounts();
            const chainId = await web3.eth.net.getId();
            console.log(chainId);
            await pandoraSDK.erc721.order.buyNFT(
              web3,
              chainId,
              buyItemSaleId.value,
              accounts[0],
              buyItemAmmount.value
             );
            };

            const itemURI = document.getElementById("txtCreateItemURI");

const createItemButton = document.getElementById("btnCreateItem");
createItemButton.onclick = mintNft;

const itemURI1 = document.getElementById("txtCreateItemURI1");
const itemURI2 = document.getElementById("txtCreateItemURI2");

//const createItemsButton = document.getElementById("btnCreateItemInBatch");
//createItemsButton.onclick = batchMintNft;

const sellItemTokenId = document.getElementById("numSellItemTokenId");
const sellItemPrice = document.getElementById("numSellItemPrice");

const sellItemButton = document.getElementById("btnSellItem");
sellItemButton.onclick = sellNft;

const auctionItemTokenId = document.getElementById("numAuctionItemTokenId");
const auctionItemPrice = document.getElementById("numAuctionItemPrice");
const auctionItemTime = document.getElementById("numAuctionItemTime");

//const auctionItemButton = document.getElementById("btnAuctionItem");
//auctionItemButton.onclick = auctionNft;

const buyItemSaleId = document.getElementById("numBuyItem");
const buyItemAmmount = document.getElementById("numBuyItemAmmount");
numBuyItemAmmount;

const buyItemButton = document.getElementById("btnBuyItem");
buyItemButton.onclick = buyNft;

init();