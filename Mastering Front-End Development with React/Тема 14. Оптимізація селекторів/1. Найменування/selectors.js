// src/redux/selectors.js

export const getTasks = (state) => state.tasks.items;

export const getIsLoading = (state) => state.tasks.isLoading;

export const getError = (state) => state.tasks.error;

export const getStatusFilter = (state) => state.filters.status;

// Тим не менш, слідуватимемо кращим практикам з керівництва за стилем коду та замінимо префікс на select.

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectStatusFilter = (state) => state.filters.status;

// Після зміни імен селекторів потрібно оновити код імпорту у файлах компонентів.

//=============== Before ========================
import {
  getTasks,
  getIsLoading,
  getError,
  getStatusFilter,
} from "redux/selectors";

//=============== After ========================
import {
  selectTasks,
  selectIsLoading,
  selectError,
  selectStatusFilter,
} from "redux/selectors";
