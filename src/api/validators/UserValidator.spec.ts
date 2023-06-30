import UserValidator from './UserValidator'

describe('User validator', () => {
  const userValidator = new UserValidator()
  it('shold be able to validating email', () => {
    const isValid = userValidator.EmailValidator('test@example.com')
    expect(isValid).toBe(true)
  })

  it('hold not be able to validate email', () => {
    const isValid = userValidator.EmailValidator('testexample.com')
    expect(isValid).toBe(false)
  })
  it('hold not be able to validate email', () => {
    const isValid = userValidator.EmailValidator('test example .com')
    expect(isValid).toBe(false)
  })
})
