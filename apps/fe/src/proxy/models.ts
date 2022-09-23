
export interface TaskResultDto {
  success: boolean
  errors: string[]
}

export interface BaseCreateUpdateDto {
  id?: string
}

export interface EntityDto {
  id: string
}
