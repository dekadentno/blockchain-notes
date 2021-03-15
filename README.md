# Blockchain Notes

### Blockchain
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
- transaction - 
- wallet - 
- signature - 
- mempool - waiting line for transactions (because they have to be verified by the network) before they enter the blockchain. The tranzactions sit in the memory of all the nodes in the blockchain. The blockchain can only handle so much information at once, and the backlog of information goes here
- network - p2p network is a network where all users are acting like nodes that are connected between each other and can share data directly. distributed network allows information to be spread out across many users. types of networks - centrylized, decentralized, distributed (every type has its own pros and cons). in the case of blockchain, every node has a copy of the whole database (blockchain)
- consensus - which transactions are valid? Consensus is how the blockchain makes decisions. Things like proof of work, proof of stake, and DBFT are all consensus algorithms that find out which transactions are most trustworthy.
- hashing - digital fingerprint for a piece of data
- block - group of transactions bundled together (from the mempool). every block has its own hash
- blockchain -incorruptible digital ledger of economic transactions that can be programmed to record not just financial transactions but virtually everything of value
- ledger - list of transaction records. who sent money, who recieved, when and how much
- nonce - an arbitrary number that can be used just once in a cryptographic communication. It is similar in spirit to a nonce word, hence the name. It is often a random or pseudo-random number issued in an authentication protocol to ensure that old communications cannot be reused in replay attacks. it is very important when talking about proof of work. miners are trying to find the nonce number in order to solve the PoW algorithm
- merkle root - Every transaction has a hash associated with it. In a block, all of the transaction hashes in the block are themselves hashed (sometimes several times -- the exact process is complex), and the result is the Merkle root. In other words, the Merkle root is the hash of all the hashes of all the transactions in the block
- merkle tree - 
- utxo - unspent transaction outputs - transactions that haven’t been sent to someone else already. if you are ready to spend bitcoin, you need to tell Bitcoin Core which UTXO you would like to spend.


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

### Consensus algorithms
- proof of work - consensus algorithm. whoever puts in the most work to contribute to the system is the most trustworthy. miners are trying to solve the problems and are rewarded with the fee from the users transaction with additional coins provided by the network (only way where new coins are made).
- proof of stake - consensus algorithm. concept states that a person can mine or validate block transactions according to how many coins he or she holds. there are no miners, only validators. validators (stakeholders) do not need to invest in mining equipment. validators put up their own coins as stake, as they vote for the valid transactions. they can loose their stake and their right to vote if they "bet" on an fraudy transaction.
- Delegated Byzantine Fault Tolerance (DBFT) - Consensus algorithm based on assigning roles to nodes to help coordinate consensus.
