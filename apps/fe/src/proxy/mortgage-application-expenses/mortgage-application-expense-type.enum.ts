import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationExpenseType {
  PersonalExpenses_FoodGroceries = 1,
  PersonalExpenses_VehicleTransport = 2,
  PersonalExpenses_Utilities = 3,
  PersonalExpenses_Activities = 4,
  PersonalExpenses_ClothingPersonal = 5,
  PersonalExpenses_MedicalHealthcare = 6,
  PersonalExpenses_DonationsTithing = 7,
  PersonalExpenses_Other = 99,
  PropertyExpenses_PropertyRates = 100,
  PropertyExpenses_ExistingRent = 101,
  InsuranceCosts_Home = 200,
  InsuranceCosts_Contents = 201,
  InsuranceCosts_Vehicle = 202,
  InsuranceCosts_LifeHealthIncome = 203,
  InsuranceCosts_Other = 299,
  ChildExpenses_PublicSchooling = 300,
  ChildExpenses_PrivateSchooling = 301,
  ChildExpenses_ChildCare = 302,
  ChildExpenses_ChildSupport = 303,
}

export const mortgageApplicationExpenseTypeOptions = mapEnumToOptions(MortgageApplicationExpenseType)
