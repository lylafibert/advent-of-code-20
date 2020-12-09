export default (cypher:number[], nextNumber:number):boolean => {
  const numbers = [...cypher]
  let isValid = false
  for(let i = 0; i < cypher.length && !isValid; i++) {
    numbers.shift()
    isValid = !!(numbers.find(num => num + cypher[i] === nextNumber))
  }
  return isValid
}