import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationExpenseCategory {
  PersonalExpenses = 1,
  PropertyExpenses = 2,
  InsuranceCosts = 3,
  ChildExpenses = 4,
}

export const mortgageApplicationExpenseCategoryOptions = mapEnumToOptions(MortgageApplicationExpenseCategory)
