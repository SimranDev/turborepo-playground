import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantKiwiSaverContribution {
  ThreePercent = 3,
  FourPercent = 4,
  SixPercent = 6,
  EightPercent = 8,
  TenPercent = 10,
}

export const mortgageApplicantKiwiSaverContributionOptions = mapEnumToOptions(MortgageApplicantKiwiSaverContribution)
