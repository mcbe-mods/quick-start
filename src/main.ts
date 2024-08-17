import type { ProjectileHitBlockAfterEvent, ProjectileHitEntityAfterEvent } from '@minecraft/server'
import { Player, world } from '@minecraft/server'

world.afterEvents.projectileHitBlock.subscribe(explode)
world.afterEvents.projectileHitEntity.subscribe(explode)

function explode(event: ProjectileHitEntityAfterEvent | ProjectileHitBlockAfterEvent) {
  if (!(event.source instanceof Player)) {
    return
  }
  if (event.projectile.typeId === 'minecraft:arrow') {
    const entity = event.dimension.spawnEntity('minecraft:ender_crystal', event.location)
    entity.triggerEvent('minecraft:crystal_explode')
  }
}
