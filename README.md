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
- blockchain -
- ledger - list of transaction records. who sent money, who recieved, when and how much
- nonce - an arbitrary number that can be used just once in a cryptographic communication. It is similar in spirit to a nonce word, hence the name. It is often a random or pseudo-random number issued in an authentication protocol to ensure that old communications cannot be reused in replay attacks.
- merkle root - Every transaction has a hash associated with it. In a block, all of the transaction hashes in the block are themselves hashed (sometimes several times -- the exact process is complex), and the result is the Merkle root. In other words, the Merkle root is the hash of all the hashes of all the transactions in the block
- merkle tree - 

### Blobkchain and finances
- let's say there are no banks and we want to make a transaction from Alice to Bob
- Alice has some goods that she wants to share and Bob too
- trading goods is the first way we can achieve this. the problem is that often people cannot agree on how much something is worth
- because of that, money is introduced as the mechanism for easier trading (in direct corelation with gold)
- with oney involved, if we want to make a transaction from A to B, we have to do it with the bank in between
- the bank is slow, takes fees from transactions and have all of our personal and financial data. they can choose if they want to share it with us
- blockchain allows us to store these transactions on the public ledger with better security

