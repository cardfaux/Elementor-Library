# Elementor Component Library

A **Next.js** based component library for Elementor. This library allows your team to **preview and copy Elementor components** easily by fetching JSON templates and inserting them into Elementor pages.

---

## Features

- Preview Elementor components with screenshots.
- Copy component JSON to clipboard for Elementor import.
- Auto-generate `index.json` listing all components.
- Automatic backup of previous `index.json`.
- Works with `.json` component files in `public/components` and preview images in `public/previews`.

---

## Adding a New Component

1.  Add your Elementor JSON file to `public/components/`
2.  Add a corresponding preview image to `public/previews/`
3.  Run `npm run generate-index`
4.  Refresh the frontend to see the new component

## Copying Components to Elementor

- Click the Copy Component button under any preview
- JSON is copied to your clipboard
- Paste it directly into Elementor’s JSON import
