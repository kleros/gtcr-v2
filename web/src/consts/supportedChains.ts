import type { AddEthereumChainParameter } from "@web3-react/types";

const ETH: AddEthereumChainParameter["nativeCurrency"] = {
  name: "Ether",
  symbol: "ETH",
  decimals: 18,
};

const xDai: AddEthereumChainParameter["nativeCurrency"] = {
  name: "xDai",
  symbol: "xDai",
  decimals: 18,
};

export enum SupportedChainId {
  MAINNET = 1,
  GOERLI = 5,
  GNOSIS = 100,
}

type ChainConfig = {
  [chainId in SupportedChainId]?: AddEthereumChainParameter;
};

export const MAINNET_CHAINS: ChainConfig = {
  [SupportedChainId.MAINNET]: {
    chainId: 1,
    chainName: "Ethereum",
    nativeCurrency: ETH,
    rpcUrls: ["https://mainnet.infura.io/v3/758eb321e69542e88f70381ffec277cf"],
    blockExplorerUrls: ["https://etherscan.io"],
  },
  [SupportedChainId.GNOSIS]: {
    chainId: 100,
    chainName: "Gnosis",
    nativeCurrency: xDai,
    rpcUrls: ["https://rpc.ankr.com/gnosis", "https://rpc.xdaichain.com/"],
    blockExplorerUrls: ["https://blockscout.com/xdai/mainnet"],
  },
};

export const TESTNET_CHAINS: ChainConfig = {
  [SupportedChainId.GOERLI]: {
    chainId: 5,
    chainName: "Goerli",
    nativeCurrency: ETH,
    rpcUrls: ["https://goerli.infura.io/v3/758eb321e69542e88f70381ffec277cf"],
    blockExplorerUrls: ["https://goerli.etherscan.io/"],
  },
};

export const SUPPORTED_CHAINS: ChainConfig = {
  ...MAINNET_CHAINS,
  ...TESTNET_CHAINS,
};

export const RPC_URLS: { [chainId: number]: string[] } = Object.keys(
  SUPPORTED_CHAINS
).reduce<{ [chainId: number]: string[] }>((accumulator, chainId) => {
  const validURLs: string[] = SUPPORTED_CHAINS[Number(chainId)].rpcUrls;

  if (validURLs.length) {
    accumulator[Number(chainId)] = validURLs;
  }

  return accumulator;
}, {});

/* export const CHAINIDs: { [chainId: number]: string } = Object.keys(
  SUPPORTED_CHAINS
).reduce<{ [chainId: number]: string }>((accumulator, chainId) => {
  const validCHAINIDs: string = SUPPORTED_CHAINS[Number(chainId)].toString();

  if (validCHAINIDs) {
    accumulator[Number(chainId)] = validCHAINIDs;
  }

  return accumulator;
}, {}); */

export const getChainNameById = (chainId: number | undefined): string => {
  if (!chainId) return "unknown";
  return SUPPORTED_CHAINS[chainId].chainName;
};

export function getChainInfo(
  chainId: number
): AddEthereumChainParameter | number {
  return SUPPORTED_CHAINS[chainId];
}
