import { format, getUnixTime, isSameMonth, isSameDay } from "date-fns";
import generateCalenderGrid from "../../utils/generateCalenderDates";

export default function CalenderGrid(selectedDate) {
  const dates = generateCalenderGrid(selectedDate);

  const container = document.createElement("div");

  // Weekday headers (starting from Monday)
  const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const headerRow = document.createElement("div");
  headerRow.className = "grid grid-cols-7 gap-1 mb-2";

  weekdays.forEach((day) => {
    const label = document.createElement("div");
    label.textContent = day;
    label.className =
      "font-medium text-lg grid place-items-center border border-zinc-400 aspect-square";
    headerRow.appendChild(label);
  });

  container.appendChild(headerRow);

  //dates grid
  const grid = document.createElement("div");
  grid.className = "grid grid-cols-7 gap-1";

  dates.forEach((date) => {
    const day = document.createElement("button");
    day.textContent = format(date, "dd");
    day.className = `place-items-center aspect-square border border-zinc-200 hover:bg-blue-300 cursor-pointer ${
      isSameMonth(date, selectedDate) ? "text-black" : "text-zinc-400"
    } ${
      isSameDay(date, selectedDate) && isSameMonth(date, selectedDate)
        ? "bg-blue-500 text-white"
        : ""
    }`;
    day.id = getUnixTime(date);

    grid.appendChild(day);
  });

  container.appendChild(grid);
  return container;
}
