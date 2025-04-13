import Calender from "./components/Calender";
import DatepickerToggle from "./components/DatepickerToggle";

import { setCalenderRef } from "./controllers/calenderController";

/*main component - bootstraps everything*/
export default function app() {
  const app = document.createElement("div");
  app.id = "picker-app";

  const calender = Calender();
  const datepickerToggleBtn = DatepickerToggle();
  // Register calendar reference
  setCalenderRef(calender);

  app.appendChild(datepickerToggleBtn);
  app.appendChild(calender);

  return app;
}
