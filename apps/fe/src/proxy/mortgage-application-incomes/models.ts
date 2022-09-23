import type { EntityDto } from 'app/abp-dtos'
import type { MortgageApplicationIncomeType } from './mortgage-application-income-type.enum'
import type { MortgageApplicantBasicDto } from '../mortgage-applicants/models'

export interface CreateUpdateMortgageApplicationIncomeWithApplicantIdsDto extends MortgageApplicationIncomeDto {
  id?: string
  mortgageApplicantIds: string[]
}

export interface MortgageApplicationIncomeDto extends EntityDto<string> {
  mortgageApplicationId?: string
  type?: MortgageApplicationIncomeType
  annualAmount: number
  other?: string
}

export interface MortgageApplicationIncomeWithApplicantIdsDto extends MortgageApplicationIncomeDto {
  mortgageApplicantIds: string[]
}

export interface MortgageApplicationIncomeWithApplicantsDto extends MortgageApplicationIncomeDto {
  mortgageApplicants: MortgageApplicantBasicDto[]
}
