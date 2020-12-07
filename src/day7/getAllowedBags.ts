import {BagRule} from './BagRule'
import formatRule from './formatRule'

interface BagLists {
  notAllowed: BagRule[],
  allowed: BagRule[]
}

export default (bagRules:string[], myBag:string):number => {
  const maybe:BagRule[] = bagRules.map(rule => formatRule(rule))
  const {allowed} = getAllowedBags(maybe, [], myBag)

  return allowed.length
}

const getAllowedBags = (notAllowed:BagRule[], allowed:BagRule[], myBag:string):BagLists => {
  let newAllowed = [...allowed]
  let newNotAllowed = [...notAllowed]
  let isAllowed = false
  for(let i = 0; i < notAllowed.length && !isAllowed; i++) {
    const rule = notAllowed[i]
    const includesMyBag = rule.contains.includes(myBag)
    const containsAllowedBag = !!newAllowed.find(({bag}) => rule.contains.includes(bag))
    if(includesMyBag || containsAllowedBag) {
      newAllowed.push(rule)
      newNotAllowed.splice(i, 1)
      isAllowed = true
    } 
  }
  if(allowed.length < newAllowed.length) {
   const newLists = getAllowedBags(newNotAllowed, newAllowed, myBag)
   newAllowed = newLists.allowed
   newNotAllowed = newLists.notAllowed
  }
  return {allowed: newAllowed, notAllowed:newNotAllowed}
}