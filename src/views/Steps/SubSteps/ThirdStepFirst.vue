<script setup lang="ts">
import { CardFiller, InputField, Title } from '../../../components';
import { useMockState } from '../../../store/mockState';

const mockState = useMockState();

const handleInputUpdate = (value: string) => {
  mockState.cancellationDescription = value;
};
</script>

<template>
  <Title>
    Kirjuta meile oma probleemist, et saaksime Sind aidata või lahendust pakkuda
  </Title>
  <div class="space-y-2 flex justify-center items-center w-full">
    <CardFiller color="white">
      <InputField
        placeholder="Sisesta siia oma kommentaar"
        @updateValue="handleInputUpdate" />
    </CardFiller>
  </div>
</template>
