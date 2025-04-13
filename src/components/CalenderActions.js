export default function CalenderActions() {
  const actions = document.createElement("div");
  actions.id = "calender-actions";

  const cancelBtn = document.createElement("button");
  cancelBtn.id = "cancel-btn";
  cancelBtn.textContent = "Cancel";

  const applyBtn = document.createElement("button");
  applyBtn.id = "apply-btn";
  applyBtn.textContent = "Apply";

  actions.appendChild(cancelBtn);
  actions.appendChild(applyBtn);

  return actions;
}
