<script setup lang="ts">
import { defineProps } from 'vue';
const tooglechevron = defineModel<boolean>({ default: false })
const toogleChevron = () => {
    tooglechevron.value = !tooglechevron.value;
}

defineProps<{
    backgroundColor?: string;
}>();


</script>

<template>
    <div
        class="col-12 col-sm-auto d-flex align-items-end align-items-md-start align-items-lg-center flex-row flex-sm-column flex-md-row mt-0 mt-sm-3 mt-lg-4 pt-2 mb-3">

        <!-- Button to toggle the visibility of the card -->
        <button @click="toogleChevron()" :style="{ backgroundColor: backgroundColor }"
            class="btn btn-md btn-info order-1 order-md-0 ml-1 ml-sm-0 mt-0 mt-sm-1 mt-sm-2 mt-md-0 flip" role="button"
            title="Help">
            Help
            <svg :class="{ 'rotate-up': tooglechevron, 'rotate-down': !tooglechevron }" viewBox="0 0 23 23" class="ml-2"
                style="enable-background: new 0 0 23 23; position: relative; top: 0;" width="10px" height="10px">
                <path style="fill: #fff;"
                    d="M13,16.7l7.6-7.2c1.9-1.7,0.6-4.8-1.9-4.8H3.3c-2.5,0-3.8,3.2-1.9,4.6L9,16.5C10.1,17.5,11.7,17.5,13,16.7z">
                </path>
            </svg>
        </button>

    </div>
</template>

<style scoped>
.btn-info:hover {
    color: #fff;
    background-color: #0074cc;
    border-color: #0074cc;
}
</style>