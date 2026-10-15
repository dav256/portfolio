/* Edit this file to update the portfolio. Image paths are relative to index.html.
   Set placeholder: false only after replacing sample content with David's work.
   Only publish contact details and social profiles David wants made public. */
window.PORTFOLIO = {
  hero: { image: 'assets/form-study.svg', alt: 'Abstract silver form study — a placeholder for David’s featured creative image', caption: 'FORM STUDY — 001' },
  portrait: { image: 'assets/portrait-placeholder.svg', alt: 'Portrait placeholder, ready for a photograph of David' },
  email: 'dgarner.whs@gmail.com',
  socials: [{ label: 'GitHub', url: 'https://github.com/dav256' }],
  projects: [
    {
      id: 'type-in-motion', number: '01', title: 'Type, with a point of view.',
      category: 'Graphic Design', medium: 'Typography / Visual identity',
      image: 'assets/type-study.svg', alt: 'Black and cream editorial poster with oversized FORM typography and a geometric star',
      description: 'An illustrative exploration of bold typography, contrast, and editorial composition. This sample shows how a graphic design project can be presented; replace it with David’s own posters, identities, or layouts.',
      placeholder: true
    },
    {
      id: 'light-and-lines', number: '02', title: 'A different way of looking.',
      category: 'Photography', medium: 'Light / Architecture / Detail',
      image: 'assets/architecture.jpg', alt: 'Monochrome architectural photograph looking up at the sharp lines of a concrete building',
      description: 'A space for photographic stories, details, and unexpected perspectives. The image shown is a stock placeholder, not a photograph by David. Replace it with his photography and the story behind it.',
      credit: { label: 'Placeholder photograph by Daniele Levis Pelusi / Unsplash', url: 'https://unsplash.com/photos/white-concrete-building-with-black-background-KyxFocaDb04' },
      placeholder: true
    },
    {
      id: 'world-building', number: '03', title: 'Small details. Entire worlds.',
      category: 'Roblox Builds', medium: 'Spatial design / World building',
      image: 'assets/world-study.svg', alt: 'Original isometric block architecture concept with a courtyard, stepped towers, and trees in neutral tones',
      description: 'A place for the worlds David builds in Roblox: spaces, structures, and the details that make them feel alive. This illustration is a conceptual placeholder, not a screenshot from a completed Roblox experience.',
      placeholder: true
    },
    {
      id: 'digital-spaces', number: '04', title: 'Made for the way we move.',
      category: 'Websites', medium: 'Web design / Digital experiences',
      image: 'assets/web-study.svg', alt: 'Editorial website layout concept showing a sculptural object, oversized typography, and a modular grid',
      description: 'A clean canvas for David’s website projects, from the first visual direction to the finished responsive experience. The layout shown is an illustrative design concept, ready to be replaced with a real project.',
      placeholder: true
    },
    {
      id: 'open-experiments', number: '05', title: 'Room for the unexpected.',
      category: 'Digital Projects', medium: 'Experiments / New possibilities',
      image: 'assets/digital-study.svg', alt: 'A precise white generative line sculpture on a dark background',
      description: 'An open space for experiments that don’t fit neatly into a category. This original vector study is a placeholder for David’s digital explorations, creative tools, and other ideas in progress.',
      placeholder: true
    }
  ]
};

// Each project has three additional image spaces. Replace paths and captions,
// then set placeholder: false on each gallery image containing David's work.
window.PORTFOLIO.projects.forEach(project => {
  project.gallery ??= [
    { image: 'assets/gallery-wide.svg', alt: 'Placeholder for a project overview', caption: '01 / Overview', placeholder: true },
    { image: 'assets/gallery-detail.svg', alt: 'Placeholder for a close-up project detail', caption: '02 / Details', placeholder: true },
    { image: 'assets/gallery-process.svg', alt: 'Placeholder for sketches or a process image', caption: '03 / Process', placeholder: true }
  ];
});
