import { generateAlgoWallet, algorandGetAccountBalance } from '@tatumio/tatum';
import { generateMnemonic, mnemonicToSeed } from 'bip39';
/**
 * @method isEmpty
 * @param {String | Number | Object} value
 * @returns {Boolean} true & false
 * @description this value is Empty Check
 */
export const isEmpty = (value: string | number | object): boolean => {
  1;
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (typeof value === 'undefined' || value === undefined) {
    return true;
  } else if (value !== null && typeof value === 'object' && !Object.keys(value).length) {
    return true;
  } else {
    return false;
  }
};

export const CreateAlgoWallet = async () => {
  const Algorand = await generateAlgoWallet();

  return {
    address: Algorand.address,
    Key: Algorand.secret,
  };
};

export const AlgoWalletBalance = async (address?: string) => {
  const balance = await algorandGetAccountBalance(address);
  return balance;
};
