// const square = require('./square')
//
// describe('square', () => {
//     let mockValue
//
//     // Вызывается перед каждым тестом (напрмер замоккать value)
//     beforeEach(() => {
//         mockValue = 10
//         // Добавить в БД
//     })
//     // Вызывается 1 раз перед всеми тестами в дескрайбе
//     beforeAll(() => {
//
//     })
//
//     test('correct', () => {
//         expect(square(2)).toBe(4)
//         expect(square(2)).toBeLessThan(5)
//         expect(square(2)).toBeGreaterThan(3)
//         expect(square(2)).not.toBeUndefined()
//     })
//
//     // Аналогично функциям выше, но запускаются уже после тестов
//     afterEach(() => {
//         // Убрать с БД
//     })
//     afterAll(() => {})
// })