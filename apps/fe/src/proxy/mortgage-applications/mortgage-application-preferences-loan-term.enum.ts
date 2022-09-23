import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPreferencesLoanTerm {
  _1Year = 1,
  _2Years = 2,
  _3Years = 3,
  _4Years = 4,
  _5Years = 5,
  _6Years = 6,
  _7Years = 7,
  _8Years = 8,
  _9Years = 9,
  _10Years = 10,
  _11Years = 11,
  _12Years = 12,
  _13Years = 14,
  _15Years = 15,
  _16Years = 16,
  _17Years = 17,
  _18Years = 18,
  _19Years = 19,
  _20Years = 20,
  _21Years = 21,
  _22Years = 22,
  _23Years = 24,
  _25Years = 25,
  _26Years = 26,
  _27Years = 27,
  _28Years = 28,
  _29Years = 29,
  _30Years = 30,
}

export const mortgageApplicationPreferencesLoanTermOptions = mapEnumToOptions(
  MortgageApplicationPreferencesLoanTerm
).reverse()
