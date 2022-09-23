import type { EntityDto } from 'app/abp-dtos'

export interface ValocityPropertyLookupAddressDto {
  key?: string
  value?: string
}

export interface ValocityPropertyLookupDto extends EntityDto<string> {
  addressFull?: string
  addressStreetUnitNumber?: string
  addressStreetNumber?: string
  addressStreetName?: string
  addressStreetType?: string
  addressSuburbName?: string
  addressCity?: string
  addressPostcode?: string
  imageUri?: string
  floorArea?: number
  floorAreaFormatted?: string
  landAreaFormatted?: string
  bedrooms?: number
  bathrooms?: number
  category?: string
  landUse?: string
  improvements?: string
  lastKnownSaleDate?: string
  lastKnownSalePrice?: number
  ivalEstimateDate?: string
  ivalEstimate?: number
  ivalEstimateUpper?: number
  ivalEstimateLower?: number
  valocityId?: string
  valocityFullIvalResponseJson?: string
}
