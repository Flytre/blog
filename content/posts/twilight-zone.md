---
title: "Twilight Zone"
date: "2026-10-10"
excerpt: ""
category: "Projects"
tags: ["twilight zone", "graphics"]
---

Twilight Zone is a holo card showcase I've been building. It's live at [twilight.flytre.com](https://twilight.flytre.com).

## Website Model

I've decided that each time I work on a project, I will publish whatever I manage to do to \<X\>.flytre.com if possible. This way, there is some record to see what I've been up to (creatively) for myself even if incomplete. I'm too lazy to move it here, but I also jointly developed [16coders.isotau.com](https://16coders.isotau.com)


## Creation

My original intent was to build a new card game, inspired more by STS2 & Dominion & Pokemon, and less so by Balatro & ATO. I have these high expectations for myself that the rules of the game I develop must be genre defining, which I usually can't live up to. Consequentially, I've had a ton of card game ideas that I've never ended up building because I couldn't break through into a gameplay loop that felt balanced, fun, and novel.

Unfortunately, the same happened this time... but I do have some rendering to show off.

I was very inspired by Pokemon & fancy card decks you can buy online, that have holos, reflective surfaces, higher quality card materials, etc. and wanted to render something similar. I also thought this was a good excuse to learn Blender, which kept coming up in conversation over the years.


## Blending

My initial prototype for a holo card was built in Blender. This was my first time using Blender, and it reminded me a lot of it's derivative Blockbench, which I've used to make models for Minecraft minigames before. Eventually I realized there's not exactly a good way to take a blender model with textures/shading/effects, and render it in the browser.

## Browser

I worked with AI to generate the same card, [Night Market](https://twilight.flytre.com/night-market), in the browser. I wanted to build a relaxing background to get lost spinning the card and watching the light reflect on it, and I think the dust motes falling help a lot with that. I bought a subscription to generate images for all the cards.

The backend uses rust, and I've built up a server & preprocessor & text renderer & data driven configs that make adding cards trivial. Lighting is done in the browser, with text rasterizing etc. being preprocessed by a separate job run before starting the server.

## Finale

Unfortunately, I lost motivation when designing all 34 cards and how they fit into the game rules. However, I have a pretty fleshed out spec I think that has the bones of a fun game. One day, I might pick this back up.

## Try It

[twilight.flytre.com](https://twilight.flytre.com)
