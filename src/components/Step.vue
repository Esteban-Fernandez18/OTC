<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue';

const props = defineProps<{
    stepNumber?: number;
    backgroundColor?: string;
}>();

const currentStep = ref(props.stepNumber ?? 1);

onMounted(() => {
    if (!props.stepNumber) {
        currentStep.value = 1;
    }
});
</script>

<template>
    <span :style="{ backgroundColor: props.backgroundColor }"
        class=" step primary-gradient-bg badge-pill position-relative d-inline-block text-center text-white font-w-500 lead">
        {{ currentStep }}
    </span>
</template>
