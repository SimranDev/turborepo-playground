import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationLiabilityCreditCard {
  ANZ = 1,
  ASB = 2,
  BNZ = 3,
  Westpac = 4,
  KiwiBank = 5,
  Amex = 6,
  CooperativeBank = 7,
  Countdown = 8,
  Farmers = 9,
  FlightCentre = 10,
  Gem = 11,
  HSBC = 12,
  Mastercard = 13,
  QCards = 14,
  SBSBank = 15,
  TSB = 16,
  Visa = 17,
  Warehouse = 18,
  Other = 100,
}

export const mortgageApplicationLiabilityCreditCardOptions = mapEnumToOptions(MortgageApplicationLiabilityCreditCard)
