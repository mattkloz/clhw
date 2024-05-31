// import { describe, it, expect } from 'vitest'
// import { mountSuspended } from '@nuxt/test-utils/runtime'

// import UserExplorer from '../../components/UserExplorer.vue'

// import { mockNuxtImport } from '@nuxt/test-utils/runtime'

// mockNuxtImport('useFetch', () => {
//     return () => {
//         return {
//             data: [
//                 {
//                     name: 'John Doe',
//                     title: 'Software Engineer',
//                     avatar: '',
//                     quote: 'Hello world',
//                 }
//             ]
//         };
//     };
// });


// describe('UserExplorer', () => {
//     it('can mount some component', async () => {
//         const component = await mountSuspended(UserExplorer)
//         expect(component.text()).toMatchInlineSnapshot(
//             '"This is an auto-imported component"'
//         )
//     })
// })