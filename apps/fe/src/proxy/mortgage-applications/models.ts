import type { MortgageApplicationStatus } from './mortgage-application-status.enum'
import type { MortgageApplicationType } from './mortgage-application-type.enum'
import type { MortgageApplicationPreferencesKnowledge } from './mortgage-application-preferences-knowledge.enum'
import type { MortgageApplicationPreferencesBankLender } from './mortgage-application-preferences-bank-lender.enum'
import type { MortgageApplicationPreferencesRetire } from './mortgage-application-preferences-retire.enum'
import type { MortgageApplicationPreferencesRetirementPlan } from './mortgage-application-preferences-retirement-plan.enum'
import type { MortgageApplicationPreferencesLoanTerm } from './mortgage-application-preferences-loan-term.enum'
import type { MortgageApplicationPreferencesCharity } from './mortgage-application-preferences-charity.enum'

export interface MortgageApplicationStatusDto {
  id: string
  status: MortgageApplicationStatus
}

export interface MortgageApplicationPreferencesDto {
  type?: MortgageApplicationType
  preferencesKnowledge?: MortgageApplicationPreferencesKnowledge
  preferencesPreferBankLender?: boolean
  preferencesBankLender?: MortgageApplicationPreferencesBankLender
  preferencesBankLenderOther?: string
  preferencesBankLenderReason?: string
  preferencesNegativeImpactsNextYear?: boolean
  preferencesRefinanceAwareHigherInterest?: boolean
  preferencesRefinanceTopUpConsolidateHigherInterest?: boolean
  preferencesRetire?: MortgageApplicationPreferencesRetire
  preferencesRetirementPlan?: MortgageApplicationPreferencesRetirementPlan
  preferencesRetirementPlanOther?: string
  preferencesLoanTerm?: MortgageApplicationPreferencesLoanTerm
  preferencesLastModificationTime?: string
  preferencesCharity?: MortgageApplicationPreferencesCharity
}
