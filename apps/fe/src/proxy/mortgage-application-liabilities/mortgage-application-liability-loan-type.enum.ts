import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationLiabilityLoanType {
  Car = 1,
  VehicleOther = 2,
  Other = 100,
}

export const mortgageApplicationLiabilityLoanTypeOptions = mapEnumToOptions(MortgageApplicationLiabilityLoanType)
