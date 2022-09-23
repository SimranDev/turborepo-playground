// eslint-disable-next-line prettier/prettier
import type { CreateUpdateMortgageApplicantBasicDto, CreateUpdateMortgageApplicantDepositDto, CreateUpdateMortgageApplicantPrimaryIncomeDto, MortgageApplicantPrimaryIncomeDto } from '../mortgage-applicants/models'
// eslint-disable-next-line prettier/prettier
import type { CreateUpdateMortgageApplicationIncomeWithApplicantIdsDto, MortgageApplicationIncomeWithApplicantIdsDto } from '../mortgage-application-incomes/models'
import type { MortgageApplicationAssetType } from '../mortgage-application-assets/mortgage-application-asset-type.enum'
import type { MortgageApplicationOtherAssetType } from '../mortgage-application-assets/mortgage-application-other-asset-type.enum'
import type { MortgageApplicationAssetBank } from '../mortgage-application-assets/mortgage-application-asset-bank.enum'
import type { MortgageApplicationExpenseCategory } from '../mortgage-application-expenses/mortgage-application-expense-category.enum'
import type { MortgageApplicationExpenseType } from '../mortgage-application-expenses/mortgage-application-expense-type.enum'
import type { MortgageApplicationLiabilityType } from '../mortgage-application-liabilities/mortgage-application-liability-type.enum'
import type { MortgageApplicationLiabilityBank } from '../mortgage-application-liabilities/mortgage-application-liability-bank.enum'
import type { MortgageApplicationLiabilityCreditCard } from '../mortgage-application-liabilities/mortgage-application-liability-credit-card.enum'
import type { MortgageApplicationLiabilityLoanType } from '../mortgage-application-liabilities/mortgage-application-liability-loan-type.enum'
import type { MortgageApplicationType } from '../mortgage-applications/mortgage-application-type.enum'
import type { MortgageApplicationPropertyType } from '../mortgage-applications/mortgage-application-property-type.enum'
import type { MortgageApplicationPlanToBuyWhen } from '../mortgage-applications/mortgage-application-plan-to-buy-when.enum'
import type { MortgageApplicationPropertyUse } from '../mortgage-applications/mortgage-application-property-use.enum'
import type { MortgageApplicationPropertyLiveInFor } from '../mortgage-applications/mortgage-application-property-live-in-for.enum'
import type { MortgageApplicationPropertyPurchaseStage } from '../mortgage-application-properties/mortgage-application-property-purchase-stage.enum'
import type { MortgageApplicationPropertyHasBodyCorporate } from '../mortgage-application-properties/mortgage-application-property-has-body-corporate.enum'

export interface CreateUpdateMortgageApplicationStepIncomeDto {
  mortgageApplicationId: string
  mortgageApplicationSessionId?: string
  applicants: CreateUpdateMortgageApplicantPrimaryIncomeDto[]
  otherIncomes: CreateUpdateMortgageApplicationIncomeWithApplicantIdsDto[]
}

export interface MortgageApplicationStepAssetDto {
  id?: string
  mortgageApplicationLiabilityId?: string
  valocityPropertyLookupId?: string
  type: MortgageApplicationAssetType
  otherType?: MortgageApplicationOtherAssetType
  bank?: MortgageApplicationAssetBank
  value: number
  other?: string
  addressFull?: string
  addressLine1?: string
  addressLine2?: string
  suburb?: string
  city?: string
  postcode?: string
  mortgageApplicantIds: string[]
}

export interface MortgageApplicationStepAssetsDto {
  mortgageApplicationId: string
  mortgageApplicationSessionId?: string
  savings: MortgageApplicationStepAssetDto[]
  shares: MortgageApplicationStepAssetDto[]
  vehicles: MortgageApplicationStepAssetDto[]
  personalEffects: MortgageApplicationStepAssetDto
  lifeInsurance: MortgageApplicationStepAssetDto[]
  property: MortgageApplicationStepAssetDto[]
  other: MortgageApplicationStepAssetDto[]
}

export interface MortgageApplicationStepBorrowersDto {
  mortgageApplicationId: string
  mortgageApplicationSessionId?: string
  applicants: CreateUpdateMortgageApplicantBasicDto[]
}

