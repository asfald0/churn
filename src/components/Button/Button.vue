<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  color?: string;
}>();

const buttonClass = computed(() => {
  return [
    'px-6 py-4 text-nowrap rounded-full font-semibold uppercase w-3xs m-auto flex items-center justify-center hover:opacity-50 text-xs md:text-base',
    {
      'bg-primary  text-black': props.color === 'primary',
      'bg-secondary text-black': props.color === 'secondary',
      'bg-tertiary text-white': props.color === 'tertiary',
    },
  ];
});
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
