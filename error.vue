<script setup lang="ts">
const route = useRoute();
const currentUrl = decodeURIComponent(route.fullPath);


</script>

<template>
    <div class="flex justify-content-center h-screen mb-5">
        <div class=" align-content-center">
            <div class="flex justify-content-center">
                <h1 class="text-viola text-center">
                    ERROR
                </h1>
            </div>

            <div class="flex justify-content-center">
                <p class="text-4xl font-bold text-blue mt-8">
                    <i class="pi pi-exclamation-triangle text-5xl font-bold text-viola" /> Page not found: {{ currentUrl
                    }}
                </p>
            </div>
            <hr>
            <div class="my-5 flex justify-content-center">
                <NuxtLink to="/">
                    <Button label="Go back home" outlined raised />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped></style>