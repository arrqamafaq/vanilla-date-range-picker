import generateCalenderGrid from "./ui/CalenderGrid";

export default function CalenderBody(selectedDate,rerender) {
  const body = document.createElement("div");
  body.appendChild(generateCalenderGrid(selectedDate,rerender));
  body.id = "calender-grid";
  return body;
}
