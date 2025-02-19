<script setup lang="ts">
import { defineEmits } from 'vue';
import { Button, Card, CardFiller, Title } from '../../components';
import { useMockState } from '../../store/mockState';

const mockState = useMockState();
const emit = defineEmits(['closeModal', 'nextStep']);
</script>

<template>
  <Card>
    <Title>Kas oled kindel, et soovid tellimust lõpetada?</Title>
    <div class="space-y-2 flex justify-center items-center flex-col">
      <CardFiller color="primary">
        <p>
          Oled meiega olnud
          <span class="text-tertiary text-2xl font-bold">
            {{ mockState.userInfo.daysSubscribed }}
          </span>
          päeva, ärme lähe veel lahku
        </p>
      </CardFiller>
      <CardFiller v-if="mockState.userInfo.hasSharedAccounts" color="primary">
        Sul on jagatud lugemisõigusi, arvesta ka nendega
      </CardFiller>
      <CardFiller color="primary">
        <p>
          <span class="font-bold">Ära jää ilma maailma tippsündmustest,</span>
          mis mõjutavad kogu maailma. Käesolev aasta toob teiste seas
          <span class="font-bold">USA presidendivalimised, Olümpiamängud</span>
          ning ühe eriti ägeda salaprojekti, mida tasub oodata
        </p>
      </CardFiller>
    </div>
    <div class="flex md:flex-row flex-col justify-around mt-4 gap-x-4 gap-y-2">
      <Button @click="emit('closeModal')" color="primary"
        >Jätkan tellimusega
      </Button>
      <Button @click="emit('nextStep')" color="secondary">
        Edasi tühitama
      </Button>
    </div>
  </Card>
</template>
