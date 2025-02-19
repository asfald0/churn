<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{ isVisible: boolean }>();
const emit = defineEmits(['close']);
</script>

<template>
  <div
    v-if="props.isVisible"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-4 relative w-xs md:w-xl">
      <button
        @click="emit('close')"
        class="text-gray-500 hover:text-gray-700 absolute top-0 right-0 m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="h-6 w-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <slot />
      <div class="flex items-center justify-center pb-6">
        <a
          href="www.delfi.ee"
          class="pt-12 text-nowrap inline-flex items-center space-x-1">
          Vajad abi?&nbsp;
          <span class="font-bold"> Meie klienditugi aitab</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="text-tertiary"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
