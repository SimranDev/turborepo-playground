import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPropertyPurchaseStage {
  JustGettingStarted = 1,
  GoingToAuction = 2,
  MakingAnOffer = 3,
  MadeAnOffer = 4,
}

// eslint-disable-next-line prettier/prettier
export const mortgageApplicationPropertyPurchaseStageOptions = mapEnumToOptions(MortgageApplicationPropertyPurchaseStage);
