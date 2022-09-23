import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationType {
  FirstHome = 1,
  Refinance = 2,
  NewHome = 3,
}

export const mortgageApplicationTypeOptions = mapEnumToOptions(MortgageApplicationType)
