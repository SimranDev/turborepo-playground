import type { BaseCreateUpdateDto } from '../models'
import type { MortgageApplicationExpenseCategory } from './mortgage-application-expense-category.enum'
import type { MortgageApplicationExpenseType } from './mortgage-application-expense-type.enum'

export interface MortgageApplicationExpenseDto extends BaseCreateUpdateDto {
  mortgageApplicationId: string
  category: MortgageApplicationExpenseCategory
  type: MortgageApplicationExpenseType
  monthlyAmount: number
}
