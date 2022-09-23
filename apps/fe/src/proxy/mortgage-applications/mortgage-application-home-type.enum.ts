import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationHomeType {
  FirstHome = 1,
  NewHome = 3,
}

export const mortgageApplicationHomeTypeOptions = mapEnumToOptions(MortgageApplicationHomeType)
