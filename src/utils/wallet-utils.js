import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';

const neoTestnet = {
  id: 12227332,
  name: 'Neo X Testnet T4',
  network: 'neoTestnet',
  nativeCurrency: {
    decimals: 18,
    name: 'GAS',
    symbol: 'GAS',
  },
  rpcUrls: {
    public: { http: ['https://neoxt4seed1.ngd.network'] },
    default: { http: ['https://neoxt4seed1.ngd.network'] },
  },
  iconUrl: 'https://assets.coingecko.com/coins/images/858/large/GAS_512_512.png?1696501992',
  icon: {
    url: 'https://assets.coingecko.com/coins/images/858/large/GAS_512_512.png?1696501992',
    width: 512,
    height: 512,
    format: 'png'
  },
  blockExplorers: {
    default: { url: 'https://xt4scan.ngd.network' }
  }
};

const neoMainnet = {
  id: 47763,
  name: 'Neo X Mainnet',
  network: 'neoMainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'GAS',
    symbol: 'GAS',
  },
  rpcUrls: {
    public: { http: ['https://mainnet-1.rpc.banelabs.org'] },
    default: { http: ['https://mainnet-1.rpc.banelabs.org'] },
  },
  iconUrl: 'https://cryptologos.cc/logos/neo-neo-logo.png',
  icon: {
    url: 'https://cryptologos.cc/logos/neo-neo-logo.png',
    width: 512,
    height: 512,
    format: 'png'
  },
  blockExplorers: {
    default: { url: 'https://xexplorer.neo.org' }
  }
};


// Configure chains and providers
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [neoTestnet, neoMainnet],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        switch (chain.id) {
          
          case neoTestnet.id:
            return { http: 'https://neoxt4seed1.ngd.network' };
          case neoMainnet.id:
            return { http: 'https://mainnet-1.rpc.banelabs.org' };
          
          default:
            return null;
        }
      },
    }),
  ]
);

// Configure wallet connectors
const { connectors } = getDefaultWallets({
  appName: 'DunkVerse',
  projectId: '87106bd465234d097b8a51ba585bf799',
  chains,
});

// Create Wagmi configuration
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains, wagmiConfig };
