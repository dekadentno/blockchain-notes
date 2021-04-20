# Solidity

## What is Solidity
Solidity is a contract-oriented, high-level language for implementing smart contracts. It was influenced by C++, Python and JavaScript and is designed to target the Ethereum Virtual Machine (EVM). Solidity is statically typed, supports inheritance, libraries and complex user-defined types among other features.
Introduction repo can be found [here](https://github.com/udacity/nd1309-work-code/tree/master/Course_Identity_And_Smart_Contracts/Smart_Contracts_With_Solidity).

## Smart Contracts
* piece of code that lives on the Blockchain
* a self operating computer program that automatically executes when certain conditions are met
* it can be instructed to send money, receiv emoney, transfer assets
* they are the core of ethereum
* they distinguish ethereum from bitcoin
* they have an account address, can hold ether, they have their own storage 
* invoked with their address, after that, their functions can be called
* once the contract is finished, it should self destruct 
* after compiling, there are 2 "outputs": byte code is what is deployed on the network (machine code), Application Binary Interface (ABI) used for interaction with the contract
* we can deploy the contract on an local or other network, e.g. rinkbey
* after deploying, we are actually deploying the instance of the contract. every instance has its own address

![Screenshot at 2021-04-16 00-36-19](https://user-images.githubusercontent.com/12261635/114946612-c896e480-9e4b-11eb-9141-9418a8fdcd4b.png)

## Smart Contract Lifecycle
1. Develop - Write the contract and compile.
2. Deploy - Once deployed, the smart contract is un-editable. After deploying on any network (e.g. mainnet, testnet), you get an address specific to where contract was deployed.
3. Invoke - Use the address created after the smart contract is deployed to invoke contract to call functions on it.
4. Destroy - Once a contract has finished its purpose, it is important to destroy it so no one can call functions on it anymore. Remember that smart contracts cannot be edited once deployed. Also, often smart contracts are tied to funds, so keeping it around if it is no longer used puts these funds at risk.

```
pragma solidity ^0.4.24;

contract Message {
    string myMessage;

    function setMessage(string x) public {
        myMessage = x;
    }

    function getMessage() public view returns (string) {
        return myMessage;
    }
}

```

## Memory management
- memory - Used for temporary storage of data, information is lost after function execution
- storage - Used for variables in storage, stay with the contract, and the data persists
- callData - Like a stack. Used for EVM call execution

State variables (outside of functions) are stored in the storage. Local variables (inside functions) are just references to state variables.
