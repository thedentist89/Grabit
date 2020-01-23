import { validateEmail, validatePhone, validateText } from '../index'

describe('validateEmail', () => {
  it('checks if the user input is a valid email', () => {
    expect(validateEmail('mourad.eyes@gmail.com')).toBe(false)
    expect(validateEmail('mourad.eyes!gmail.com')).toBe(true)
    expect(validateEmail('mourad@yahoo.fr')).toBe(false)
  })
})

describe('validatePhone', () => {
  it('checks if the user input is a valid morocan phone number', () => {
    expect(validatePhone('0690092625')).toBe(false)
    expect(validatePhone('+212690092625')).toBe(false)
    expect(validatePhone('069009262')).toBe(true)
  })
})

describe('validateText', () => {
  it('checks if the inputs are not left empty', () => {
    expect(validateText('something')).toBe(false)
    expect(validateText('')).toBe(true)
  })
})