export interface MortgageApplicationStepDepositDto {
  mortgageApplicationId: string
  mortgageApplicationSessionId?: string
  applicants: CreateUpdateMortgageApplicantDepositDto[]
  depositCash?: number
  depositGift?: number
  depositTotal?: number
  propertyEquity: MortgageApplicationStepDepositPropertyEquityDto[]
}

export interface MortgageApplicationStepDepositPropertyEquityDto {
  id?: string
  addressFull?: string
  addressLine1?: string
  addressLine2?: string
  suburb?: string
  city?: string
  postcode?: string
  value?: number
  mortgageApplicantIds: string[]
}

export interface MortgageApplicationStepHouseholdDto {
  mortgageApplicationId: string
  mortgageApplicationSessionId?: string
  dependants?: number
  privateSchooling?: MortgageApplicationStepHouseholdExpenseDto
  childCare?: MortgageApplicationStepHouseholdExpenseDto
  childSupport?: MortgageApplicationStepHouseholdExpenseDto
}

export interface MortgageApplicationStepHouseholdExpenseDto {
  id?: string
  category: MortgageApplicationExpenseCategory
  type: MortgageApplicationExpenseType
  monthlyAmount: number
}

export interface MortgageApplicationStepIncomeDto {
  mortgageApplicationId: string
  mortgageApplicationSessionId?: string
  applicants: MortgageApplicantPrimaryIncomeDto[]
  otherIncomes: MortgageApplicationIncomeWithApplicantIdsDto[]
}

export interface MortgageApplicationStepLiabilitiesDto {
  mortgageApplicationId: string
  mortgageApplicationSessionId?: string
  mortgages: MortgageApplicationStepLiabilityDto[]
  creditOrStoreCards: MortgageApplicationStepLiabilityDto[]
  overdrafts: MortgageApplicationStepLiabilityDto[]
  personalLoans: MortgageApplicationStepLiabilityDto[]
}

export interface MortgageApplicationStepLiabilityDto {
  id?: string
  mortgageApplicationAssetId?: string
  assetAddress?: string
  type?: MortgageApplicationLiabilityType
  bank?: MortgageApplicationLiabilityBank
  creditCard?: MortgageApplicationLiabilityCreditCard
  loan?: MortgageApplicationLiabilityLoanType
  value: number
  other?: string
  mortgageApplicantIds: string[]
}

export interface MortgageApplicationStepOptionsDto {
  purchasePrice?: number
  borrowAmount?: number
  borrowMax?: boolean
  assessedUmi: number
  assessedPurchasePrice?: number
  assessedDeposit: number
  assessedKiwisaver: number
  assessedHomeLoan: number
  assessedHomeLoanMin: number
  assessedHomeLoanMax: number
}

export interface MortgageApplicationStepPropertyDto {
  id?: string
  ref?: string
  type?: MortgageApplicationType
  propertyFound?: boolean
  property?: MortgageApplicationStepPropertyPropertyDto
  propertyType?: MortgageApplicationPropertyType
  apartmentOver45m2?: boolean
  planToBuyWhen?: MortgageApplicationPlanToBuyWhen
  borrowAmount?: number
  borrowMax?: boolean
  propertyUse?: MortgageApplicationPropertyUse
  propertyLiveInFor?: MortgageApplicationPropertyLiveInFor
}

export interface MortgageApplicationStepPropertyPropertyDto {
  id?: string
  addressFull?: string
  addressLine1?: string
  addressLine2?: string
  suburb?: string
  city?: string
  postcode?: string
  propertyPurchaseStage?: MortgageApplicationPropertyPurchaseStage
  auctionDate?: string
  purchasePrice?: number
  hasBodyCorporate?: MortgageApplicationPropertyHasBodyCorporate
  annualBodyCorporate?: number
  valuation?: number
}

export interface MortgageApplicationStepsSummaryDto {
  property: MortgageApplicationStepPropertyDto
  borrowers: MortgageApplicationStepBorrowersDto
  deposit: MortgageApplicationStepDepositDto
  income: MortgageApplicationStepIncomeDto
  assets: MortgageApplicationStepAssetsDto
  liabilities: MortgageApplicationStepLiabilitiesDto
  household: MortgageApplicationStepHouseholdDto
}
