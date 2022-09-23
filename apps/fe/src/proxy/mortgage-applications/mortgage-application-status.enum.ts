import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationStatus {
  ApplicationStarted = 1,
  ApplicationCompleted = 2,
  SignupCompleted = 3,
  StrategySelected = 4,
  InformationUploaded = 5,
  TellaReviewing = 6,
  WithLender = 7,
  PendingFeedback = 8,
  PreApproved = 9,
  CheckingHouse = 10,
  PreparingForSettlement = 11,
  LoanSettled = 12,
}

export const mortgageApplicationStatusOptions = mapEnumToOptions(MortgageApplicationStatus)
