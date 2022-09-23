import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantTitle {
  Mr = 1,
  Mrs = 2,
  Ms = 3,
  Miss = 4,
  Mx = 5,
  Master = 6,
  Dr = 7,
  Capt = 8,
  Dame = 9,
  Hon = 10,
  Judge = 11,
  Lady = 12,
  Lord = 13,
  Prof = 14,
  Rev = 15,
  Sir = 16,
  Sister = 17,
}

export const mortgageApplicantTitleOptions = mapEnumToOptions(MortgageApplicantTitle)
