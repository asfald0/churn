<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  color?: string;
}>();

const cardFillerClass = computed(() => {
  return [
    ' rounded-lg py-4 px-6 w-full text-center',
    {
      'bg-light-blue': props.color === 'primary',
      'bg-white': props.color === 'white',
    },
  ];
});
</script>

<template>
  <div :class="cardFillerClass">
    <slot />
  </div>
</template>
