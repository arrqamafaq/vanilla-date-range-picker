import CalenderActions from "./CalenderActions";
import DateSelectionDisplay from "./DateSelectionDisplay";
import CalenderHeader from "./CalenderHeader";
import CalenderBody from "./CalenderBody";
import { getSelectedMonth } from "../state/calenderState";

export default function Calender() {
  const calender = document.createElement("div");
  calender.id = "calender";
  calender.textContent = "Calender will be here";
  calender.className = "hidden transition-all duration-600 ease bg-yellow-300";

  const header = CalenderHeader(getSelectedMonth());
  const body = CalenderBody(getSelectedMonth());
  const selectionDisplay = DateSelectionDisplay();
  const actions = CalenderActions();

  calender.appendChild(header);
  calender.appendChild(body);

  const bottomDiv = document.createElement("div");
  bottomDiv.id = "bottom-div";

  bottomDiv.appendChild(selectionDisplay);
  bottomDiv.appendChild(actions);

  calender.appendChild(bottomDiv);

  return calender;
}
