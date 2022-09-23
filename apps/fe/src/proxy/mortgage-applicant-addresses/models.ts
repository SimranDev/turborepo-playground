import type { BaseCreateUpdateDto } from '../models'

export interface MortgageApplicantAddressDto extends BaseCreateUpdateDto {
  mortgageApplicantId: string
  addressFull: string
  addressLine1?: string
  addressLine2?: string
  suburb?: string
  city?: string
  postcode?: string
  country?: string
  dateMovedIn?: string
}
