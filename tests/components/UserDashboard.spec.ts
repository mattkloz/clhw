import { test, expect } from 'vitest';
import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime';

import { UserDashboard } from '#components';

mockNuxtImport('useFetch', () => {
    return () => {
        return {
            data: [
                {
                    name: 'John Doe',
                    title: 'Software Engineer',
                    avatar: '',
                    quote: 'Hello world',
                }
            ]
        };
    };
});


test('can mount the User Dashboard', async () => {
    const component = await mountSuspended(UserDashboard);
    expect(component.text()).toMatchInlineSnapshot(
        '"No results found, please try again."'
    );
});



