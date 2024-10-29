const isValid = require('./validateValue')

describe('validateValue', () => {
    test('incorrect > 100', () => {
        expect(isValid(110)).toBe(false)
    })

    test('correct', () => {
        expect(isValid(100)).toBe(true)
    })

    test('correct', () => {
        expect(isValid(50)).toBe(true)
    })

    test('incorrect < 0', () => {
        expect(isValid(-5)).toBe(false)
    })
})