import Calender from "./components/Calender";
import DatepickerToggle from "./components/DatepickerToggle";

import { setCalenderRef } from "./controllers/calenderController";

/*main component - bootstraps everything*/
export default function DatePicker() {
  const datePicker = document.createElement("div");
  datePicker.id = "date-picker";
  datePicker.className="flex flex-col justify-center items-center gap-2"

  const calender = Calender();
  const datepickerToggleBtn = DatepickerToggle();
  // Register calendar reference
  setCalenderRef(calender);

  datePicker.appendChild(datepickerToggleBtn);
  datePicker.appendChild(calender);

  return datePicker;
}
