import {BagRule} from './BagRule'

export default [
  'light red bags contain 1 bright white bag, 2 muted yellow bags.',
  'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
  'bright white bags contain 1 shiny gold bag.',
  'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
  'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
  'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
  'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
  'faded blue bags contain no other bags.',
  'dotted black bags contain no other bags.'
]

// muted yellow, vibrant plum, light red, dark orange, shiny gold

export const formattedRules:BagRule[] = [
  {bag:'light red', contains: ['bright white', 'muted yellow']},
  {bag:'dark orange', contains: ['bright white', 'muted yellow']},
  {bag:'bright white', contains: ['shiny gold']},
  {bag:'muted yellow', contains: ['shiny gold', 'faded blue']},
  {bag:'shiny gold', contains: ['dark olive', 'vibrant plum']},
  {bag:'dark olive', contains: ['faded blue', 'dotted black']},
  {bag:'vibrant plum', contains: ['faded blue', 'dotted black']},
  {bag:'faded blue', contains: []},
  {bag:'dotted black', contains: []},
]