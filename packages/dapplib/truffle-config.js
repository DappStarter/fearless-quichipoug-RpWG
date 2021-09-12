require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind concert harvest brave bottom thing'; 
let testAccounts = [
"0x04b23f4d7009c63e02c2fa26ab1e05d38c6caee270d455d0ffd59b0b0339b479",
"0x74ded7de963986020f69f28887749b0b5f91ac261c491ad32014daf51bd1deb2",
"0x53cf14b9b62fdc030a25098ecc6cea5a9b1658e61a531c5914a4598a0b5deb17",
"0xd24bd88a64b3376c8c64f292a0c0639722ba51228b72b553e8edfdaa664aabbf",
"0x7d2455001ae8aafbb8b618dc802d055bcd0fffa4218b9fd5ac4dfe66541071b9",
"0xaef924bd296dba4765b834f9d35d13afe02c0019382ae57f6321bd8ddb5bfd59",
"0x56c541b0e646ed461db2cb7a460acbb4e3a9c26962cf07f481fbae54c7a47a5f",
"0x965f16e8bfc0e9bdc6aec507d35c860da40c89d41ea6be9fc0a2f019ab326e39",
"0x4fd44678826ebef7cc4f75ad635bdb84d230f8623af5c827a069a2a60e9461f0",
"0x7685c355add408ad39fb9144f2433e76398d42eb8e9d9bf885beb8fd066c915a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


