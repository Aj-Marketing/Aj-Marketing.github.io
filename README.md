# Portfolio — Antonio Hernández Valls

Static bilingual (EN / ES) portfolio. No build step: plain HTML, CSS and JS.

## Edit content
- **`js/config.js`**: your name, email, links, CV files, showreel, work items, experience and education. Most updates happen here.
- **`js/i18n.js`**: every fixed text on the page, in English and Spanish. Keys match `data-i18n` attributes in `index.html`.
- **`assets/`**: put your photo, CVs, thumbnails and any self-hosted videos here.

### Adding a video
In `config.js`, find an item in `work` and set **one** of these:
- `youtube: "dQw4w9WXcQ"` (the ID after `v=` or after `/shorts/`)
- `vimeo: "123456789"`
- `file: "assets/clip.mp4"`

Then set `placeholder: false`. `type` controls the shape: `"long"` (16:9), `"short"` (9:16) or `"campaign"`.

## Preview locally
```bash
python tools/serve.py
```
Then open http://127.0.0.1:5173

## Language
Visitors get the site in their browser language. They can switch with the EN/ES toggle, and the choice is remembered. You can link to a language directly: `?lang=es` or `?lang=en`.

## Hosting (free)
Any static host works: Netlify (drag and drop the folder), GitHub Pages or Cloudflare Pages.

## CVs
The CVs (`assets/Antonio Hernandez Valls CV ES.pdf` and `… CV EN.pdf`) are built from HTML in `tools/cv/` and exported to PDF with Edge:
```bash
"/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" --headless=new --no-pdf-header-footer --print-to-pdf="C:\Users\Ajonce\Website\assets\Antonio Hernandez Valls CV ES.pdf" "file:///C:/Users/Ajonce/Website/tools/cv/cv-modern-es.html"
```
The `tools/` folder is for you only. Don't upload it when you publish the site.
