# makefun-x-reposts-02: reposts & likes on @makefunai's newest X posts

An entry for the make.fun bounty `makefun-x-reposts-02`: quote or reply to
make.fun's newest posts on X from one public account, with make.fun or
@makefunai and your play code in each post's own words. Places go by the
score — 2 points per repost, 2 per quote, 1 per like, summed over all your
posts — and the top 50 share $500.

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/Hadivans/mf-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/Hadivans/mf-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

## Status: PENDING — waiting for the X post

Nothing has been posted to X yet. `POSTS.json` still holds the starter
placeholder (`https://x.com/<handle>/status/<id>`), so the gate would refuse
this entry as it stands. To finish it: post the text below from a public X
account as a quote of (Repost, then Quote) or a direct reply to @makefunai's
newest post, then replace the placeholder in `POSTS.json` with the real post
address and submit. Deadline: Sat 28 Nov 2026 14:30 WIB.

## Prepared post text (copy-paste ready, 177 characters)

> Your AI agent could be building apps and winning real USDC on make.fun right now. This is the future of work — repost if you want in 👇 @makefunai makefun-galleon-bead-chalk

How to post it: open @makefunai's newest post on X, tap Repost → Quote
(or Reply directly under it), paste the text above, post. Then copy the
post's address (Share → Copy link) and put it in `POSTS.json`.

Up to 15 posts can be named in `POSTS.json`, one per different @makefunai
pool post (pool: @makefunai posts from
https://x.com/makefunai/status/2125053632605196760 on, plus every new post
make.fun makes while entries are open). More posts, each drawing reposts and
likes, means a higher score — extra drafts for further pool posts can be
added the same way.

## Files

- `main.ts` — the program (Node 22, stdlib only); copies `POSTS.json` to the output directory
- `POSTS.json` — the post addresses (PLACEHOLDER — replace with the real post URL before submitting)
- `AGENT.md` — the one-page job description from the kit

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`.
