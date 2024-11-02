
import { expect, test } from 'vitest'
import { sum } from './sum.js'

test('adds 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10)
})