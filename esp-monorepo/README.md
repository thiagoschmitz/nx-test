# Esp Monorepo

This project was generated using [Nx](https://nx.dev).

# Solution 1: Many apps

This example covers as if we decided to have many apps as we have today.

## Apps / Libs

There are two apps and one library to share a common header for testing purposes.

You need NX CLI installed globally. To install it:
`npm install -g @nrwl/cli`

## How to run locally

To run one of the apps:

`nx serve esp-tahoe`
or
`nx serve esp-settings`

Any changes made to the library will automatically update the apps.

## How to build

`npm run build-esp-tahoe:prod`
or
`npm run build-esp-settings:prod`

The build that is generated contains everything that is necessary to run the app. To test it running locally you can install globally the package `http-server` and run:

`http-server ./dist/apps/esp-tahoe/`

# Solution 2: One app - many libraries acting as the apps/libraries we have today

This solution covers as if we decided to have only one app with different shared modules for each other app. They would be created as libraries.

## Apps / Libs

There is only one app routing to two libs: Tahoe and Settings
The header is common and is part of the app.

You need NX CLI installed globally. To install it:
`npm install -g @nrwl/cli`

## How to run locally

To run one of the apps:

`nx serve esp`

Any changes made to the library will automatically update the apps.

## How to build

`npm run build-esp:prod`

The build that is generated contains everything that is necessary to run the app. To test it running locally you can install globally the package `http-server` and run:

`http-server ./dist/apps/esp/`
