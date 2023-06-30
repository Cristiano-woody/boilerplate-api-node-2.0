import { type IUserValidator } from '../interfaces/IUserValidator'
import isEmail from 'validator/lib/isEmail'

class UserValidator implements IUserValidator {
  public EmailValidator (email: string): boolean {
    const possibleEmail = email
    const IsValidEmail = isEmail(possibleEmail)
    return IsValidEmail
  }
}

export default UserValidator
