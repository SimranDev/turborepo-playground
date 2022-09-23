import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantLivingSituation {
  OwnHome = 1,
  Renting = 2,
  Boarding = 3,
  LivingWithFamily = 4,
}

export const mortgageApplicantLivingSituationOptions = mapEnumToOptions(MortgageApplicantLivingSituation)
