import {
  getNetworkType,
  isLocalOrUnknownNetwork,
  getNetworkName,
} from '@utils/web3-utils'
import { getPreferredChain } from './local-settings'
import env from './environment'

const XDAI_ETH_NODE = env('XDAI_ETH_NODE')
const POLYGON_ETH_NODE = env('POLYGON_ETH_NODE')

const networks = {
  rinkeby: {
    chainId: 4,
    ensRegistry: '0x98df287b6c145399aaa709692c8d308357bc085d',
    name: 'Rinkeby',
    type: 'rinkeby',
    arbitrator: '0x35e7433141D5f7f2EB7081186f5284dCDD2ccacE',
    disputeManager: '0xc1f1c30878de30fd3ac3db7eacdd33a70c7110bd',
    template: '0xF8A030177865356E2Be8fb5F95a19962E6b57E3e',
    celesteUrl: 'https://celeste-rinkeby.1hive.org/#',
    explorer: 'etherscan',

    honeyToken: '0x3050e20fabe19f8576865811c9f28e85b96fa4f9',
    honeyPriceOracle: '0xa87f58dbbe3a4d01d7f776e02b4dd3237f598095',
    stableToken: '0x531eab8bb6a2359fe52ca5d308d85776549a0af9',

    subgraphs: {
      agreement:
        'https://api.thegraph.com/subgraphs/name/1hive/agreement-rinkeby',
      aragon: 'https://api.thegraph.com/subgraphs/name/1hive/aragon-rinkeby',
      celeste: 'https://api.thegraph.com/subgraphs/name/1hive/celeste-rinkeby',
      gardens: 'https://api.thegraph.com/subgraphs/name/1hive/gardens-rinkeby',
    },
    legacyNetworkType: 'rinkeby',
  },
  xdai: {
    chainId: 100,
    ensRegistry: '0xaafca6b0c89521752e559650206d7c925fd0e530',
    name: 'xDai',
    type: 'xdai',
    defaultEthNode: XDAI_ETH_NODE,
    arbitrator: '0x44E4fCFed14E1285c9e0F6eae77D5fDd0F196f85',
    disputeManager: '0xec7904e20b69f60966d6c6b9dc534355614dd922',
    template: '0x82a127b5Be3E04cd06AA034c1616b4d098616E9D',
    celesteUrl: 'https://celeste.1hive.org/#',
    explorer: 'blockscout',

    honeyToken: '0x71850b7e9ee3f13ab46d67167341e4bdc905eef9',
    honeyPriceOracle: '0x6f38d112b13eda1e3abafc61e296be2e27f15071',
    stableToken: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',

    subgraphs: {
      agreement: 'https://api.thegraph.com/subgraphs/name/1hive/agreement-xdai',
      aragon: 'https://api.thegraph.com/subgraphs/name/1hive/aragon-xdai',
      celeste: 'https://api.thegraph.com/subgraphs/name/1hive/celeste',
      gardens:
        'https://api.thegraph.com/subgraphs/name/1hive/gardens-xdai-staging',
    },

    eip3085: {
      chainId: '0x64',
      chainName: 'xDai',
      rpcUrls: ['https://rpc.xdaichain.com/'],
      iconUrls: [
        'https://gblobscdn.gitbook.com/spaces%2F-Lpi9AHj62wscNlQjI-l%2Favatar.png',
      ],
      nativeCurrency: { name: 'xDAI', symbol: 'xDAI', decimals: 18 },
      blockExplorerUrls: ['https://blockscout.com/poa/xdai/'],
    },
  },
  polygon: {
    chainId: 137,
    ensRegistry: '0x7EdE100965B1E870d726cD480dD41F2af1Ca0130',
    name: 'Polygon',
    type: 'matic',
    defaultEthNode: POLYGON_ETH_NODE,
    arbitrator: '0x0ED8867EDaBD4d0b5045E45a39077D97a6B78cbE',
    disputeManager: '0x18d1de55199e24896a2220cdefcf6dd644e07376',
    template: '0x785580f946e322E4Ed6900a2C4A08413f65FfbBF',
    celesteUrl: 'https://celeste.1hive.org/#',
    explorer: 'polygonscan',

    honeyToken: '0xb371248dd0f9e4061ccf8850e9223ca48aa7ca4b',
    honeyPriceOracle: '0x15f627B9C47BbFBbC2194C9a8dB2E722E090a690',
    stableToken: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',

    subgraphs: {
      agreement:
        'https://api.thegraph.com/subgraphs/name/1hive/agreement-polygon',
      aragon: 'https://api.thegraph.com/subgraphs/name/1hive/aragon-polygon',
      celeste: 'https://api.thegraph.com/subgraphs/name/1hive/celeste-polygon',
      gardens: 'https://api.thegraph.com/subgraphs/name/1hive/gardens-polygon',
    },

    eip3085: {
      chainId: '0x89',
      chainName: 'Polygon',
      rpcUrls: ['https://polygon-rpc.com'],
      iconUrls: [
        'https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/icons/matic.svg',
      ],
      nativeCurrency: { name: 'Matic Token', symbol: 'MATIC', decimals: 18 },
      blockExplorerUrls: ['https://polygonscan.com/'],
    },
  },
}

function getNetworkInternalName(chainId = getPreferredChain()) {
  return isLocalOrUnknownNetwork(chainId) ? 'local' : getNetworkType(chainId)
}

export function getNetwork(chainId = getPreferredChain()) {
  return networks[getNetworkInternalName(chainId)]
}

export function getEthersNetwork() {
  const { type, chainId, ensRegistry, defaultEthNode } = getNetwork()
  return {
    name: type,
    chainId: chainId,
    ensAddress: ensRegistry,
    _defaultProvider: defaultEthNode,
  }
}

export const addEthereumChain = () => {
  const { eip3085 } = getNetwork()
  if (!eip3085) {
    return Promise.resolve(null) // Network is not custom
  }
  return window?.ethereum?.request({
    method: 'wallet_addEthereumChain',
    params: [eip3085],
  })
}

export const switchNetwork = async chainId => {
  const chainIdHex = `0x${chainId.toString(16)}`
  try {
    await window?.ethereum?.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chainIdHex }],
    })
  } catch (switchError) {
    // This error code indicates that the chain has not been added to Injected provider.
    if (switchError.code === 4902) {
      await addEthereumChain()
    }
    console.error(switchError)
  }
}

export function getAvailableNetworks() {
  return Object.entries(networks).map(([key, { chainId, name, type }]) => ({
    chainId,
    name,
    type,
  }))
}

export function getAgreementConnectorConfig(chainId) {
  const agreementSubgraph = getNetwork(chainId)?.subgraphs?.agreement
  return {
    agreement: agreementSubgraph && [
      'thegraph',
      { subgraphUrl: agreementSubgraph },
    ],
  }
}

export const SUPPORTED_CHAINS = [4, 100, 137] // Add  arbitrum  chains id + fill the network json with the data

export function isSupportedChain(chainId) {
  return SUPPORTED_CHAINS.includes(chainId)
}

export function getSupportedChainsNamesFormatted() {
  let networkNames = ''
  SUPPORTED_CHAINS.forEach((chain, i, array) => {
    networkNames += getNetworkName(chain)
    if (i !== array.length - 1) {
      networkNames += ', '
    }
  })
  return networkNames
}
