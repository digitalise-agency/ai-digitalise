# ai-digitalise

**The live site is now in here, under `live-site/`.** Imported 2026-08-23,
byte for byte from `/root/ai.digitalise.agency` on the VPS, which until that day
was the only copy in existence.

`new-design-reference/` is a separate thing: a proposed redesign, deployed
nowhere. Do not confuse the two.

## What is actually where

| Version | Where it lives | In git? |
|---|---|---|
| The live site | `/root/ai.digitalise.agency` on the VPS | **Yes, now.** Mirrored here in `live-site/` since 2026-08-23 |
| An unlisted preview | served at `/second-option-test-it-out/` | **No** |
| `new-design-reference/` | This repository | Yes, and deployed nowhere |

The repository's `index.html` and the live one differ. `ai.digitalise.agency`
answers 200 and Caddy serves it from `/root/ai.digitalise.agency` with gzip and
zstd encoding, an access log and the shared security headers. That vhost lives
in the `auth-digitalise` repository, at `edge/Caddyfile`, not here.

## What was fixed, and what is still owed

The live site is now in version control. It was not, until 2026-08-23: one
directory on one machine, owned by `ubuntu`, no history, nothing to diff
against. The sister repository `salmanadnan-com` was in the same state and was
imported the same day.

**What is still owed: nothing syncs the two.** `live-site/` is a snapshot taken
on the day it was imported. Edit the box and this goes stale; edit this and the
box never sees it. Until a deploy path exists, treat the box as authoritative
and re-import after changing it:

```bash
rsync -az --delete --exclude '.git' da:/root/ai.digitalise.agency/ live-site/
git diff --stat
```

If that diff is ever non-empty when you did not expect it, somebody edited the
live site by hand.

## The deploy workflow is disabled

`.github/workflows-disabled/deploy.yml.disabled` would ship a `[deploy]`-marked
push to the live directory over SSH. It is disabled on purpose, and it should
stay that way while this repository holds a different design from the live site:
enabling it would replace the real site with an unfinished one.

## The reference design

`new-design-reference/` is a proposed redesign: one page, its stylesheet and one
script. Every asset it references is present, and `assets/ASSETS.md` records
what is still wanted before launch.
