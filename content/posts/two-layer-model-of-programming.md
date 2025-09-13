---
title: "The Two Layer Model of Classical Programming"
date: "2025-09-13"
excerpt: ""
category: "Technology"
tags: ["technology"]
---

Over time, I've realized that programming consists of two things: thinking about what code needs to be written, and mechanically writing that code. I've also realized the first part is a lot more fun for me than the second. I love reasoning through problems but I dislike the physical act of writing the code that solves them.

This is analogous to how skill is described in video games, which split it into strategy/macro and execution/micro. In league of legends, for example, a player with excellent micro may be able to get up to 90th percentile but plateau because their high level vision for the game is wrong. Similarly, if they know what plays to make but don't have the dexterity, reflexes, and muscle memory to execute them, they will also plateau.

## Genesis

For a long time, I used to game on a trackpad. Because of this, my 'micro' was terrible in every game I played. I would lose every fight in Minecraft, toss projectiles backwards in league of legends, and generally just have a bad time. I compensated by playing games with obscure mechanics and using pacifist strategies like camping, which revolves around waiting for everyone else to die so you can pick off the survivors like vultures.

At some point, I invested in a mouse because I realized you literally couldn't play shooters without one. A trackpad doesn't let you right and left click at the same time, wholly making scoping impossible. Within weeks, I was already better than I had ever been with a trackpad. In an effort to play catch up with my gamer friends, I became obsessed with aim trainers, which promised to improve mouse skills via drilling them. It worked, and I became great with a mouse.

This obsession with gaming micro and my dislike of the 'micro' of coding has lead to a pseduo-obsession with optimizing my coding setup. This includes my editor, editor settings, keyboard, and to a lesser extent my mouse.

## The Journey to Better Micro

In high school, I used to use Jetbrains for everything. I had toyed around with Atom, and hated how slow and awkward using plugin-based text editors were. This dislike has continued to this day and is partially why I've never really used VSCode. 

Jetbrains was fast, and as an IDE it came with lots of really useful tools. Over the thousands of hours I spent building random projects in high school, I learnt the ins and outs of refactoring, searching, debugging, etc. with it. Even better, I could switch languages seemlessly and my muscle memory worked between all the Jetbrains IDEs. 

In college, I wanted to apply my optimization of gaming micro to programming to make it more fun. I debated between learning Emacs and Vim, and ended up going with Emacs because it was programmable via Lisp. I had an obsession with Lisp after one too many Paul Graham articles and figured this would be good way to get exposure. I also thought the idea of having to press 3 keys just to type a character in Vim was ludicrous (insert mode -> character -> esc). 

Over months, using Emacs made editing a lot easier for me. I gradually used my mouse less and less and the keyboard more and more. My trick was to use Emacs "to-frustration" each day. I would use Emacs until I got really frustrated by feeling slow, then switch to Jetbrains for the rest of the day. This taught me the editor without risking burnout. Emacs infamously requires heavy usage of the control key. By swapping escape and caps lock in mac settings, I didn't have to worry about pinky pain ("Emacs pinky").

I later switched to Spacemacs after reading about it on the internet. Spacemacs is a heavily modded version of Emacs designed to add a bunch of useful plugins and provide hybrid vim editing in Emacs. Via Karabiner Elements, I was able to get my caps lock key to dually work as a control and escape key so I could swap between vim modes and still use emacs shortcuts. The benefit of Spacemacs that users get a superset of the functionality of emacs and vim, which is hyper efficient for coding. Spacemacs comes with 100s of new keybinds that I slowly learnt over time. At this point, writing code started to feel painless and enjoyable rather than a chore. If I wanted to edit my code in any reasonable way, there was an intuitive combination of shortcuts that could do it for me.

At a new job, I found people using all sorts of weird and non-standard keyboards and it really inspired me to look at new keyboards. I ended up buying a Kinesis Advantage 360, which has several benefits over a standard keyboard. Its split, which makes it more adjustable. Its also curved, which provides excellent wrist support and is a more natural position for most hands. It has an adjustable tilt to prevent wrist strain. It comes with a thumb cluster that makes 2 keys easily accessible to each thumb (instead of 0.5 - spacebar). Finally and most importantly, its wholly hardware remappable via ZMK, an API for advanced keyboard hardware reprogramming.

I jumped at the chance to reprogram my keyboard and make tricky keys to hit a lot easier to reach. The con of using Spacemacs over a standard editor like VSCode is that all the modifier keys get used constantly. In addition, on a standard keyboard many symbols are really hard to type like curlu braces. Having the right settings has made typing very comfortable for me as all the random symbols and modifiers I need are easily accessible. Not having to move my hand to hit escape, control, command, backspace, underscore etc. has drastically improved my typing speed when coding.

One thing that's happened is that my keyboard itself is modal, just like vim. For example, I made it so if I click a thumb key, the next key I type is treated as a symbol. So 'a' might become =, 's' is remapped to +, etc. Hence, my hands don't need to leave the homerow to type symbols. I've also put all my modifier keys on the home row, so that for example tapping the F-key signals an 'f' but holding it signals a shift code. This makes all keyboard shortcuts much easier to type.

If this has piqued your interest in optimizing your coding mechanics, i'd highly recommend starting by learning Vim: A suprising number of sites have integrated Vim natively, including Leetcode, Jupyter Notebooks, and Reddit making it super valuable to know.

## Aside on AI

Someone might say optimizing for micro is become redundant because of AI, which can take over a lot of the tedium of writing code. I agree in some cases: code that is frequently written, full of boilerplate, etc. should absolutely be automated via LLMs. However, niche fields, novel algorithms, weird languages and such causes LLMs to produce gibberish at a high rate. As I code mostly in these spaces for my jobs, which use obscure languages, niche business logic, and closed source libraries, I've found that writing code classically is (for now) much more efficient than using AI.