import getAllowedBags from './getAllowedBags'
import testData from './testData'
import puzzleInput from './puzzleInput'

describe('getAllowedBags', () => {
  it('returns the number of bags that can eventually hold a shiny gold bag', () => {
    expect(getAllowedBags(testData, 'shiny gold')).toEqual(4)
  })
  it('returns the number of bags that can eventually hold a bright white bag', () => {
    expect(getAllowedBags(testData, 'bright white')).toEqual(2)
  })
  it('returns the puzzle answer', () => {
    expect(getAllowedBags(puzzleInput, 'shiny gold')).toEqual(128)
  })
})