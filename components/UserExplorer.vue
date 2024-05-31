<script setup lang="ts">
const { data: users } = (await useFetch('/api/users')) as {
    data: iUser[]
}

// use  the useStripTags composable to remove html tags from the name field
const userList = computed(() => {
    return users.value.default.map((user) => {
        const chekeckedUser = user as iUser
        chekeckedUser.name = useStripTags(user.name)
        return chekeckedUser
    })
})
</script>

<script lang="ts">
export default {
    data() {
        return {
            search: '',
            layout_type: 'grid',
            selectedCard: null,
            userPanel: null,
        }
    },
}
</script>

<template>
    <v-card class="h-100 w-100 d-flex flex-column overflow-auto bg-blue">
        <v-data-iterator
            :items="userList"
            :search="search"
            item-value="name"
            class="h-100 d-flex flex-column bg-blue pa-3 flex-grow-1"
            item-class="h-100"
            :items-per-page="users.default.length"
        >
            <template #header>
                <v-toolbar class="px-2 bg-blue">
                    <v-text-field
                        v-model="search"
                        density="comfortable"
                        placeholder="Search"
                        prepend-inner-icon="mdi-magnify"
                        style="max-width: 300px"
                        variant="solo"
                        clearable
                        hide-details
                    />

                    <v-spacer />
                    <v-btn-toggle
                        v-model="layout_type"
                        mandatory
                        variant="text"
                        color="white"
                        class="ml-5"
                        base-color="grey-lighten-2"
                    >
                        <v-btn icon="mdi-view-grid-outline" value="grid" />
                        <v-btn icon="mdi-format-list-bulleted" value="list" />
                    </v-btn-toggle>
                </v-toolbar>
            </template>

            <template #default="{ items }">
                <v-card
                    class="list-body overflow-auto bg-transparent elevation-0"
                >
                    <v-container
                        class="pa-2 h-100 w-100 overflow-auto bg-transparent"
                        fluid
                    >
                        <v-fade-transition hide-on-leave>
                            <v-row
                                v-show="layout_type === 'grid'"
                                dense
                                class="bg-transparent"
                            >
                                <UserCard
                                    v-for="(item, index) in items"
                                    :key="index"
                                    :user="item.raw"
                                    :index="index"
                                    :selected="selectedCard"
                                    @revealed-card="selectedCard = index"
                                />
                            </v-row>
                        </v-fade-transition>

                        <v-fade-transition hide-on-leave>
                            <v-row
                                v-show="layout_type === 'list'"
                                class="bg-transparent w-100"
                            >
                                <v-card
                                    max-height="60vh"
                                    class="overflow-auto w-100"
                                >
                                    <v-expansion-panels
                                        v-model="userPanel"
                                        elevation="0"
                                        bg-color="transparent"
                                    >
                                        <UserListItem
                                            v-for="(item, index) in items"
                                            :key="index"
                                            :user="item.raw"
                                            :index="index"
                                            :open-panel="userPanel"
                                        />
                                    </v-expansion-panels>
                                </v-card>
                            </v-row>
                        </v-fade-transition>
                    </v-container>
                </v-card>
            </template>
        </v-data-iterator>
    </v-card>
</template>
