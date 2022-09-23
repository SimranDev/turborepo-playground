import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantKiwiSaverWithdrawing {
  YesAll = 1,
  YesAPortion = 2,
  No = 3,
}

export const mortgageApplicantKiwiSaverWithdrawingOptions = mapEnumToOptions(MortgageApplicantKiwiSaverWithdrawing)
