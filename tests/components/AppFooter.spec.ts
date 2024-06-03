import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { AppFooter } from '#components';

const vuetify = createVuetify({
    components,
    directives
});

global.ResizeObserver = require('resize-observer-polyfill');

test('mounts footer', () => {
    const wrapper = mount({
        template: '<v-layout><app-footer></app-footer></v-layout>'
    }, {
        props: {},
        global: {
            components: {
                AppFooter,
            },
            plugins: [vuetify],
        }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('2024');
});