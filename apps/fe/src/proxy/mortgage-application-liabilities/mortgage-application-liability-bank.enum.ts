import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationLiabilityBank {
  ANZ = 1,
  ASB = 2,
  BNZ = 3,
  Westpac = 4,
  KiwiBank = 5,
  CoOp = 6,
  Heartland = 7,
  HSBC = 8,
  SBS = 9,
  TSB = 10,
  Other = 100,
}

export const mortgageApplicationLiabilityBankOptions = mapEnumToOptions(MortgageApplicationLiabilityBank)
