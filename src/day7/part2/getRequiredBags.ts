import formatRule from './formatRule'
import {BagRule} from '../BagRule'
export default (bagRules:string[]):number => {
  const rules:BagRule[] = bagRules.map(rule => formatRule(rule))

  return getRequiredBags('shiny gold', rules)
}

const getRequiredBags = (bag:string, bagRules:BagRule[]):number => {
 let requiredBags = 0
 const {contains} = bagRules.find(rule => rule.bag === bag)
 if (contains.length === 0) return 0
contains.forEach(bag => {
  const number:number = parseInt(bag[0])
  requiredBags +=number
  const newBag = bag.slice(2)
  requiredBags += getRequiredBags(newBag, bagRules) * number
})
return requiredBags
}