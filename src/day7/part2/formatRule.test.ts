import formatRule from './formatRule'
import rules, {formattedRules2} from '../testData'

describe('formatRule', () => {
  it('returns the number of bags that can eventually hold a shiny gold bag', () => {
    rules.forEach((rule, i) => {
      expect(formatRule(rule)).toMatchObject(formattedRules2[i])
    })
  })
})