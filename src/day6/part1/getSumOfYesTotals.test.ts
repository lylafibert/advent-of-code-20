import getSumOfYesTotals from './getSumOfYesTotals'
import {answers} from '../testData'
import puzzleInput from '../puzzleInput'

describe('getSumOfYesTotals', () => {
 it('gets the sum of multiple groups yes totals', () => {
   expect(getSumOfYesTotals(answers)).toEqual(17)
 })
 it('gets the puzzle answer', () => {
  expect(getSumOfYesTotals(puzzleInput)).toEqual(6565)
})
})