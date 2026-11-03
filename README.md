# Vidhi-Vidhan · विधि-विधान

Every ritual, done your family's way.

Vidhi-Vidhan helps families with festivals and life events: what to prepare, when to do it, and how to do the puja step by step, in the tradition their family actually follows.

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | Soft-launch website in English, Hindi, Kannada, Tamil and Telugu, with an interactive puja demo |
| `config.js` | Shared settings: the Google Form link |
| `og.jpg` | Share preview image |
| `app/` | The app preview visitors open from "Try the app": Deepavali plan, samagri, guided puja, family notes, life events. Everything a visitor does stays in their own browser. |

Both are single static HTML files with no build step.

## Hosting with GitHub Pages

Settings → Pages → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)`. The site appears at `https://<username>.github.io/vidhi-vidhan/` and the app preview at `/app/`.

## Settings (`config.js`)

Everything you need to fill in before sharing lives in `config.js`: the Google Form link, the GoatCounter analytics code, the founder note, the content reviewer, and which languages the site offers. Anything left empty stays hidden.

## Share preview

`og.jpg` (1200×630) is the image LinkedIn, X and WhatsApp show when the site link is shared.

## Note on content

Ritual steps and translations are draft content. They will be reviewed by priests, elders and native speakers before launch.
