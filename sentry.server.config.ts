// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://6c728f8b7128e6d7c2dccd3bee27e304@o4507443082166272.ingest.us.sentry.io/4507443085901824",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
