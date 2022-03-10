# Express/Postgres API for Shopping List Data

When attempting to deploy this repo, remember to:

1. locally run the `npm run createTable` script (to set up the required database table).

   - You'll need to have locally set a `DATABASE_URL` environment variable in a `.env` file.

   - Normally you wouldn't interact with production databases from a local machine, but we'll ignore this for now (as we're just focusing on getting things deployed).

2. ensure the `DATABASE_URL` variable is set (not just locally but also wherever you're deploying to).
