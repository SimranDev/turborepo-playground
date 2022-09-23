import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantType {
  PrimaryApplicant = 1,
  OtherApplicant = 2,
  Trust = 3,
  Company = 4,
}

export const mortgageApplicantTypeOptions = mapEnumToOptions(MortgageApplicantType)
