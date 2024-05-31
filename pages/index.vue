<script setup lang="ts">
useHead({
    title: 'ContextLabs Homework Assignment',
    meta: [{ name: 'description', content: 'My Homework Assignment' }],
})
</script>

<template>
    <div class="d-flex flex-column h-screen">
        <v-layout>
            <AppHeader />
            <v-main class="bg-grey-lighten-3 flex-grow-1">
                <v-container class="h-100">
                    <v-row class="h-100">
                        <v-col>
                            <v-sheet
                                rounded="lg"
                                class="h-100 d-flex overflow-auto"
                            >
                                <UserExplorer />
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
            <AppFooter />
        </v-layout>
    </div>
</template>
