export const simpleCounterTopic = {
    id: 6,
    title: "A Simple Counter",
    name: "counter",
    description: `

The 'A Simple Counter' contract in Tolk is a basic smart contract designed to maintain a counter value and an owner address on the TON blockchain.
⠀

This contract does the following:

⠀

Stores the owner's address and a counter value in its state.

Increments the counter when it receives a message with operation code 1.

Provides getter functions to retrieve the owner address and counter value externally.

Ignores empty messages and bounced messages, throwing an error for unrecognized operations.

⠀

Use this contract to learn about state management, message handling, and getter functions in Tolk.

The contract ensures secure updates by verifying the operation code and maintains data integrity with auto-serialization.

⠀

This is a great starting point for understanding Tolk smart contract development.`,

code:
`
struct StoredInfo {
    ownerAddress: address,
    counter: int
}
 
@inline
fun loadData(): StoredInfo {
    var cs = contract.getData().beginParse();
    return {
        ownerAddress: cs.loadAddress(),
        counter: cs.loadUint(32)
    }
}
 
@inline
fun saveData(data: StoredInfo) {
    contract.setData(
        beginCell()
            .storeAddress(data.ownerAddress)
            .storeUint(data.counter, 32)
        .endCell()
    );
}
 
fun onInternalMessage(myBalance: int, msgValue: int, msgFull: cell, msgBody: slice) {   
    if (msgBody.isEnd()) { // ignore all empty messages
        return;
    }
 
    var cs: slice = msgFull.beginParse();
    val flags = cs.loadMessageFlags();
    if ((flags & 1) != 0) {
        return;
    }
 
    var data = loadData();
 
    var senderAddress: address = cs.loadAddress();
    var op: int = msgBody.loadUint(32);
 
    if (op == 1) {
        data.counter += 1;
        saveData(data);
 
        return;
    }
 
    throw 0xfffff;
}
 
get fun get_owner(): address {
    var data = loadData();
    return data.ownerAddress;
}
 
get fun get_counter(): int {
    var data = loadData();
    return data.counter;
}
`,

};
