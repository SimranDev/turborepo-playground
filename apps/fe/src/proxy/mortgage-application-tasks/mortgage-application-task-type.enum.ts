import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationTaskType {
  PersonalDetails = 1,
  AddressHistory = 2,
  EmploymentHistory = 3,
  ProofOfIncome = 4,
  KiwiSaver = 5,
  PropertyInformation = 6,
  TrustDeed = 7,
  BankStatements = 8,
  Dependants = 9,
  GiftOrFamilyLoan = 10,
  Solicitor = 11,
  Expenses = 12,
  Notes = 13,
}

export const mortgageApplicationTaskTypeOptions = mapEnumToOptions(MortgageApplicationTaskType)
