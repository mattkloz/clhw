# Context Labs Homework Assignment

## Assumptions

* Name field strings ***should not*** contain HTML tags *typically storing HTML tags in a string is not a good idea as any quotes would have to be escaped and if rendered as a string, the tags wouldn't render as HTML anyways, better to add a flag to the record for Trademark or whatever*
* The list comnponent(s) satisfy state management for the given task
* Components should work on desktop and mobile devices (responsive)
* The 'user' type should be available globally
* With vuetify as the component/style library, minimize custom component use
* included i18n for internationalisation
* included prettier and eslint for formatting and linting
* included vitest for testing
  * test for each component
  * test for app.vue
  * test for composables
* Included 'depracations' json list in the api reponse header

## App Images

<img alt="Context Labs Assignment" src="https://github.com/mattkloz/clhw/assets/12042150/fd290d91-5ebb-4742-a42f-31443b0b855d" width="450">
<img alt="Context Labs Assignment" src="https://github.com/mattkloz/clhw/assets/12042150/e19c10b5-e1d8-4640-a46a-2714ae93d5ff" width="450">
<img alt="Context Labs Assignment" src="https://github.com/mattkloz/clhw/assets/12042150/30441804-85b6-42ce-8ed5-175585055be0" width="450">

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Linting

Run Lint:

```bash
# npm
npm run lint

# pnpm
pnpm run lint

# yarn
yarn lint

# bun
bun run lint
```

## Testing

Run ViTest:

```bash
# npm
npm run test

# pnpm
pnpm run test

# yarn
yarn test

# bun
bun run test
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
