import * as StellarSDK from 'stellar-sdk'
import { compose, head, prop } from 'ramda'

const TESTNET_NETWORK = 'testnet'
const PUBLIC_NETWORK = 'public'

export default ({ horizonUrl, network, get }) => {
  const server = new StellarSDK.Server(horizonUrl)
  if (network === TESTNET_NETWORK) StellarSDK.Network.useTestNetwork()
  else if (network === PUBLIC_NETWORK) StellarSDK.Network.usePublicNetwork()
  else {
    throw new Error(
      `invalid xlm network ${network},
      expected ${TESTNET_NETWORK} or ${PUBLIC_NETWORK}`
    )
  }
  const createXlmAccount = publicKey =>
    get({
      url: `https://friendbot.stellar.org`,
      endPoint: '',
      data: { addr: publicKey }
    })

  const getXlmAccount = publicKey => server.loadAccount(publicKey)

  const pushXlmTx = tx => server.submitTransaction(tx)

  const getXlmTransactions = publicKey =>
    server
      .transactions()
      .forAccount(publicKey)
      .call()

  const getLatestLedgerDetails = () =>
    server
      .ledgers()
      .order('desc')
      .limit(1)
      .call()
      .then(
        compose(
          head,
          prop('records')
        )
      )

  return {
    createXlmAccount,
    getLatestLedgerDetails,
    getXlmAccount,
    getXlmTransactions,
    pushXlmTx
  }
}
