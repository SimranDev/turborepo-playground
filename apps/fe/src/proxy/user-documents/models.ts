import type { UserDocumentType } from './user-document-type.enum'
import type { IRemoteStreamContent } from '../volo/abp/content/models'
import type { CreationAuditedEntityDto } from 'app/abp-dtos'
import type { MortgageApplicantBasicDto } from '../mortgage-applicants/models'

export interface CreateUserDocumentDto {
  userId: string
  mortgageApplicationId?: string
  mortgageApplicantIds: string[]
  mortgageApplicationAssetId?: string
  mortgageApplicationIncomeId?: string
  mortgageApplicantEmploymentId?: string
  type: UserDocumentType
  content?: IRemoteStreamContent
}

export interface UserDocumentDto extends CreationAuditedEntityDto<string> {
  userId?: string
  mortgageApplicationId?: string
  mortgageApplicationAssetId?: string
  mortgageApplicationIncomeId?: string
  mortgageApplicantEmploymentId?: string
  type: UserDocumentType
  contentType?: string
  contentLength: number
  fileName?: string
  mortgageApplicants: MortgageApplicantBasicDto[]
}
