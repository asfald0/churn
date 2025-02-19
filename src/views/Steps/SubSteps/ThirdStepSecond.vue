<script setup lang="ts">
import crownImage from '../../../assets/crown.png';
import { CardFiller, Title } from '../../../components';
import { useMockState } from '../../../store/mockState';

const mockState = useMockState();
</script>

<template>
  <Title> Hindame Sind kõrgelt! </Title>
  <div class="space-y-2 flex justify-center items-center w-full flex-col">
    <CardFiller color="white">
      <p>
        Soovime, et ka edaspidi oleks Sul võimalik lugeda pealkirjast
        kaugelmale, jagada ligipääsu veel kahe lähedasega ning saada osa meie
        podcastidest ja ülekannetest, mis teistele ligipääsmatud. Toeta meie
        ajakirjanikke ning jätka tellimist!
      </p>
    </CardFiller>
    <CardFiller color="white">
      <div
        class="relative p-6 rounded-3xl bg-gradient-to-b from-green-100 to-green-200 shadow-lg">
        <div
          class="absolute -top-6 left-8 bg-blue-600 text-white px-3 py-1 font-bold rounded-lg">
          <p class="text-xs">AINULT NÜÜD</p>

          <p class="text-xl font-bold">-45%</p>
        </div>

        <div class="flex items-center justify-center space-x-2">
          <span
            class="text-green-600 text-lg bg-primary rounded-full p-1 w-6 h-6">
            <img :src="crownImage" class="w-4 h-4 invert-100" />
          </span>
          <h2 class="font-bold text-lg text-gray-900 text-center">
            {{ mockState.offer.termName }}
          </h2>
        </div>

        <div class="mt-2 text-center">
          <p class="text-gray-500 line-through text-lg">
            {{ mockState.offer.normalPrice }} €
          </p>
          <p class="text-blue-600 font-bold text-3xl">
            {{ mockState.offer.price }} €
          </p>
        </div>

        <p class="mt-2 text-gray-700 text-xl text-center">
          Delfi Kogupakett järgmised
          <span class="font-bold">
            {{ mockState.offer.billingPeriod }} kuud</span
          >
          vaid
          <span class="font-bold"> {{ mockState.offer.price }} € kuus</span>,
          tavahind {{ mockState.offer.normalPrice }} € kuus.
        </p>
      </div>
    </CardFiller>
  </div>
</template>
