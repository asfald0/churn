<script setup lang="ts">
import { defineEmits } from 'vue';
import { Button, Card, CardFiller } from '../../components';

const emit = defineEmits(['closeModal']);
</script>

<template>
  <Card>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-16 h-16 text-green-600">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

    <div class="space-y-2 flex justify-center items-center">
      <CardFiller color="white">
        <p>
          Meil on nii kahju, et oled soovinud oma tellimuse tühistada. Sinu
          praegune tellimus kehtib kuni <b>16.03.2025</b>
        </p>
      </CardFiller>
    </div>

    <Button @click="emit('closeModal')" color="tertiary"> Sulgen </Button>
  </Card>
</template>
