let startDate = null;
let endDate = null;

export function setStartDate(date) {
  startDate = date;
}

export function setEndDate(date) {
  endDate = date;
}

export function getStartDate() {
  return startDate;
}

export function getEndDate() {
  return endDate;
}

export function resetDates() {
  startDate = null;
  endDate = null;
}

let currentMonth = new Date();
let selectedMonth = currentMonth;

// CURRENT MONTH
export function getSelectedMonth() {
  return selectedMonth;
}

export function setSelectedMonth(date) {
  selectedMonth = date;
}
