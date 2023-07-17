## Tasks

* Follow the recommended approaches for these tasks in the Nest.js documentation

1. Make the test in `app.e2e-spec` pass by updating the corresponding controller.
2. Create a Config service that can be used to provide values into the application
   1. Provide a value called `PROD_HOST` to the application
   2. Create a controller that returns the value set in `PROD_HOST` to an endpoint called 'getProductionHost'
   3. Verify with an e2e test
3. Create an injectable structure that inserts a header of `["on-running":"always"]` to all responses
   1. For testing this, it is ok to verify it on one endpoint.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```



