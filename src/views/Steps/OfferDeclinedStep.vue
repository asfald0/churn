<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { Button, Card, CardFiller, Title } from '../../components';
import { useMockState } from '../../store/mockState';

const mockState = useMockState();
const emit = defineEmits(['closeModal']);
interface CancellationReason {
  value: string;
  title: string;
}

const selectedReason = ref<string | null>(null);

const cancellationReasons: CancellationReason[] = [
  { value: 'Kuutasu on kallis', title: 'Kuutasu on kallis' },
  {
    value: 'Ei külasta Delfit piisavalt, et olla tellija',
    title: 'Ei külasta Delfit piisavalt, et olla tellija',
  },
  {
    value: 'Tehnilised probleemid kasutamisel',
    title: 'Tehnilised probleemid kasutamisel',
  },
  {
    value: 'Soovin reklaamivaba lugemist',
    title: 'Soovin reklaamivaba lugemist',
  },
  { value: 'Muu', title: 'Muu' },
];

const handleSelection = (value: string) => {
  selectedReason.value = value;
  mockState.cancellationReason = value;
};
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
