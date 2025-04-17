import CalenderActions from "./CalenderActions";
import DateSelectionDisplay from "./DateSelectionDisplay";
import CalenderHeader from "./CalenderHeader";
import CalenderBody from "./CalenderBody";
import { getSelectedMonth } from "../state/calenderState";

export default function Calender() {
  const calender = document.createElement("div");
  calender.id = "calender";
  calender.className = "hidden transition-all duration-600 ease bg-yellow-300";

  const bottomDiv = document.createElement("div");
  bottomDiv.id = "bottom-div";

  const selectionDisplay = DateSelectionDisplay();
  const actions = CalenderActions();

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
    const body = CalenderBody(getSelectedMonth());

    calender.prepend(header);
    calender.insertBefore(body, bottomDiv);
  }

  //initial render
  renderCalenderBody();

  return calender;
}
