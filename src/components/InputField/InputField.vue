<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue';

const props = defineProps<{
  placeholder: string;
}>();

const emit = defineEmits(['updateValue']);

const inputValue = ref('');

const handleInputChange = () => {
  emit('updateValue', inputValue.value);
};
</script>

<template>
  <textarea
    class="rounded-xl bg-secondary min-w-full min-h-40 pl-4 pt-4 text-left resize-none placeholder:text-gray-400"
    v-model="inputValue"
    type="text"
    :placeholder="props.placeholder"
    @input="handleInputChange" />
</template>
