import getSumOfCount from './getSumOfCounts'
import {answers} from '../testData'
import puzzleInput from '../puzzleInput'

describe('getSumOfYesTotals', () => {
 it('gets the sum of multiple groups yes totals', () => {
   expect(getSumOfCount(answers)).toEqual(9)
 })
 it('gets the puzzle answer', () => {
  expect(getSumOfCount(puzzleInput)).toEqual(3137)
})
})