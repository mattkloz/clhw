import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        globals: true,
        environment: 'nuxt',
        server: {
            deps: {
                inline: ['vuetify'],
            },
        },
        environmentOptions: {
            nuxt: {
                mock: {
                    intersectionObserver: true,
                    indexedDb: true,
                }
            }
        }
    }
})