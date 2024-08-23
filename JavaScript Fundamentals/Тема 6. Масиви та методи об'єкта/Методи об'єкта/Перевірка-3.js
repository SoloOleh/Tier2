const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Error! Potion ${potionName} is already in your inventory!`;
    } else {
      this.potions.push(potionName);
    }
  },
};

// v2
const atTheOldToad2 = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    for (const potion of this.potions) {
      if (potion === potionName) {
        return `Error! Potion ${potionName} is already in your inventory!`;
      } else {
        this.potions.push(potionName);
      }
    }
  },
};
