/*
how to use:
let blockchain = new Blockchain()
blockchain.addBlock('test 1')
blockchain.addBlock('test 2')
console.log(blockchain) // we can see the genesis block along with the two other manually added blocks. blocks are linked via hash
*/

const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(data){
    this.height = '';
    this.timeStamp = '';
    this.data = data;
    this.previousHash = '0x';
    this.hash = '';
  }
}

class Blockchain{
    constructor(){
      this.chain = [];
      // create the genesis block upon initialization
      this.addBlock(new Block("first block in the chain - Genesis Block"))
  }

  getLatestBlock(){
    return this.chain[this.chain.length -1];
  }

  addBlock(newBlock){
    // block height
    newBlock.height = this.chain.length;
    // UTC timestamp
    newBlock.timeStamp = new Date().getTime().toString().slice(0,-3);
    if (this.chain.length>0) {
      // link to the previous block if it exists (if not, it's the genesis block)
      // previous block hash
      newBlock.previousHash = this.getLatestBlock().hash;
    }
    // SHA256 requires a string of data
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  } 
}
