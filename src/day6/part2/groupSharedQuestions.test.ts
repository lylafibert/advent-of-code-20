import {answers, sharedQuestionResults} from '../testData'
import getSharedQuestions from './groupSharedQuestions'

describe('getSharedQuestions', () => {
  it('returns the number of questions all members of a group answered yes to', () => {
    answers.forEach((group, i) => {
      expect(getSharedQuestions(group)).toEqual(sharedQuestionResults[i])
    })
  })
})