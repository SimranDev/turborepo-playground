import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationIncomeType {
  Allowances = 1,
  BeneficiaryIncome = 2,
  BoardersOrFlatmates = 3,
  Bonus = 4,
  ChildSupportOrMaintenance = 5,
  Commission = 6,
  CompanyCar = 7,
  OffshoreIncome = 8,
  Overtime = 9,
  NZSuperannuation = 10,
  ParentalLeave = 11,
  PartTimeJob = 12,
  RentalIncome = 13,
  StudentAllowanceOrScholarship = 14,
  InterestAndDividends = 15,
  TrustIncome = 16,
  SmallBusiness = 17,
  Other = 100,
}

export const mortgageApplicationIncomeTypeOptions = mapEnumToOptions(MortgageApplicationIncomeType)
