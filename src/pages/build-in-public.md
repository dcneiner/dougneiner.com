---
layout: ../layouts/MainLayout.astro
title: Building in public
description: |
    To prove out the value of iteration, and protect against
    being a perfectionist, Doug is building this website in public.
---

# Why does this website look so unfinished?

Its been _years_ since I've done anything with my online presence, so now I am undertaking building my new website. However, as you may be able to tell from the state of this website, something isn't quite right…

## Putting iteration to the test

I've worked in web product development for over 12 years. The idea of releasing early, getting feedback and iterating is a core concept in Agile development and one I say I believe in. However, I regularly have very high expectations on the work I do regardless of if is a woodworking project, new React component or special meal for my family. To practice what I preach – and as a safety net to keep me from trying to make this website perfect before I launch – I've decided to build it in public for all to see!

If you are interested, you can see [all my commits on Github](https://github.com/dcneiner/dougneiner.com/commits/main/). Feel free to follow along or even make suggestions over on the repo!

## Open source and knowledge sharing

I don't have a formal computer science background, so I'd be most commonly described as a self-taught software engineer. However, that term "self-taught" has never sat well with me. While I _have_ learned a lot on my own, those learnings are continually intertwined and influenced by all the amazing people who have freely shared their knowledge, experiments and musings.

In that vein, the [source of the site is available](https://github.com/dcneiner/dougneiner.com) and MIT licensed. I have no idea if it will be useful to anyone else, but I hope as the build continues there will something there for others!

Of course this isn't entirely out of good will… I'm hoping there is a real chance I get some constructive feedback from others that can help make what I am doing even better!

## About the tech

I've used a number of static site generators over the years, but I've heard good things about [Astro](https://astro.build/) and decided to use it for this project. (I've also had good luck with [Eleventy](https://www.11ty.dev/) for my [hobby woodworking site](https://dnhandcrafted.com/)).

I'm not sure how much client side interactivity I'll add to this site, so I'll likely stick to vanilla JS until it makes sense to add something more. I'll be trying to leverage native CSS features as much as possible, so I don't plan on using a post-processor other than the scoping magic that is built into Astro.