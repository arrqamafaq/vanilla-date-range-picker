import {
  getEndDate,
  getStartDate,
  setEndDate,
  setStartDate,
} from "../state/calenderState";
import { format, fromUnixTime } from "date-fns";
import Button from "./ui/Button";
import {
  toggleCalenderVisibility,
  updateDateSelectionDisplay,
} from "../controllers/calenderController";

export default function CalenderActions(rerender) {
  const actions = document.createElement("div");
  actions.id = "calender-actions";
  actions.className = "flex flex-col sm:flex-row justify-center gap-1  ";

  const cancelBtn = Button({
    text: "Cancel",
    className: "border-zinc-800 bg-zinc-800 text-white hover:bg-zinc-700",
  });
  cancelBtn.id = "cancel-btn";

  cancelBtn.addEventListener("click", () => {
    setStartDate(null);
    setEndDate(null);
    rerender();
    updateDateSelectionDisplay();
    toggleCalenderVisibility();
  });

  const applyBtn = Button({
    text: "Apply",
    className:
      "border-blue-500 bg-blue-500 text-white hover:bg-blue-400 active:scale-[.98]",
  });
  applyBtn.id = "apply-btn";

  applyBtn.addEventListener("click", () => {
    const start = getStartDate();
    const end = getEndDate();
    if (start && end) {
      alert(
        `Applied range: ${format(
          fromUnixTime(start),
          "dd - MMMM - yyyy"
        )} to ${format(fromUnixTime(end), "dd - MMMM - yyyy")}`
      );
      // Here you could call a callback or emit an event if needed
      toggleCalenderVisibility();
    } else {
      alert("Please select both start and end date.");
    }
  });

  actions.appendChild(cancelBtn);
  actions.appendChild(applyBtn);

  return actions;
}
