import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPropertyType {
  House = 1,
  Apartment = 2,
  LandOnly = 3,
  Build = 4,
}

export const mortgageApplicationPropertyTypeOptions = mapEnumToOptions(MortgageApplicationPropertyType)
