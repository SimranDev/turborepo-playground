import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPropertyHasBodyCorporate {
  Yes = 1,
  No = 2,
  DontKnow = 3,
}

// eslint-disable-next-line prettier/prettier
export const mortgageApplicationPropertyHasBodyCorporateOptions = mapEnumToOptions(MortgageApplicationPropertyHasBodyCorporate);
