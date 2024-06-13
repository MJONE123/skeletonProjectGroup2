<template>
  <div class="summary-stats">
    <div class="stat" @click="toggleFilter('income')" :class="{ active: showIncome }">
      <div class="title">수입</div>
      <div class="value income">{{ formatNumber(income) }}원</div>
    </div>
    <div class="stat" @click="toggleFilter('expense')" :class="{ active: showExpense }">
      <div class="title">지출</div>
      <div class="value expense">{{ formatNumber(expense) }}원</div>
    </div>
    <div class="stat" @click="toggleFilter('balance')" :class="{ active: showBalance }">
      <div class="title">통계</div>
      <div class="value">{{ formatNumber(balance) }}원</div>
    </div>
  </div>
</template>

<script setup>
import { computed, toRefs, defineEmits, ref, watch } from 'vue';

const props = defineProps({
  income: Number,
  expense: Number,
  filters: Object,
});

const emit = defineEmits(['updateFilter']);

const { income, expense } = toRefs(props);
const balance = computed(() => income.value - expense.value);

const showIncome = ref(props.filters.showIncome);
const showExpense = ref(props.filters.showExpense);
const showBalance = ref(props.filters.showBalance);

watch(
  () => props.filters,
  (newFilters) => {
    showIncome.value = newFilters.showIncome;
    showExpense.value = newFilters.showExpense;
    showBalance.value = newFilters.showBalance;
  },
  { deep: true }
);

function formatNumber(value) {
  return value.toLocaleString();
}

function toggleFilter(filter) {
  if (filter === 'income') {
    showIncome.value = !showIncome.value;
  } else if (filter === 'expense') {
    showExpense.value = !showExpense.value;
  } else if (filter === 'balance') {
    showBalance.value = !showBalance.value;
  }

  emit('updateFilter', { showIncome: showIncome.value, showExpense: showExpense.value, showBalance: showBalance.value });
}
</script>

<style scoped>
.summary-stats {
  display: flex;
  justify-content: space-between;
  height: 75px;
  background-color: #b5e3e0;
  padding: 10px 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}

.stat {
  flex: 1;
  text-align: center;
  padding: 5px;
  font-weight: bold;
  cursor: pointer; /* 클릭 가능하게 커서 변경 */
}

.stat:not(:last-child) {
  border-right: 1px solid #629483;
}

.title {
  font-size: 15px;
  margin-bottom: 5px;
}

.value {
  font-size: 15px;
}

.income {
  color: blue;
}

.expense {
  color: red;
}
</style>
