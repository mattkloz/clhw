import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { UserCard } from '#components'

const vuetify = createVuetify({
    components,
    directives
})


global.ResizeObserver = require('resize-observer-polyfill')

it('mounts UserCard', async () => {

    const component = await mountSuspended(UserCard, {
        props: {
            user: {
                name: 'John Doe',
                title: 'Software Engineer',
                avatar: 'https://placehold.co/600x400/EEE/31343C',
                quote: 'Hello world',
                nationality: 'USA',

            },
            index: 0,
            selected: 0
        },
        mocks: {
            $t: () => 'Learn more',
        },
        global: {
            components: {
                UserCard,
            },
            plugins: [vuetify],
        }
    })

    // Assert the rendered text of the component
    expect(component.text()).toContain('John Doe')
})