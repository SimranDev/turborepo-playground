import type { EntityDto } from 'app/abp-dtos'

export interface MortgageApplicationSessionDto extends EntityDto<string> {
  mortgageApplicationId?: string
  currentStep?: string
  completedSteps: string[]
}
