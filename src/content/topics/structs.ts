export const structsTopic = {
  id: 3,
  title: "Structs",
  name: "structs",
  description: `

Structs in Tolk allow you to define custom data structures to organize and manage complex data in smart contracts on the TON blockchain.
  ⠀

Tolk supports user-defined structs:
  
  ⠀

- \`struct\`: A composite type that groups multiple fields (e.g., integers, addresses) into a single unit.
    
  ⠀

Use structs to encapsulate related data, such as user profiles or contract states, making code more readable and maintainable.

Structs support auto-serialization, enabling automatic conversion to/from \`cell\` for storage and transmission.

Choose structs when you need to bundle multiple values into a single entity with a clear structure.

  ⠀

Structs are essential for building organized and efficient Tolk smart contracts.`,
  
  code: 
`
struct User {
  id: uint32;       // User ID
  name: slice;      // User name
  wallet: address;  // Associated address
}
 
fun createUser(id: uint32, name: slice, addr: address): User {
  return User(id, name, addr);
}
 
fun saveUser(mutate user: User) {
  contract.setData(user.toCell()); // Auto-serialization to cell
}
 
fun loadUser(): User {
  return User.fromCell(contract.getData()); // Auto-deserialization from cell
}
 
`,

};