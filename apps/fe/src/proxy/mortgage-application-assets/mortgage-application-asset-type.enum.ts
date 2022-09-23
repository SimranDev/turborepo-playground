import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationAssetType {
  Savings = 1,
  Shares = 2,
  Vehicles = 3,
  PersonalEffects = 4,
  LifeInsurance = 5,
  Property = 6,
  PropertyAsEquity = 7,
  KiwiSaver = 8,
  Other = 100,
}

export const mortgageApplicationAssetTypeOptions = mapEnumToOptions(MortgageApplicationAssetType)
