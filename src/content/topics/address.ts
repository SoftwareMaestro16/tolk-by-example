export const addressTopic = {
  id: 2,
  title: "Address",
  name: "address",
  description: `

An address in Tolk represents a unique identifier for accounts or contracts in the TON blockchain.
  ⠀

Tolk supports a built-in \`address\` type:
  
  ⠀

- \`address\`: A specialized type for handling TON addresses, integrated with auto-serialization and introspection.
    
  ⠀

Use \`address\` to store and compare account or contract addresses securely and efficiently.

This type supports methods like \`isInternal()\`, \`getWorkchain()\`, and allows direct comparison with \`==\`.

Choose \`address\` over raw \`slice\` for cleaner and safer address management.

  ⠀

Addresses are crucial for identifying parties and ensuring secure interactions in Tolk smart contracts.`,
  
  code: 
`
val OWNER_ADDR: address = address("EQDKbjIcfM6ezt8KjKJJLshZJJSqX7XOA4ff-W72r5gqPrHF");  
 
struct Wallet {
  owner: address; // Address field
}
 
fun checkOwner(sender: address, wallet: Wallet) {
  if (sender == wallet.owner) { // Compare addresses
      // some logic
  }
      
  if (sender.isInternal()) { // Introspection
      // other
  }
}
`,

};