# RPG
Let's write a role playing game for the command line with ruby. In this game, our hero battles a never ending line of baddies. How many baddies can you defeat? This app should have it's own repo with a readme that lists any bonus features used.

## Working Together

You will be paired in a group of 2-3 and will be working with your group to get as far as possible by 5:00pm on Friday. Over the weekend, you will add to this as much as possible individually.

In your group you will need to create a new github organization just for this app. Everyone in your group should be members of this organization on Github. Make one repo in this organization for this game.

**Here's the catch**: members of the group rotate pushing commits to github. First one person adds a commit, then the next person adds a commit, then the next person, then repeat. This order cannot be broken (unless accidentally).

Get as far as possible doing this until 5pm.

## Over the weekend
Each member of the group must fork this repository on github and contribute extra commits just in their own repository. Add whatever you want, and see how far you can get.

## What will this look like?

Something like this:
```
$ ruby rpg.rb
Hello and welcome to RPG!
Say your name:
Jake the Snake
Hi Jake the Snake! Lets start battling!
You have 10 health points
A Snake attacks! Do you want to fight? (type 'y' or 'n')
y
You hit the snake for 3 points! (Press Enter)
The snake tries to bite you but misses! (Press Enter)
You hit the snake for 4 points! (Press Enter)
The snake bites you for 2 damage! You have 8 health points. (Press Enter)
You hit the snake for 2 points!
The snake dies!
Your health is restored and you gain an extra health point!
You now have 11 health points total!
A Beaver attacks! Do you want to fight? (type 'y' or 'n')
n
You run away from the Beaver!
A Tortoise attacks!

... and so on ...
```
## Requirements
- You must complete the Basic Game Mechanics (specified below). Everything else is based on how far you get.
- You must give a name to your rpg
- Include a README on the github repo that lists the features you implemented and a text output from a sample game.


## Basic Game Mechanics
**These are the minimum requirements for this app.**
- Before the game starts, ask the user for their name (e.g. `Victanda Urthadar`)
- The hero starts out with 10 hp, or health points.
- First the hero is confronted with a baddie (you choose what types of baddies). They can choose to fight or run away.
- If the user chooses to run away, their hero loses 2 hp.
- If the user chooses to fight then they enter a battle round, where the hero and the baddie alternate attacks
- The hero always gets to make the first attack
- Whenever a hero attacks, they have a 20% chance of completely missing and not hitting their opponent.
- If the attack misses nothing happens
- If the attack lands, the baddie loses 2-4 health points
- Whenever a baddie attacks, it has a 40% chance of missing
- If the attack misses nothing happens
- If the attack lands, the hero loses 1-3 health points
- After every attack, you can optionally print out the health points of the hero and/or the baddie
- If the hero dies announce this fact and end the game
- If the baddie dies:
- restore all of the hero's health points
- award them with 1 more maximum health point
- confront the hero with another baddie


## Advanced Game Mechanics
**These mechanics are a lot more involved. See how far you can get in implementing them.**

- The hero starts with 10 maximum hp, 5 strength, 5 defense, and a name entered by the user.
- The baddies start with 6 max hp, 4 strength, and 4 defense.
- Each battle round the hero has an opportunity to attack or block. The user should be reminded of the hero's and baddie's hp.
- Each battle round the baddie has a 90% chance of attacking instead of blocking, unless its hp is at 50% or lower, in which case it has a 50% chance of attacking.
- When there is an attack, a random number between 1 and the attackers strength is decided (or 'rolled'), as well as a number between 1 and the defenders defense. If the defender is blocking, multiply the rolled defense number by two. Subtract the defense number from the attack number, and if it is positive, subtract that amount from the defender's hp. If it is negative the attack failed and no damage is dealt.
- Each round the hero, if attacking, attacks first. if the baddie is still alive and is attacking it attacks after the hero.
- If the hero's hp falls below zero, the hero has died and the game ends. display how many baddies were defeated.
- If the baddie's hp falls below zero, the baddie is defeated. A new battle begins.
- If the hero defeats 3 baddies, the user can add 1 to hp, strength, or defense to the hero before the next battle. Baddie's maximum hp, strength, and defense each increment by 1.

## Extra Bonuses
###Health Potion:
- The hero has one health potion that sets its hp to maximum and can use instead of attacking or blocking.
- After defeating three baddies the user has the option to get a new potion instead of incrementing one of the hero's abilities.

###Classes:
- The user can choose between 2 classes:
  - A knight, which starts with 8 hp, 6 strength, and 6 defense.
  - A rogue, which starts with 13 hp, 4 strength, and 3 defense.

###Magic:
- The hero starts with 10 maximum magic points (mp).
- In addition to attacking and blocking, the hero can:
  - Cast a heal, which requires 3 mp and restores 2 hp
  - Cast fireball, which costs 7 mp and deducts 5 hp from an attacking baddie or 2 hp from a blocking baddie, regardless of defense.
- Every 3 wins the the mp is restored, and the user has the option to increment the maximum hp by 1 instead of hp, strength, or defense.

###Magic Potion:
- It's just like the health potion, but for magic.

###Lucky Strike:
- 5% of the time an attacker's strength is doubled.

###Make Blocking Worth It:
- Have 2 different heros in a party battling 2 baddies.

###The Sky's The Limit:
- Feel free to come up with your own additional features, but remember to document them in your README.
