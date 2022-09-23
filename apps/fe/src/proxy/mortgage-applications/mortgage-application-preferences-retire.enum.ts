import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPreferencesRetire {
  Under65 = 1,
  Between65_70 = 2,
  Between70_75 = 3,
  After75 = 4,
}

export const mortgageApplicationPreferencesRetireOptions = mapEnumToOptions(MortgageApplicationPreferencesRetire)
