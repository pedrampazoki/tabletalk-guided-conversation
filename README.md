# CraveMatch — Guided Conversation Prototype

This is a small, testable web prototype for BTH745.

## What it supports
1. Find a Japanese venue within 5 km (or explore other cuisines/distances).
2. Choose a person and send an invitation with a date, time, and message.
3. Open Sofia's incoming invitation and suggest a new date/time.
4. Distance filtering is functional.
5. Sent invitations persist in the browser using localStorage.
6. Back navigation and non-ideal choices work.
7. A Tester panel tracks total screen visits and different screens to support lostness analysis.

## Run it
Open `index.html` in a browser.

Because the shared data is embedded directly into `app.js`, the app works even if opened from the filesystem. The original JSON files are also included in the folder for submission/reference.

## Deploy to GitHub Pages
1. Create a new GitHub repository.
2. Upload every file in this folder to the repository root.
3. In GitHub: Settings → Pages → Deploy from branch → `main` / root.
4. Open the URL GitHub gives you.

## Shared data used
- cuisines.json
- venues.json
- people.json
- invitations.json
