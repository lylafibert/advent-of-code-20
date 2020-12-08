import {BagRule} from '../BagRule'

export default (rule:string):BagRule => {
  let contains:string[] = []
  const ruleData = rule.split('contain')
  const bag = ruleData[0].slice(0, -6)
  const containStrings = ruleData[1].split(',')
  if(ruleData[1].includes('no other bags')) return {bag, contains}
  contains = containStrings.reduce((contains, string) => {
    const splitString = string.split(' bag')
    return [...contains,splitString[0].slice(3)]
  }, [])
  return {bag,contains}
}