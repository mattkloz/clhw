import { defineVitestConfig } from '@nuxt/test-utils/config';
import { coverageConfigDefaults } from 'vitest/config';

export default defineVitestConfig({
    test: {
        globals: true,
        environment: 'nuxt',
        coverage: {
            exclude: ['**/nuxt.config.ts', ...coverageConfigDefaults.exclude]
        },
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