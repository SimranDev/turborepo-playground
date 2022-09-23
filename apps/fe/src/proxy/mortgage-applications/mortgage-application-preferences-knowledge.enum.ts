import { mapEnumToOptions } from '../../utilities'

export enum MortgageApplicationPreferencesKnowledge {
  LowNewToHomeLoans = 1,
  MidGuidanceWouldBeGood = 2,
  HighConfidentOnMyOwn = 3,
}

export const mortgageApplicationPreferencesKnowledgeOptions = mapEnumToOptions(MortgageApplicationPreferencesKnowledge)
