# DavFXStudio

David’s independent creative portfolio, built with HTML, CSS, JavaScript, and original SVG artwork. An editorial, monochrome direction inspired by the restrained typography and image-led presentation of [Derrick Joseph’s portfolio](https://www.derrickjoseph.media/), with an original layout, branding, copy, and artwork.

## Run locally

Requires Node.js 20 or newer. No dependencies or build step.

```sh
npm start
```

Open `http://127.0.0.1:4173/portfolio/`. The `/portfolio/` prefix mirrors the GitHub Pages project URL. Run `npm run check` to verify the content, assets, JavaScript syntax, and internal links.

## Update the portfolio

Edit `content.js`. Each project has a title, discipline, medium, image, alt text, description, and `placeholder` flag. Add objects to the `projects` array to add work. Counts update automatically. Keep categories consistent with the five filter labels in `index.html`.

1. Put David’s project images in `assets/` with descriptive filenames.
2. Replace each sample’s `image`, `alt`, `title`, `medium`, and `description`.
3. Set `placeholder: false` for real projects. Remove stock-image `credit` when replacing that photo.
4. The section title automatically changes from “Selected directions” to “Selected work” once real work is added. The sample notice disappears when all placeholders are replaced.

The public email is `dgarner.whs@gmail.com`, as supplied. Update `email` and `socials` in `content.js` to change contact details. Keep the fallback mail links in `index.html` in sync if changing the address. GitHub is the only social profile currently supplied and verified. Update the introductory and About copy directly in `index.html` and styles in `styles.css`.

## Hero, portrait, and project galleries

There are 22 image placements: a hero, a portrait, five project covers, and three gallery images for each of the five projects. All sample imagery is clearly identified. Edit `hero` and `portrait` in `content.js` to replace the opening visual and About portrait.

To customize a project's gallery, add a `gallery` array inside its project object. The shared defaults at the end of `content.js` only fill projects without their own gallery:

```js
gallery: [
  { image: 'assets/my-project-overview.jpg', alt: 'Describe the actual image', caption: '01 / Overview', placeholder: false },
  { image: 'assets/my-project-detail.jpg', alt: 'Describe the detail', caption: '02 / Detail', placeholder: false },
  { image: 'assets/my-project-process.jpg', alt: 'Describe the process', caption: '03 / Process', placeholder: false }
],
```

Recommended dimensions: 1200 × 900 for galleries, 600 × 750 for the portrait. Use optimized JPG, PNG, WebP, or SVG files. Images use `object-fit: cover`; keep key details away from the edges. No CMS or paid subscription is required.

## Publishing the updated version

GitHub Pages is already enabled and was serving the `feat/davfxstudio-portfolio` branch when checked on October 15, 2026. This update is delivered in a new pull request; it does not overwrite the deployed branch. There is no deployment workflow.

After reviewing and merging the pull request, David can publish the current version:

1. Open this repository’s **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then **Save**.
4. GitHub will report the deployment URL, expected to be `https://dav256.github.io/portfolio/`.

Relative paths support the `/portfolio/` base path, and `.nojekyll` keeps this a plain static site. Hosting does not require npm, a backend, API keys, or a paid service.

## Design and content notes

- Responsive layouts for desktop, tablet, and mobile; native anchor navigation; keyboard-operable project dialogs; visible focus states; category filters with live announcements; reduced-motion support.
- All five project entries are clearly marked illustrative placeholders, not work or achievements attributed to David. No clients, awards, testimonials, or professional claims are fabricated.
- The hero sculpture, typographic poster, world-building illustration, web concept, generative line study, and favicon are original editable SVGs created for this layout. The Roblox sample is a conceptual illustration, not a Roblox screenshot.
- Photography placeholder: [Daniele Levis Pelusi on Unsplash](https://unsplash.com/photos/white-concrete-building-with-black-background-KyxFocaDb04), used under the [Unsplash License](https://unsplash.com/license). The grayscale image is stored locally; its source is credited in the project detail view.
- Instrument Sans is self-hosted; its SIL Open Font License is included in `assets/FONT-LICENSE.txt`.
- No tracking, cookies, remote runtime image requests, or external font requests.
- This is a working static implementation for GitHub, not a Framer project. No Framer integration was available. The structure and design can be recreated in Framer if David later chooses that platform.

`DESIGN.md` documents the reference analysis and original design direction.
