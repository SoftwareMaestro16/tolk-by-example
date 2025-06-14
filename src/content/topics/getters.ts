export const gettersTopic = {
    id: 5,
    title: "Getters",
    name: "getters",
    description: `

Getters in Tolk allow you to retrieve data from a smart contract's state on the TON blockchain.
⠀

Tolk supports getter functions with the get fun keyword:

⠀

get fun: Special functions that return contract data without modifying state, accessible externally.

⠀

Use getters to provide read-only access to contract variables, such as balances or counters, for external queries.

Getters are automatically exposed to the blockchain and can be called without gas costs by users or other contracts.

Choose getters when you need to share state information securely and efficiently.

⠀

Getters are essential for making Tolk smart contracts interactive and transparent.`,

code:
`
struct Storage {
    counter: int;
    owner: address;
}
 
fun Storage.load(): Storage {
    return Storage.fromCell(contract.getData());
}
 
get fun getCounter(): int {
    var storage = Storage.load();
    return storage.counter; // Returns storage counter
}
 
get fun getOwner(): address {
    var storage = Storage.load();
    return storage.owner; // Returns storage owner
}
 
`,

};