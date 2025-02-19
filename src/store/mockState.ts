import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { mockApiRequest } from '../api/mockApi';

interface UserInfo {
  userId: number;
  daysSubscribed: number;
  hasSharedAccounts: boolean;
  currentTermId: string;
}

interface Offer {
  termId: string;
  termName: string;
  price: number;
  normalPrice: number;
  billingPeriod: number;
}

export const useMockState = defineStore('mockState', () => {
  const activeStep = ref(1);
  const cancellationReason = ref('');
  const cancellationDescription = ref('');
  const acceptedOffer = ref(false);

  const userInfo = ref<UserInfo>({
    userId: 0,
    daysSubscribed: 0,
    hasSharedAccounts: false,
    currentTermId: '',
  });

  const offer = ref<Offer>({
    termId: '',
    termName: '',
    price: 0,
    normalPrice: 0,
    billingPeriod: 0,
  });

  const loading = ref(false);
  const error = ref<string | null>(null);

  const isLoading = computed(() => loading.value);

  async function loadMockApiData() {
    loading.value = true;
    error.value = null;
    try {
      const mockData = await mockApiRequest();
      userInfo.value = mockData.userInfo;
      offer.value = mockData.offer;
    } catch (err) {
      console.error('Error loading API data:', err);
    } finally {
      loading.value = false;
    }
  }

  function resetState() {
    activeStep.value = 1;
    cancellationReason.value = '';
    cancellationDescription.value = '';
    acceptedOffer.value = false;
    userInfo.value = {
      userId: 0,
      daysSubscribed: 0,
      hasSharedAccounts: false,
      currentTermId: '',
    };
    offer.value = {
      termId: '',
      termName: '',
      price: 0,
      normalPrice: 0,
      billingPeriod: 0,
    };
    loading.value = false;
    error.value = null;
  }

  return {
    activeStep,
    cancellationReason,
    cancellationDescription,
    acceptedOffer,
    userInfo,
    offer,
    loading,
    error,
    isLoading,
    loadMockApiData,
    resetState,
  };
});
