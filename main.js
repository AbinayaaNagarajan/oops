// Part 1: Creating Basic Objects

// Robin and companion objects
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
      name: "Leo",
      type: "Cat",
      companion: {
        name: "Frank",
        type: "Flea",
        belongings: ["small hat", "sunglasses"]
      }
    },
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  };
  

  adventurer.roll();
//   // Part 2: Class Fantasy
  
//   // Character class
  class Character {
     constructor(name) {
       this.name = name;
      this.health = 100;
      this.inventory = [];
     }
  
    roll(mod = 0) {
     const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
  
//   // Adventurer class
  class Adventurer extends Character {
     constructor(name, role) {
      super(name);
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
     scout() {
       console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
   }
  
//   // Part 3: Class Features
  
//   // Companion class
   class Companion extends Character {
    constructor(name, type) {
      super(name);
      this.type = type;
    }
   }
  
//   // Part 4: Class Uniforms
  
//   // Character class with static properties

// // Base class
 // Base class
class Character1 {
    static MAX_HEALTH = 100;
  
    constructor(name) {
      this.name = name;
      this.health = Character.MAX_HEALTH;
      this.inventory = [];
    }
  
    roll(mod = 0) {
      const result = Math.floor(Math.random() * 20) + 1 + mod;
      console.log(`${this.name} rolled a ${result}.`);
    }
  }
  
  // Adventurer class
  class Adventurer1 extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
  
    constructor(name, role) {
      super(name);
      if (!Adventurer.ROLES.includes(role)) {
        throw new Error("Invalid role");
      }
      this.role = role;
      this.inventory.push("bedroll", "50 gold coins");
    }
  
    scout() {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  
    // ...

duel(opponent) {
    while (this.health > 0 && opponent.health > 0) {
      const thisRoll = this.roll();
      const opponentRoll = opponent.roll();
  
      if (thisRoll <= opponentRoll) {
        this.health -= 1;
      } else {
        opponent.health -= 1;
      }
  
      console.log(`${this.name} rolled ${thisRoll}, ${opponent.name} rolled ${opponentRoll}.`);
      console.log(`${this.name}'s health: ${this.health}, ${opponent.name}'s health: ${opponent.health}.`);
    }
  
    const winner = this.health > 0 ? this.name : opponent.name;
    console.log(`${winner} wins the duel!`);
  }
  }  
  
  // Example usage:
  const adventurer1 = new Adventurer("Hero1", "Fighter");
  const adventurer2 = new Adventurer("Hero2", "Wizard");
 
  