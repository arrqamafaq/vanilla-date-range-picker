import Calender from "./components/Calender";
import CalenderActions from "./components/CalenderActions";
import DatepickerToggle from "./components/DatepickerToggle";
import DateSelectionDisplay from "./components/DateSelectionDisplay";

/*main component - bootstraps everything*/
export default function app() {
  const app = document.createElement("div");
  app.id = "picker-app";

  app.appendChild(DatepickerToggle());
  app.appendChild(Calender());
  app.appendChild(DateSelectionDisplay());
  app.appendChild(CalenderActions());

  return app;
}