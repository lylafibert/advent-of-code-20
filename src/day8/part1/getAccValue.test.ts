import getAccValue from './getAccValue'
import {bootCode} from '../testData'
import puzzleInput from '../puzzleInput'

describe('getAccValue', () => {
  it('returns the acc value right before a step is repeated', () => {
    expect(getAccValue(bootCode)).toEqual(5)
  })
  it('returns the puzzle answer', () => {
    expect(getAccValue(puzzleInput)).toEqual(1654)
  })
})