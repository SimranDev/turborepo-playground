import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPreferencesRetirementPlan {
  DownsizeHome = 1,
  SaleOfAsset = 2,
  Superannuation = 3,
  InvestmentIncome = 4,
  PartTimeJob = 5,
  NeedsRepaying = 6,
  Other = 100,
}

// eslint-disable-next-line prettier/prettier
export const mortgageApplicationPreferencesRetirementPlanOptions = mapEnumToOptions(MortgageApplicationPreferencesRetirementPlan);
