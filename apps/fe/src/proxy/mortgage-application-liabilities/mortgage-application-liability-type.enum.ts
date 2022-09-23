import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationLiabilityType {
  Mortgage = 1,
  CreditOrStoreCard = 2,
  Overdraft = 3,
  PersonalLoan = 4,
}

export const mortgageApplicationLiabilityTypeOptions = mapEnumToOptions(MortgageApplicationLiabilityType)
