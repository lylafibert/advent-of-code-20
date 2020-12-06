import getYesTotal from './groupYesTotal'
export default (groupAnswers:Array<string[]>):number => {
  const sumOfTotals = groupAnswers.reduce((sum, group) => {
    return sum + getYesTotal(group)
  }, 0)
  return sumOfTotals
}