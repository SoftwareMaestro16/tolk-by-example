export const functionsTopic = {
    id: 4,
    title: "Functions",
    name: "functions",
    description: `

Functions in Tolk define the behavior and logic of smart contracts on the TON blockchain.
⠀

Tolk supports various function types:

⠀

fun: Regular functions for executing contract logic.

impure: Functions that can modify state or interact with the blockchain (e.g., send messages).

pure: Functions that only perform computations without side effects.

⠀

Use functions to encapsulate reusable logic, handle messages, or manage state changes.

Functions can accept parameters and return values, and they support annotations like mutate for modifying data.

Choose the appropriate function type based on whether it modifies state or remains read-only.

⠀

Functions are the backbone of Tolk smart contracts, enabling flexible and modular design.`,

code:
`
fun add(a: int, b: int): int { // Pure function
    return a + b;
}
 
@inline
fun updateCounter(mutate counter: int) { // Function with state change
    counter += 1;
}
 
// Required Function or onExternalMessage.
fun onInternalMessage(myBalance: int, msgValue: int , inMsgFull: cell, inMsgBody: slice) {   
    var senderAddress: slice = cs.loadAddress();
    var op: int = inMsgBody.loadUint(32);
 
    if (op == 0x1337) {
        return;
    }
 
    throw 0xfffff;
}

`,

};