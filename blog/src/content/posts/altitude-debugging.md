---
title: Altitude Debugging
date: 2026-04-16
description: Moving to Colorado taught me something unexpected about how I work.
---

I moved to Colorado in 2020. The mountains were the point. I did not expect that living at 5,000 feet would change how I think about debugging, but here we are.

## The instinct to thrash

When something is broken, my old instinct was to start changing things immediately. Try this, try that, add a log, add another log, stare at it until something moves. It's anxious energy dressed up as productivity.

You hike slower at altitude until you adjust. You stop more. You actually look around instead of just grinding forward. I started doing the same thing at my desk.

## What slowing down looks like

Before touching anything, I ask:

1. What do I *actually* know?
2. What do I *think* I know that I haven't verified?
3. Where did I last have solid ground?

The error message is usually telling me exactly what's wrong. The problem is I skim it looking for something familiar instead of reading it.

> Most bugs I've fixed in the last few years I fixed by reading more carefully before touching anything.

## A concrete example

Say I get this:

```
TypeError: Cannot read properties of undefined (reading 'map')
```

Old me: immediately starts checking if the array exists, adds optional chaining everywhere, reruns.

New me: reads the full stack trace first. Finds the actual line. Asks why that value is undefined *at that point* rather than patching around it.

Nine times out of ten the issue is one level up from where I'm looking.

---

The mountains are great and I'd recommend them. The altitude thing was a bonus.
