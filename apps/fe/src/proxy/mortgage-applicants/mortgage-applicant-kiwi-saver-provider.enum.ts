import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicantKiwiSaverProvider {
  AmanahKiwiSaverPlan = 1,
  AMPKiwiSaverPlan = 2,
  ANZKiwiSaverScheme = 3,
  AonKiwiSaverScheme = 4,
  ASBKiwiSaverScheme = 5,
  BNZKiwiSaverScheme = 6,
  BoosterKiwiSaverScheme = 7,
  PathfinderKiwiSaverScheme = 8,
  FisherFundsKiwiSaverScheme = 9,
  GenerateKiwiSaverScheme = 10,
  JunoKiwiSaverScheme = 11,
  KiwiWealthKiwiSaverSchemeKiwibank = 12,
  KiwiWrapKiwiSaverScheme = 13,
  KouraKiwiSaverScheme = 14,
  LifestagesKiwiSaverScheme = 15,
  MercerKiwiSaverScheme = 16,
  MilfordKiwiSaverScheme = 17,
  NZDefenceForceKiwiSaverScheme = 18,
  NZFundsKiwiSaverScheme = 19,
  OneAnswerKiwiSaverScheme = 20,
  OtherProvidernotlisted = 21,
  QuayStreetKiwiSaverScheme = 22,
  SelectKiwiSaverScheme = 23,
  SimplicityKiwiSaverScheme = 24,
  SummerKiwiSaverScheme = 25,
  SuperlifeKiwiSaverScheme = 26,
  WestpacKiwiSaverScheme = 27,
}

export const mortgageApplicantKiwiSaverProviderOptions = mapEnumToOptions(MortgageApplicantKiwiSaverProvider)
