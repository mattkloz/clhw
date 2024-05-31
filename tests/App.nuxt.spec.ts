import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import App from '~/app.vue'

it('can also mount an app', async () => {
    const component = await mountSuspended(App, { route: '/test' })
    expect(component.html()).toMatchInlineSnapshot(`
      "<div class="v-application v-theme--light v-layout v-layout--full-height v-locale--is-ltr">
        <div class="v-application__wrap">
    <div class="nuxt-loading-indicator" style="position: fixed; top: 0px; right: 0px; left: 0px; pointer-events: none; width: auto; height: 3px; opacity: 0; background-size: Infinity% auto; transform: scaleX(0%); transform-origin: left; transition: transform 0.1s, height 0.4s, opacity 0.4s; z-index: 999999;"></div>
    <!---->
        </div>
      </div>"
    `)
})