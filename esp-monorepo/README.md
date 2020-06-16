# Esp Monorepo

This project was generated using [Nx](https://nx.dev).

# Apps / Libs

There are two apps and one library to share a common header for testing purposes.

You need NX CLI installed globally. To install it:
`npm install -g @nrwl/cli`

# How to run locally

To run one of the apps:

`nx serve esp-tahoe`
or
`nx serve esp-settings`

Any changes made to the library will automatically update the apps.

# How to build

`npm run build-esp-tahoe:prod`
or
`npm run build-esp-settings:prod`

The build that is generated contains everything that is necessary to run the app. To test it running locally you can install globally the package `http-server` and run:

`http-server ./dist/apps/esp-tahoe/`
