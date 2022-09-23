export interface RemoteServiceErrorInfo {
  code?: string
  message?: string
  details?: string
  data: Record<string, object>
  validationErrors: RemoteServiceValidationErrorInfo[]
}

export interface RemoteServiceErrorResponse {
  error: RemoteServiceErrorInfo
}

export interface RemoteServiceValidationErrorInfo {
  message?: string
  members: string[]
}
