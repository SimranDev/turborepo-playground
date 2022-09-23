import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPropertyLiveInFor {
  NotSure = 1,
  LessThan2Years = 2,
  Between2And5Years = 3,
  Over5Years = 4,
}

export const mortgageApplicationPropertyLiveInForOptions = mapEnumToOptions(MortgageApplicationPropertyLiveInFor)
