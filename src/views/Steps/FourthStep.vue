<script setup lang="ts">
import { defineEmits } from 'vue';
import { Button, Card, CardFiller, InputField, Title } from '../../components';
import { useMockState } from '../../store/mockState';

const mockState = useMockState();
const emit = defineEmits(['closeModal', 'nextStep']);

const handleInputUpdate = (value: string) => {
  mockState.cancellationDescription = value;
};
</script>

<template>
  <Card>
    <Title>
      Kirjuta meile oma probleemist, et saaksime Sind aidata või lahendust
      pakkuda
    </Title>
    <div class="space-y-2 flex justify-center items-center w-full">
      <CardFiller color="white">
        <InputField
          placeholder="Sisesta siia oma kommentaar"
          @updateValue="handleInputUpdate" />
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
