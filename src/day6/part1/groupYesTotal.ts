export default (answers: string[]):number => {
  const allAnswers = answers.join('')
  const uniqueAnswers = new Set(allAnswers.split(''))
  return uniqueAnswers.size
}