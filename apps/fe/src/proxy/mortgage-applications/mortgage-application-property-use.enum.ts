import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPropertyUse {
  LiveIn = 1,
  RentOut = 2,
  HolidayHome = 3,
}

export const mortgageApplicationPropertyUseOptions = mapEnumToOptions(MortgageApplicationPropertyUse)
