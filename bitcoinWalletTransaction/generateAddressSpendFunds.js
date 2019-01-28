const bip39 = require("bip39"),
    bip32 = require("bip32"),
    bitcoinJS = require("bitcoinjs-lib");

const mnemonic = "round spell odor day feature become spike hand angry stable keen legal",
    // Mnemonic: 12 words like 'coffee buffet dog... etc etc etc'
    // const mnemonic = bip39.generateMnemonic(),
    // Seed is the mnemonic transformed in to byte format needed to generate an HD Key
    seed = bip39.mnemonicToSeed(mnemonic, ''),
    // HD Key is used to generate child or derived keypairs (public/private key)
    HDKey = bip32.fromSeed(seed, bitcoinJS.networks.testnet),
    // rootKey is a single private/public keypair
    rootKey = HDKey.derivePath("m/44'/0'/0'/0/0"),
    // AddressObj is an address along with a bunch of other information about the type of address (pay-to-public-key-hash)
    addressObj = bitcoinJS.payments.p2pkh({ pubkey: rootKey.publicKey, network: bitcoinJS.networks.testnet }),
    // AddressString is the isolated string derived from the address Obj
    // ex: mj2TQQviUnDWvpX4ptGrmR8RLDfZimM4cs
    addressString = addressObj.address;



const txb = new bitcoinJS.TransactionBuilder(bitcoinJS.networks.testnet);
txb.setVersion(1);

const scriptPubkey = bitcoinJS.payments.p2pkh({ pubkey: rootKey.publicKey, network: bitcoinJS.networks.testnet })
// console.log(scriptPubkey.output)
// (txHash, vout, sequence, prevOutScript)
txb.addInput("a1fbe9fa07d19a56ac5e939e8209d36a42a18f5e0d46fc14c44130be227fd7a8", 0, null, scriptPubkey.output);
// (address, amount)
txb.addOutput("muQysUDEg6XJjXaZ46a4SrKSK2bmc8VqAY", 52692);

// vin, key, redeemScript, hashType, witnessValue
txb.sign(0, rootKey, null, null, 141165, null)
const tx = txb.build()
console.log(tx.toHex())


// console.log(addressString)