import { mapEnumToOptions } from '../../utilities'

export enum UserDocumentType {
  Passport = 1,
  DriversLicenseFront = 2,
  DriversLicenseBack = 3,
  ProofOfIncome = 4,
  TrustDeedDocument = 5,
  BankStatements = 6,
  KiwiSaverWithdrawalLetter = 7,
  DepositGiftCertificate = 8,
  DepositFamilyLoanCertificate = 9,
  Signature = 10,
  PropertyInformation = 11,
  Residency = 12,
  Other = 100,
}

export const userDocumentTypeOptions = mapEnumToOptions(UserDocumentType)
