import Button from "./ui/Button";

export default function CalenderActions() {
  const actions = document.createElement("div");
  actions.id = "calender-actions";

  const cancelBtn = Button({ text: "Cancel", className:"bg-zinc-800 text-white" });
  cancelBtn.id = "cancel-btn";

  const applyBtn = Button({ text: "Apply", className: "bg-blue-500 text-white" });
  applyBtn.id = "apply-btn";

  actions.appendChild(cancelBtn);
  actions.appendChild(applyBtn);

  return actions;
}
