export default function DateSelectionDisplay() {
  const wrapper = document.createElement("div");
  wrapper.id = "date-selection-display";

  const start = document.createElement("div");
  start.id = "start-date";
  start.textContent = "Start Date";

  const end = document.createElement("div");
  end.id = "end-date";
  end.textContent = "End Date";

  wrapper.appendChild(start);
  wrapper.appendChild(end);

  return wrapper;
}
