# ai-digitalise

**This repository is not the live site.** Checked on 2026-08-23, and worth
stating plainly before anyone edits something here expecting it to ship.

## What is actually where

| Version | Where it lives | In git? |
|---|---|---|
| The live site | `/root/ai.digitalise.agency` on the VPS | **No.** Not a checkout, not in any repository here |
| An unlisted preview | served at `/second-option-test-it-out/` | **No** |
| `new-design-reference/` | This repository | Yes, and deployed nowhere |

The repository's `index.html` and the live one differ. `ai.digitalise.agency`
answers 200 and Caddy serves it from `/root/ai.digitalise.agency` with gzip and
zstd encoding, an access log and the shared security headers. That vhost lives
in the `auth-digitalise` repository, at `edge/Caddyfile`, not here.

## The thing worth fixing

**The live site is in no repository at all.** It sits in one directory on one
machine, owned by `ubuntu`, and if that disk goes the site goes with it. No
history, nothing to diff against, no way to tell what changed or when.

The sister repository `salmanadnan-com` is in exactly the same state, and both
live directories descend from the same starting template. Whatever is decided
for one should probably be decided for both.

## The deploy workflow is disabled

`.github/workflows-disabled/deploy.yml.disabled` would ship a `[deploy]`-marked
push to the live directory over SSH. It is disabled on purpose, and it should
stay that way while this repository holds a different design from the live site:
enabling it would replace the real site with an unfinished one.

## The reference design

`new-design-reference/` is a proposed redesign: one page, its stylesheet and one
script. Every asset it references is present, and `assets/ASSETS.md` records
what is still wanted before launch.
