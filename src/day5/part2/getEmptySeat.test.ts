import puzzleInput from "../puzzleInput"
import getEmptySeatId from './getEmptySeatId'

describe('getEmptySeatId', () => {
  it('returns the puzzle answer', () => {
    expect(getEmptySeatId(puzzleInput)).toEqual(569)
  })
})