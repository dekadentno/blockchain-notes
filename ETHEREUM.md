# Ethereum Smart Contracts, Tokens and Dapps Notes

### Getting started
* ethereum is the world's leading blockchain platform for developing decentralized applications on the blockchain
* ethereum has its own scripting language called Solidity
* Ethereum Virtual Machine (EVM) - capable of executing logic, algorithms and processing data inputs
* ETH is turing complete, meaning, it is able to run code written by a developer or executed by an end user 
* we can use Solidity for writing smart contracts
* a smart contract is a contract written in code. They are setting up rules in a negotiation between two parties. A smart contract is an object on the ETH blockchain that contains EVM code functions 
* a smart contract can store data, make decisions, interact with other contracts and send data
* ethereum is attempting to improve on earlier generation blockchain platforms
* it separates the blockchain state from the account state and creates a mapping between them

![Screenshot at 2021-04-02 12-54-14](https://user-images.githubusercontent.com/12261635/113409916-8c2aa980-93b2-11eb-9b69-f95de5173dbc.png)

### Ethereum Virtual Machine
* machine that powers the ethereum platform. it executes code
* capable of executing logic, algorithms and processing data inputs
* responsible for running thousands of nodes spread accross the world
* it is managing the state of the blockchain, managing accounts, validating transactions, executing code on the network
* all nodes run the EVM (world computer)

### Smart Contract
* once written, it is compiled in 2 views: assembly (human readable) and bytecode (machine readable)
* compiled code executes on the EVM

### Useful tools
* Etherscan - blockchain explorer
* Metamask - MetaMask equips you with a key vault, secure login, token wallet, and token exchange—everything you need to manage your digital assets
* Remix - online IDE for createing smart contracts
* [web3.js](https://web3js.readthedocs.io/en/v1.3.4/) - collection of libraries for interacting with a local or remote ethereum node
* Infura - Gives you access to the Ethereum network without running your own local node
* Ganache - functionality for building and testing your local blockchain
* Truffle - A development environment, testing framework, and asset pipeline meant to make your life easier as an Ethereum developer
* Geth - comand line interface for running a full ethereum node

## DApps
* application that has its backend code running on a decentralized peer-to-peer network 
* in ethereum's case, that network is the world computer
* that's different from traditional apps because they are centralized
* those apps can run just like traditional applications
* similar like google play, ethereum has a way to see the apps that are live right now

## Ethereum accounts
An Ethereum account is an entity with an ether (ETH) balance that can send transactions on Ethereum. Accounts can be user-controlled or deployed as smart contracts.
Ethereum has two account types:

* Externally-owned (EOA) – controlled by anyone with the private keys - can send txs, initiate smart contracts, transfer value from its wallet
* Contract (CA) – a smart contract deployed to the network, controlled by code. Has account balance, smart contract code, transaction count. Can transfer value and initiate another smart contract, execute smart contracts and manipulate storage.
Both account types have the ability to:
* Receive, hold and send ETH and tokens
* Interact with deployed smart contracts

![Screenshot at 2021-04-12 21-37-57](https://user-images.githubusercontent.com/12261635/114451316-62099080-9bd7-11eb-8d92-98a9d0828c8b.png)

