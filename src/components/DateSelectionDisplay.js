import { format, fromUnixTime } from "date-fns";
import { getEndDate, getStartDate } from "../state/calenderState";
import { updateDateSelectionDisplay } from "../controllers/calenderController";

export default function DateSelectionDisplay() {
  const wrapper = document.createElement("div");
  wrapper.id = "date-selection-display";
  wrapper.className =
    "flex flex-1 flex-col sm:flex-row justify-center sm:gap-3 gap-2 *:px- *:font-medium *:py-1 *:flex *:justify-center *:items-center";
  const start = document.createElement("div");
  start.className =
    " bg-yellow-400 text-gray-700 rounded-2xl  h-8 flex-1 w-full";
  start.id = "start-date";
  start.textContent ="Start Date";

  const end = document.createElement("div");
  end.id = "end-date";
  end.className = " bg-green-400 text-white rounded-2xl  h-8 flex-1 w-full";
  end.textContent ="End Date";

  wrapper.appendChild(start);
  wrapper.appendChild(end);

  return wrapper;
}
