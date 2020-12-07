import { group } from "console"

export default (answers:string[]):number => {
  const groupMembers = answers.length
  if(groupMembers === 1) return answers[0].length
  const answersJoined = answers.join('')
  const allAnswers = answersJoined.split('')
  const sharedAnswers = allAnswers.reduce((uniqueSharedAnswers, letter) => {
    const occurences = allAnswers.filter(answer => answer === letter)
    const addToAcc = occurences.length === groupMembers && !uniqueSharedAnswers.includes(letter)
    return addToAcc ? [...uniqueSharedAnswers, letter] : uniqueSharedAnswers
  },[])

  return sharedAnswers.length
}