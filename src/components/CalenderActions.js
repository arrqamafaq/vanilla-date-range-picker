import Button from "./ui/Button";

export default function CalenderActions() {
  const actions = document.createElement("div");
  actions.id = "calender-actions";
  actions.className="flex flex-col sm:flex-row justify-center sm:gap-4 gap-2  "

  const cancelBtn = Button({ text: "Cancel", className:"border-zinc-800 bg-zinc-800 text-white hover:bg-zinc-700" });
  cancelBtn.id = "cancel-btn";

  const applyBtn = Button({ text: "Apply", className: "border-blue-500 bg-blue-500 text-white hover:bg-blue-400 active:scale-[.98]" });
  applyBtn.id = "apply-btn";

  actions.appendChild(cancelBtn);
  actions.appendChild(applyBtn);

  return actions;
}
