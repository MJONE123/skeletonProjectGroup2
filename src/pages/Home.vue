<template>
  <div class="container">
    <!-- <div class="button-container">
      <div class="btn-group btn-group-sm rounded-pill">
        <button type="button" class="btn btn-primary start-btn">일일</button>
        <router-link to="/calendar" type="button" class="btn btn-primary">
          월별
        </router-link>
        <button
          @click="routerPush('/chart')"
          type="button"
          class="btn btn-primary end-btn"
        >
          합계
        </button>
      </div>
      <button @click="routerPush('/Settings')">
        <i class="bi bi-gear"></i>
      </button>
    </div> -->
    <Header />

    <div class="header">
      <div class="header-left">
        <button @click="prevMonth"><i class="mdi mdi-chevron-left"></i></button>
      </div>
      <div class="header-center">
        <p>{{ currentYearMonth }}</p>
      </div>
      <div class="header-right">
        <button @click="nextMonth">
          <i class="mdi mdi-chevron-right"></i>
        </button>
      </div>
    </div>

    <div class="summary">
      <div>
        <button>
          수입<span class="income">{{ income }}원 </span>
        </button>
      </div>
      <div>
        <button>
          지출<span class="expenses">{{ expenses }}원</span>
        </button>
      </div>
      <div>
        <span class="totalBalance">합계{{ totalBalance }}원</span>
      </div>
    </div>
    <div class="transactions">
      <div v-for="(transactions, date) in groupedTransactions" :key="date">
        <div class="transaction-date">
          <span
            ><button class="bold-date">{{ formatDateWithoutMonth(date) }} ({{ formatDayOfWeek(date) }})</button></span
          >
        </div>
        <div v-for="transaction in transactions" :key="transaction.id" class="transaction">
          <div class="transaction-details">
            <div class="description">{{ transaction.description }}</div>
            <div class="method">{{ transaction.method }}</div>
            <div
              :class="{
                amount: true,
                income: transaction.amount > 0,
                expense: transaction.amount < 0,
              }"
            >
              {{ formatAmount(transaction.amount) }}원
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <button @click="showModal = true"><i class="fa fa-plus"></i></button>
    </div>

    <!-- 모달 창 -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <AddTransaction @close="showModal = false" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTransactionStore } from '@/stores/transaction';
import { useRouter } from 'vue-router';
import AddTransaction from './AddTransaction.vue';
import Header from '@/components/Header.vue'; // Header 컴포넌트 가져오기

const router = useRouter();
const transactionStore = useTransactionStore();
const currentDate = ref(new Date());
const showModal = ref(false);

const income = computed(() => transactionStore.getIncomeForMonth(currentDate.value).toLocaleString());
const expenses = computed(() => transactionStore.getExpensesForMonth(currentDate.value).toLocaleString());
const totalBalance = computed(() => transactionStore.getTotalBalanceForMonth(currentDate.value).toLocaleString());
const transactions = computed(() => transactionStore.getTransactionsForMonth(currentDate.value));

const currentYearMonth = computed(() =>
  currentDate.value.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  })
);

const prevMonth = () => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() - 1);
  currentDate.value = newDate;
};

const nextMonth = () => {
  const newDate = new Date(currentDate.value);
  newDate.setMonth(newDate.getMonth() + 1);
  currentDate.value = newDate;
};

const routerPush = (path) => {
  router.push(path);
};

const formatDateWithoutMonth = (date) => {
  const [year, month, day] = date.split('-');
  return `${parseInt(day)}일`;
};

const formatDayOfWeek = (date) => {
  const dayOfWeek = new Date(date).getDay();
  const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return days[dayOfWeek];
};

const formatAmount = (amount) => {
  if (!amount) return '';
  return amount.toLocaleString();
};

const groupedTransactions = computed(() => {
  return transactions.value.reduce((groups, transaction) => {
    const date = transaction.date;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(transaction);
    return groups;
  }, {});
});
</script>

<style src="@/assets/Home.css"></style>
