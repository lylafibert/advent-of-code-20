import fixCode from './fixCode'
import {bootCode} from '../testData'
import puzzleInput from '../puzzleInput'

describe('fixCode', () => {
  it('fixes the code and returns the final acc value', () => {
    expect(fixCode(bootCode)).toEqual(8)
  })
  it('returns the puzzle answer', () => {
    expect(fixCode(puzzleInput)).toEqual(833)
  })
})