/*main component - bootstraps everything*/
export default function app() {
  const app = document.createElement("div");
  app.id = "picker-app";

  app.appendChild(datePickerToggle());
  app.appendChild(calender());
  app.appendChild(dateSelectionDisplay());
  app.appendChild(calenderActions());

  return app;
}

/*components */

function datePickerToggle() {
  const button = document.createElement("button");
  button.textContent = "Select Date";
  button.className = "toggle-button";
  return button;
}

function calender() {
  const calender = document.createElement("div");
  calender.className = "calender";
  calender.textContent = "Calender will be here";

  return calender;
}

function calenderHeader() {
  const header = document.createElement("div");
  header.textContent = "Header - Month & year + buttons";
  return header;
}

function calenderBody() {
  const body = document.createElement("div");
  body.textContent = "Dates grid";
  return body;
}

function dateSelectionDisplay() {
  const wrapper = document.createElement("div");
  wrapper.className = "date-selection-display";

  const start = document.createElement("div");
  start.className = "start-date";
  start.textContent = "Start Date";

  const end = document.createElement("div");
  end.className = "end-date";
  end.textContent = "End Date";

  wrapper.appendChild(start);
  wrapper.appendChild(end);
  return wrapper;
}

function calenderActions() {
  const actions = document.createElement("div");
  actions.className = "calender-actions";

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";

  const applyBtn = document.createElement("button");
  applyBtn.textContent = "Apply";

  actions.appendChild(cancelBtn);
  actions.appendChild(applyBtn);

  return actions;
}
