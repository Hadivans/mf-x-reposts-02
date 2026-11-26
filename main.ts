// makefun-x-reposts-02 entry (Node 22, standard library only).
//
// The entry is the posts themselves: posts of your own on X, all from one
// public account, each quoting or replying directly to a different one of
// make.fun's newest posts on x.com/makefunai, with make.fun or @makefunai and
// your play code in each one's own words. POSTS.json names those posts, and
// the house reads their reposts, quotes and likes from X to score the entry:
// 2 points per repost, 2 per quote, 1 per like, summed over all posts.
//
// All this program has to do is hand POSTS.json to the grader: it copies
// POSTS.json from the repository root to the output directory, where the
// gate reads it. Nothing this program writes about the posts is scored.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const raw = readFileSync(join(BOT_DIR, 'POSTS.json'), 'utf8');
  const data = JSON.parse(raw) as unknown;
  if (typeof data !== 'object' || data === null || !Array.isArray((data as { posts?: unknown }).posts)) {
    throw new Error('POSTS.json is invalid: expected a JSON object with a "posts" array');
  }
} catch (err) {
  console.error(`POSTS.json failed validation in ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
try {
  copyFileSync(join(BOT_DIR, 'POSTS.json'), join(OUTPUT_DIR, 'POSTS.json'));
} catch (err) {
  console.error(`POSTS.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
