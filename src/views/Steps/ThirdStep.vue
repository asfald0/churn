<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { Button, Card } from '../../components';
import { ThirdStepFirst, ThirdStepSecond } from './SubSteps';

const emit = defineEmits(['closeModal', 'nextStep', 'offerAccepted']);
const currentStep = ref<'first' | 'second'>('first');

const goToNextSubStep = () => {
  if (currentStep.value === 'first') {
    currentStep.value = 'second';
  } else {
    emit('nextStep');
  }
};
</script>

<template>
  <Card>
    <ThirdStepFirst v-if="currentStep === 'first'" />
    <ThirdStepSecond v-if="currentStep === 'second'" />

    <div class="flex md:flex-row flex-col justify-around mt-4 gap-x-4 gap-y-2">
      <Button
        v-if="currentStep === 'first'"
        @click="emit('closeModal')"
        color="primary">
        Jätkan tellimusega
      </Button>
      <Button
        v-if="currentStep === 'second'"
        @click="emit('offerAccepted')"
        color="primary">
        Soovin
      </Button>
      <Button @click="goToNextSubStep" color="secondary">
        Edasi tühitama
      </Button>
    </div>
  </Card>
</template>
