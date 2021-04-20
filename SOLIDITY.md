# Solidity

## What is Solidity
Solidity is a contract-oriented, high-level language for implementing smart contracts. It was influenced by C++, Python and JavaScript and is designed to target the Ethereum Virtual Machine (EVM). Solidity is statically typed, supports inheritance, libraries and complex user-defined types among other features.
Introduction repo can be found [here](https://github.com/udacity/nd1309-work-code/tree/master/Course_Identity_And_Smart_Contracts/Smart_Contracts_With_Solidity).

Useful links:
* https://github.com/manojpramesh/solidity-cheatsheet

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

## Data types
- uint - uint8, int16...
- int - int256
- bool - true, false
- address - 20 byte eth address (methods: balance, transfer(), send())

```sol
pragma solidity >=0.4.24;

contract BasicDataType {

    uint8   a = 255;             // 1 bytes unsigned integer
    address public owner;        // Address types variable, called owner
    bool  public flag = true;
    uint    ownerInitialBalance; // uint type variable

    // Function takes in an address, and returns the balance of this address
    function test (address addr) public returns (uint) {
        owner = addr;
        ownerInitialBalance = owner.balance;
        // if(1){ } will not compile
        if (1 > 0) {
            // This will work because expression evaluates to bool
            // Do something
        }
        return ownerInitialBalance;
    }
}
```

More here: https://docs.soliditylang.org/en/v0.5.0/types.html?highlight=memory

## Type conversion
There are 2 types:
- implicit - If an operator is applied to different types, the compiler tries to implicitly convert one of the operands to the type of the other (the same is true for assignments). In general, an implicit conversion between value-types is possible if it makes sense semantically and no information is lost: uint8 is convertible to uint16 and int128 to int256, but int8 is not convertible to uint256 (because uint256 cannot hold e.g. -1)
- explicit -  the compiler does not allow implicit conversion but you know what you are doing, explicit type conversion is sometimes possible. Note that this may give you some unexpected behavior and allows you to bypass some security features of the compiler, so be sure to test that the result is what you want

## Complex data types
- Arrays - https://docs.soliditylang.org/en/v0.8.3/types.html?highlight=mapping#arrays
- Structs - https://docs.soliditylang.org/en/v0.8.3/types.html?highlight=mapping#structs
- Mapping - https://docs.soliditylang.org/en/v0.8.3/types.html?highlight=mapping#mapping-types
- Strings - https://docs.soliditylang.org/en/v0.8.3/types.html?highlight=mapping#string-literals-and-types
- Bytes - https://docs.soliditylang.org/en/v0.8.3/types.html?highlight=mapping#fixed-size-byte-arrays
- Enums - https://docs.soliditylang.org/en/v0.8.3/types.html?highlight=mapping#enums
