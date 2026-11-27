# MentorSpark Solutions — Cloudflare Pages website

## Included
- Static HTML pages for Home, About, Services, Interview Preparation, Project Support, Online Training, Pricing, Testimonials, Contact, How It Works, FAQs, Privacy, Terms and 17 technology course pages.
- Shared responsive CSS and JavaScript.
- Cloudflare Pages Function at `functions/api/enquiries.js`.
- D1 SQL schema in `schema.sql`.
- Basic security headers and starter redirects.

## Important before publishing
1. Replace `YOUR_COMPANY_EMAIL` with your real business email address.
2. Replace `YOUR_DOMAIN` in `robots.txt` and `sitemap.xml` with your actual domain.
3. Review all page copy. This is a reconstructed starter based on the known page list and requirements, not a verbatim export of your Base44 website.
4. Add your official logo and approved images under `assets/images/`.
5. Add a Cloudflare D1 database and run `schema.sql`.
6. In Cloudflare Pages > Settings > Functions > D1 database bindings, bind the database as `DB`.
7. Review the Privacy Policy and Terms with an appropriate adviser.
8. Confirm public prices and add only genuine testimonials with permission.

## Run locally
Use a local static server, for example:
`python -m http.server 8000`
Then open `http://localhost:8000`.

## Deploy to Cloudflare Pages
- Push this folder to a GitHub repository.
- In Cloudflare Dashboard, open Workers & Pages > Create > Pages > Connect to Git.
- Select the repository and production branch.
- Framework preset: None.
- Build command: leave blank.
- Build output directory: `/` (or `.` if requested by the dashboard).
- Deploy.

The Pages Function uses the D1 binding named `DB`. The contact form will not store enquiries until the D1 database is created and bound.
