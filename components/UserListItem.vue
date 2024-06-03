<script setup lang="ts">
const props = defineProps<{
    user: iUser;
    index: number;
    openPanel?: number;
}>();

// checking to see if this panel is expanded, might be a better way to do this
const panelExpanded = computed(() => {
    return props.openPanel === props.index;
});
</script>

<template>
    <v-expansion-panel bg-color="white">
        <template #title>
            <v-card
                :title="user.name"
                :subtitle="user.title"
                flat
                class="bg-transparent"
            >
                <template #prepend>
                    <v-avatar
                        color="blue-darken-2 mr-3"
                        :size="panelExpanded ? '128' : '48'"
                    >
                        <v-img :src="user.avatar" />
                    </v-avatar>
                </template>
            </v-card>
        </template>

        <template #text>
            <span v-if="user.quote" class="d-flex align-center">
                <p class="text-medium-emphasis mr-2">
                    {{ $t('favorite_quote') }}:
                </p>
                <p class="text-h6 text-light-blue-darken-3">
                    <q class="text-grey text-h5"
                        ><span
                            class="text-light-blue-darken-3 text-body-1 font-italic px-1 font-weight-bold"
                            >{{ user.quote }}</span
                        ></q
                    >
                </p>
            </span>
            <span v-if="user.nationality" class="d-flex align-center">
                <p class="text-medium-emphasis mr-2">
                    {{ $t('nationality') }}:
                </p>
                <p
                    class="text-body-1 text-light-blue-darken-3 font-weight-bold"
                >
                    {{ user.nationality }}
                </p>
            </span>
        </template>
        <v-divider />
    </v-expansion-panel>
</template>
