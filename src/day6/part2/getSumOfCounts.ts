import getSharedQuestions from './groupSharedQuestions'
export default (groupAnswers:Array<string[]>):number => {
  const sumOfTotals = groupAnswers.reduce((sum, group) => {
    return sum + getSharedQuestions(group)
  }, 0)
  return sumOfTotals
}