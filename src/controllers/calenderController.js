let calenderRef = null;

export function setCalenderRef(ref) {
  calenderRef = ref;
}

export function toggleCalenderVisibility() {
  if (calenderRef) {
    calenderRef.classList.toggle("hidden");
  }
}
