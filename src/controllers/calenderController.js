import {
  format,
  fromUnixTime,
  getUnixTime,
  isAfter,
  isBefore,
  isSameMonth,
} from "date-fns";
import {
  getEndDate,
  getSelectedMonth,
  getStartDate,
  setEndDate,
  setStartDate,
} from "../state/calenderState";

let calenderRef = null;

export function setCalenderRef(ref) {
  calenderRef = ref;
}

//toggle calender visibility
export function toggleCalenderVisibility() {
  if (calenderRef) {
    calenderRef.classList.toggle("hidden");
  }
}

//handle dateSelection
export function selectDate(day) {
  const clickedDate = day.id;
  if (!isSameMonth(getSelectedMonth(), fromUnixTime(clickedDate))) return;
  console.log(getSelectedMonth() + " " + fromUnixTime(clickedDate));

  console.log(day, clickedDate);

  if (!getStartDate() || (getStartDate() && getEndDate())) {
    setStartDate(clickedDate);
    setEndDate(null);
  } else {
    if (isBefore(fromUnixTime(clickedDate), fromUnixTime(getStartDate()))) {
      setEndDate(getStartDate());
      setStartDate(clickedDate);
    } else {
      setEndDate(clickedDate);
    }
  }
  console.log("start state", fromUnixTime(getStartDate()));
  console.log("end State", fromUnixTime(getEndDate()));
  updateDateSelectionDisplay();
}

export function updateDateSelectionDisplay() {
  const startDisplay = document.getElementById("start-date");
  const endDisplay = document.getElementById("end-date");

  console.log("Updating display:", startDisplay, endDisplay);

  if (startDisplay) {
    startDisplay.textContent = getStartDate()
      ? format(fromUnixTime(getStartDate()), "dd - MMMM - yyyy")
      : "Start Date";
  }

  if (endDisplay) {
    endDisplay.textContent = getEndDate()
      ? format(fromUnixTime(getEndDate()), "dd - MMMM - yyyy")
      : "End Date";
  }

  console.log(
    "Start date - ",
    fromUnixTime(getStartDate()),
    "End Date -",
    fromUnixTime(getEndDate())
  );
}
