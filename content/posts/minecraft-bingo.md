---
title: "Minecraft Bingo"
date: "2025-11-05"
excerpt: ""
category: "Minecraft"
tags: ["minecraft"]
---

Minecraft Bingo is a game I first created circa ~2020 and have been maintaining since. I just recently updated the game to work on 1.21.10, which inspired this post.


[Trailer](https://www.youtube.com/watch?v=ioYySTJlKoQ)

[Github](https://www.github.com/flytre/bingo)

## Gameplay

Each round, you're given a 5x5 minecraft bingo board of blocks and items. You're then teleported millions of blocks out into the world randomly. Your goal is to collect these items in survival mode to get a bingo as quick as possible.

Bingo was designed with multiplayer support in mind. Players can form up to four collaborative teams. 

## Additional Details


Bingo can be played in one of four modes:
- Bingo: The classic bingo as described above
- Lockout: The first team to get each item locks it out, preventing our teams from getting it. Teams can alternatively win by getting enough items, even without a bingo.
- Manhunt: Red team becomes hunters whose only goal is to kill players trying to get a bingo. Once killed, players join the hunters team.
- Blackout: A team must get all 25 items to win! Not recommended for beginners.

Which items bingo boards are made up of is also customizable. There are three presets to choose from:

- Normal: Designed with a 10 to 20 minute game in mind.
- Speed: Shorter 3 to 10 minute blitz rounds as the items are generally easier to acquire.
- Nether: Only has items that are possible to get without leaving the Nether. Teams spawn in the Nether instead.

There are a few other neat features bingo has:

- Team Teleports: Team members can teleport to each other using the command `/trigger team_tp`
- Clarify: Players can confirm what an item on the board is via the comment `/trigger clarify set <1-25>`. 
- PvP: A toggable setting to start teams close to each other so fights are more likely.
- Death: whether to keep inventories, provide starter tools on respawn, or do nothing at all on death.
- Supply Drops: if turned on, after a large amount of time has passed, a supply drop will spawn with missing bingo items for the team that gets to it first. Inspiration: Mineplex hunger games.

## Technical Details


### Generating the Board
This section is intended for programmers and minecraft engineers.

Bingo represents the state of the board using a Minecraft map. Maps are 128x128 and display blocks in a 128x128 area. Each pixel on the map is assigned a color based on the relative altitude of the block and the type of block. Each block in Minecraft is explicitly assigned a map color in the code.

This makes it possible to dynamically render 128x128 images on maps by configuring blocks in the map's region in a certain way. Here is an example of a 128x128 region representing a bingo board:

![Bingo board example](/images/bingo-board-physical.png)

This means we just need to be able to programmatically fill in our 5x5 grid with builds designed to represent bingo items. Luckily, Minecraft has just the tool for this: the structure block. The structure block reads an NBT (named binary format) file representing a build and pastes it into the world. 

It would be a lot of work to build these structures by hand for the 200 possible items that can appear on a bingo board. I opted to programmatically generate them. Each block and item in Minecraft has a 16x16 sprite that I programmatically translate into a 16x16 structure. Since our map renders at 128x128, there's space to create a 5x5 grid for a bingo board.

To write the structure file generator, I borrowed the NBT library from Minecraft's source code. I wrote an algorithm that finds the closest map color to each pixel, and recreates that color by placing a block with that map color at the correct vertical offset. This gives a result like what the picture shows.

The added benefit is that each time Minecraft releases a new update, I can just paste the sprites for that version (which itself happens via a script) and re-generate all structures. This will helpfully generate structures for new blocks/items and fix structures for any items and blocks whose sprites got updated. 

### Changing Item Sets on the Fly 
After each balance patch or Minecraft update, I need to add/remove items from each bingo item set. For example, a given item may become harder to get so it needs to be removed. Alternatively, a new item from the update could be a good fit for bingo and should be included. If I can't make item set changes like this quickly, maintaining bingo becomes impossible. Each bingo item set has a txt file listing the items and weights in that pool (by default, 720720 since Minecraft function works best with integers):
```
glow_item_frame item
glowstone_dust item
golden_carrot item
golden_sword item 480480
golden_axe item 480480
```

We want to be able to take in an arbitrary list of this sort and tell bingo to use it as the active item set when generating the board. Due to the limitations of Minecraft function, we can't simply set some variables that hold the contents of this list. Each time we update an item set, we will need to create a datapack (read: folder) of code that re-programs most of the bingo game using this item set. In game, by enabling and disabling the various item set datapacks, Minecraft can switch between the normal, speed, and nether modes.

This is where Java comes in. I use Java to read in each item set's lists and expand some template skeletons of Minecraft function code to generate datapacks customized with a given item set file. The templates are read by the Velocity Template Java library and expanded.

Here's an example:

```
...
#foreach($k in [1..25])
execute if score $item global matches $k at @e[type=armor_stand,tag=bingo,tag=$k] run function flytre:set_corner/base
execute if score $item global matches $k run scoreboard players operation red board_$k = red $item
execute if score $item global matches $k run scoreboard players operation yellow board_$k = yellow $item
execute if score $item global matches $k run scoreboard players operation green board_$k = green $item
execute if score $item global matches $k run scoreboard players operation blue board_$k = blue $item
execute if score $item global matches $k run scoreboard players operation completed board_$k = completed $item    
#end
...
```
For each item in the item set, this function is first expanded by Velocity. The resultant file is then renamed and moved into that item set's datapack. Velocity also convieniently supports for loops and other quality of life features that Minecraft function does not have.

This makes it super easy for me to update an item set in just a minute and has the added benefit of shortening Bingo's code as we can use Velocity macros to expand static loops.

## Installation

Bingo is available in two places:

1. On Minecraft Realms. Bingo has been published by Mojang to Realms. To find Bingo here, you must use your free Realms trial or have an active subscription. In the minigame slot, you can select Bingo from the minigames selection menu.

2. As a download on this page. After downloading the world, you'll need to extract it and put it in your saves folder or upload it to your server's world.

By Minecraft version:

[1.16.x](https://www.dropbox.com/s/brjlipc6excyxvt/bingo_release.zip?dl=1)  
[1.17.x](https://www.dropbox.com/s/qb0jckfepmwrni6/bingo_release_1_17%202.zip?dl=1)  
[1.18.x](https://www.dropbox.com/s/dkrdh979j26rhd6/bingo_release_1_18.zip?dl=1)  
[1.19.x](https://www.dropbox.com/s/yulnjuqfic7xtyv/bingo_1.19.zip?dl=1)  
[1.20.2–4](https://www.dropbox.com/scl/fi/th0rcze4qwsxv4hvagfl6/bingo_1.1.0.zip?rlkey=hveeae8j8joixwm2ueosfeexc&dl=1)  
[1.21.5](https://www.dropbox.com/scl/fi/naz7zsfu2kl9ki29cxcsa/bingo_1_21_5.zip?rlkey=ca32h5au28afrqolek59pjmbx&st=ir7l96ym&dl=1)  
[1.21.9-10](https://www.dropbox.com/scl/fi/umd18guaf4fom7kwgvesr/bingo_1_21_10.zip?rlkey=yetylght5in394vjgtbrqsuo5&st=e3unwaq2&dl=1)
