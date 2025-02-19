<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ step: number }>();
const steps = [1, 2, 3, 4];

const stepClass = (index: number) =>
  index < props.step ? 'bg-tertiary' : 'bg-gray-300';
</script>

<template>
  <div class="flex items-center space-x-2 flex-col">
    <div class="text-lg font-semibold">{{ props.step }} / 4</div>
    <div class="flex flex-row space-x-1">
      <div
        v-for="(step, index) in steps"
        :key="step"
        class="h-2 w-10 rounded-full"
        :class="stepClass(index)"></div>
    </div>
  </div>
</template>
