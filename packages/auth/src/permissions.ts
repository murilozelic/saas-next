import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'

type role = 'ADMIN' | 'MEMBER'

type permissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<role, permissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },

  MEMBER: (_, { can }) => {
    can('invite', 'User')
  },
}
