import { test, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { UserListItem, UserDashboard } from '#components'

const vuetify = createVuetify({
    components,
    directives
})


global.ResizeObserver = require('resize-observer-polyfill')

test('mounts UserCard', async () => {

    const component = await mountSuspended('<user-dashboard><user-list-item></user-list-item></user-dashboard>', {
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
        global: {
            components: {
                UserListItem,
                UserDashboard
            },
            plugins: [vuetify],
        }
    })

    // Assert the rendered text of the component
    expect(component.exists()).toBe(true)
})