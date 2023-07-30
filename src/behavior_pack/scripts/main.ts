import { world } from '@minecraft/server'
import { color } from '@mcbe-mods/utils'
import { module } from './module'
world.afterEvents.itemUse.subscribe(() => {
  color.red.italic('5555555', module)
})
