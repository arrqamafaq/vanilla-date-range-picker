export function Datepicker() {
  const container = document.createElement("div");
  container.className = "border p-6 rounded-lg w-full h-fit max-h-full";

  //placeHolder for child components

  const calenderContainer = document.createElement("div");
  // calenderContainer.className
  calenderContainer.id = "calender-root";
  container.appendChild(calenderContainer);

  return container;
}
