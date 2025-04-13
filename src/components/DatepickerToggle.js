import { toggleCalenderVisibility } from "../controllers/calenderController";
import Button from "./ui/Button";

export default function DatepickerToggle() {
  const button = Button({
    text: "Select Date",
    className: "bg-zinc-800 text-white",
  });
  button.id = "toggle-button";

  button.addEventListener("click", () => {
    toggleCalenderVisibility();
  });

  return button;
}
