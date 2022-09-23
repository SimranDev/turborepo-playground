import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantMaritalStatus {
  Single = 1,
  Married = 2,
  DeFacto = 3,
  Other = 100,
}

export const mortgageApplicantMaritalStatusOptions = mapEnumToOptions(MortgageApplicantMaritalStatus)
