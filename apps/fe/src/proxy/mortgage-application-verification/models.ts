import type { MortgageApplicantLivingSituation } from '../mortgage-applicants/mortgage-applicant-living-situation.enum'
import type { MortgageApplicantAddressDto } from '../mortgage-applicant-addresses/models'
import type { MortgageApplicationExpenseDto } from '../mortgage-application-expenses/models'
import type { MortgageApplicationGiftType } from '../mortgage-applications/mortgage-application-gift-type.enum'
import type { MortgageApplicantKiwiSaverProvider } from '../mortgage-applicants/mortgage-applicant-kiwi-saver-provider.enum'
import type { MortgageApplicationNoteDto } from '../mortgage-application-notes/models'
import type { MortgageApplicantGender } from '../mortgage-applicants/mortgage-applicant-gender.enum'
import type { MortgageApplicantMaritalStatus } from '../mortgage-applicants/mortgage-applicant-marital-status.enum'
import type { MortgageApplicantEmploymentStatus } from '../mortgage-applicants/mortgage-applicant-employment-status.enum'
// eslint-disable-next-line prettier/prettier
import type {
  MortgageApplicationIncomeDto,
  MortgageApplicationIncomeWithApplicantsDto,
} from '../mortgage-application-incomes/models'
import type { MortgageApplicantTitle } from '../mortgage-applicants/mortgage-applicant-title.enum'

export interface MortgageApplicationVerificationAddressHistoryDto {
  mortgageApplicantId: string
  isPrimaryApplicant: boolean
  mortgageApplicantName?: string
  livingSituation?: MortgageApplicantLivingSituation
  addresses: MortgageApplicantAddressDto[]
}

export interface MortgageApplicationVerificationDependantsDto {
  mortgageApplicationId?: string
  dependants: MortgageApplicationVerificationDependantsItemDto[]
}

export interface MortgageApplicationVerificationDependantsItemDto {
  mortgageApplicationDependantId?: string
  name?: string
  age?: number
  mortgageApplicantIds: string[]
}

export interface MortgageApplicationVerificationEmploymentHistoryDto {
  mortgageApplicantId: string
  isPrimaryApplicant: boolean
  mortgageApplicantName?: string
  employers: MortgageApplicationVerificationEmploymentHistoryItemDto[]
}

export interface MortgageApplicationVerificationEmploymentHistoryItemDto {
  mortgageApplicantEmploymentId?: string
  employerName: string
  role?: string
  dateStarted?: string
  dateEnded?: string
  probationPeriod?: boolean
}

export interface MortgageApplicationVerificationExpensesDto {
  mortgageApplicationId: string
  expenses: MortgageApplicationExpenseDto[]
}

export interface MortgageApplicationVerificationGiftDto {
  mortgageApplicationId?: string
  applicantNames?: string
  depositGift?: number
  purchasePrice?: number
  depositGiftType?: MortgageApplicationGiftType
  depositGiftFromName?: string
  depositGiftFromAddressFull: string
  depositGiftFromAddressLine1?: string
  depositGiftFromAddressLine2?: string
  depositGiftFromSuburb?: string
  depositGiftFromCity?: string
  depositGiftFromPostcode?: string
  depositGiftFromCountry?: string
}

export interface MortgageApplicationVerificationKiwiSaverDto {
  mortgageApplicantId: string
  isPrimaryApplicant: boolean
  mortgageApplicantName?: string
  kiwiSaverProvider?: MortgageApplicantKiwiSaverProvider
}

export interface MortgageApplicationVerificationNotesDto {
  mortgageApplicationId?: string
  hasNotes: boolean
  notes: MortgageApplicationNoteDto[]
}

export interface MortgageApplicationVerificationPersonalDetailsDto {
  mortgageApplicantId: string
  isPrimaryApplicant: boolean
  title?: string
  firstName?: string
  lastName?: string
  dateOfBirth?: string
  gender?: MortgageApplicantGender
  phoneNumber?: string
  emailAddress?: string
  countryOfBirth?: string
  maritalStatus?: MortgageApplicantMaritalStatus
}

export interface MortgageApplicationVerificationProofOfIncomeDto {
  mortgageApplicantId?: string
  isPrimaryApplicant: boolean
  mortgageApplicantName?: string
  employmentStatus?: MortgageApplicantEmploymentStatus
  primaryIncome: MortgageApplicationIncomeDto
  otherIncomes: MortgageApplicationIncomeDto[]
}

export interface MortgageApplicationVerificationProofOfIncomeSharedDto {
  mortgageApplicationId?: string
  incomes: MortgageApplicationIncomeWithApplicantsDto[]
}

export interface MortgageApplicationVerificationSolicitorDto {
  mortgageApplicationId?: string
  useTellaSolicitor?: boolean
  solicitorName?: string
  solicitorContact?: string
  solicitorEmail?: string
  solicitorPhoneNumber?: string
}

export interface MortgageApplicationVerificationTrustDeedApplicantTrusteeDto {
  mortgageApplicantId?: string
  title?: MortgageApplicantTitle
  firstName?: string
  lastName?: string
  trustee?: boolean
}

export interface MortgageApplicationVerificationTrustDeedDto {
  mortgageApplicationId?: string
  trustName?: string
  applicantTrustees: MortgageApplicationVerificationTrustDeedApplicantTrusteeDto[]
  otherTrustees: MortgageApplicationVerificationTrustDeedOtherTrusteeDto[]
}

export interface MortgageApplicationVerificationTrustDeedOtherTrusteeDto {
  mortgageApplicantTrusteeId?: string
  otherName?: string
  independantTrustee?: boolean
}
