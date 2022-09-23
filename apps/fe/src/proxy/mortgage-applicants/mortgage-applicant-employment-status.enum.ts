import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantEmploymentStatus {
  FullTimeEmployee = 1,
  PartTimeEmployee = 2,
  Casual = 3,
  Contractor = 4,
  SelfEmployed = 5,
  Retired = 6,
  NotEmployed = 7,
  ParentalLeave = 8,
  Beneficiary = 9,
}

export const mortgageApplicantEmploymentStatusOptions = mapEnumToOptions(MortgageApplicantEmploymentStatus)
