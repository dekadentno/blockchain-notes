# Blockchain Notes

### Blockchain
- incorruptible digital ledger of economic transactions that can be programmed to record not just financial transactions but virtually everything of value
- "shared db that contains a list of transactions (shared between the users in the netword)"
- data is not held by any central authority and it is impossible to manipulate with the data in the chain
- we get a shared permanent history of transactions that we can trust, it is accurate and up to date
- completely new way to share data
- allows us to make transactions that are transparent and more cheap
- example of potential industries suitable for Blockchain: personal identification
- currently, most of our personal IDs are stored somewhere in a centralised DB. There are potential risks for that
- in blockhain, data isn't in a cetralized db. it is shared with everyone and vebrified by the people in the network with the help of cryptography
- data breaches and stealing data is almost impossible
- in the example of supply chain, in traditional cases, data is mostly always not shared between companies and it has a problem with being up to data
- no matter the data is public, it is also anonymous thanks to cryptography

### Concepts
- transaction is a record that contains the data of the sender, the reciever and the amount
- when enough transactions are made to make a block, that block is put on the chain permanently
- every block in the chain has a unique hash - fingerprint, so that we can later identify which data is in the block
- if you change the data in the block, that action will also change the hash, making it invalid
- if the block is changed, a new block will be made and the old one will also stay in the chain 
- wallet - a mechanism for establishing our identity on the blockchain. it allows us to do things like sending coins, recieving them etc with the use of public keys, private keys and wallet addresses. the wallet address is the unique identifier for your wallet. we can share it with others so that we can recieve and send coins.
- signature - 
- mempool - waiting line for transactions (because they have to be verified by the network) before they enter the blockchain. The tranzactions sit in the memory of all the nodes in the blockchain. The blockchain can only handle so much information at once, and the backlog of information goes here
- network - p2p network is a network where all users are acting like nodes that are connected between each other and can share data directly. distributed network allows information to be spread out across many users. types of networks - centrylized, decentralized, distributed (every type has its own pros and cons). in the case of blockchain, every node has a copy of the whole database (blockchain)
- consensus - which transactions are valid? Consensus is how the blockchain makes decisions. Things like proof of work, proof of stake, and DBFT are all consensus algorithms that find out which transactions are most trustworthy.
- hashing - digital fingerprint for a piece of data
- block - group of transactions bundled together (from the mempool). every block has its own hash
- ledger - list of transaction records. who sent money, who recieved, when and how much
- nonce - an arbitrary number that can be used just once in a cryptographic communication. It is similar in spirit to a nonce word, hence the name. It is often a random or pseudo-random number issued in an authentication protocol to ensure that old communications cannot be reused in replay attacks. it is very important when talking about proof of work. miners are trying to find the nonce number in order to solve the PoW algorithm
- merkle root - Every transaction has a hash associated with it. In a block, all of the transaction hashes in the block are themselves hashed (sometimes several times -- the exact process is complex), and the result is the Merkle root. In other words, the Merkle root is the hash of all the hashes of all the transactions in the block
- merkle tree - 
- utxo - unspent transaction outputs - transactions that haven’t been sent to someone else already. if you are ready to spend bitcoin, you need to tell Bitcoin Core which UTXO you would like to spend.

![typesofnetworks](https://user-images.githubusercontent.com/12261635/111224461-c805f680-85de-11eb-8f8b-558f1a471e12.png)

### Blobkchain and finances
- let's say there are no banks and we want to make a transaction from Alice to Bob
- Alice has some goods that she wants to share and Bob too
- trading goods is the first way we can achieve this. the problem is that often people cannot agree on how much something is worth
- because of that, money is introduced as the mechanism for easier trading (in direct corelation with gold)
- with oney involved, if we want to make a transaction from A to B, we have to do it with the bank in between
- the bank is slow, takes fees from transactions and have all of our personal and financial data. they can choose if they want to share it with us
- blockchain allows us to store these transactions on the public ledger with better security

### Understanding transactions

A transaction is when someone sends money to someone else.

When someone in the group spends money, they tell everyone else in the group to whom they're sending their money. However, it's done in a way that makes it really hard to actually tell who is sending and who is receiving. It's not 100% impossible to tell, but it would take someone a lot of time to figure out.

When that someone sends money, everyone can check to ensure that that person actually has enough money to send what they claim to have sent. This is especially important to the receiver. If enough people say that the sender doesn't have enough money to send, the sender's transaction is ignored. He'll be able to try again in a little bit (and hopefully he'll be more honest or careful this time!).

The really cool thing is that everyone who wants to send or receive money knows how much everyone else is sending or receiving, even though they can't really identify a person behind the transaction. Plus, a person can look at the history of every transaction since the beginning of this fun system. This is called the public ledger.

