import { fromUnixTime, getUnixTime, isAfter, isBefore, isSameMonth } from "date-fns";
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
    if (isBefore(clickedDate, getStartDate())) {
      setEndDate(getStartDate());
      setStartDate(clickedDate);
    } else {
      setEndDate(clickedDate);
    }
  }
  console.log(getStartDate());
  console.log(getEndDate());
}
