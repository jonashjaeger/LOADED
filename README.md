# LOADED — Analog Film Camera Journal (v1.0.0)

A lightweight, local-only, offline-capable Progressive Web App to remember what film is inside each analog camera.

## Features
- Add cameras and archive cameras without losing roll history.
- Load a named film stock into an empty camera (one loaded roll per camera).
- Track film format, box ISO, rated ISO, dates, notes, and optional roll IDs.
- Unload finished or unused film. No exposure or frame counting.
- Mark rolls as awaiting development, developed, scanned, or archived.
- Search and filter roll archive.
- Export JSON for complete backup/restore and CSV for separate roll and camera tables.
- Local browser storage, no accounts, advertisements, analytics, or servers.
- Fully offline after initial successful install, with an update notification on new releases.

## Publish to GitHub Pages from iPhone

All files live at the **repository root**; no folders are needed.
1. Extract the ZIP using the Files app.
2. Create a public repository (e.g. `loaded`) on GitHub.
3. Upload every extracted file from this directory into the repository root, including PNG icons, `index.html`, `styles.css`, `app.js`, `sw.js`, `manifest.webmanifest`, `icon.svg` and this README.
4. In Settings → Pages, choose `Deploy from a branch`, `main`, and `/(root)`.
5. Visit `https://YOUR-USERNAME.github.io/loaded/` in Safari and Share → Add to Home Screen.

Check the complete ZIP has only root-level files. GitHub Pages requires HTTPS for service workers and iPhone geolocation features (this app does not use location).

## Backup caution
Everything is saved **on your device** under this specific installed web application's website storage. Safari and a Home Screen PWA may have separate storage on iOS. Clearing browser website data or deleting/reinstalling the Home Screen app can remove your journal. Export a JSON backup regularly before updates or device changes. Restoring intentionally **replaces** the journal after confirmation. There is no automatic synchronization.

## Data model

`camera`: `id`, `name`, `detail`, `format`, `notes`, `archived`, `createdAt`.

`roll`: `id`, `cameraId`, `stock`, `format`, `rollNumber`, `boxISO`, `shotISO`, `loadedAt`, `unloadedAt`, `developedAt`, `scannedAt`, `status`, `notes`, `createdAt`, `updatedAt`.

Status values: `loaded`, `exposed`, `unused`, `developed`, `scanned`, `archived`. A camera cannot have more than one roll with `status=loaded`.

LocalStorage key: `loaded-film-journal-v1`.

## Development / testing

For local testing run `python3 -m http.server 8000` from inside the extracted directory and open `http://localhost:8000/`. (Opening `index.html` directly from Files does not reliably install a service worker.)

No npm, build tools, web fonts, CDN scripts or JavaScript dependencies required. The app code and assets are included and self-hosted.
