# gta6-meme-x-01 — build notes

## Competition

- gta6-meme-x-01, "Post a GTA 6 meme on X", $500 top 50 (1st $100), no entry fee.
- opensAt 2026-11-19T14:00:00Z, deadline 2026-11-23T14:00:00Z (Mon 23 Nov 23:00 WIT).
- Model: bundle/transcript (no sealed recording). Build session started after opening.
- Repo anchor: `makefun anchor 61df2dd38fb2e230af3190c7a928a201ce9be4f4 round 34098919`
  (drand round after opening), then LICENSE: MIT, both wallet-authored.

## The meme (meme.png, 1600x1600 PNG)

- make.fun's white ghost mascot (thick black outline, sparkle eyes, magenta
  star coin) in a pink Hawaiian shirt, on a couch with a game controller,
  facing a TV showing a neon Vice City sunset street with huge grey WASTED
  text, GTA death-screen style.
- Top caption: "WAITED 13 YEARS FOR GTA 6". Bottom caption: "WASTED IN 13 SECONDS".
- Joke: the thirteen-year wait since GTA V, dead thirteen seconds into GTA 6.
  The ghost is large and central, worked into the scene, not a sticker.
- Gemini design/joke review (gemini-3.5-flash-lite, 2026-11-19): verdict "Post as is"
  — joke lands instantly for a GTA fan, ghost recognisable at 480px, no fix needed.
- Press kit reference: https://make.fun/press/ (mark-1024.png used as the ghost reference).

## Play codes (account @quick-panda-84, fetched live 2026-11-19 ~23:55 WIT)

- n=0: makefun-moped-cub-geyser (USED in the post text draft below)
- n=1: makefun-gallery-vest-radar
- n=2: makefun-corn-wharf-duckling
- n=3: makefun-pylon-violin-blizzard
- Any one passes. Fetched with the `x-api-key` header (the Bearer scheme is
  refused with 401 "sign in required" on this API).

## Post text draft (for the user to post from public @ToshiShop)

```
Waited 13 years for GTA 6. Wasted in 13 seconds. 💀

My agent made this meme — and on make.fun people and their AI agents earn real money winning bounties like this one. @makefunai
https://make.fun/bounty/gta6-meme-x-01
makefun-moped-cub-geyser
```

- Carries the make.fun link + @makefunai tag + play code, and pitches make.fun
  in the meme's own voice. Keep the post up and the account public until results are out.

## Remaining steps (follow-up session, NOT this build)

1. User posts meme.png + the text above from @ToshiShop.
2. Replace the placeholder in POST.json with the real post URL.
3. Re-run main.ts the grader way, run `check --kit . --repo . --transcripts ...`,
   bundle this builder session only, submit before Mon 23 Nov 23:00 WIT.

## main.ts

- Node 22, stdlib only. Copies POST.json to the output dir and verifies the
  copy is complete; also validates POST.json parses and carries a non-empty
  url string, failing loudly otherwise. Written in-session in two revisions.
- Verified the grader way (twice, identical output): see build log below.

## Build log

- 2026-11-19 ~23:53 WIT: builder spawned; competition re-verified live
  (open, acceptingSubmissions true, 0 subs at first sight).
- 2026-11-19 ~23:55 WIT: `makefun init` anchor round 34098919, LICENSE commit.
- 2026-11-19 ~23:56 WIT: meme generated, Gemini review "post as is".
- 2026-11-19 ~23:58 WIT: main.ts written in-session + genuine second revision
  (POST.json shape validation); POST.json placeholder; NOTES.md.
- 2026-11-19 ~23:59 WIT: main.ts verified the grader way twice — exit 0 both,
  out/POST.json byte-identical to POST.json (sha256 09be0a59…), deterministic.
  Post text draft 248 bytes (judge reads ~1100). Entry commit follows.
