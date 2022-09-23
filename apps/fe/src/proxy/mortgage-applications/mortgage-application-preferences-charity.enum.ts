import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPreferencesCharity {
  TreesThatCount = 1,
  SaveTheKiwi = 2,
  BreastCancerFoundation = 3,
  LifeEducationTrust = 4,
  SustainableCoastlines = 5,
  WomensRefuge = 6,
}

export const MortgageApplicationPreferencesCharityOptions = mapEnumToOptions(MortgageApplicationPreferencesCharity)
