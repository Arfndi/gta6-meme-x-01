// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: this program only hands the gate the
// address of that post. It copies POST.json from the repository root to
// the output directory, where the gate reads it, fetches the post from X
// (its first picture and its text) and hands that dossier to the judge.
// Nothing this program writes about the post is judged.
//
// POST.json still holds the starter placeholder until the meme is posted
// on X; the follow-up session replaces it with the real post address
// (https://x.com/<handle>/status/<id>) before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE_PATH = join(BOT_DIR, 'POST.json');
const TARGET_PATH = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  const source = readFileSync(SOURCE_PATH);
  if (source.length === 0) {
    throw new Error('POST.json is empty');
  }
  const parsed: unknown = JSON.parse(source.toString('utf8'));
  if (
    typeof parsed !== 'object' ||
    parsed === null ||
    typeof (parsed as { url?: unknown }).url !== 'string' ||
    (parsed as { url: string }).url.length === 0
  ) {
    throw new Error('POST.json must be an object with a non-empty url string');
  }
  copyFileSync(SOURCE_PATH, TARGET_PATH);
  if (statSync(TARGET_PATH).size !== source.length) {
    throw new Error('POST.json copy is incomplete');
  }
} catch (err) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
