import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export default function generateCalenderGrid(selectedDate) {

  const firstWeekStart = startOfWeek(startOfMonth(selectedDate));
  const lastWeekend = endOfWeek(endOfMonth(selectedDate));

  const dates = eachDayOfInterval({ start: firstWeekStart, end: lastWeekend });

  return dates;
}
