export const ChainId = {
  
  NEO_TESTNET: 12227332,
  NEO_MAINNET: 47763,
  
};

export const supportedChains = [
  
  ChainId.NEO_TESTNET,
  ChainId.NEO_MAINNET,
  
];

export const getRPCProvider = (chainId: number): string => {
  switch (chainId) {
    
    case ChainId.NEO_TESTNET:
      return "https://neoxt4seed1.ngd.network";
    case ChainId.NEO_MAINNET:
      return "https://mainnet-1.rpc.banelabs.org";
    
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`);
  }
};

export const getExplorer = (chainId: number): string => {
  switch (chainId) {
    
    case ChainId.NEO_TESTNET:
      return "https://xt4scan.ngd.network";
    case ChainId.NEO_MAINNET:
      return "https://xexplorer.neo.org";
    
    default:
      throw new Error(`Unsupported chain ID: ${chainId}`);
  }
};