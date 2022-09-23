import type { EntityDto } from 'app/abp-dtos'
import type { MortgageApplicationNoteType } from './mortgage-application-note-type.enum'

export interface MortgageApplicationNoteDto extends EntityDto<string> {
  mortgageApplicationId: string
  creationTime?: string
  type: MortgageApplicationNoteType
  note?: string
}

export interface CreateMortgageApplicationNoteDto {
  mortgageApplicationId: string
  type: MortgageApplicationNoteType
  note: string
}
