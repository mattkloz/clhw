import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { AppHeader } from '#components'

const vuetify = createVuetify({
    components,
    directives
})

global.ResizeObserver = require('resize-observer-polyfill')

test('mounts header', () => {
    const wrapper = mount({
        template: '<v-layout><app-header></app-header></v-layout>'
    }, {
        props: {},
        data() {
            return {
                links: ['User Dashboard', 'Messages', 'Profile', 'Updates']
            }
        },

        global: {
            components: {
                AppHeader,
            },
            plugins: [vuetify],
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.html()).toContain('v-layout')
})