# Reference study and design direction

Reference inspected: https://www.derrickjoseph.media/ on October 15, 2026.

## Observations

The desktop homepage has a small wordmark at the left and compact navigation at the right. A large central cutout portrait carries the opening composition; introductory type and supporting copy sit near its lower edges. The page uses Instrument Sans with restrained weights, tight headlines, white backgrounds, and ample space around its content.

The Work section is image-first: three columns of large thumbnails followed by an incomplete second row, with very small gaps. Rounded image corners soften the otherwise minimal composition. Hover states reveal project information, and projects link to dedicated work pages. The bottom switches to a dark, textured contact and footer area with a brief invitation and a small group of navigation and social links.

The experience is concise and easy to scan. The portrait establishes the person; the work establishes the practice; the final contact section provides the next step. The site uses entrance and scroll-triggered text/image transitions, while hover changes stay subordinate to the imagery. Its key design language is restraint, image scale, clean sans-serif typography, and generous breathing room. Its relatively small hero heading and strongly rounded thumbnails are specific choices we deliberately reinterpret to fit the requested oversized typography and sharper editorial direction.

## DavFXStudio interpretation

- Warm white, charcoal, and subtle olive-gray neutrals. Color stays in the work rather than becoming interface decoration.
- Instrument Sans with much larger headlines, tight tracking, fine dividers, and small uppercase section labels.
- A custom monochrome SVG sculpture instead of an invented portrait of David. It provides a distinctive focal point without borrowing the reference’s photographs.
- A staggered, two-column project index with one full-width world-building illustration. Square image edges and asymmetric rhythm give it an editorial character.
- Five clear disciplines: Graphic Design, Photography, Roblox Builds, Websites, and Digital Projects. Filters narrow the index; native dialogs reveal descriptions and credits.
- A plainspoken personal introduction and a dark, large-scale contact invitation linking to David’s supplied email address.
- Soft image scaling, link arrows, a slow sculpture tilt on hover, and smooth anchor scrolling. Reduced-motion preferences disable motion. Content remains visible without scroll-triggered animation dependencies.

All five project images are placeholders, visibly identified. Titles describe illustrative directions rather than fabricated professional projects. David can replace them in one content file, and the index automatically switches to “Selected work” as real projects are added.

## Expanded image system

The revised portfolio adds an editable portrait and three gallery placements per discipline, alongside the existing five cover images and hero. Wide overview images lead each project gallery; detail and process images follow in two columns, stacking on mobile. Neutral, explicitly labeled placeholder artwork keeps incomplete content honest. Gallery captions and alternative text are editable with the project data.

## Delivery

The requested final destination is a pull request in `dav256/portfolio`. The repository already has a working portfolio and Pages deployment; this change extends that implementation. Pages currently serves the older feature branch. The README explains how David can switch to main after merging. The implementation is dependency-free static source. A Framer integration was not found, so this is explicitly a static website, not a Framer project.
