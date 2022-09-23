import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationGiftType {
  Gift = 1,
  FamilyLoan = 2,
}

export const mortgageApplicationGiftTypeOptions = mapEnumToOptions(MortgageApplicationGiftType)
