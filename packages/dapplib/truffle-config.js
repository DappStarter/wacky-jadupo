require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture stove cost mushroom puppy hundred light army gift'; 
let testAccounts = [
"0xd80940672e807ef894b9f5f0036c42659168e95a8a488d242185bc7b89feff07",
"0xc8ade800440ac227527b98b2aceec94b92a507196b11159eac165bb8831a36f6",
"0x8afecc93ba2cc3392b45ab286d33f308fa4bde03bb162b7bdd6ed33fe085f700",
"0x5ff950eb5a47168ae6e64f21df11188bddd36428ec1eca761ceaa975d2c26e6d",
"0xd83ec44836c1309a844a2961decd67ea2d7efe872184cb42c6238affb856bb8a",
"0x40df7f3e8a080f24626290a7eba9d59fe01c7db7b588bef0fe6356d6e3cf7ac9",
"0x29d38ab3dc5bb9a91e68b5d63f9fe26babba8ea5ac0fda2081c5e935f320376a",
"0xffbc831f900b1440d3e1e892689a7e44a9032649ac52d77c86bfadf93295a9dd",
"0x8db298ec9593492f8ed60539fd256808fcb30ae3005f42ed6e5e5a63d2cb27c5",
"0x14cf80a17b029c940e7914604c47e186a65442ad7f13ce1945d696c684b2842b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