Whenever someone sends money, they send a little bit extra along with their amount. This is called the transaction fee, and it's kinda like a tip. It's given as a reward to the person who solves the really hard math problem as an extra bonus! Over time, the reward money the solver earns will go away. Eventually, this transaction fee reward will be larger than the reward for solving ever was! So, this transaction fee gives people a reason to keep solving math problems forever.

Inputs from a particuar transaction is an unspent output from a previous transaction. All inputs reference back to an output. When a user recieves coins, that amount is recorded on the blockchain as an UTXO (unspent transaction output). 

There is no sunch thing as a stored balance for an account or bitcoin address. There's just records of UTXS tied to a specific owner that are on the blockchain. 

![Screenshot at 2021-03-21 20-41-54](https://user-images.githubusercontent.com/12261635/111918552-e445df80-8a85-11eb-909e-da1a22ca014a.png)

### Transaction data models

![Screenshot at 2021-03-21 20-44-28](https://user-images.githubusercontent.com/12261635/111919074-57e8ec00-8a88-11eb-9a4a-6001c17fc895.png)

- Version - All transactions include information about the Bitcoin Version number so we know which rules this transaction follows.
- Input Count - Which is how many inputs were used for this transaction
- Previous output hash - All inputs reference back to an output (UTXO). This points back to the transaction containing the UTXO that will be spent in this input. - The hash value of this UTXO is saved in a reverse order here.
- Previous output index - The transaction may have more than one UTXO which are referenced by their index number. The first index is 0.
- Unlocking Script Size - This is the size of the Unlocking Script in bytes.
- Unlocking Script - This is the hash of the Unlocking Script that fulfills the conditions of the UTXO Locking Script.
- Sequence Number - This is a deprecated feature of bitcoin, currently set to ffffffff by default.
- Output Count - which tells us how many outputs were produced from this transaction.
- Amount - The amount of Bitcoin outputted in Satoshis (the smallest bitcoin unit). 10^8 Satoshis = 1 Bitcoin.
- Locking Script Size - This is the size of the Locking Script in bytes.
- Locking Script - This is the hash of the Locking Script that specifies the conditions that must be met to spend this output.
- Locktime - The locktime field indicates the earliest time or the earliest block a transaction can be added to the blockchain 

Bitcoin clients validate transactions by checking that the unlocking script (often named scriptSig) solves the locking script (often named scriptPubKey). Each UTXO has a locking script that contains conditions required to spend it. In other words, each UTXO contains a puzzle that needs to be solved in order for the input to be spend.  

<img width="1280" alt="bitcoin-scripts" src="https://user-images.githubusercontent.com/12261635/111919079-5ae3dc80-8a88-11eb-8a36-8f9a60fd9c76.png">

### Creating a raw transaction
Steps:
- Step 1 - View all unspent confirmed UTXO in the wallet
- Step 2 - View Details about a Specific UTXO
- Step 3 - Create a Raw Transaction
- Step 4 - Decode the Raw Transaction (to doublecheck it went through correctly)
- Step 5 - Sign the Raw Transaction
- Step 6 - Submit the Raw Transaction to the Network
- Step 7 - Query the TxID of the Transaction we sent

Let's say we have a UTXO of 0.050 BTC in "from_address", and we want to send 0.030 BTC to a receiving address called "to_address".

Hence we will have 2 transactions here.
The first transaction will transfer 0.030 BTC to "to_address".
The second transaction will send the balance back to our "from_address".
Let's also assume that our transaction fee would cost us 0.0005 BTC. In this case, our balance back to the "from_address" would be (0.050 - 0.030) - 0.0005 = 0.0195
To summarize:
Sum(Inputs) - Sum(Outputs) = Transaction Fee
(0.050 BTC) - (0.030 BTC + 0.0195 BTC) = 0.0005 BTC
```
createrawtransaction '[{"txid":"TXID","vout": VOUT}]’’{“to_address”:amount1, “from_address”:amount2}’
```
This example has two outputs. The first is to send 0.030 BTC to the receiving address. The second is to send 0.0195 BTC as change back to the original address.
The result is a hex string:
```
02000000011cc4f41b92dd036a8535b5b461ebf01af84841072472c105730f323564f0a2c90000000000ffffffff02808d5b0000000000160014c1a138b2223cb443c9e0a2b4699953bf489a15a600093d0000000000160014db0dd2767ac378cdd001ec7ca740c4910364655c00000000
```
To confirm that everything processed correctly, we can use the by decoderawtransaction command.
As we can see, the `scriptSig` object is empty, and that means that the transaction is still not signed. Also, we can see that our transaction has 1 input and 2 outputs.
In order to sign the transaction, we want to use the `signrawtransactionwithwallet` and pass the hex string retrieved from the `createrawtransaction` step:
```
signrawtransactionwithwallet 02000000011cc4f41b92dd036a8535b5b461ebf01af84841072472c105730f323564f0a2c90000000000ffffffff02808d5b0000000000160014c1a138b2223cb443c9e0a2b4699953bf489a15a600093d0000000000160014db0dd2767ac378cdd001ec7ca740c4910364655c00000000
```

We can use decoderawtransaction again, with the result from `signrawtransactionwithwallet`, to view the changes after signing. Use the outputted hex encoded raw hash result from signrawtransaction. Notice that the scriptSig field is now filled out. It contains a digital signature that proves we own the wallet address and can spend the UTXO.
To submit a transaction, we will use `sendrawtransaction` along with the hex. If the submission went through, we are returned the transaction hash (txid) in hex of the raw transaction that was submitted to the network. We can use the returned hex in `gettransaction` to check if everything went well.

### Common RPCs
Common RPCs can be found here and explained on the links below:
- gettransaction - https://chainquery.com/bitcoin-cli/gettransaction
- createwallet - https://chainquery.com/bitcoin-cli/createwallet
- getnewaddress - https://chainquery.com/bitcoin-cli/getnewaddress
- gettxout - https://chainquery.com/bitcoin-cli/gettxout
- listunspent - https://chainquery.com/bitcoin-cli/listunspent
- createrawtransaction - https://chainquery.com/bitcoin-cli/createrawtransaction
- decoderawtransaction - https://chainquery.com/bitcoin-cli/decoderawtransaction
- signrawtransactionwithwallet - https://chainquery.com/bitcoin-cli/signrawtransactionwithwallet
- sendrawtransaction - https://chainquery.com/bitcoin-cli/sendrawtransaction

### The life of a Bitcoin Transaction
Here you can find the explaination on how bitcoin is moved areound the network
1. Get a copy of the blockchain - In order to interact with the shared list of transactions, we need a copy of it!
2. Run Bitcoin Core -  is the Bitcoin computer program. Once you download it, you will be automatically connected to other computers who are also running bitcoin. These computers will send you their copy of the blockchain, and your computer will save the file.
3. Reference a time you received Bitcoin - Remember there is no Bitcoin stored in your computer, it only exists on the blockchain. That means in order to send someone bitcoin, you have to reference a previous transaction on the blockchain when someone sent bitcoin to you. Bitcoin Core keeps track of all transactions ever made, but it specifically watches transactions that haven’t been sent to someone else already. Each one of these “unspent” transactions is called a UTXO. So if you are ready to spend bitcoin, you need to tell Bitcoin Core which UTXO you would like to spend.
4. Sign the message with your private keys - Once you’ve picked the UTXO you want to spend, you need to create your digital signature. This is what you will send other computers in the network to prove you were the recipient of this UTXO. Bitcoin Core is also your wallet, which stores your private keys. Tell Bitcoin Core the UTXO you want to spend, and it will work through some special math to produce your digital signature from your private key.
5. Broadcast your message to the network - Now you have a message to send to the network. It says, “I want to spend this UTXO, which is X amount of bitcoin. I want to send it to this address. Here is my digital signature, which proves I was the recipient of this UTXO.”
6. Other computers in the network will pick up your message - First your computer will send this message to the several computers that are connected to it, via the internet. Then those computers will send the message to every computer that they are connected to. This process continues.. and in just a few seconds every computer in the network will have seen your message!
7. Miners see your message and include it in their next block - Now the race begins. Computers who are using special equipment to add blocks to the chain will see your message and group it with other transaction messages. Remember, whoever wins the guessing game gets to add their version of the next block to the chain.. while also getting a reward of bitcoin. Each block can only fit so many transactions, so your message may not be included in the next block if there are many others in line before you.
8. Once a miner solves a block, they send it to the rest of the network - Once a mining computer wins the guessing game, it’s their turn to add a block to the chain. They will send out their block with your transaction inside!
9. Computers in the network will verify the block and add to their chain - Now the rest of the network will add this new block to their chain, and your transaction is official and confirmed.
10. Repeat

### Signing a transaction
- we are signing a transaction to know that it's valid (and that we can trust it) and that we own it. We validate transactions and assign ownership using what's known as a digital signature
- the transaction is signed with your private key
- after that, the transaction message is broadcasted to the chain as an UTXO, which contain the proof of ownership of that transaction  
- transactions are made of multiple inputs and outputs. By understanding the inputs, outputs, miners fees, and amount sent, we can determine the balance of users wallets before and after transactions are made

![700px-Bitcoin-transaction-life-cycle](https://user-images.githubusercontent.com/12261635/111376824-39f24480-86a0-11eb-9914-a226876470f1.png)

### Consensus algorithms
- proof of work - PoW involves miner nodes, or miners, to solve a math puzzle that requires a lot of computation power. Whichever miner is able to solve the puzzle the fastest is able to add a block of transactions to the blockchain, and in return, they are paid the transaction fees from all the transactions included in the block as well as paid by the network with bitcoins that were newly created upon the “mining” of the block
- proof of stake - there are no more miners; instead, there are Validators. These validators, or stakeholders, determine which block makes it onto the blockchain. In order to validate transactions and create blocks, validators put up their own coins as “stake”. Think of it as placing a bet - if they validate a fraudulent transaction, they lose their holdings as well as their rights to participate as a validator in the future.
- Delegated Byzantine Fault Tolerance (DBFT) - Consensus algorithm based on assigning roles to nodes to help coordinate consensus.
- other algorithms - proof of activity, proof of burn

![pow-vs-pos](https://user-images.githubusercontent.com/12261635/111224389-af95dc00-85de-11eb-9d00-c6f8cbc0e116.png)

### Blockchain identity
Like a social security number, a bank account, a drivers license, or a club membership, your blockchain identity is how you establish yourself in the world, in this case the blockchain world. By using hashing algorithms, blockchains help create our identity in a way that is extremely secure.


- wallet - a mechanism for establishing our identity on the blockchain. it allows us to do things like sending coins, recieving them etc with the use of public keys, private keys and wallet addresses. 
- wallet address is the unique identifier for your wallet. we can share it with others so that we can recieve and send coins. it is made from the public key with SHA256 and RIPEMD160 in base 58.
- private key - allows you to spend coins from your wallet
- public key - shared with everyone, derivated from the private key. cannot be used to spend coins or access them. keys are cryptographicaly related.
- ecdsa - Elliptic Curve Digital Signature Algorithm - one way hashing algorithm for getting a public key from a private key. very difficult to reverse.

<img width="1217" alt="addressgeneration" src="https://user-images.githubusercontent.com/12261635/111224313-93923a80-85de-11eb-9221-89a54f1cfd92.png">

### Types of wallets
- Non-deterministic Wallet - (random wallets) A wallet where private keys are generated from random numbers. no way to determine how keys were derived. a random number generates a PK that generates a SK that generates an address. every time a new key is generated, you need to back up the wallet in order not to lose the keys.
- Deterministic Wallet - A wallet where addresses, private keys, and public keys can be traced back to their original seed words. Nothing is random, everything is determened. Easy migration of keys betwee different wallets.
- Hierarchical Deterministic Wallet - An advanced type of deterministic wallet that contains keys derived in a tree structure. Can be shared partially or entirely with different systems. Benefit of sharing only parts of the tree structure and that you don’t need to backup all your keys, whenever you make transactions, you just need to backup the Seed praise securely. HD wallets are the best option to save your crypto holding securely. The only disadvantage is that everything is derived from the master key so it requires a strong backup.

### Keys
Private keys generate public keys that generate wallet addresses.
- private key - 256 bit random number between 1 and 2^256
- it can be represented in various formats (hex, wif, wif-compressed...). all of them have different use cases
- every private key is unique. that's possible because 2^256 is a very large number. There is a 1 in over 115 quattuorvigintillion (that’s a 78 digit number) chance of finding a collision.
- there are methods for generating a private key. we can just flip a coin 256 times and write down 1 for heads and 0 for tails.
- programmatically, we have to find a source of entropy (lack of order or predictability, degree of randomness)
- random number generators have to be cryptographically secure

### Restoring your wallet identity
- times when we forget our password or lost our 2fa device or our computer gets stolen
- there are 2 ways to do it; by using a seed or using a private key
- the seed  the 12 words you were given when creating your wallet. If you can remember these words, you can use them to restore your wallet. The benefit of restoring your identity using the seed is that it can be much simpler than using the private key. It's easier to remember a list of words than a random string of numbers and letters
- When restoring a wallet using a private key, there are 2 ways to do it. You can either import or sweep this key, and it’s useful to understand the difference. Sweep a wallet if you're worried about wallet security. When in doubt, stick with sweeping. It’s more secure this way, and it avoids some problems that are associated with importing a wallet.

### Bitcoin Core
- implementation of bitcoin that encompasses all of the software behind bitcoin 
- developer tools and environments
- other names: bitcoin qt, satoshi client
- essential features: 1) bitcoin core trx verification engine - allows you to verify transactions happening in the btc network 2) explore and validate all of the blockchain 3) crypto wallet 

### Testnet
Alternative bitcoin blockchain that provides a test environment for applications and developers. Alternatively, there's also Regnet (private regression testing network) for local testing without validations nor peers.

![wsi-imageoptim-main20vs20test1](https://user-images.githubusercontent.com/12261635/111381497-129e7600-86a6-11eb-961f-65a62d9f69a1.png)

