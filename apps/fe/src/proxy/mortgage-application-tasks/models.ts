import type { MortgageApplicantBasicDto } from '../mortgage-applicants/models'
import type { MortgageApplicationTaskType } from './mortgage-application-task-type.enum'

export interface MortgageApplicationTaskApplicantDto extends MortgageApplicantBasicDto {
  items: MortgageApplicationTaskItemDto[]
}

export interface MortgageApplicationTaskDto {
  mortgageApplicationId?: string
  applicants: MortgageApplicationTaskApplicantDto[]
  otherTasks: MortgageApplicationTaskItemDto[]
  taskCount: number
  completedCount: number
  allCompleted: boolean
  strategiesCompleted: boolean
}

export interface MortgageApplicationTaskItemDto {
  id?: string
  type: MortgageApplicationTaskType
  completed: boolean
}
