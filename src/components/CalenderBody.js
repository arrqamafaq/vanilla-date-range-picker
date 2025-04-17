import CalenderGrid from "./ui/CalenderGrid";

export default function CalenderBody(selectedDate) {
  const body = document.createElement("div");
  body.appendChild(CalenderGrid(selectedDate));
  body.id = "calender-grid";
  return body;
}
