<script setup lang="ts">
defineProps<{
    user: iUser;
    index?: number;
    selected?: number;
}>();
</script>

<script lang="ts">
export default {
    data: () => ({
        expanded: false,
    }),
};
</script>

<template>
    <v-col cols="12" md="4" class="card-transition">
        <v-card class="h-100 w-100 d-flex flex-column" hover>
            <template #prepend>
                <v-avatar color="blue-darken-2 mr-3" size="48">
                    <v-img :src="user.avatar" />
                </v-avatar>
            </template>

            <template #title>
                <p class="text-body-1">{{ user.name }}</p>
            </template>

            <template #subtitle>
                <p class="text-body-2 user-title">{{ user.title }}</p>
            </template>
            <v-menu
                v-model="expanded"
                location="center"
                :close-on-content-click="false"
            >
                <template #activator="{ props }">
                    <v-btn
                        color="teal-accent-4"
                        :text="$t('learn_more')"
                        variant="text"
                        v-bind="props"
                    />
                </template>

                <v-card
                    width="300"
                    class="d-flex flex-column position-relative"
                >
                    <v-card-text class="pb-2 overflow-auto d-flex flex-column">
                        <div class="d-flex justify-center">
                            <v-avatar
                                color="blue-darken-2 mr-3"
                                size="128"
                                class="align-center"
                            >
                                <v-img :src="user.avatar" />
                            </v-avatar>
                        </div>

                        <p class="text-body-1 text-center">{{ user.name }}</p>
                        <p class="text-caption text-center">{{ user.title }}</p>
                        <span v-if="user.quote" class="pb-2 mt-3">
                            <p
                                class="font-weight-medium text-grey-darken-1 text-body-1"
                            >
                                {{ $t('favorite_quote') }}:
                            </p>
                            <p class="text-center">
                                <q class="text-grey text-h5"
                                    ><span
                                        class="text-light-blue-darken-3 text-body-1 font-italic px-1 font-weight-bold"
                                        >{{ user.quote }}</span
                                    ></q
                                >
                            </p>
                        </span>
                        <v-divider v-if="user.quote && user.nationality" />
                        <span v-if="user.nationality" class="py-2">
                            <p
                                class="text-grey-darken-1 text-body-1 font-weight-medium"
                            >
                                {{ $t('nationality') }}:
                            </p>
                            <p
                                class="text-light-blue-darken-3 text-center text-body-1 font-weight-bold"
                            >
                                {{ user.nationality }}
                            </p>
                        </span>
                    </v-card-text>
                    <v-btn
                        icon="mdi-close"
                        flat
                        class="position-absolute top-0 right-0 pa-2"
                        @click="expanded = false"
                    />
                </v-card>
            </v-menu>
        </v-card>
    </v-col>
</template>

<style scoped lang="scss">
.card-expanded {
    z-index: 100;
}

.user-title {
    white-space: wrap;
}
</style>
