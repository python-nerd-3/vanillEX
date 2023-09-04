// walls

let hugeCopperWall = extend(Wall, "huge-copper-wall", {
    size: 3,
    health: 2880,
    requirements: ItemStack.with(Items.copper, 54),
    buildCostMultiplier: 7,
    buildVisibility: BuildVisibility.shown,
    research: Blocks.copperWallLarge,
    localizedName: "Huge Copper Wall",
    description: "[vanillEX] Protects structures from enemy projectiles."
})

let hugeTitaniumWall = extend(Wall, "huge-titanium-wall", {
    size: 3,
    health: 3960,
    requirements: ItemStack.with(Items.titanium, 54),
    buildCostMultiplier: 14,
    buildVisibility: BuildVisibility.shown,
    research: Blocks.titaniumWallLarge,
    localizedName: "Huge Titanium Wall",
    description: "[vanillEX] Protects structures from enemy projectiles."
})


// you're welcome
Blocks.copperWallLarge.buildCostMultiplier = 3
Blocks.titaniumWallLarge.buildCostMultiplier = 6

// conveyors

let graphiteBridge = extend(ItemBridge, "graphite-bridge", {
    health: 60,
    buildCostMultiplier: 0.4,
    requirements: ItemStack.with(Items.graphite, 10, Items.metaglass, 5, Items.copper, 3),
    range: 5,
    bridgeWidth: 8,
    buildVisibility: BuildVisibility.shown,
    research: Blocks.titaniumConveyor,
    localizedName: "Graphite Bridge",
    description: "[vanillEX] Transports items over terrain or buildings. Has a longer range than a standard bridge."
})

Blocks.titaniumConveyor.bridgeReplacement = graphiteBridge