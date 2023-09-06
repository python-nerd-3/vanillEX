// walls

let hugeCopperWall = extend(Wall, "huge-copper-wall", {
    size: 3,
    health: 2880,
    requirements: ItemStack.with(Items.copper, 54),
    buildCostMultiplier: 7,
    buildVisibility: BuildVisibility.shown,
    research: { parent: Blocks.copperWallLarge },
    localizedName: "Huge Copper Wall",
    category: Category.defense,
    description: "Protects structures from enemy projectiles."
})

let hugeTitaniumWall = extend(Wall, "huge-titanium-wall", {
    size: 3,
    health: 3960,
    requirements: ItemStack.with(Items.titanium, 54),
    buildCostMultiplier: 14,
    buildVisibility: BuildVisibility.shown,
    research: { parent: Blocks.titaniumWallLarge },
    localizedName: "Huge Titanium Wall",
    category: Category.defense,
    description: "Protects structures from enemy projectiles."
})

let hugeThoriumWall = extend(Wall, "huge-thorium-wall", {
    size: 3,
    health: 7200,
    requirements: ItemStack.with(Items.thorium, 54),
    buildCostMultiplier: 15,
    buildVisibility: BuildVisibility.shown,
    research: { parent: Blocks.thoriumWallLarge },
    localizedName: "Huge Thorium Wall",
    category: Category.defense,
    description: "Protects structures from enemy projectiles."
})

let hugePlastaniumWall = extend(Wall, "huge-plastanium-wall", {
    size: 3,
    health: 4500,
    requirements: ItemStack.with(Items.metaglass, 18, Items.plastanium, 45),
    buildCostMultiplier: 21.4,
    buildVisibility: BuildVisibility.shown,
    research: { parent: Blocks.plastaniumWallLarge },
    localizedName: "Huge Plastanium Wall",
    category: Category.defense,
    description: "Protects structures from enemy projectiles. Absorbs lasers and electric arcs. Blocks automatic power connections.",
    absorbsLasers: true,
    insulated: true,
})

let hugeSurgeWall = extend(Wall, "huge-surge-wall", {
    size: 3,
    health: 4500,
    requirements: ItemStack.with(Items.surgeAlloy, 54),
    buildCostMultiplier: 16.8,
    buildVisibility: BuildVisibility.shown,
    research: { parent: Blocks.surgeWallLarge },
    localizedName: "Huge Surge Wall",
    category: Category.defense,
    description: "Protects structures from enemy projectiles.",
    lightningChance: 8,
})

let hugePhaseWall = extend(Wall, "huge-phase-wall", {
    size: 3,
    health: 5400,
    requirements: ItemStack.with(Items.phaseFabric, 54),
    buildCostMultiplier: 18.2,
    buildVisibility: BuildVisibility.shown,
    research: { parent: Blocks.phaseWallLarge },
    localizedName: "Huge Phase Wall",
    category: Category.defense,
    description: "Protects structures from enemy projectiles, reflecting most bullets upon impact.",
    deflectChance: 13
})

let hugeBerylliumWall = extend(Wall, "huge-beryllium-wall", {
    size: 3,
    health: 5400,
    requirements: ItemStack.with(Items.beryllium, 54),
    buildCostMultiplier: 15,
    buildVisibility: BuildVisibility.shown,
    research: { parent: Blocks.berylliumWallLarge },
    localizedName: "Huge Beryllium Wall",
    category: Category.defense,
    description: "Protects structures from enemy projectiles.",
})


// you're welcome
Blocks.copperWallLarge.buildCostMultiplier = 3
Blocks.titaniumWallLarge.buildCostMultiplier = 6

// conveyors

let titaniumBridge = extend(ItemBridge, "titanium-bridge", {
    health: 60,
    buildCostMultiplier: 0.4,
    requirements: ItemStack.with(Items.titanium, 10, Items.metaglass, 5, Items.copper, 3),
    range: 6,
    bridgeWidth: 8,
    buildVisibility: BuildVisibility.shown,
    research: {parent: Blocks.titaniumConveyor},
    localizedName: "Titanium Bridge Conveyor",
    category: Category.distribution,
    description: "Transports items over terrain or buildings. Has a longer range than a standard bridge."
})

let pulseBridge = extend(LiquidBridge, "pulse-bridge", {
    health: 85,
    buildCostMultiplier: 0.9,
    requirements: ItemStack.with(Items.titanium, 10, Items.metaglass, 16, Items.graphite, 8),
    range: 6,
    bridgeWidth: 8,
    buildVisibility: BuildVisibility.shown,
    hasLiquids: true,
    liquidCapacity: 16,
    research: {parent: Blocks.pulseConduit},
    localizedName: "Pulse Bridge Conduit",
    category: Category.liquid,
    description: "Transports liquids over terrain or buildings. Has a longer range than a standard bridge conduit."
})

// turrets and bullets

let lyche = extend(ItemTurret, "lyche", {
    health: 1200,
    requirements: ItemStack.with(Items.titanium, 80, Items.silicon, 70, Items.lead, 70),
    localizedName: "Lyche",
    description: "Fires spore-infected bullets at ground targets, sapping them.",
    maxAmmo: 40,
    inaccuracy: 1,
    targetAir: false,
    targetUnderBlocks: false,
    unitSort: UnitSorts.strongest,
    range: 200.0,
    heatColor: Color.valueOf("764c7e"),
    ammoUseEffect: Blocks.lancer.ammoUseEffect,
    shootCone: 12.0,
    shootSound: Sounds.cannon,
    reload: 62.0,
    buildVisibility: BuildVisibility.shown,
    research: Blocks.salvo,
    size: 2,
    ammoTypes: OrderedMap().put(Items.sporePod, extend(BasicBulletType, {
        // i know SapBulletType exists but it's for units
        backColor: Color.valueOf("674673"),
        frontColor: Color.valueOf("764c7e"),
        speed: 2.5,
        damage: 50.0,
        lifetime: 90.0,
        status: StatusEffects.sapped,
        statusDuration: 300.0,
        hitSound: Sounds.sap,
        sprite: "bullet",
        backSprite: null
    }))
})

Blocks.titaniumConveyor.bridgeReplacement = titaniumBridge