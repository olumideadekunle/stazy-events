# Stazy Events Website

A 3-page static site for **Stazy Events** (a division of Stazy Concept), Lagos, Nigeria.
Event decoration · weddings · birthdays · surprises · special effects · rentals · corporate events.

- `index.html`: home (hero, about, services, CEO profile)
- `gallery.html`: portfolio with filters and lightbox
- `contact.html`: enquiry form (sends via WhatsApp or email) and contact details

## Adding your own photos
1. Put the photos in `images/`.
2. Open `gallery.html` and add or replace entries in the `projects` list.

## Changing phone numbers, emails or social links
Edit the `STAZY` object at the top of `assets/site.js`.

## Free hosting on Vercel
1. Go to vercel.com, sign in with GitHub, click **Add New → Project**, and import this repo.
2. Framework preset: **Other**. Leave the build command empty. Click **Deploy**.
3. Your site will be live at `https://<project>.vercel.app`. You can add a custom domain later.
