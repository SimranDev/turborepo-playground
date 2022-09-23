import type { BaseCreateUpdateDto, EntityDto } from '../models'
import type { MortgageApplicantType } from './mortgage-applicant-type.enum'
import type { MortgageApplicantTitle } from './mortgage-applicant-title.enum'
import type { MortgageApplicantKiwiSaverContribution } from './mortgage-applicant-kiwi-saver-contribution.enum'
import type { MortgageApplicantKiwiSaverWithdrawing } from './mortgage-applicant-kiwi-saver-withdrawing.enum'
import type { MortgageApplicantHomeStartGrant } from './mortgage-applicant-home-start-grant.enum'
import type { MortgageApplicantEmploymentStatus } from './mortgage-applicant-employment-status.enum'

export interface CreateUpdateMortgageApplicantBasicDto extends BaseCreateUpdateDto {
  mortgageApplicationId: string
  type: MortgageApplicantType
  title?: MortgageApplicantTitle
  name: string
  firstName?: string
  lastName?: string
  emailAddress?: string
}

export interface CreateUpdateMortgageApplicantDepositDto extends CreateUpdateMortgageApplicantBasicDto {
  hasKiwiSaver?: boolean
  kiwiSaverBalance?: number
  kiwiSaverContribution?: MortgageApplicantKiwiSaverContribution
  kiwiSaverWithdrawing?: MortgageApplicantKiwiSaverWithdrawing
  kiwiSaverWithdrawal?: number
  hasHomeStartGrant?: boolean
  homeStartGrant?: MortgageApplicantHomeStartGrant
}

export interface CreateUpdateMortgageApplicantPrimaryIncomeDto extends CreateUpdateMortgageApplicantBasicDto {
  employmentStatus?: MortgageApplicantEmploymentStatus
  primaryIncomeId?: string
  annualAmount?: number
  hasStudentLoan?: boolean
  studentLoanBalance?: number
}

export interface MortgageApplicantBasicDto extends EntityDto {
  mortgageApplicationId: string
  type: MortgageApplicantType
  title?: MortgageApplicantTitle
  name: string
  firstName?: string
  lastName?: string
  emailAddress?: string
}

export interface MortgageApplicantPrimaryIncomeDto extends MortgageApplicantBasicDto {
  hasKiwiSaver?: boolean
  kiwiSaverContribution?: MortgageApplicantKiwiSaverContribution
  kiwiSaverWithdrawal?: number
  employmentStatus?: MortgageApplicantEmploymentStatus
  primaryIncomeId?: string
  annualAmount?: number
  hasStudentLoan?: boolean
  studentLoanBalance?: number
}
