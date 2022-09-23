import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantHomeStartGrant {
  ExistingHome3000 = 3000,
  ExistingHome4000 = 4000,
  ExistingHome5000 = 5000,
  NewBuild6000 = 6000,
  NewBuild8000 = 8000,
  NewBuild10000 = 10000,
}

export const mortgageApplicantHomeStartGrantOptions = mapEnumToOptions(MortgageApplicantHomeStartGrant)
