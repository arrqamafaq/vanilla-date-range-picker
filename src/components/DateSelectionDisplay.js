import { getEndDate, getStartDate } from "../state/calenderState";

export default function DateSelectionDisplay() {
  const wrapper = document.createElement("div");
  wrapper.id = "date-selection-display";
  wrapper.className =
    "flex flex-col sm:flex-row justify-center sm:gap-4 gap-2 px-4 mt-2 *:px-2 *:font-medium *:py-1 *:flex *:justify-center *:items-center";
  const start = document.createElement("div");
  start.className = " bg-yellow-400 text-gray-700 rounded-2xl  h-8 flex-1 w-full";
  start.id = "start-date";
  start.textContent = getStartDate() ? getStartDate() : "Start Date";

  const end = document.createElement("div");
  end.id = "end-date";
  end.className = " bg-green-400 text-white rounded-2xl  h-8 flex-1 w-full";
  end.textContent = getEndDate() ? getEndDate() : "End Date";

  wrapper.appendChild(start);
  wrapper.appendChild(end);

  return wrapper;
}
