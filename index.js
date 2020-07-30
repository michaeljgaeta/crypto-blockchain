const hexToBinary = require("hexToBinary")

//Hashing function
const crypto = require("crypto");

const createHash = (...inputs) => {
  const hash = crypto.createHash("sha256");
  hash.update(
    inputs
      .map((input) => JSON.stringify(input))
      .sort()
      .join(" ")
  );
  return hash.digest("hex");
};

//Block Class
//information: timestamp, data, hash, lastHash, difficulty, nonce
//methods: mineBlock, genesisBlock

class Block {
  constructor(timestamp, data, hash, lastHash, difficulty, nonce){
    this.timestamp = timestamp,
    this.data = data,
    this.hash = hash,
    this.lastHash = lastHash,
    this.difficulty = difficulty,
    this.none = nonce
  }
}

static genesisBlock(){
  return new this({
    timestamp: 1,
    lastHash: '----',
    hash: 'hash-one',
    difficulty: 1,
    nonce: 0,
    data: []
  })
}

static mineBlock() {
  let hash=""
  let timestamp
  const lastHash = lastBlock.hash
  const difficulty = difficulty
  let nonce = 0
  let hashBinary //check the condition for hashes

  do{
    nonce++
    timestamp = Date.now()
    hash = createHash(timestamp, lastHash, data, nonce, difficulty)
    hashBinary = hexToBinary(hash).substring(0,difficulty)
  } while (hashBinary !== '0000')
}

//Blockchain Class
class Blockchain {
  constructor() {
    const genesis = Block.genesisBlock()
    this.chain = [genesis]
  }

  addBlock(data){
    const lastBlock = this.chain[this.chain.length - 1]

    const newBlock = Block.mineBlock({
      lastBlock: lastBlock,
      data: data
    })
  }

  this.chain.push(newBlock)
}

const SantiPetruChain = new Blockchain

SantiPetruChain.addBlock('Intro to Blockchain')
console.log(SantiPetruChain)