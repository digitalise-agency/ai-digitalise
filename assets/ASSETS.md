# Assets checklist — ai.digitalise.agency

Drop real assets here, then update the HTML as noted.

## Required before launch

| File | Size | Where used | HTML change needed |
|---|---|---|---|
| `videos/hero-1.mp4` | under 8MB | Hero background tiles | Swap .tile-blue .tile-thumb div for `<video autoplay muted loop playsinline>` |
| `logos/client-1.svg` | any | Proof section | Replace `pa1`/`pa2` avatar initials with `<img>` |
| `logos/client-2.svg` | any | Proof section | Same |
| `logos/client-3.svg` | any | Proof section | Same |
| `thumbs/port-1.jpg` | 800x450px | Portfolio card 1 | Add `style="background-image:url('/assets/thumbs/port-1.jpg')"` to `.pt1` |
| `thumbs/port-2.jpg` | 800x450px | Portfolio card 2 | Same pattern for `.pt2` through `.pt6` |
| `thumbs/port-3.jpg` | 800x450px | Portfolio card 3 | |
| `thumbs/port-4.jpg` | 800x450px | Portfolio card 4 | |
| `thumbs/port-5.jpg` | 800x450px | Portfolio card 5 | |
| `thumbs/port-6.jpg` | 800x450px | Portfolio card 6 | |
| `favicon.svg` | 32x32 | Browser tab | Add `<link rel="icon" href="/assets/favicon.svg">` to `<head>` |
| `og-image.png` | 1200x630px | Social share preview | Update `og:image` meta tag |

## Numbers to update (index.html metrics band)

Search for `data-target` in `index.html` and replace all four values with real numbers verified from Gantry / n8n data.

## Booking link

Search for `YOUR_CAL_LINK` in `index.html` and replace with the actual Cal.com or Calendly URL.
For a full inline calendar embed, replace the `<a>` tag with the Cal.com embed snippet from cal.com/docs/embeds.

## Client proof section

Three `<!-- UPDATE -->` comments in the proof section mark where real client names and companies go.
