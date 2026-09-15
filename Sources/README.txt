Minecraft Realm Static Website

Files:
- index.html          -> Home page
- realm-info.html     -> Realm info page
- mods.html           -> Current mods and details
- faq.html            -> FAQ page
- about-us.html       -> About us page
- style.css           -> All styling
- script.js           -> All interactive behavior + editable content

Edit guide:
1. Open script.js
2. Find the CONFIG object at the top
3. Change:
   - serverName
   - serverVersion
   - joinLink
   - galleryPhotos
   - mods (name, version, creator, category, description, sourceUrl)
   - realmInfo
   - faq
   - socials
   - aboutStory
   - tags

Photo note:
- Replace the placeholder image URLs with your own screenshots or local image paths.
- Example local path: images/spawn.png

Run:
- Put all files in the same folder
- Open index.html in a browser

Mods:
- Edit CONFIG.mods in script.js to keep the list aligned with the realm.
- Add or remove an object for each enabled mod.
- Leave version empty if it is not recorded; the page shows "Not specified".
- The seven enabled add-ons and installed versions were supplied by the realm owner.
- Descriptions are based on creator guides and Marketplace listings linked in sourceUrl.
- Do not substitute a Marketplace release number for an unconfirmed installed version.
- Download sizes are omitted because the expanded pack's current sizes are not confirmed.
- Removed mods and "Coming soon" placeholders are not included.
- This is an admin-maintained list, not a live connection to the Minecraft server.
