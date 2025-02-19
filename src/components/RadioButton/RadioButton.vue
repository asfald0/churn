<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  title: string;
  value: string;
  modelValue: string | null;
}>();

const emit = defineEmits(['update:modelValue']);

const handleSelect = () => {
  emit('update:modelValue', props.value);
};
</script>

<template>
  <div class="flex items-left justify-items-start py-2">
    <label class="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        :value="value"
        :checked="modelValue === value"
        @change="handleSelect"
        class="cursor-pointer" />
      <span>{{ title }}</span>
    </label>
  </div>
</template>
