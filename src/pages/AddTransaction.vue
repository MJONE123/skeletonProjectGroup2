<template>
  <!-- 수입/지출/이체 분류 -->
  <div class="input-form">
    <div class="input-header">
      <button @click="setType('income')" :class="{ active: type === 'income' }">
        수입
      </button>
      <button
        @click="setType('expense')"
        :class="{ active: type === 'expense' }"
      >
        지출
      </button>
      <button
        @click="setType('transfer')"
        :class="{ active: type === 'transfer' }"
      >
        이체
      </button>
    </div>

    <!-- 내역 input -->
    <div class="input-fields">
      <div>
        <label for="date">날짜</label>
        <input type="date" v-model="date" placeholder="Placeholder" />
      </div>
      <div>
        <label for="amount">금액</label>
        <input type="number" v-model="amount" placeholder="Placeholder" />
      </div>
      <div>
        <label for="category">분류</label>
        <select v-model="category">
          <option value="">분류를 선택해주세요</option>
          <option value="식비">식비</option>
          <option value="교통비">교통비</option>
          <option value="쇼핑">쇼핑</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <div>
        <label for="description">내용</label>
        <input type="text" v-model="description" placeholder="세부사항" />
      </div>
    </div>
    <div class="addButton">
      <button @click="submitTransaction, $emit('close')">저장</button>
      <button @click="$emit('close')">닫기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTransactionStore } from '@/stores/transaction';

const transactionStore = useTransactionStore();

const type = ref('income');
const date = ref('');
const amount = ref(0);
const category = ref('');
const description = ref('');
const showModal = ref(true); // 모달을 처음에 보여주도록 설정

const setType = (newType) => {
  type.value = newType;
};

const submitTransaction = () => {
  if (!date.value) {
    alert('날짜를 선택해주세요.');
    return;
  }
  if (!amount.value) {
    alert('금액을 입력해주세요.');
    return;
  }
  if (!category.value) {
    alert('분류를 선택해주세요.');
    return;
  }
  if (!description.value) {
    alert('내용을 기입해주세요.');
    return;
  }
  const transaction = {
    type: type.value,
    date: date.value,
    amount: parseFloat(amount.value),
    category: category.value,
    description: description.value,
  };

  transactionStore.addTransaction(transaction);

  // Clear the form fields after submission
  date.value = '';
  amount.value = 0;
  category.value = '';
  description.value = '';

  closeModal();
  // Emit close event to close the modal
};
const closeModal = () => {
  showModal.value = false; // 모달을 닫음
  // 부모 컴포넌트로 모달이 닫혔음을 알림
  $emit('close');
};
const formatAmount = () => {
  // 입력된 값을 가져옴
  let inputAmount = amount.value;
  // 입력된 값이 없으면 함수 종료
  if (!inputAmount) return;
  // 입력된 값이 1000원 단위로 나누어 떨어지지 않으면 함수 종료
  if (inputAmount % 1000 !== 0) return;
  // 입력된 값을 1000원 단위로 변환하여 표시
  amount.value = inputAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
</script>
