import getYesTotal from './groupYesTotal'
import {answers, results} from '../testData'

describe('getYesTotal', () => {
  it('returns the number of unique yes questions for a group', () => {
    answers.forEach((answer, index) => {
      expect(getYesTotal(answer)).toEqual(results[index])
    })
  })
})