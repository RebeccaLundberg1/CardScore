// Run this file with: npx ts-node experiments.ts
//
// Array methods cheat sheet:
// map()     — transform each item, returns a new array of the same length
// filter()  — keep only items where condition is true, returns shorter array
// reduce()  — collapse array into a single value (number, object, string...)
// find()    — returns the first item that matches, or undefined
// some()    — returns true if at least one item matches
// every()   — returns true if all items match
// forEach() — loop through items, no return value (used for side effects)

const numbers = [1, 2, 3, 4, 5]
const words = ["apple", "banana", "kiwi", "mango"]

// map — transform each item
const doubled = numbers.map((n) => n * 2)
console.log("map:", doubled)

// filter — keep items that match a condition
const big = numbers.filter((n) => n > 2)
console.log("filter:", big)

// reduce — collapse to a single value
const sum = numbers.reduce((acc, n) => acc + n, 0)
console.log("reduce:", sum)

// find — first item that matches
const found = words.find((w) => w.startsWith("b"))
console.log("find:", found)

// some — is at least one item matching?
const hasLongWord = words.some((w) => w.length > 5)
console.log("some:", hasLongWord)

// every — do all items match?
const allShort = words.every((w) => w.length < 10)
console.log("every:", allShort)

// forEach — loop without returning anything
words.forEach((w) => console.log("forEach:", w))



// -------------------- multi line ----- neeed {} and return

// map with {} and return — multiple lines inside the function
const described = numbers.map((n) => {
  const doubled = n * 2
  const label = `${n} doubled is ${doubled}`
  return label
})
console.log("map with return:", described)

// filter with {} and return
const longWords = words.filter((w) => {
  const length = w.length
  return length > 5
})
console.log("filter with return:", longWords)

// reduce with {} and return
const total = numbers.reduce((acc, n) => {
  const newTotal = acc + n
  return newTotal
}, 0)
console.log("reduce with return:", total)




