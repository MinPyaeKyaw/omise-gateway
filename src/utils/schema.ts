import * as z from 'zod';

const requiredString = (message: string, length = 1) =>
  z.string().min(length, {message});

// const requiredDate = (message: string) =>
//   z.date({
//     required_error: message,
//   });

const requiredBoolean = (message: string) =>
  z.literal<boolean>(true, {
    errorMap: () => ({message}),
  });

// const requiredEmail = () => z.string().email({message: 'Invalid email!'});

export const createCardSchema = z.object({
  name: requiredString('Name on card is required!'),
  number: requiredString('Card number is required!'),
  expiration_date: requiredString('Expiry date is required!'),
  security_code: requiredString('CVV is required!'),
});

export const loginSchema = z.object({
  phone: requiredString('Phone number is required!'),
  password: requiredString('Password is required!'),
});

export const forgetPasswordSchema = z.object({
  phone: requiredString('Phone number is required!'),
});

export const signup1Schema = z.object({
  username: requiredString('Username is required!'),
  phone: requiredString('Phone number is required!'),
});

export const signup2Schema = z.object({
  email: requiredString('Username is required!'),
  password: requiredString('Phone number is required!'),
  terms: requiredBoolean('Need to agree terms and conditions!'),
});

export const suggestoinSchema = z.object({
  suggestion: requiredString('Suggestion is required!'),
});

export const editProfileSchema = z.object({
  username: requiredString('Username is required!'),
  email: requiredString('Email is required!'),
});

export const changePhoneNumberSchema = z.object({
  phone: requiredString('Phone Number is required!'),
});

export const retypePasswordSchema = z.object({
  password: requiredString('Current password is required!'),
});
