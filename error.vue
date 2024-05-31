<template>
    <div
        class="d-flex flex-column align-center justify-center h-screen w-screen"
    >
        <v-empty-state
            headline="Whoops, 404"
            title="Page not found"
            text="The page you were looking for does not exist"
            image="https://www.hasbro.com/common/productimages/en_US/590E193450569047F59F9F4E9B948900/55eeb33ac3c674e80844995e51ac2d056190ed3b.jpg"
        >
            <NuxtLink to="/">Go back home</NuxtLink>
        </v-empty-state>
    </div>
</template>
