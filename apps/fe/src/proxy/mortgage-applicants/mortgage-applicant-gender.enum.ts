import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantGender {
  Male = 1,
  Female = 2,
  Agenda = 3,
  Other = 100,
}

export const mortgageApplicantGenderOptions = mapEnumToOptions(MortgageApplicantGender)
