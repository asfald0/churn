<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue';
import { Button, Card, CardFiller, RadioButton, Title } from '../../components';
import { useMockState } from '../../store/mockState';

const mockState = useMockState();
const emit = defineEmits(['closeModal', 'nextStep']);
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

watch(selectedReason, (newValue) => {
  mockState.cancellationReason = newValue;
});
</script>

<template>
  <Card>
    <Title>Miks soovid tellimust tühistada?</Title>
    <div class="space-y-2 flex justify-center items-center">
      <CardFiller color="white">
        <div v-for="reason in cancellationReasons" :key="reason.value">
          <RadioButton
            v-model="selectedReason"
            :title="reason.title"
            :value="reason.value" />
        </div>
      </CardFiller>
    </div>

    <div class="flex md:flex-row flex-col justify-around mt-4 gap-x-4 gap-y-2">
      <Button @click="emit('closeModal')" color="primary">
        Jätkan tellimusega
      </Button>
      <Button @click="emit('nextStep')" color="secondary">
        Edasi tühitama
      </Button>
    </div>
  </Card>
</template>
