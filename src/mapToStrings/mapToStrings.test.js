const mapToStrings = require('./mapToStrings')

// toEqual позволяет сравнить обьекты и массивы, в отличии от toBe
// toBe {} !== {}, toEquals {} === {}

describe('mapToStrings', () => {
    test('Все числа', () => {
        expect(mapToStrings([1, 2, 3, 4])).toEqual(['1', '2', '3', '4'])
    })

    test('Все строки', () => {
        expect(mapToStrings(['1', '2', '3', '4'])).toEqual([])
    })

    test('Числа и строки', () => {
        expect(mapToStrings([1, 2, '3', '4'])).toEqual(['1', '2'])
    })

    test('Рандомные значение', () => {
        expect(mapToStrings([1, 2, '3', '4', null, undefined, '@'])).toEqual(['1', '2'])
    })

    test('Пустой массив', () => {
        expect(mapToStrings([])).toEqual([])
    })

    test('Тест "не равен"', () => {
        expect(mapToStrings([1, 2, 3])).not.toEqual([])
    })
})