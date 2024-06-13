import { ref, computed, reactive } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useTransactionStore = defineStore('transaction', () => {
  const income = ref(0);
  const expenses = ref(0);
  const state = reactive({
    income: [],
    expense: [],
  });
  async function fetchIncomeData() {
    try {
      const fetchIncomeDataRes = await axios.get(
        'http://localhost:3000/income'
      );
      state.income = fetchIncomeDataRes.data;
      console.log(fetchIncomeDataRes.data);
    } catch (error) {
      alert('TodoList 데이터 통신 Err 발생');
      console.log(error);
    }
  }
  fetchIncomeData();

  const transactions = ref([
    // {
    //   id: 1,
    //   date: '2024-06-10',
    //   description: '서브웨이',
    //   method: '카드',
    //   amount: -30000,
    //   type: 'expense',
    // },
    // {
    //   id: 2,
    //   date: '2024-06-10',
    //   description: '용돈',
    //   method: '현금',
    //   amount: 50000,
    //   type: 'income',
    // },
    // {
    //   id: 3,
    //   date: '2024-06-07',
    //   description: '용돈',
    //   method: '현금',
    //   amount: 50000,
    //   type: 'income',
    // },
    // {
    //   id: 4,
    //   date: '2024-06-07',
    //   description: '용돈',
    //   method: '현금',
    //   amount: 50000,
    //   type: 'income',
    // },
  ]);

  const totalBalance = computed(() => income.value - expenses.value);

  const getTransactionsForMonth = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    return transactions.value.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return (
        transactionDate.getMonth() === month &&
        transactionDate.getFullYear() === year
      );
    });
  };

  const getIncomeForMonth = (date) => {
    return getTransactionsForMonth(date)
      .filter((transaction) => transaction.amount > 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  };

  const getExpensesForMonth = (date) => {
    return getTransactionsForMonth(date)
      .filter((transaction) => transaction.amount < 0)
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  };

  const getTotalBalanceForMonth = (date) => {
    return getIncomeForMonth(date) + getExpensesForMonth(date);
  };

  function addTransaction(transaction) {
    transactions.value.push(transaction);
    if (transaction.amount > 0) {
      income.value += transaction.amount;
    } else {
      expenses.value -= transaction.amount;
    }
  }

  return {
    income,
    expenses,
    transactions,
    totalBalance,
    addTransaction,
    getTransactionsForMonth,
    getIncomeForMonth,
    getExpensesForMonth,
    getTotalBalanceForMonth,
  };
});
