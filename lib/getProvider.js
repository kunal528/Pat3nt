import { Provider } from '@reef-defi/evm-provider'
import { WsProvider } from '@polkadot/rpc-provider'
import { REEF_EXTENSION_IDENT } from '@reef-defi/extension-inject'

export async function initProvider() {
    const URL = 'wss://rpc-testnet.reefscan.com/ws'
    const provider = new Provider({
        provider: new WsProvider(URL),

    })
    await provider.api.isReady
    console.log('Provider is ready', provider)
    return provider
}

export async function getReefExtension({appName, setSigner}) {
    const extensionsArr = await (await import('@reef-defi/extension-dapp')).web3Enable(appName)
    console.log(extensionsArr)
    const extension = extensionsArr.find(e => e.name === REEF_EXTENSION_IDENT)
    // const accounts = await (await import('@reef-defi/extension-dapp')).web3Accounts()
    if (!extension) {
        throw new Error('Reef Extension not found')
    }
    console.log('extension', extension)
    extension.reefSigner.subscribeSelectedAccountSigner(async (sig) => {
        try {
            if (!sig) {
                throw new Error('Create account in Reef extension or make selected account visible.');
            }
            setSigner(sig)
        } catch (err) {
            console.log(err);
        }
    });
    return extension
}