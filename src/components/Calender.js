import CalenderActions from "./CalenderActions";
import DateSelectionDisplay from "./DateSelectionDisplay";
import CalenderHeader from "./CalenderHeader";
import CalenderBody from "./CalenderBody";
import { getSelectedMonth } from "../state/calenderState";

export default function Calender() {
  const calender = document.createElement("div");
  calender.id = "calender";
  calender.className = "hidden transition-all duration-600 ease border px-3 py-3 rounded-2xl";

  const bottomDiv = document.createElement("div");
  bottomDiv.id = "bottom-div";
  bottomDiv.className="flex items-center gap-2"

  const selectionDisplay = DateSelectionDisplay();
  const actions = CalenderActions(renderCalenderBody);

  bottomDiv.appendChild(selectionDisplay);
  bottomDiv.appendChild(actions);

  calender.appendChild(bottomDiv);
  //render function with rerender logic
  function renderCalenderBody() {
    // remove old header + grid if present
    const existingHeader = calender.querySelector("#calender-header");
    const existingGrid = calender.querySelector("#calender-grid");

    if (existingHeader) existingHeader.remove();
    if (existingGrid) existingGrid.remove();

    // recreate them
    const header = CalenderHeader(getSelectedMonth(), renderCalenderBody);
    const body = CalenderBody(getSelectedMonth(),renderCalenderBody);

    
    calender.prepend(header);
    calender.insertBefore(body, bottomDiv);
  }

  //initial render
  renderCalenderBody();

  return calender;
}
