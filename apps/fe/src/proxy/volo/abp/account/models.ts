import type { ExtensibleObject } from 'app/abp-dtos'

export interface ChangePasswordInput {
  currentPassword?: string
  newPassword: string
}

export interface ProfileDto extends ExtensibleObject {
  userName?: string
  email?: string
  name?: string
  surname?: string
  phoneNumber?: string
  isExternal: boolean
  hasPassword: boolean
  concurrencyStamp?: string
}

export interface UpdateProfileDto extends ExtensibleObject {
  userName?: string
  email?: string
  name?: string
  surname?: string
  phoneNumber?: string
  concurrencyStamp?: string
}

export interface IdentityUserDto {
  tenantId: string
  userName: string
  name: string
  surname: string
  email: string
  emailConfirmed: boolean
  phoneNumber: string
  phoneNumberConfirmed: boolean
  isActive: boolean
  lockoutEnabled: boolean
  lockoutEnd: string
  concurrencyStamp: string
  isDeleted: boolean
  deleterId: string
  deletionTime: string
  lastModificationTime: string
  lastModifierId: string
  creationTime: string
  creatorId: string
  id: string
  extraProperties: {
    ContactPreferenceDaytime: boolean
    ContactPreferenceEmail: boolean
    ContactPreferenceEvenings: boolean
    ContactPreferencePhone: boolean
    DisclosurePpsaAccepted: boolean
    MarketingAccepted: boolean
    PhoneNumberCountryCode: null
    SourceReferral: number
  }
}
