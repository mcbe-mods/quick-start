import { world } from '@minecraft/server'
import { color } from '@mcbe-mods/utils'
world.afterEvents.itemUse.subscribe(() => {
  color.red.italic('5555555')
})
