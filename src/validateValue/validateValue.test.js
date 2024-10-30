const isValid = require('./validateValue')

// Дескрайб - обретка для группы тестов
// Тест - запускаем каждый тест по отдельности
// expect - метод, в котором вызываем нашую функцию
// У expect можно вызвать ряд методов для проверки значения, которое возвращает функция

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