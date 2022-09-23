import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationOtherAssetType {
  Boat = 1,
  Caravan = 2,
  MotorHome = 3,
  Trailer = 4,
  Other = 100,
}

export const mortgageApplicationOtherAssetTypeOptions = mapEnumToOptions(MortgageApplicationOtherAssetType)
