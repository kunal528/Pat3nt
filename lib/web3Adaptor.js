import getContractInstance from './getContract';

let contract;

async function initializeWeb3({ changeAccount }) {
  try {
    const getReefExtension = (await import('./getProvider')).getReefExtension;
    const extension = await getReefExtension({
      appName: "Pat3nt",
      setSigner: (val) => {
        changeAccount(val)
        // console.log(getContractInstance(val))
      },
    });
    console.log(extension);
    // const _accounts = await _web3.eth.getAccounts();


    return {
      extension: extension
    };
  } catch (error) {
    console.error(
      `Failed to load web3, accounts, or contract. Check console for details.`
    );
    console.log(error);
  }
}

const mint = async (ipfs, category, signer) => {
  console.log("Transaction Started");
  try {
    const contract = getContractInstance(signer);
    await contract.mint(ipfs, category);
    console.log("Transaction Successfully");
  } catch (error) {
    console.error(error?.data?.message ?? error.message);
  }
};
const makeOffer = async (tokenId, bid, signer) => {
  console.log("Transaction Started");
  try {
    
    await getContractInstance(signer)
      .makeOffer(tokenId.toString(), { value: (bid * 10 ** 18).toString() });
    console.log("Transaction Successfully");
  } catch (error) {
    console.error(error?.data?.message ?? error.message);
  }
};
const cancelOffer = async (tokenId,signer) => {
  console.log("Transaction Started");
  try {
    const contract = getContractInstance(signer);
    await contract
      .cancelOffer(tokenId.toString());
    console.log("Transaction Successfully");
  } catch (error) {
    console.error(error?.data?.message ?? error.message);
  }
};
const approveOffer = async (tokenId,signer) => {
  console.log("Transaction Started");
  try {
    const contract = getContractInstance(signer);
    await contract
      .approveOffer(tokenId.toString());
    console.log("Transaction Successfully");
  } catch (error) {
    console.error(error?.data?.message ?? error.message);
  }
};

const getFromCategory = async (category,signer) => {
  console.log("Transaction Started");
  try {
    const contract = getContractInstance(signer);
    console.log(contract)
    const data = await contract.getFromCategory(category);
    console.log('data', data);
    return data;
    console.log("Transaction Successfully");
  } catch (error) {
    console.error(error);
  }
};


const getFromTokenId = async (id, signer) => {
  console.log("Transaction Started");
  try {
    const contract = getContractInstance(signer);
    return await contract.getFromTokenId(id.toString());
    console.log("Transaction Successfully");
  } catch (error) {
    console.error(error?.data?.message ?? error.message);
  }
};

export {
  initializeWeb3,
  mint,
  getFromCategory,
  getFromTokenId,
  makeOffer,
  cancelOffer,
  approveOffer,
};
