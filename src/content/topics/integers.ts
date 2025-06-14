export const integersTopic = {
    id: 1,
    title: "Integers",
    name: "integers",
    description: `
  
  Integers are whole numbers without fractions. 
    ⠀

  Tolk supports two main types:
    
  ⠀

  - \`int\`: signed integers (can be positive or negative).
  - \`uint\`: unsigned integers (only zero or positive).
      
  ⠀

  Use \`uint\` when values should never be negative to avoid bugs.
  
  Both types have different bit widths (e.g., \`int8\`, \`uint32\`, up to 256 bits), which define the range of possible values.
  
  Choose the appropriate bit width to balance memory and range.
  
  ⠀
  
  Integers are essential for safe and efficient numeric handling in Tolk smart contracts.`,
    
    code: 
`
var x: int64 = -42; // signed 64-bit integer
 
val y: uint32 = 42; // unsigned 32-bit integer
 
// support 0b..., 0x...;
var bin: int32 = 0b101010; 
 
var hex: int32 = 0x2A;  
`,

};