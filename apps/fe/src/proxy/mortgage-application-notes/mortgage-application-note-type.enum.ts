import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationNoteType {
  Applicant = 1,
  Tella = 2,
}

export const mortgageApplicationNoteTypeOptions = mapEnumToOptions(MortgageApplicationNoteType)
