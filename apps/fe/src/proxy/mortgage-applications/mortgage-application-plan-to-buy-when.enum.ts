import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPlanToBuyWhen {
  Asap = 1,
  WithinNextYear = 2,
  NotSure = 3,
}

export const mortgageApplicationPlanToBuyWhenOptions = mapEnumToOptions(MortgageApplicationPlanToBuyWhen)
