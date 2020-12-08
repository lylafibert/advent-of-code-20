import getRequiredBags from './getRequiredBags'
import testData, {testData2} from '../testData'
import puzzleInput from '../puzzleInput'

describe('getRequiredBags', () => {
  it('returns the number of bags required inside a shiny gold bag', () => {
    expect(getRequiredBags(testData)).toEqual(32)
  })
  it('returns the number of bags that can eventually hold a bright white bag', () => {
    expect(getRequiredBags(testData2)).toEqual(126)
  })
  it('returns the puzzle answer', () => {
    expect(getRequiredBags(puzzleInput)).toEqual(20189)
  })
})