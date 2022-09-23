import type { MortgageApplicationStatus } from '../mortgage-applications/mortgage-application-status.enum'

export interface CompleteSignUpDto {
  emailConfirmed: boolean
  phoneNumberCountryCode?: string
  phoneNumber?: string
  contactPreferenceEmail: boolean
  contactPreferencePhone: boolean
  contactPreferenceDaytime: boolean
  contactPreferenceEvenings: boolean
  contactConfirmed: boolean
  disclosurePpseAccepted: boolean
}

export interface MortgageApplicationDashboardDto {
  status: MortgageApplicationStatus
  firstName?: string
  completeSignUp: CompleteSignUpDto
}

export interface UpdateCompleteSignUpDto {
  phoneNumberCountryCode?: string
  phoneNumber?: string
  contactPreferenceEmail: boolean
  contactPreferencePhone: boolean
  contactPreferenceDaytime: boolean
  contactPreferenceEvenings: boolean
  disclosurePpseAccepted: boolean
}

export interface CreateAbpUserDto {
  name: string
  surname: string
  email: string
}

export interface CurrentUserDto {
  id: string
  mortgageApplicationId: string
  mortgageApplicationSessionId: string
}
