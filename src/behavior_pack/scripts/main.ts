import { world } from '@minecraft/server'
import { color } from '@mcbe-mods/utils'
import { module } from './module'
world.afterEvents.itemUse.subscribe(() => {
  // eslint-disable-next-line no-console
  console.warn(color.red.italic('5555555', module))
})
